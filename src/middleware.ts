import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {

    const { nextUrl } = req
    const AuthRoute = ["dashboard"].includes(nextUrl.pathname.split("/")[1])
    const isLogged = !!req.auth

        // console.log("NextUrl", nextUrl);

    if (AuthRoute) {
        if (!isLogged) {
            const newUrl = new URL(`/api/auth/signin?callbackUrl=${nextUrl.href}`, req.nextUrl.origin)
            return NextResponse.redirect(newUrl)
        }
    }
})

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};