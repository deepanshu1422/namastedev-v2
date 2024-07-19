'use client'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Dispatch, SetStateAction } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useAtom } from "jotai";
import { authModalState } from "@/lib/jotai";

export function AuthDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useAtom(authModalState)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-[325px] overflow-hidden">
        <Card className="bg-background border-none ">
          <CardHeader className="p-1 items-center">
            <span className="flex items-center gap-2">
              <Image src={"/icon.png"} alt="30dc icon" height={40} width={40} />
              <CardTitle>30DC</CardTitle>
            </span>
            <CardDescription className="text-center">Verify yourself and Join Us</CardDescription>
          </CardHeader>
          <CardContent className="p-1 space-y-2">
            <LoginForm />
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}

function LoginForm() {
  const [email, setEmail] = useState<string>()
  return <div className="flex flex-col gap-2 py-3">
    <Button onClick={() => signIn("google", { callbackUrl: "/dashboard" })} className="gap-1.5" size={"lg"} variant={"outline"}><Image src={"/company3.png"} alt={"google logo"} height={20} width={20} />Google</Button>
    <div className="flex items-center gap-2 py-2 text-white/50 text-sm">
      <hr className="border w-full" />
      OR
      <hr className="border w-full" />
    </div>

    <form action={async () => {
      await signIn("resend", { email, callbackUrl: "/dashboard" })
    }} className="flex flex-col gap-2">
      <Input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" className="bg-bg/30" placeholder="Email Address" />
      <Button className="gap-1.5" variant={"outline"}><Mail className="h-4 w-4" />Send Mail</Button>
    </form>
  </div>
}