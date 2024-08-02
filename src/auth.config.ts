import Resend from "next-auth/providers/resend"
// import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"

import type { NextAuthConfig } from "next-auth"
import { html, text } from "./lib/authSendRequest";

export default {
    // debug: true,
    providers: [Google({ allowDangerousEmailAccountLinking: true }), Resend({
        from: "no-reply@30dayscoding.com",
        async sendVerificationRequest({ identifier: to, url, provider }) {
            // const { identifier: to, provider, url } = params
            const { host } = new URL(url)
            const res = await fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${provider.apiKey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    from: provider.from,
                    to,
                    subject: `Sign in to 30 Days Coding`,
                    html: html({ url, host }),
                    text: text({ url, host }),
                }),
            })

            if (!res.ok)
                throw new Error("Resend error: " + JSON.stringify(await res.json()))
        }
    })]
} as NextAuthConfig;
