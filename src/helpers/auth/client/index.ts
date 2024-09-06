'use client';

import Cookies from 'js-cookie';

export function saveJwtTokenAsCookie(jwtToken: string) {
  Cookies.set('renio-auth', jwtToken, { expires: 7, path: '/' });
}

export function getJwtToken() {
  return Cookies.get('renio-auth');
}
