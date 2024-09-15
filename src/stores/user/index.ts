import { create } from 'zustand';

import { UserStore } from '@/types/user';

const initState = {
  user: null,
};

const useUserStore = create<UserStore>(set => ({
  ...initState,
  setUser: user => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
