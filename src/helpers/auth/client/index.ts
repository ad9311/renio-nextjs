'use client';

import Cookies from 'js-cookie';

export function saveSessionToken(sessionToken: string) {
  Cookies.set('renio-session', sessionToken, { expires: 7, path: '/' });
}

export function saveUserToken(userToken: string) {
  Cookies.set('user-session', userToken, { expires: 7, path: '/' });
}

export function getSessionToken() {
  return Cookies.get('renio-session');
}
