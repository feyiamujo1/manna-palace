import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    //   return NextResponse.redirect(new URL("/login", request.url));
    const path = request.nextUrl.pathname

    // All the auth paths
    const isAuthPath = path === "/login" || path === "/register" || path === "/forgot-password"
    || path === "/password-creation" || path === "/password-reset-confirmation";

    const accessFreePath = path === "/" || path === "/menu";

    // // Check if the token exists that means the user as signed up
    const token = request.cookies.get("token")?.value || "";

    // console.log(token);

    // const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET_KEY!);

    // const userRole = decodedToken.role;

    // This checks if it is a auth page the user wants to go to if the user logged in it 
    // it directs the user back to the menu so they cant go to the authentication page again
    if (isAuthPath && token){
        // if (userRole && userRole === "admin"){
            // return NextResponse.redirect(new URL("/admin", request.nextUrl));
        // }else{
            return NextResponse.redirect(new URL("/menu", request.nextUrl));
        // }
    }

    // If the user isn't logged in and wants to go to the main pages then they are 
    // redirected to login page
    if (!accessFreePath && !isAuthPath && !token){
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
}

// See "Matching Paths" below to learn more
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
