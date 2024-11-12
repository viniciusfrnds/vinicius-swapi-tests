const axios = require('axios');

test('Retrieve details of a specific planet', async () => {
  const response = await axios.get('https://swapi.dev/api/planets/1/');
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('name', 'Tatooine');
});
