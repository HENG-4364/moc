import { NextResponse, NextRequest } from "next/server";

let locales = ["kh", "en-US"];
let defaultLocale = "kh";
// Get the preferred locale
function getLocale(request: NextRequest) {
  let currentLocale = defaultLocale;

  locales.forEach((locale) => {
    if (request.headers.get("referer")?.includes(`${locale}`)) {
      currentLocale = locale;
    }
  });

  return currentLocale;
}

export async function middleware(request: NextRequest) {

  const { pathname } = request.nextUrl;
  const regex = /\/[^/]+\.[\w]+$/;

  // Exclude specific paths
  if (["/not-found", "/managed-challenge"].includes(pathname)) {
    return NextResponse.next();
  }

  if (regex.test(pathname)) {
    return NextResponse.next();
  }
  // Handle locale redirection
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
