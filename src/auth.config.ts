import Resend from "next-auth/providers/resend"
// import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"

import type { NextAuthConfig } from "next-auth"

export default {
    // debug: true,
    providers: [Google({ allowDangerousEmailAccountLinking: true }), Resend({
        from: "no-reply@30dayscoding.com"
    })]
} as NextAuthConfig;
