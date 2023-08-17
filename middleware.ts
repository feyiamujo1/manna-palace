import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
// import { useRouter } from "next/router"

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    const AuthorizationPaths = path === "/login" || path === "/register" || path === "/forgot-password"
    || path === "/password-creation" || path === "/password-reset-confirmation";

    const freeAccessPaths = path === "/" || path === "/menu";

    const AdminPaths = path === "/admin/:path*"

    const token : any = await getToken({req: request}) || "";
    // console.log("token is", token);

    if (AuthorizationPaths && token){
        if (token?.user?.role === "admin"){
            return NextResponse.redirect(new URL("/admin", request.nextUrl));
        }else{
            // console.log(router.back())
            return NextResponse.redirect(new URL("/menu", request.nextUrl));
        }
    }

    if (token?.user?.role === "user" && path.includes("/admin")){
        return NextResponse.redirect(new URL("/page-not-found", request.nextUrl));
    }

    if (!freeAccessPaths && !AuthorizationPaths && !token){
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
}

export const config = {
  matcher: [
    "/",
    "/menu",
    "/cart",
    "/admin/:path*", 
    "/login",
    "/register",
    "/forgot-password",
    "/password-creation",
    "/password-reset-confirmation",
  ],
};
