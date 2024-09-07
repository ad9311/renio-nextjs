import { FormErrors } from '../error';
import { User } from '../user';

export type SignInFormState = {
  user: User | null;
  errors: FormErrors;
};
