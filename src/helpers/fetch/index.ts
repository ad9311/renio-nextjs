import { getSessionToken } from '@/helpers/auth/client';
import { getSessionToken as getSessionTokenServer } from '@/helpers/auth/server';

export const defaultHeaders: HeadersInit = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export async function formatHeaders() {
  let jwtToken: string | undefined = '';

  if (typeof window === 'undefined') {
    jwtToken = await getSessionTokenServer();
  } else {
    jwtToken = getSessionToken();
  }
  const headers = jwtToken
    ? { ...defaultHeaders, Authorization: `Bearer ${jwtToken}` }
    : defaultHeaders;
  return headers;
}

export async function getResource(url: string): Promise<Response> {
  return fetch(url, { headers: await formatHeaders() });
}

export async function postResource(url: string, body: BodyInit): Promise<Response> {
  return fetch(url, { method: 'POST', headers: await formatHeaders(), body });
}

export async function patchResource(url: string, body: BodyInit): Promise<Response> {
  return fetch(url, { method: 'PATCH', headers: await formatHeaders(), body });
}

export async function deleteResource(url: string): Promise<Response> {
  return fetch(url, { method: 'DELETE', headers: await formatHeaders() });
}
