'use client'

import { Button } from "@/components/ui/button";
import { TicketPercent } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useAuth } from "@clerk/nextjs";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function Checkout({ image, amount, currency, courseId }: { image: string; amount: number; currency: string, courseId: string }) {

    const { userId } = useAuth()
    const [isLoading, setIsLoading] = useState(false)

    const makePayment = async () => {
        try {
            setIsLoading(true);

            let email = "dhanushkamath@gmail.com"
            console.log("ddd")
            let res;
            if (courseId) {
                console.log("course")
                res = await fetch(`/api/razorpay/order/create?courseId=${courseId}`);
            }
            else {
                return;
            }
            // make an endpoint to get this key
            const key = "rzp_test_tVOEQJx5p7XYeW";

            const data = await res?.json();
            if (data.error) {
                console.log(data.message);
                return;
            }
            console.log(data.order)
            const options = {
                key: key,
                name: email,
                currency: data.order.currency,
                amount: data.order.amount,
                order_id: data.order.id,
                callback_url: '/alpha',
            };

            // @ts-ignore
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();

            paymentObject.on("payment.failed", function (response: any) {
                alert("Payment failed. Please try again.");
                setIsLoading(false);
            });
            paymentObject.on("payment.captured", function (response: any) {
                alert("Payment successful");
                setIsLoading(false);
            });

            setIsLoading(false);

        } catch (error) {
            console.log(error);
        }
        // setIsLoading(true);
    };

    return (
        <div className="max-tab:hidden w-full h-fit sticky -translate-y-72 top-[26rem]">
            <div className="max-w-sm bg-gradient-to-b from-head to-second/20 rounded-2xl flex flex-col gap-4 relative max-tab:mx-auto ml-auto shadow-lg backdrop-blur-sm shadow-black/40 overflow-hidden">
                <Image alt="30DayCoding New Challenge"
                    src={image}
                    height={800}
                    width={1200}
                    className="bg-prime/20" />
                <div className="flex flex-col gap-4 px-4 py-5">
                    <span className="uppercase text-white text-3xl sm:text-4xl font-bold flex gap-2 items-center">{currency} {amount}<span className="text-muted-foreground/70 italic text-2xl sm:text-3xl line-through">{amount * 4}</span></span>
                    {!userId ? <SheetDemo /> : <Button disabled={isLoading} onClick={makePayment} size={"lg"} className="font-jakarta flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 py-3 rounded-md text-white text-lg" >{isLoading ? <svg width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" color="#ffffff"><g><path d="M10.998 22a.846.846 0 010-1.692 9.308 9.308 0 000-18.616 9.286 9.286 0 00-7.205 3.416.846.846 0 11-1.31-1.072A10.978 10.978 0 0110.998 0c6.075 0 11 4.925 11 11s-4.925 11-11 11z"></path><animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 11 11" to="360 11 11" dur=".6s" calcMode="linear" repeatCount="indefinite"></animateTransform></g></svg> : "Buy Now"}</Button>}
                    <span className="flex gap-2 max-sm:text-sm items-center"><TicketPercent className="sm:w-6 sm:h-6 h-5 w-5" />Get Access to all Resources Now.</span>
                </div>
            </div>
        </div>
    )
}

export function SheetDemo() {

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

    const formData = {
        name: "",
        email: "",
        phone: "",
        state: ""
    }

    const [formState, setFormState] = useState(0)

    const order = [
        {
            title: "Order Details",
            body: <div className="grid gap-4 py-4">
                <div className="grid grid-cols-5 items-center gap-4">
                    <Label htmlFor="name" className="text-left">
                        Name
                    </Label>
                    <Input max={50} id="name" placeholder="Max Turn" className="col-span-4" />
                </div>
                <div className="grid grid-cols-5 items-center gap-4">
                    <Label htmlFor="email" className="text-left">
                        Email
                    </Label>
                    <Input max={50} id="email" type="email" placeholder="youremail@gmail.com" className="col-span-4" />
                </div>
                <div className="grid grid-cols-5 items-center gap-4">
                    <Label htmlFor="phone" className="text-left">
                        Phone
                    </Label>
                    <span className="absolute left-[6.5rem] text-muted-foreground">+91</span>
                    <Input id="phone" type="number" className="col-span-4 pl-9" max={10} />
                </div>
                <div className="grid grid-cols-5 items-center gap-4">
                    <Label htmlFor="username" className="text-left">
                        State
                    </Label>
                    <Select>
                        <SelectTrigger className="border-prime/40 bg-bg w-full col-span-4 capitalize">
                            <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>States</SelectLabel>
                                {states.map((e, i) => (<SelectItem className="capitalize" key={i} value={e}>{e.split("_").join(" ")}</SelectItem>))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>,
            footer: <Button onClick={() => setFormState(1)} className="w-full mt-auto hover:bg-prime/80 bg-prime/60 text-white" type="submit">Proceed</Button>
        },
        {
            title: "Payments Details",
            body: <div className="grid gap-4 py-4">
                <div className="grid grid-cols-5 items-center gap-4">
                    <Label htmlFor="name" className="text-left">
                        Name
                    </Label>
                    <Input id="name" placeholder="Max Turn" className="col-span-4" />
                </div>
                <div className="grid grid-cols-5 items-center gap-4">
                    <Label htmlFor="email" className="text-left">
                        Email
                    </Label>
                    <Input id="email" type="email" placeholder="youremail@gmail.com" className="col-span-4" />
                </div>
                <div className="grid grid-cols-5 items-center gap-4">
                    <Label htmlFor="phone" className="text-left">
                        Phone
                    </Label>
                    <span className="absolute left-[6.5rem]">+91</span>
                    <Input id="phone" type="number" className="col-span-4 pl-9" max={10} />
                </div>
                <div className="grid grid-cols-5 items-center gap-4">
                    <Label htmlFor="username" className="text-left">
                        State
                    </Label>
                    <Select>
                        <SelectTrigger className="border-prime/40 bg-bg w-full col-span-4 capitalize">
                            <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>States</SelectLabel>
                                {states.map((e, i) => (<SelectItem className="capitalize" key={i} value={e}>{e.split("_").join(" ")}</SelectItem>))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>,
            footer: <Button onClick={() => setFormState(1)} className="w-full mt-auto hover:bg-prime/80 bg-prime/60 text-white" type="submit">Proceed</Button>
        },

    ]

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size={"lg"} className="font-jakarta flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 py-3 rounded-md text-white text-lg" >Buy Now</Button>
            </SheetTrigger>
            <SheetContent className="h-full flex flex-col">
                <SheetHeader>
                    <SheetTitle>{order[formState].title}</SheetTitle>
                    <SheetDescription>
                        {/* Make changes to your profile here. Click save when you're done. */}
                    </SheetDescription>
                </SheetHeader>
                {order[formState].body}
                {order[formState].footer}
                {/* <SheetFooter className="mt-auto">
                    <SheetClose asChild>
                    </SheetClose>
                </SheetFooter> */}
            </SheetContent>
        </Sheet>
    )
}
