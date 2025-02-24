import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'uk','pl'],
 
  // Used when no locale matches
  defaultLocale: 'pl'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(uk|en|pl)/:path*']
};