'use client';

import Cookies from 'js-cookie';

export function getSessionToken() {
  return Cookies.get('renio-session');
}
