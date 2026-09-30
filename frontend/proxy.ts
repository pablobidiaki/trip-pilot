import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    const pathname = req.nextUrl.pathname;

    if (!isLoggedIn && (
        pathname.startsWith("/profile") ||
        pathname.startsWith("/itinerary/") ||
        pathname.startsWith("/ready_guides/") ||
        pathname.startsWith("/destinations/saved")
    )) return NextResponse.redirect(new URL("/login", req.url));

    if ( isLoggedIn && (
        pathname === "/login" || 
        pathname === "/register"
    )) return NextResponse.redirect(new URL("/", req.url));

    return NextResponse.next();
});

export const config = {
    matcher: [
        "/login",
        "/register",
        "/profile/:path*",
        "/itinerary/:path*",
        "/ready_guides/:path*",
        "/destinations/saved/:path*",
    ],
};