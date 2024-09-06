'use server';

import { SignInFormState } from '@/types/auth';

export async function signInAction(
  initState: SignInFormState,
  formData: FormData
): Promise<SignInFormState> {
  return {
    user: null,
    errors: null,
  };
}
