import { getSession } from '@/helpers/auth/server';

export default async function Sidebar() {
  const { session, error } = await getSession();

  if (error) {
    return <p>And error has ocurred!</p>;
  }

  return <div>{session.user?.name}</div>;
}
