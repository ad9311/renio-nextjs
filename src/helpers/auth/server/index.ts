'use server';

import { cookies } from 'next/headers';

export async function retrieveJwtToken(response: Response) {
  const authHeader = response.headers.get('authorization');
  const jwtToken = authHeader?.split(' ')[1];

  return jwtToken;
}

export async function getJwtToken() {
  const cookieStore = cookies();
  return cookieStore.get('renio-auth')?.value;
}
