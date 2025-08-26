import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Получаем токен и роль из cookies
  const token = request.cookies.get('auth-token')?.value;
  const userRole = request.cookies.get('user-role')?.value; // 'user' | 'admin'

  // Весь dashboard требует аутентификации
  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Админские страницы внутри dashboard
    const adminPages = ['/dashboard/users', '/dashboard/products', '/dashboard/analytics'];
    const isAdminPage = adminPages.some(page => pathname.startsWith(page));
    
    if (isAdminPage && userRole !== 'admin') {
      // Перенаправляем на обычный dashboard если не админ
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*']
};