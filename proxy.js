import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

export async function proxy(req) {
  // Get the token from the request
  const token = await getToken({ req, secret });

  // If no token is found, return to the login page
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If token is found check if the user has the required role
  if (token.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If the user has the required role, allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/addnews/:path*",
    "/newslist/:path*",
    "/users/:path*",
    "/videos/:path*",
    "/settings/:path*",
    "/ads/:path*",
  ],
};
