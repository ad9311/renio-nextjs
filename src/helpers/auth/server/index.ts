'use server';

import { jwtVerify } from 'jose';
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

export async function decodeToken(token: string) {
  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(process.env.SESSION_KEY));
    const currentDate = new Date();
    const expiration = new Date(Number(verified.payload.exp) * 1000);

    if (expiration < currentDate) {
      return { session: null, error: new Error('session token has expired') };
    }
    return { session: { expires: expiration.toISOString() }, error: null };
  } catch (error) {
    return { session: null, error: error as Error };
  }
}

export async function getSession() {
  const token = await getSessionToken();
  return await decodeToken(token as string);
}
