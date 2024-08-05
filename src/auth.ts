import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/util/prismaClient"
export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    callbacks: {
        signIn: async ({ user, profile }) => {

            if (!profile) return true

            if (!user?.name || !user?.image) {
                user = await prisma.user.update({ where: { id: user.id }, data: { name: profile.given_name ?? profile.name ?? "", image: profile.picture } })
            }

            return true
        },
        authorized: async ({ auth }) => {
            // Logged in users are authenticated, otherwise redirect to login page
            return !!auth
        },
        jwt: async ({ trigger, token, session, user, profile }) => {
            if (user) {
                // Will set the courseId and bundleId
                return {
                    ...token,
                    id: user.id,
                    //@ts-ignore
                    courseId: user?.courseId,
                    //@ts-ignore
                    bundleId: user?.bundleId,
                    //@ts-ignore
                    newUser: !!user?.contact || !!user?.state || !!user.name,
                    //@ts-ignore
                    phone: user?.contact,
                    //@ts-ignore
                    state: user?.state,
                }
            }

            // console.log(token);


            if (trigger == "update" && token.newUser) {
                // console.log("newUser");
                const updatedUser = await prisma.user.update({ where: { id: token?.id as string }, data: { name: session.name, contact: session.phone!, state: session.state! } })

                return {
                    ...token,
                    name: updatedUser.name,
                    newUser: false,
                    phone: updatedUser.contact,
                    state: updatedUser.state,
                }
            }

            if (trigger == "update") {
                // console.log("HIT2");
                const user = await prisma.user.findUnique({ where: { email: token.email! } })

                return {
                    ...token,
                    courseId: user?.courseId,
                    bundleId: user?.bundleId
                }
            }

            // After the payment is succesfull, will send a updateSession request from the user
            // which will query the db, any revalidate the jwt token for the newly added
            // courses and bundles to the user in the db
            // console.log("HIT");

            return token
        },
        //@ts-ignore
        session: async ({ session, token }) => {

            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    courseId: token?.courseId,
                    bundleId: token?.bundleId,
                    newUser: token?.newUser,
                    phone: token?.phone,
                    state: token?.state,
                }
            }
        }
    },
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt"
    }, pages: {
        newUser: "/dashboard?newUser=true"
    },
    ...authConfig
})