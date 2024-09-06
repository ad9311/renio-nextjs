'use server';

export async function retrieveJwtToken(response: Response) {
  const authHeader = response.headers.get('authorization');
  const jwtToken = authHeader?.split(' ')[1];

  return jwtToken;
}
