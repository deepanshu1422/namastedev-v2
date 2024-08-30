'use client'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { signOut } from "next-auth/react";

import { useSession } from "next-auth/react"
import { AuthDialog } from "../(guide)/auth";

export default function UserProfile() {
    const { data: session, status } = useSession()
    return (
        <div className="ml-auto">
            {
                status === "loading" ? <button className="font-jakarta flex items-center font-semibold gap-2 bg-prime/20 transition-all p-2 rounded-md text-sm"
                ><svg width="32px" height="32px" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" color="#878787"><defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="tail-spin_svg__a_19"><stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop><stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop><stop stop-color="currentColor" offset="100%"></stop></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#tail-spin_svg__a_19)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="#fff" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g></svg></button> : status === "authenticated" ? <UserButton src={session.user?.image ?? ""} name={session.user?.name ?? session.user?.email ?? ""} /> : <AuthDialog><button className="font-jakarta flex items-center font-semibold gap-2 hover:bg-prime bg-prime/80 transition-all px-4 py-3 max-sm:py-2 rounded-md text-sm"
                >Login</button></AuthDialog>
            }
        </div>
    )
}

export function UserButton({ src, name }: { src: string; name: string }) {
    return <AlertDialog>
        <AlertDialogTrigger asChild>
            <Avatar className="cursor-pointer">
                <AvatarImage src={src} />
                <AvatarFallback className="uppercase text-white font-bold">{name[0]}</AvatarFallback>
            </Avatar>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure want to Sign Out?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently sign out your
                    account and you need to re-login.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-prime/70 hover:bg-prime/90 text-white" onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
}
