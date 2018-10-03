const fetch = require('node-fetch');

const fetcher = async (url) => {
  const result = await fetch(url);
  const json = await result.json();
  return json;
};

module.exports = fetcher;
