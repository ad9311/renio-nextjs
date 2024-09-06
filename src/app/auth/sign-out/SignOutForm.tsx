'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';

import SubmitFormButton from '@/components/client/SubmitFormButton';
import { AUTH_ROUTES } from '@/routes';
import { signOutAction } from '@/server-actions/auth';

export default function SignOutForm() {
  const [formState, formAction] = useFormState(signOutAction, false);
  const router = useRouter();

  function handleSignOut() {
    if (formState) {
      Cookies.remove('renio-auth');
      router.push(AUTH_ROUTES.SIGN_IN);
    }
  }

  useEffect(() => {
    handleSignOut();
  }, [formState]);

  return (
    <form action={formAction}>
      <fieldset>
        <SubmitFormButton />
      </fieldset>
    </form>
  );
}
