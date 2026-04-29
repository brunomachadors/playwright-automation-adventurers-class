import { test, expect } from '@playwright/test';

test.describe.serial('Chacter flow validation', () => {
  let token = '';
  let charID = 0;

  test.beforeAll(async ({ request }) => {
    const tokenResponse = await request.post('/api/auth/token', {
      data: {
        username: 'demo',
        password: 'demo123',
      },
    });

    expect(tokenResponse.status()).toBe(200);
    const responseBody = await tokenResponse.json();
    token = responseBody.token;
  });

  test('Character List', async ({ request }) => {
    const charactersResponse = await request.get('/api/characters', {
      headers: { Authorization: 'Bearer ' + token },
    });
    expect(charactersResponse.status()).toBe(200);
    const characterResponseBody = await charactersResponse.json();
    expect(characterResponseBody[0].id).toBe(1470);
    charID = characterResponseBody[0].id;
  });

  test('Character by ID', async ({ request }) => {
    const charactersIDResponse = await request.get('/api/characters/' + charID);
    expect(charactersIDResponse.status()).toBe(200);
  });
});
