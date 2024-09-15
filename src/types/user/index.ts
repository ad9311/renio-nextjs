export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  image: string | null;
};

export type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};
