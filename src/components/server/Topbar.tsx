import Link from 'next/link';

import { AUTH_ROUTES } from '@/routes';

export default async function Topbar() {
  return <Link href={AUTH_ROUTES.SIGN_OUT}>Sign out</Link>;
}
