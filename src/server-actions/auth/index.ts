'use server';

import { retrieveJwtToken } from '@/helpers/auth/server';
import { SignInFormState } from '@/types/auth';

export async function signInAction(
  initState: SignInFormState,
  formData: FormData
): Promise<SignInFormState> {
  const body = JSON.stringify({
    user: {
      email: formData.get('email'),
      password: formData.get('password'),
    },
  });

  const response = await fetch(`${process.env.API}/users/sign_in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body,
  });

  const jwtToken = await retrieveJwtToken(response);

  if (response.ok && jwtToken) {
    const json = await response.json();

    return {
      jwtToken,
      user: json.data.user,
      errors: json.errors,
    };
  }

  return initState;
}
