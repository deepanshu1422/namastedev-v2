"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Dispatch, SetStateAction, useState } from "react"
import { toast } from "sonner"
import { signIn } from "next-auth/react"
const FormSchema = z.object({
    name: z.string().min(2, {
        message: "NAme must be at least 2 characters.",
    }),
    email: z.string().email(),
    phone: z.string().max(10),
    year: z.string().min(4).max(4),
    password: z.string().min(8, {
        message: "Password too short!"
    }).max(16, {
        message: "Password too long!"
    })
})

export default function SignupForm({ setVal, setOpen }: { setVal: Dispatch<SetStateAction<string>>, setOpen: Dispatch<SetStateAction<boolean>> }) {

    const [state, setState] = useState(true)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        // defaultValues: {
        //     username: "",
        // },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {

        setState(false)
        const res = await createUser({
            email: data.email, name: data.name, password: data.password, phone: data.phone.toString(), year: +data.year
        })

        // console.log(res)

        if (res.status !== 200) {
            toast("Error Occured", {
                description: res.message
            })
            setState(true)
        } else {
            toast("User Created", {
                description: res.message
            })
            
            await signIn("credentials", {
                email: res.newUser?.email,
                password: data.password,
                redirect: false
            })

            setState(true)
            setOpen(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Max" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="m@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid md:grid-cols-2 md:gap-2 gap-1">
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="9032344322" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="year"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Graduation Year</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="2024" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="********" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <span className="flex gap-1 pb-2">
                    <p>Already have an account?</p>
                    <span onClick={() => setVal("login")} className="text-prime font-semibold cursor-pointer">Login</span>
                </span>
                <Button className="bg-prime/80 hover:bg-prime text-white font-semibold" disabled={!state} type="submit" >{state ? "Create Account" : "Creating..."}</Button>
            </form>
        </Form>
    )
}
