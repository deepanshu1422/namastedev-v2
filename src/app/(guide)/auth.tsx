import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export function AuthDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Login Form</DialogTitle>
          <DialogDescription>
            Enter your credentials to login into your account.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2 py-4">
          <div className="grid items-center gap-2">
            <Label htmlFor="name" className="sm:text-base">
              Email
            </Label>
            <Input id="email" type="email" placeholder="raghu@email.com" />
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="username" className="sm:text-base">
              Password
            </Label>
            <Input id="password" type="password" placeholder="********" />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button type="submit">Login</Button>
        </DialogFooter>
        <div className="absolute -z-10 opacity-30 top-0 h-20 w-full left-0">
          <Image
            loader={() =>
              "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            src={
              "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="login form"
            className="object-cover"
            fill
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
