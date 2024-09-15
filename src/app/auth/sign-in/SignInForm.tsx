'use client';

import { useFormState } from 'react-dom';

import FormErrorsList from '@/components/client/FormErrorsList';
import SubmitFormButton from '@/components/client/SubmitFormButton';
import { signInAction } from '@/server-actions/auth';
import { SignInFormState } from '@/types/auth';

const initState: SignInFormState = {
  user: null,
  errors: null,
};

export default function SignInForm() {
  const [formState, formAction] = useFormState(signInAction, initState);

  return (
    <>
      <FormErrorsList errors={formState.errors} />
      <form action={formAction} className="form">
        <fieldset>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Type your email"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            placeholder="Type your password"
          />
        </fieldset>
        <fieldset className="actions">
          <SubmitFormButton pendingChildren="Signing In...">Sign In</SubmitFormButton>
        </fieldset>
      </form>
    </>
  );
}
