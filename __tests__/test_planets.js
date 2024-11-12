const axios = require('axios');

test('Retrieve a list of planets', async () => {
  const response = await axios.get('https://swapi.dev/api/planets/');
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('results');
  expect(response.data.results.length).toBeGreaterThan(0);
});
