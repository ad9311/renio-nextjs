import { getSessionToken } from '@/helpers/auth/client';

export const defaultHeaders: HeadersInit = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export function formatHeaders() {
  const jwtToken = getSessionToken();
  const headers = jwtToken
    ? { ...defaultHeaders, Authorization: `Bearer ${jwtToken}` }
    : defaultHeaders;
  return headers;
}

export async function getResource(url: string): Promise<Response> {
  return fetch(url, { headers: formatHeaders() });
}

export async function postResource(url: string, body: BodyInit): Promise<Response> {
  return fetch(url, { method: 'POST', headers: formatHeaders(), body });
}

export async function patchResource(url: string, body: BodyInit): Promise<Response> {
  return fetch(url, { method: 'PATCH', headers: formatHeaders(), body });
}

export async function deleteResource(url: string): Promise<Response> {
  return fetch(url, { method: 'DELETE', headers: formatHeaders() });
}
