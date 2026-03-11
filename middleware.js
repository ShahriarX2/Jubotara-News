export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/addnews/:path*",
    "/newslist/:path*",
    "/users/:path*",
    "/videos/:path*",
    "/settings/:path*",
    "/ads/:path*",
    "/addCategory/:path*",
    "/navmanager/:path*",
  ],
};
