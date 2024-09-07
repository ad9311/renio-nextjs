import { create } from 'zustand';

import { SessionStore } from '@/types/session';

const initState = {
  session: {
    user: null,
  },
};

const useSessionStore = create<SessionStore>(set => ({
  ...initState,
  setSession: user => set(state => ({ session: { ...state.session, user } })),
  clearSession: () => set({ ...initState }),
}));

export default useSessionStore;
