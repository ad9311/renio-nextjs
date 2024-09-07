import { FormErrors } from '../error';
import { User } from '../user';

export type SignInFormState = {
  sessionToken: string | null;
  userToken: string | null;
  user: User | null;
  errors: FormErrors;
};
