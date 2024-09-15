'use server';

import { cookies } from 'next/headers';

export async function retrieveSessionToken(response: Response) {
  const authHeader = response.headers.get('authorization');
  const sessionToken = authHeader?.split(' ')[1];

  return sessionToken;
}

export async function getSessionToken() {
  const cookieStore = cookies();
  return cookieStore.get('renio-session')?.value;
}
