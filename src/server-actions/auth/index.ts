'use server';

import { getJwtToken, retrieveJwtToken } from '@/helpers/auth/server';
import { defaultHeaders } from '@/helpers/fetch';
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
    headers: defaultHeaders,
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

export async function signOutAction(initState: boolean): Promise<boolean> {
  const jwtToken = await getJwtToken();
  const headers = jwtToken
    ? { ...defaultHeaders, Authorization: `Bearer ${jwtToken}` }
    : defaultHeaders;

  const response = await fetch(`${process.env.API}/users/sign_out`, {
    method: 'DELETE',
    headers,
  });

  if (response.ok) {
    return true;
  }

  return initState;
}
