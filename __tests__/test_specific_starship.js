const axios = require('axios');

test('Retrieve details of a specific starship', async () => {
  const response = await axios.get('https://swapi.dev/api/starships/9/');
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('name', 'Death Star');
});
