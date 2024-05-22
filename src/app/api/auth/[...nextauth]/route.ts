import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/util/prismaClient"


export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "m@email.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                return null
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development'
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }