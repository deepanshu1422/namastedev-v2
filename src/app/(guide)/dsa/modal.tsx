'use client'

import * as React from "react"

import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark, gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { languageMap, loadableAtom, modalSchema, modalState, urlAtom } from "@/lib/jotai"
import { useAtom } from "jotai"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Check, Copy } from "lucide-react"

export function LangSelect({ lang }: { lang: string[] }) {

    const [url, setUrl] = useAtom(urlAtom)

    return (
        <Select onValueChange={(e) => {
            const res = languageMap.find((ele) => e === ele?.name)
            // console.log(url);
            setUrl({ ...url, language: res?.name ?? "python", ext: res?.extension ?? "py" })
        }} value={url.language} >
            <SelectTrigger className="w-[180px] my-2 bg-muted/40 capitalize">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Languages</SelectLabel>
                    {languageMap.filter(({ name }) => lang.includes(name)).map((({ name, title, extension }, i) => (<SelectItem key={i} value={name} className="capitalize">{title}</SelectItem>)))}
                </SelectGroup>
            </SelectContent>
        </Select >
    )
}

export default function Modal() {
    const [open, setOpen] = useAtom(modalState)
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const [data] = useAtom(modalSchema)

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[1025px]">
                    <DialogHeader>
                        <DialogTitle>{data.question ?? "Solved Question"}</DialogTitle>
                    </DialogHeader>
                    <ProfileForm />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>{data.question ?? "Solved Question"}</DrawerTitle>
                    {/* <DrawerDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </DrawerDescription> */}
                </DrawerHeader>
                <ProfileForm className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {

    const [load, setLoad] = useAtom(loadableAtom)
    const [modalData] = useAtom(modalSchema)
    const [url] = useAtom(urlAtom)
    const [copy, setCopy] = React.useState(false)

    return (
        <div className="w-full max-md:px-4">
            <div className="flex items-center justify-between w-full">
                <LangSelect lang={modalData.languageArray} />
                <Button onClick={async () => {
                    if (copy) return
                    setCopy(true)
                    navigator.clipboard.writeText(load.state === "hasData" ? load?.data : "")
                    await new Promise((res) => setTimeout(res, 2000))
                    setCopy(false)
                }} className={`${copy ? "bg-prime/60 hover:bg-prime" : "bg-muted/40 hover:bg-muted"}`} size={"icon"}>{copy ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-white" />}</Button>
            </div>
            <div className="max-h-96 overflow-y-auto">
                {load.state === "loading" && <Skeleton className="h-96 w-full" />}
                {load.state === "hasData" &&
                    <SyntaxHighlighter language={url.language} style={gruvboxDark}>
                        {load.data}
                    </SyntaxHighlighter>
                }
                {load.state === "hasError" && <p className="bg-muted p-2">{String(load.error)}</p>}
            </div>
        </div >
    );
}
