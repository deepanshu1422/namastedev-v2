import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const AuthRoute = ["/instructions"].includes(nextUrl.pathname);
  const isLogged = !!req.auth?.user;

  // console.log(req.auth);

  // console.log("NextUrl", nextUrl);

  if (["/admin", "/transactions", "/new-users"].includes(nextUrl.pathname)) {
    if (req.auth?.user?.email !== process.env.ADMIN) {
      const newUrl = new URL(
        `/api/auth/signin?callbackUrl=${nextUrl.href}`,
        req.nextUrl.origin
      );
      return NextResponse.redirect(newUrl);
    }
  }

  if (AuthRoute) {
    if (!isLogged) {
      const newUrl = new URL(
        `/api/auth/signin?callbackUrl=${nextUrl.href}`,
        req.nextUrl.origin
      );
      return NextResponse.redirect(newUrl);
    }else{
      if (nextUrl.pathname === "/instructions") {
        // @ts-ignore
        if (!req.auth?.user?.mentorshipId?.includes("mentor")) {
          const newUrl = new URL(
            `/community`,
            req.nextUrl.origin
          );
          return NextResponse.redirect(newUrl); 
        }
      }
    }
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
