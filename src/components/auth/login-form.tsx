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
import { Phone } from "lucide-react"
import { Dispatch, SetStateAction, useState } from "react"
import { signIn } from "next-auth/react"
const FormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

export default function LoginForm({ setVal, setOpen }: { setVal: Dispatch<SetStateAction<string>>, setOpen: Dispatch<SetStateAction<boolean>> }) {

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

        if (res?.ok) {
            setState(true)
            setOpen(false)
        }else{
            console.log(res?.error)
            setState(true)
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
                    <span onClick={() => setVal("signup")} className="text-prime font-semibold cursor-pointer">SignUp</span>
                </span>
                <Button disabled={!state} type="submit" >{state ? "Login" : "Logging..."}</Button>
            </form>
        </Form>
    )
}
