const axios = require('axios');

test('Retrieve a list of films', async () => {
  const response = await axios.get('https://swapi.dev/api/films/');
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('results');
  expect(response.data.results.length).toBeGreaterThan(0);
});
