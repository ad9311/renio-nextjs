'use server';

import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

import { AppSession, TokenPayload } from '@/types/session';
import { User } from '@/types/user';

export async function retrieveSessionToken(response: Response) {
  const authHeader = response.headers.get('authorization');
  const sessionToken = authHeader?.split(' ')[1];

  return sessionToken;
}

export async function createUserToken(user: User) {
  const payload = {
    sub: user.id,
    email: user.email,
    username: user.username,
    name: user.name,
    image: user.image,
    iat: Math.floor(Date.now() / 1000),
  };

  const key = process.env.SESSION_KEY as string;
  const token = jwt.sign(payload, key, { expiresIn: '7d' });

  return token;
}

export async function getSessionToken() {
  const cookieStore = cookies();
  return cookieStore.get('renio-session')?.value;
}

export async function getUserToken() {
  const cookieStore = cookies();
  return cookieStore.get('user-session')?.value;
}

export async function getSession(token: string): Promise<{
  session: AppSession;
  error: Error | null;
}> {
  try {
    const key = process.env.SESSION_KEY as string;
    const decoded = jwt.verify(token, key);
    const payload = JSON.parse(JSON.stringify(decoded)) as TokenPayload;

    return {
      session: {
        user: {
          id: payload.sub,
          username: payload.username,
          name: payload.name,
          email: payload.email,
          image: payload.image,
        },
      },
      error: null,
    };
  } catch (error) {
    return { session: { user: null }, error: error as Error };
  }
}
