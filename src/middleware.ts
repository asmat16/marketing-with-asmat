import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const isPortfolioHost =
    host.startsWith("portfolio.") ||
    host.startsWith("portfolio.marketingwithasmat");

  if (!isPortfolioHost) {
    return NextResponse.next();
  }

  const { pathname, search } = request.nextUrl;
  const targetPath = pathname.startsWith("/portfolio")
    ? pathname
    : pathname === "/"
      ? "/portfolio"
      : `/portfolio${pathname}`;

  // Subdomain has no separate deployment. Send visitors to the main site route.
  const redirectUrl = new URL(targetPath + search, "https://www.marketingwithasmat.pro");
  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"],
};
