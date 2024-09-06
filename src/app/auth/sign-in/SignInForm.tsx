'use client';

import { useEffect } from 'react';
import { useFormState } from 'react-dom';

import SubmitFormButton from '@/components/client/SubmitFormButton';
import { signInAction } from '@/server-actions/auth';
import { SignInFormState } from '@/types/auth';

const initState: SignInFormState = {
  user: null,
  errors: null,
};

export default function SignInForm() {
  const [formState, formAction] = useFormState(signInAction, initState);

  useEffect(() => {
    console.log(formState);
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
