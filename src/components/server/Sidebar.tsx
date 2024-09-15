import Link from 'next/link';

import { AUTH_ROUTES } from '@/routes';

export default async function Sidebar() {
  return (
    <div className="h-full bg-slate-100 border-r border-slate-200">
      <Link href={AUTH_ROUTES.SIGN_OUT}>Sign out</Link>
    </div>
  );
}
