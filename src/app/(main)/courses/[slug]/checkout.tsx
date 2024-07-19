'use client'

import { Button } from "@/components/ui/button";
import { TicketPercent } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

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

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import createPayments from "../../../../../actions/createPayments";
import { authModalState } from "@/lib/jotai";
import { useAtom } from "jotai";

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Checkout({ title, image, amount, currency, courseId, refreshCourses }: { title: string, image: string; amount: number; currency: string, courseId: string; refreshCourses: () => void }) {

    const { data: session } = useSession()

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
                    {session?.user?.courseId?.includes(courseId) ? <Link href={`/dashboard/course/${courseId}`}><Button size={"lg"} className="w-full font-jakarta flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 py-3 rounded-md text-white text-lg" >Watch Now</Button></Link> : <PaymentSheet refreshCourses={refreshCourses} courseId={courseId} title={title} cover={image} amount={amount} curreny={currency} />}
                    <span className="flex gap-2 max-sm:text-sm items-center"><TicketPercent className="sm:w-6 sm:h-6 h-5 w-5" />Get Access to all Resources Now.</span>
                </div>
            </div>
        </div>
    )
}

export function PaymentSheet({ cover, title, amount, curreny, courseId, refreshCourses }: { cover: string, title: string, amount: number, curreny: string, courseId: string; refreshCourses: () => void }) {

    const { data: session, update } = useSession()

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

    const [formData, setFormData] = useState({
        name: session?.user?.name ?? "",
        email: session?.user?.email ?? "",
        // @ts-ignore
        phone: session?.user?.phone ?? "",
        // @ts-ignore
        state: session?.user?.state ?? ""
    })

    const [open, setOpen] = useState(false)
    const [openAuth, setOpenAuth] = useAtom(authModalState)
    const [openPay, setOpenPay] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    function validationError({ message }: { message: string }) {
        toast.error("Error Occured", { description: message, position: "bottom-center", })
    }

    const makePayment = async () => {

        if (formData.name.length < 2) return validationError({ message: "Name too short" })
        if (formData.email.split("@").length !== 2) return validationError({ message: "Invalid Email" })
        if (formData.phone.length !== 10) return validationError({ message: "Invalid Phone Number" })
        if (!states.includes(formData.state)) return validationError({ message: "Select a State" })

        try {
            setIsLoading(true);

            let res;

            if (courseId) {
                res = await createPayments({
                    courseId: courseId,
                    email: session?.user?.email ?? formData.email,
                    contact: formData.phone,
                    name: session?.user?.name ?? formData.name,
                    state: formData.state
                })
            }
            else {
                return;
            }
            // make an endpoint to get this key
            const key = "rzp_test_tVOEQJx5p7XYeW";

            if (res.error) {
                toast("Error Occured", {
                    position: "bottom-center",
                    description: res.message ?? JSON.stringify(res.error),
                })
                setIsLoading(false)
                setOpen(false)
                return;
            }

            setFormState(0)

            const options = {
                key: key,
                description: "Test Transaction",
                image: "/icon.png",
                name: "30DaysCoding",
                currency: res.data.currency,
                amount: res.data.amount,
                order_id: res.data.orderId,
                handler: async function (response: any) {
                    setOpenPay(true)
                    await update({ courses: true })
                    if (session?.user?.id) await refreshCourses()
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.phone
                },
                notes: {
                    "address": "30DC Corporate Office"
                },
                theme: {
                    "color": "#134543"
                }
            };

            // @ts-ignore
            const paymentObject = new window.Razorpay(options);

            paymentObject.on('payment.failed', function (response: any) {
                console.log(response.error.code)
                console.log(response.error.description)
                console.log(response.error.source)
                console.log(response.error.step)
                console.log(response.error.reason)
                console.log(response.error.metadata.order_id)
                console.log(response.error.metadata.payment_id)
            })

            paymentObject.on("payment.captured", function (response: any) {
                alert("Payment successful");
                setIsLoading(false);
            });

            paymentObject.open();

            setIsLoading(false);
            setOpen(false)
            setFormData({
                name: session?.user?.name ?? "",
                email: session?.user?.email ?? "",
                phone: "",
                state: ""
            })

        } catch (error) {
            setIsLoading(false);
        }
    };

    const [formState, setFormState] = useState(0)

    const orderPage = [
        {
            title: "Order Details",
            body: <div className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-3 gap-2 pt-4">
                    <Image className="rounded-md max-sm:w-full max-h-40 object-cover" src={cover} alt={title} width={280} height={180} />
                    <div className="sm:col-span-2 flex flex-col gap-1">
                        <p className="sm:text-lg">{title}</p>
                        <span className="font-extrabold text-prime">{curreny} {amount}</span>
                    </div>
                </div>
                <section className="flex flex-col gap-1 max-sm:text-sm">
                    <div className="flex justify-between">
                        <span>Course Price</span>
                        <span className="font-extrabold">{curreny} {amount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span>Promo Code</span>
                        <span className="font-extrabold text-prime">Apply Code</span>
                    </div>
                    <hr className="my-5" />
                    <div className="flex justify-between">
                        <span>Total Pay</span>
                        <span className="font-extrabold text-prime">{curreny} {amount}</span>
                    </div>
                </section>
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
                    <Input disabled={!!session?.user?.name} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} maxLength={30} id="name" placeholder="Max Turn" className="col-span-4" />
                </div>
                <div className="grid grid-cols-5 items-center gap-4">
                    <Label htmlFor="email" className="text-left">
                        Email
                    </Label>
                    <Input disabled={!!session?.user?.email} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} id="email" maxLength={40} type="email" placeholder="youremail@gmail.com" className="col-span-4" />
                </div>
                <div className="grid grid-cols-5 items-center gap-4">
                    <Label htmlFor="phone" className="text-left">
                        Phone
                    </Label>
                    <div className="relative col-span-4">
                        <span className="absolute left-2 top-2 text-muted-foreground">+91</span>
                        <Input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} type="number" id="phone" className="pl-9" maxLength={10} />
                    </div>
                </div>
                <div className="grid grid-cols-5 items-center gap-4">
                    <Label htmlFor="username" className="text-left">
                        State
                    </Label>
                    <Select value={formData.state} onValueChange={(e) => setFormData({ ...formData, state: e })}>
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
            footer: <div className="w-full mt-auto flex flex-col gap-2">
                <Button disabled={isLoading} onClick={makePayment} className="disabled:animate-pulse w-full hover:bg-prime/80 bg-prime/60 text-white" type="submit">Buy</Button>
                <Button variant={"outline"} onClick={() => setFormState(0)} className="w-full" type="submit">Back</Button>
            </div>
        },

    ]

    return (
        <>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button size={"lg"} className="font-jakarta flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 py-3 rounded-md text-white text-lg" >Buy Now</Button>
                </SheetTrigger>
                <SheetContent className="h-full w-full flex flex-col">
                    <SheetHeader>
                        <SheetTitle>{orderPage[formState].title}</SheetTitle>
                    </SheetHeader>
                    {orderPage[formState].body}
                    {orderPage[formState].footer}
                </SheetContent>
            </Sheet>
            <PaymentModal payModal={openPay} />
        </>
    )
}

function PaymentModal({ payModal }: { payModal: boolean }) {
    const { data, status } = useSession()
    return <Dialog open={payModal} >
        <DialogContent className="sm:max-w-[425px]">
            <Card className="bg-background border-none flex flex-col">
                <CardHeader className="p-1 items-center">
                    <span className="flex items-center gap-2">
                        <Image src={"/icon.png"} alt="30dc icon" height={40} width={40} />
                        <CardTitle>30DC</CardTitle>
                    </span>
                    <CardDescription className="text-center">Thank you for trusting in us. Team 30DC</CardDescription>
                </CardHeader>
                <CardContent className="pt-3 pb-0 mx-auto w-full">
                    <Link href={"/dashboard"}><Button disabled={status === "loading"} className="w-full bg-prime/70 text-white hover:bg-prime">{status === "loading" ? "Adding Course..." : "Visit Dashboard"}</Button></Link>
                </CardContent>
            </Card>
        </DialogContent>
    </Dialog>
}