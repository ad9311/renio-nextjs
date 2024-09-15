'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { retrieveSessionToken } from '@/helpers/auth/server';
import { defaultHeaders } from '@/helpers/fetch';
import { formatZodErrors } from '@/helpers/forms';
import { MAIN_ROUTES } from '@/routes';
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

    const cookiesStore = cookies();
    const expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    cookiesStore.set({
      name: 'renio-session',
      value: token,
      path: '/',
      expires: expirationDate,
    });

    redirect(MAIN_ROUTES.HOME);
  }

  return { ...initState, errors: [response.statusText] };
}
