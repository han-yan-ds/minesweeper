const url = `http://www.localhost:4000`;
const pageLimit = 10;

async function fetchResults (query, page=1, limitPerPage=pageLimit) {
  let response = await fetch(`${url}/events?q=${query}&_page=${page}&_limit=${limitPerPage}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  return await response.json();
}

async function fetchAllResults (query) {
  let response = await fetch(`${url}/events?q=${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  return await response.json();
}

export { fetchResults, fetchAllResults, pageLimit };