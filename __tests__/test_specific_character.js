const axios = require('axios');

test('Retrieve details of a specific character', async () => {
  const response = await axios.get('https://swapi.dev/api/people/1/');
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('name', 'Luke Skywalker');
});
