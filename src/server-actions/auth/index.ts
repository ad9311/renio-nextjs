'use server';

import { getJwtToken, retrieveJwtToken } from '@/helpers/auth/server';
import { defaultHeaders } from '@/helpers/fetch';
import { formatZodErrors } from '@/helpers/forms';
import { SignInFormState } from '@/types/auth';
import { SignInDataValidation } from '@/validations/user';

export async function signInAction(
  initState: SignInFormState,
  formData: FormData
): Promise<SignInFormState> {
  const signInData = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const validation = SignInDataValidation.safeParse(signInData);
  if (validation.error) {
    return { ...initState, errors: formatZodErrors(validation.error.issues) };
  }

  const response = await fetch(`${process.env.API}/users/sign_in`, {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify({ user: signInData }),
  });

  if (response.ok) {
    const jwtToken = await retrieveJwtToken(response);
    if (!jwtToken) {
      return { ...initState, errors: ['did not receive authentication token'] };
    }

    const json = await response.json();

    return {
      jwtToken,
      user: json.data.user,
      errors: json.errors,
    };
  }

  return { ...initState, errors: [response.statusText] };
}
