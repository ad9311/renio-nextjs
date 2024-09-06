import { NextResponse, type NextRequest } from 'next/server';

import { AUTH_ROUTES } from './routes';

export function middleware(request: NextRequest) {
  const pathname = new URL(request.url).pathname;
  const cookie = request.cookies.get('renio-auth');

  if (pathname.startsWith('/auth') && cookie) {
    return NextResponse.redirect(`${process.env.HOST}/`);
  }

  if (!pathname.startsWith('/auth') && !cookie) {
    return NextResponse.redirect(`${process.env.HOST}${AUTH_ROUTES.SIGN_IN}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
