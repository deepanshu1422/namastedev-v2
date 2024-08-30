// "use server"

// import prisma from "@/util/prismaClient"
// import bcrypt from "bcrypt"

// export default async function createUser({ email,
//     name,
//     password,
//     phone,
//     year }: {
//         email: string,
//         name: string,
//         password: string,
//         phone: string,
//         year: number
//     }) {
//     try {

//         if (!email) throw { status: 404, message: "Email is Missing" }
//         if (!name) throw { status: 404, message: "Name is Missing" }
//         if (!password) throw { status: 404, message: "Password is Missing" }
//         if (!phone) throw { status: 404, message: "Phone Number is Missing" }

//         const user = await prisma.user.findFirst({
//             where: {
//                 email
//             }
//         })

//         if (user) throw { status: 403, message: "User already exists!" }

//         const hashPassword = await bcrypt.hash(password, 14)

//         const newUser = await prisma.user.create({
//             data: {
//                 email,
//                 name,
//                 password: hashPassword,
//                 phone,
//                 year
//             }
//         })

//         return { status: 200, newUser, message: "New User Created!" }

//     } catch (error: any) {
//         return {
//             status: error.status || 500, message: error.message || error || "Database Error"
//         }
//     }
// }
