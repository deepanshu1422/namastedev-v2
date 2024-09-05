import AnimatedButton from "@/components/animated-button";
import { mentorship } from "@/util/globals";
import NewRazorpay from "@/util/new-razorpay";
import { GraduationCap } from "lucide-react";

export default async function Floating() {
  return (
    <div className="fixed bottom-0 z-20 bg-background/40 w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
      <div className="flex max-lg:flex-col justify-between items-center gap-2 p-4 py-2 lg:max-w-[80rem] mx-auto">
        <section className="max-lg:hidden flex flex-col gap-1">
          <span className={`font-jakarta text-lg`}>
            <span className="lg:text-2xl">Lifetime Mentorship</span>
          </span>

          <div className="flex gap-2 text-sm font-semibold">
            <span className="">One Time Payment</span>
          </div>
        </section>

        <p className="lg:hidden flex gap-1 items-center">
          <GraduationCap className="h-5 w-5" />
          <span className="line-clamp-1">
          Lifetime Mentorship One Time Payment
          </span>
        </p>

        {/* <Link href={"/courses"} >
          <div className="group relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-500 via-lime-500 to-emerald-500 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
            <Button
              variant={"outline"}
              className={`relative w-full text-lg font-semibold text-foreground/70 flex gap-2`}
            >
              <span className="tracking-wide">Buy Course</span>
              <Key className="h-5 w-5" />
            </Button>

              
          </div>
        </Link> */}

        <div className="max-lg:w-full">
          <AnimatedButton link={mentorship.link}>Buy Now</AnimatedButton>
        </div>
        {/* <div
          className="razorpay-embed-btn"
          data-url="https://pages.razorpay.com/pl_NlXmnJkIOZFVcc/view"
          data-text="Pay Now"
          data-color="#254246"
          data-size="large"
        ></div> */}

        {/* <NewRazorpay id={"buy-mobile-course"} /> */}
      </div>
    </div>
  );
}
