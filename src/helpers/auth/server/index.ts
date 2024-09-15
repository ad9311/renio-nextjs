'use server';

import jwt from 'jsonwebtoken';
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

export async function getSession() {
  const token = await getSessionToken();
  try {
    const decoded = jwt.verify(token as string, process.env.SESSION_KEY as string);
    const stringified = JSON.stringify(decoded);
    const decodedToken = JSON.parse(stringified);
    const currentDate = new Date();
    const expiration = new Date(decodedToken.exp * 1000);

    if (expiration < currentDate) {
      return { session: null, error: new Error('session token has expired') };
    }
    return { session: { expires: expiration.toISOString() }, error: null };
  } catch (error) {
    return { session: null, error: error as Error };
  }
}
