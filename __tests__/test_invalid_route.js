const axios = require('axios');

test('Request to an invalid route returns 404', async () => {
  try {
    await axios.get('https://swapi.dev/api/heroes/');
  } catch (error) {
    expect(error.response.status).toBe(404);
  }
});
