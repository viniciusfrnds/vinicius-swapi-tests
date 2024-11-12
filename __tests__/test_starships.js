const axios = require('axios');

test('Retrieve a list of starships', async () => {
  const response = await axios.get('https://swapi.dev/api/starships/');
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('results');
  expect(response.data.results.length).toBeGreaterThan(0);
});
