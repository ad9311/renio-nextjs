'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { deleteResource } from '@/helpers/fetch';
import { AUTH_ROUTES } from '@/routes';

export default function SignOutComponent() {
  const router = useRouter();

  async function handleSignOut() {
    const response = await deleteResource(`${process.env.NEXT_PUBLIC_API}/users/sign_out`);
    if (response.ok) {
      Cookies.remove('renio-session');
      Cookies.remove('user-session');
      router.push(AUTH_ROUTES.SIGN_IN);
    }
  }

  useEffect(() => {
    handleSignOut();
  }, []);

  return null;
}
