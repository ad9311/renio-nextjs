'use server';

import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

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
    image: user.image,
    iat: Math.floor(Date.now() / 1000),
  };

  const token = jwt.sign(payload, process.env.SESSION_KEY as string, {
    expiresIn: '7d',
  });

  return token;
}

export async function getSessionToken() {
  const cookieStore = cookies();
  return cookieStore.get('renio-session')?.value;
}
