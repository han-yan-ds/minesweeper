const SERVER_PORT = 4000;
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {getBTCchart} = require('./controller');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/btc', getBTCchart); // use ?start and ?end query strings, with 'YYYY-MM'DD' formats

app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`))