const axios = require('axios');
const redis = require('redis');
const moment = require('moment');

const redisClient = redis.createClient(6379);
redisClient.set('cachedRange', JSON.stringify([moment().add(1, 'd'), moment().add(2, 'd')]));

function isCacheDateEnough (cachedRange, startDateStr, endDateStr) {
  // takes in a pair of moments
  // returns a date range (moments) that's expanded to fit the expanded range
  // if the whole range is already in cache, return null
  cachedRange = JSON.parse(cachedRange);
  let isCacheEnough = true;
  let startDateMoment = moment(startDateStr);
  let startCacheMoment = moment(cachedRange[0]);
  let endDateMoment = moment(endDateStr);
  let endCacheMoment = moment(cachedRange[1]);
  if (startDateMoment < startCacheMoment || endDateMoment > endCacheMoment) {
    redisClient.set('cachedRange', JSON.stringify([
      moment.min(startDateMoment, startCacheMoment).format('YYYY-MM-DD'),
      moment.max(endDateMoment, endCacheMoment).format('YYYY-MM-DD')
    ]));
    isCacheEnough = false;
  }
  return isCacheEnough;
}

function getRedisCache (startDateStr, endDateStr, cb) {
  // this assumes every date between startDateStr and endDateStr (inclusive) are present in the Redis DB... will skip if not
  let allDates = {};
  function recursiveRedisGet (startDateStr, endDateStr, cb) {
    if (moment(startDateStr) >= moment(endDateStr)) {
      cb(allDates);
    } else {
      redisClient.get(startDateStr, (err, result) => {
        if (result) {
          allDates[startDateStr] = result;
          recursiveRedisGet(
            moment(startDateStr).add(1, 'd').format('YYYY-MM-DD'),
            endDateStr,
            cb
          );
        }
      });
    }
  };
  recursiveRedisGet(startDateStr, endDateStr, cb);
}

function setRedisCache(dataBpi) {
  Object.keys(dataBpi).forEach((key) => {
    redisClient.set(key, dataBpi[key])
  })
}

exports.getCloseChart = function (req, res) {
  const [startDateStr, endDateStr] = [
    req.query.start || moment().subtract(10, 'd').format('YYYY-MM-DD'), 
    req.query.end || moment().format('YYYY-MM-DD')];
  redisClient.get('cachedRange', async (err, result) => {
    if (isCacheDateEnough(result, startDateStr, endDateStr)) {
      getRedisCache(startDateStr, endDateStr, (allDates) => {res.json(allDates)});
      console.log('Getting from Cache');
    } else {
      const { data } = await axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDateStr}&end=${endDateStr}`);
      res.send(data.bpi);
      setRedisCache(data.bpi);
      console.log('Getting from API');
    }
  });
}