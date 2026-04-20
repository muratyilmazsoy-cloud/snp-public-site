import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isSupportedLocale } from "@/lib/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/studio") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const firstSegment = pathname.split("/")[1];

  if (isSupportedLocale(firstSegment)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-snp-locale", firstSegment);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    response.cookies.set("snp-locale", firstSegment, {
      path: "/",
      sameSite: "lax",
      httpOnly: false,
    });
    return response;
  }

  const localeFromCookie = request.cookies.get("snp-locale")?.value;
  const locale = localeFromCookie && isSupportedLocale(localeFromCookie) ? localeFromCookie : defaultLocale;

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!_next|api|studio|.*\\..*).*)"],
};
