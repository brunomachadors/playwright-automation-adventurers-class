import { APIRequestContext } from '@playwright/test';

export async function getToken(request: APIRequestContext) {
  const response = await request.post('/api/auth/token', {
    data: {
      username: 'demo',
      password: 'demo123',
    },
  });

  const responseToken = await response.json();

  return responseToken.token;
}
