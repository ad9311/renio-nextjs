'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';

import FormErrorsList from '@/components/client/FormErrorsList';
import SubmitFormButton from '@/components/client/SubmitFormButton';
import { saveSessionToken, saveUserToken } from '@/helpers/auth/client';
import { MAIN_ROUTES } from '@/routes';
import { signInAction } from '@/server-actions/auth';
import useSessionStore from '@/stores/session';
import { SignInFormState } from '@/types/auth';

const initState: SignInFormState = {
  sessionToken: null,
  userToken: null,
  user: null,
  errors: null,
};

export default function SignInForm() {
  const [formState, formAction] = useFormState(signInAction, initState);
  const { setSession } = useSessionStore(state => ({ setSession: state.setSession }));
  const router = useRouter();

  function handleSignIn() {
    if (formState.user && formState.sessionToken && formState.userToken) {
      saveSessionToken(formState.sessionToken);
      saveUserToken(formState.userToken);
      setSession(formState.user);
      router.push(MAIN_ROUTES.HOME);
    }
  }

  useEffect(() => {
    handleSignIn();
  }, [formState]);

  return (
    <>
      <FormErrorsList errors={formState.errors} />
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
          <SubmitFormButton pendingChildren="Signing In...">Sign In</SubmitFormButton>
        </fieldset>
      </form>
    </>
  );
}
