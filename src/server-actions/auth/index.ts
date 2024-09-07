'use server';

import { createUserToken, retrieveSessionToken } from '@/helpers/auth/server';
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
    const token = await retrieveSessionToken(response);
    if (!token) {
      return { ...initState, errors: ['No session token'] };
    }

    const json = await response.json();
    const userToken = await createUserToken(json.data.user);

    return {
      sessionToken: token,
      userToken,
      user: json.data.user,
      errors: json.errors,
    };
  }

  return { ...initState, errors: [response.statusText] };
}
