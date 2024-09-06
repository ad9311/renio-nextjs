'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';

import SubmitFormButton from '@/components/client/SubmitFormButton';
import { saveJwtTokenAsCookie } from '@/helpers/auth/client';
import { MAIN_ROUTES } from '@/routes';
import { signInAction } from '@/server-actions/auth';
import { SignInFormState } from '@/types/auth';

const initState: SignInFormState = {
  jwtToken: null,
  user: null,
  errors: null,
};

export default function SignInForm() {
  const [formState, formAction] = useFormState(signInAction, initState);

  function handleSignIn() {
    if (formState.user && formState.jwtToken) {
      saveJwtTokenAsCookie(formState.jwtToken);
      redirect(MAIN_ROUTES.HOME);
    }
  }

  useEffect(() => {
    handleSignIn();
  }, [formState]);

  return (
    <form action={formAction}>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" autoComplete="email" />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" autoComplete="current-password" />
      </fieldset>
      <fieldset>
        <SubmitFormButton />
      </fieldset>
    </form>
  );
}
