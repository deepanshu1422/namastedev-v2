import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://30dayscoding.com"),
  title: "Refund Policy | 30DaysCoding",
  description:
    "This is a refund policy page for our development course for 30 days coding challenge. You can reachout to use anytime",
};

export default function Home() {
  return (
    <main className="bg-white text-black py-16 px-10 min-h-[90vh] ">
      <div className="max-w-[75rem] m-auto flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Refund Policy</h1>
        <p>Thank you for shopping at 30dayscoding.com</p>
        <ul className="list-inside list-disc">
          <li>Non-tangible irrevocable goods (&quot;Digital products&quot;)</li>
          <li>
            We do not issue refunds for non-tangible irrevocable goods
            (&quot;digital products&quot;) once the order is confirmed and the
            product is sent.
          </li>
        </ul>
         <h2 className="text-2xl font-bold pt-2">Related Platforms</h2>
        <p>
          30DaysCoding is associated with{" "}
          <Link
            target="_blank"
            className="font-semibold text-prime pl-1"
            href={"https://skillsetmaster.com/"}
          >
            SkillSetMaster
          </Link>
          , a platform dedicated to providing personalized skill development
          courses for learners of all levels. While these platforms are
          connected, they operate independently and maintain separate terms and
          conditions. Users interested in{" "}
          <Link
            target="_blank"
            className="font-semibold text-prime pl-1"
            href={"https://skillsetmaster.com/"}
          >
            SkillSetMaster&apos;s
          </Link>{" "}
          services should review the specific policies on that platform.
        </p><h3 className="text-2xl font-bold text-second">
          POWERED BY NIGHT LIGHT PROJECTS
        </h3>
      </div>
    </main>
  );
}
