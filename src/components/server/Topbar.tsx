import Link from 'next/link';

import { AUTH_ROUTES } from '@/routes';

export default async function Topbar() {
  return (
    <div className="bg-slate-200 border-b border-slate-300">
      <Link href={AUTH_ROUTES.SIGN_OUT}>Sign out</Link>
    </div>
  );
}
