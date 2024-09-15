import { NextResponse, type NextRequest } from 'next/server';

import { decodeToken } from './helpers/auth/server';
import { AUTH_ROUTES } from './routes';

export async function middleware(request: NextRequest) {
  const pathname = new URL(request.url).pathname;
  const sessionToken = request.cookies.get('renio-session')?.value;
  const { session } = await decodeToken(sessionToken as string);

  if (pathname.startsWith(AUTH_ROUTES.SIGN_IN) && session) {
    return NextResponse.redirect(`${process.env.HOST}/`);
  }

  if (!pathname.startsWith(AUTH_ROUTES.SIGN_IN) && !session) {
    return NextResponse.redirect(`${process.env.HOST}${AUTH_ROUTES.SIGN_IN}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
