async function fetchResults (url, query, page=1, limitPerPage=10) {
  let response = await fetch(`${url}/events?q=${query}&_page=${page}&_limit=${limitPerPage}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  return await response.json();
}

export { fetchResults };