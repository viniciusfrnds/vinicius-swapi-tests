const axios = require('axios');

test('Request to a non-existent resource returns 404', async () => {
  try {
    await axios.get('https://swapi.dev/api/planets/9999/');
  } catch (error) {
    expect(error.response.status).toBe(404);
  }
});
