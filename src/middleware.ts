import { NextResponse, type NextRequest } from 'next/server';

import { AUTH_ROUTES } from './routes';

export function middleware(request: NextRequest) {
  const pathname = new URL(request.url).pathname;
  const cookie = request.cookies.get('renio-auth');

  if (!cookie) {
    if (pathname.startsWith('/auth')) {
      return NextResponse.next();
    }

    return NextResponse.redirect(`${process.env.HOST}${AUTH_ROUTES.SIGN_IN}`);
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
