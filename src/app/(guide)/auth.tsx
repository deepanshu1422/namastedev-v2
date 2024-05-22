import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react";

export function AuthDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] overflow-hidden">
        <AuthTabs />
      </DialogContent>
    </Dialog>
  );
}

function AuthTabs() {
  const [val, setVal] = useState("login")
  return (
    <Tabs value={val}>
      {/* <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">SignUp</TabsTrigger>
      </TabsList> */}
      <TabsContent value="login">
        <Card className="bg-background border-none">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@email.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="*******" />
            </div>
            <span className="flex gap-1">
              <p>Don&apos;t have an account?</p>
              <span onClick={() => setVal("signup")} className="text-prime font-semibold cursor-pointer">SignUp</span>
            </span>
          </CardContent>
          <CardFooter>
            <Button>Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card className="bg-background border-none">
          <CardHeader>
            <CardTitle>SignUp</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input placeholder="Maxwell" id="name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input placeholder="m@email.com" id="email" type="email" />
            </div>
            <div className="grid gap-1 md:gap-2 md:grid-cols-2">
              <div className="space-y-1">
                <Label htmlFor="phone">Phone</Label>
                <Input placeholder="9012385743" id="phone" type="number" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="year">Graduation Year</Label>
                <Input id="year" placeholder="2024" type="number" />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Password</Label>
              <Input id="new" placeholder="******" type="password" />
            </div>
            <span className="flex gap-1">
              <p>Already have an account?</p>
              <span onClick={() => setVal("login")} className="text-prime font-semibold cursor-pointer">Login</span>
            </span>
          </CardContent>
          <CardFooter>
            <Button>Create Account</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}