import { getSession } from '@/helpers/auth/server';
import { AUTH_ROUTES } from '@/routes';
import Link from 'next/link';

export default async function Sidebar() {
  const { session, error } = await getSession();

  if (error) {
    return <p>And error has ocurred!</p>;
  }

  return (
    <div>
      {session.user?.name}
      <Link href={AUTH_ROUTES.SIGN_OUT}>Sign out</Link>
    </div>
  );
}
