'use client';

import useSessionStore from '@/stores/session';

export default function Sidebar() {
  const { session } = useSessionStore(state => ({ session: state.session }));
  if (!session.user) {
    return null;
  }

  return <div>{session.user.name}</div>;
}
