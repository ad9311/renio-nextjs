import { User } from '../user';

export type AppSession = {
  user: User | null;
};

export type TokenPayload = {
  sub: number;
  email: string;
  username: string;
  name: string;
  image: string | null;
  iat: number;
  exp: number;
};

export type SessionStore = {
  session: AppSession;
  setSession: (user: User) => void;
  clearSession: () => void;
};
