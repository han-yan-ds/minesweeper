import React from 'react';

function EachSearchResult ({date, description, category2}) {
  return (
    <li>
      <p>Date: {date}</p>
      <p>Location: {category2}</p>
      <p>{description}</p>
    </li>
  );
}

export default EachSearchResult;