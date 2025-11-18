import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(request: NextRequest) {
    if(request.nextUrl.pathname === "/login") {
        const token = await getToken({req: request, secret: process.env.NEXTAUTH_SECRET});
        if(token) return NextResponse.redirect(new URL("/", request.url));
    }

    if(request.nextUrl.pathname === "/logout") {
        const token = await getToken({req: request, secret: process.env.NEXTAUTH_SECRET});
        if(!token) return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}