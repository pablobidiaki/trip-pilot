import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;

  if (!isLoggedIn) return NextResponse.redirect(new URL("/", req.url))

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/profile/:path*",
    "/itinerary/:path*",
    "/destinations/saved/:path*",
  ],
};