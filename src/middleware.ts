import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { refreshTokenAction } from "./actions/auth/refresh-token";

// 1. Specify protected and public routes
const protectedRoutes = "/dashboard";
const sellerRoutes = "/sellerp";
// const publicRoutes = "/";

export default async function middleware(req: NextRequest) {
  // 2. Get current path
  const path = req.nextUrl.pathname;
  const isProtectedRoute = path.startsWith(protectedRoutes);
  const isSellerRoute = path.startsWith(sellerRoutes);
  const isPublicRoute = path === "/";

  // 3. Get session tokens

  const accessToken = (await cookies()).get("accessToken")?.value;
  const refreshToken = (await cookies()).get("refreshToken")?.value;
  const userRole = (await cookies()).get("userRole")?.value;

  const isLogin = accessToken && refreshToken;
  const isLogout = !accessToken && !refreshToken;
  const needToRefresh = !accessToken && refreshToken;

  // 4. Refresh token if needed
  if (needToRefresh) {
    await refreshTokenAction();
    return NextResponse.redirect(new URL(req.nextUrl, req.nextUrl));
  }

  // 5. Redirect to login if user is not authenticated
  if ((isProtectedRoute || isSellerRoute) && isLogout) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }

  // 6. Redirect to dashboard if user is authenticated
  if (isPublicRoute && isLogin) {
    if (userRole === "seller") {
      return NextResponse.redirect(new URL("/sellerp", req.nextUrl));
    } else {
      return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    }
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
