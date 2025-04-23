import { NextResponse, NextRequest } from "next/server";
import { decrypt } from "./lib/jwt/jwt";

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
  const token = request.cookies.get("token")?.value;
  const payload = await decrypt(token);

  // Exclude specific paths
  if (["/not-found", "/managed-challenge"].includes(pathname)) {
    return NextResponse.next();
  }

  if (regex.test(pathname)) {
    return NextResponse.next();
  }

  // authentication
  const isLoginPath = locales.some(
    (locale) => pathname === `/${locale}/business-directory/login`
  );

  if (isLoginPath && payload?.sub) {
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(
      new URL(`/${locale}/business-directory`, request.url)
    );
  }
  const isSignUpPath = locales.some(
    (locale) => pathname === `/${locale}/business-directory/sign-up`
  );

  if (isSignUpPath && payload?.sub) {
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(
      new URL(`/${locale}/business-directory`, request.url)
    );
  }

  // Redirect if no token and accessing a restricted path
  const isRestrictedPath = locales.some(
    (locale) => pathname === `/${locale}/business-directory/profile`
  );

  if (isRestrictedPath && !payload?.sub) {
    const redirectPath = pathname.replace(/\/profile$/, "");
    request.nextUrl.pathname = redirectPath; // Redirect to the base path
    return NextResponse.redirect(request.nextUrl);
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
