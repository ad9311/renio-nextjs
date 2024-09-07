import { User } from '../user';

export type SessionStore = {
  session: {
    user: User | null;
  };
  setSession: (user: User) => void;
  clearSession: () => void;
};
