'use client';

import { useEffect } from 'react';

import { getResource } from '@/helpers/fetch';
import useUserStore from '@/stores/user';

export default function SaveUserStore() {
  const { user, setUser } = useUserStore(state => ({ user: state.user, setUser: state.setUser }));

  async function fetchUser() {
    const response = await getResource(`${process.env.NEXT_PUBLIC_API}/users/me`);
    if (response.ok) {
      const json = await response.json();
      setUser(json.data.user);
    }
  }

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, []);

  return null;
}
