import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  defaultLoginRedirect,
} from "./routes";
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const route = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(route);
  const isAuthRoute = authRoutes.includes(route);
  const isApiAuthRoute = route.startsWith(apiAuthPrefix);
  const isLoggedIn = !!req.auth;

  if (isApiAuthRoute) {
    return;
  }
  if (isAuthRoute && isLoggedIn) {
    return Response.redirect(new URL(defaultLoginRedirect, req.nextUrl));
  }
  if (isAuthRoute && !isLoggedIn) {
    return;
  }
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", req.nextUrl));
  }
  return;
});
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
