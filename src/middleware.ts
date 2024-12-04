import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Public routes
  const publicPaths = ["/login", "/signup", "/verifyemail"];

  // Protected routes
  const protectedPaths = ["/investments", "/subscribers"];

  // Get token from cookies
  const token = request.cookies.get("token")?.value || "";

  // Redirect logged-in users from public paths to /investments
  if (publicPaths.includes(path) && token) {
    return NextResponse.redirect(new URL("/investments", request.nextUrl));
  }

  // Redirect unauthenticated users from protected paths to /login
  if (protectedPaths.includes(path) && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/", // Optional, root path handling
    "/login",
    "/register",
    "/investments",
    "/subscribers",
  ],
};
