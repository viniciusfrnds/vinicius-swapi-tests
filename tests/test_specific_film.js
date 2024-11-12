const axios = require('axios');

test('Retrieve details of a specific film', async () => {
  const response = await axios.get('https://swapi.dev/api/films/1/');
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('title', 'A New Hope');
});
