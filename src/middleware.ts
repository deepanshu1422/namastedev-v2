import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {

    const { nextUrl } = req
    const AuthRoute = ["/dashboard"].includes(nextUrl.pathname)
    const isLogged = !!req.auth

    // console.log(req.auth);


    // console.log("NextUrl", nextUrl);

    if (["/admin", "/transactions"].includes(nextUrl.pathname)) {
        if (req.auth?.user?.email !== process.env.ADMIN) {
            const newUrl = new URL(`/api/auth/signin?callbackUrl=${nextUrl.href}`, req.nextUrl.origin)
            return NextResponse.redirect(newUrl)
        }
    }

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