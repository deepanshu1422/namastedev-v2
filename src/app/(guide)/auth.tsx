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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useState } from "react";
import SignupForm from "@/components/auth/signup-form";
import LoginForm from "@/components/auth/login-form";
import { Tabs, TabsContent } from "@/components/ui/tabs";

export function AuthDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] overflow-hidden">
        <AuthTabs setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}

function AuthTabs({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) {
  const [val, setVal] = useState("login")
  return (
    <Tabs value={val}>
      <TabsContent value="login">
        <Card className="bg-background border-none ">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <LoginForm setOpen={setOpen} setVal={setVal} />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card className="bg-background border-none">
          <CardHeader>
            <CardTitle>SignUp</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <SignupForm setOpen={setOpen} setVal={setVal} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}