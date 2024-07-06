'use client'

import { Button } from "@/components/ui/button";
import { TicketPercent } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Checkout({ image, amount, currency, courseId }: { image: string; amount: number; currency: string, courseId: string }) {

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
                    <Button disabled={isLoading} onClick={makePayment} size={"lg"} className="font-jakarta flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 py-3 rounded-md text-white text-lg" >{isLoading ? <svg width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" color="#ffffff"><g><path d="M10.998 22a.846.846 0 010-1.692 9.308 9.308 0 000-18.616 9.286 9.286 0 00-7.205 3.416.846.846 0 11-1.31-1.072A10.978 10.978 0 0110.998 0c6.075 0 11 4.925 11 11s-4.925 11-11 11z"></path><animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 11 11" to="360 11 11" dur=".6s" calcMode="linear" repeatCount="indefinite"></animateTransform></g></svg> : "Buy Now"}</Button>
                    <span className="flex gap-2 max-sm:text-sm items-center"><TicketPercent className="sm:w-6 sm:h-6 h-5 w-5" />Get Access to all Resources Now.</span>
                </div>
            </div>
        </div>
    )
}