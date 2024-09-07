import { FormErrors } from '../error';
import { User } from '../user';

export type SignInFormState = {
  jwtToken: string | null;
  user: User | null;
  errors: FormErrors;
};
