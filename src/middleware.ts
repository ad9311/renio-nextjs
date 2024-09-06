import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = new URL(request.url).pathname;
  const cookie = request.cookies.get('renio-auth');

  if (!cookie) {
    if (pathname.startsWith('/auth')) {
      return NextResponse.next();
    }

    return NextResponse.redirect('http://localhost:3010/auth/sign-in');
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
