"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Dispatch, SetStateAction, useState } from "react"
import { signIn } from "next-auth/react"
import { toast } from "sonner"
const FormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

export default function LoginForm() {

    const [state, setState] = useState(true)
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        // defaultValues: {
        //     username: "",
        // },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {

        setState(false)

        const res = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false
        })

        // console.log(res)

        if (res?.error) {
            setState(true)
            toast("Login Error", {
                description: res.error
            })
        } else {
            setState(true)
            // setOpen(false)
            toast("Successfully LoggedIn", {
                description: `Welcome back!`
            })
        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
                    <p>Don&apos;t have an account?</p>
                    <span className="text-prime font-semibold cursor-pointer">SignUp</span>
                </span>
                <Button className="bg-prime/80 hover:bg-prime text-white font-semibold" disabled={!state} type="submit" >{state ? "Login" : "Logging..."}</Button>
            </form>
        </Form>
    )
}
