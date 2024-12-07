import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  console.log("middleware: path:", request.nextUrl.pathname);
  // check to exist token.
  const token = request.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/user/login", request.url));
  }

  // check to valid token.
  try {
    const secretKey = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);
    await jwtVerify(token, secretKey);
    console.log("valid token.");
  } catch {
    return NextResponse.redirect(new URL("/user/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/item/create", "/item/update/:path*", "/item/delete/:path*"],
};
