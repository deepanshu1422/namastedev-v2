'use client'
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";

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
import { Save } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";

export function UserDialog() {
    const [open, setOpen] = useState(false)
    const { data: session } = useSession()
    return (
        // @ts-ignore
        <Dialog open={session?.user?.newUser} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px] max-w-[325px] overflow-hidden">
                <Card className="bg-background border-none ">
                    <CardHeader className="p-1 items-center">
                        <span className="flex items-center gap-2">
                            <Image src={"/icon.png"} alt="30dc icon" height={40} width={40} />
                            <CardTitle>30DC</CardTitle>
                        </span>
                        <CardDescription className="text-center">Welcome to our 30DC Community</CardDescription>
                    </CardHeader>
                    <CardContent className="p-1 space-y-2">
                        <UserForm />
                    </CardContent>
                </Card>
            </DialogContent>
        </Dialog>
    );
}

function UserForm() {
    const { data, update } = useSession()
    const [formData, setFormData] = useState({
        name: data?.user?.name ?? "",
        phone: "",
        state: ""
    })

    const router = useRouter()

    const [updating, setUpdating] = useState(false)

    const states = [
        "andhra_pradesh",
        "arunachal_pradesh",
        "assam",
        "bihar",
        "chhattisgarh",
        "goa",
        "gujarat",
        "haryana",
        "himachal_pradesh",
        "jharkhand",
        "karnataka",
        "kerala",
        "madhya_pradesh",
        "maharashtra",
        "manipur",
        "meghalaya",
        "mizoram",
        "nagaland",
        "odisha",
        "punjab",
        "rajasthan",
        "sikkim",
        "tamil_nadu",
        "telangana",
        "tripura",
        "uttar_pradesh",
        "uttarakhand",
        "west_bengal"
    ]

    return <div className="flex flex-col gap-2 py-3">
        <form onSubmit={async (e) => {
            e.preventDefault()
            setUpdating(true)
            await update({ name: formData.name, phone: formData.phone, state: formData.state })
            router.refresh()
        }} className="flex flex-col gap-2">
            <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} name="name" type="text" className="bg-bg/30" placeholder="Your Name" />
            <div className="relative col-span-4">
                <span className="absolute left-2 top-2 text-muted-foreground">+91</span>
                <Input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} type="number" id="phone" className="bg-bg/30 pl-9" maxLength={10} />
            </div>
            <Select value={formData.state} onValueChange={(e) => setFormData({ ...formData, state: e })}>
                <SelectTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prime focus-visible:ring-offset-2 border-prime/40 bg-bg/30 w-full col-span-4 capitalize">
                    <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>States</SelectLabel>
                        {states.map((e, i) => (<SelectItem className="capitalize" key={i} value={e}>{e.split("_").join(" ")}</SelectItem>))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Button disabled={updating} type="submit" className="gap-1.5" variant={"outline"}><Save className="h-4 w-4" />Save Details</Button>
        </form>
    </div>
}