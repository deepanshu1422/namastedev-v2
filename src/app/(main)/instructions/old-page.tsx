import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Notebook } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Instructions() {
  const LinkMe = ({ title, href }: { title?: string; href: string }) => (
    <Link
      href={href}
      target="_blank"
      className="text-prime font-bold max-sm:underline hover:underline break-all"
    >
      {title ?? href}
    </Link>
  );

  return (
    <main className="flex gap-6 bg-background bg-bg min-h-svh transition-all p-4">
      <title>Welcome to 30DC Jobs, Networking, Mentorship Community </title>
      <div className="flex gap-5 ml-auto sm:pt-6">
        <div className="max-w-4xl w-full text-wrap">
          <section className="grid gap-3 md:gap-5 place-items-center text-white sm:text-center">
            <h1 className="text-4xl max-md:text-2xl font-bold max-w-3xl text-pretty">
              Welcome to 30DC Jobs, Networking, Mentorship Community 🙏
            </h1>
            <div className="flex flex-col gap-2">
              <p className="lg:max-w-3xl font-medium text-white/60 max-md:text-sm w-full m-auto md:text-lg">
                We will win when you get an awesome job - so let’s work hard
                together.
              </p>
              <div className="flex max-md:flex-col gap-2">
                <Link
                target="_blank"
                  href={"https://discord.gg/DKebNzkjzV"}
                  className="hover:scale-[1.02] transition-all duration-200 flex-1 font-semibold p-2 rounded-md border-dashed border-2 border-prime bg-second/40 shadow-lg shadow-black/80 flex items-center justify-center"
                >
                  Join the Discord Server
                </Link>
                <Link
                target="_blank"
                  href={"https://chat.whatsapp.com/D5lPnU51bvJ7uVE9PeLI3C"}
                  className="hover:scale-[1.02] transition-all duration-200 flex-1 font-semibold p-2 rounded-md border-dashed border-2 border-prime bg-second/40 shadow-lg shadow-black/80"
                >
                  Join the community on WhatsApp
                </Link>
                {/* <Link
                    target="_blank"
                    href={"https://wa.me/+917018765080"}
                    className="hover:scale-[1.02] transition-all duration-200 flex-1 font-semibold p-2 rounded-md border-dashed border-2 border-prime bg-second/40 shadow-lg shadow-black/80"
                >
                  Connect Deepanshu Via Whatsapp
                </Link> */}
              </div>
            </div>
            <hr className="h-1 w-20 border-white/80 max-sm:mt-3" />
          </section>
          <div className="flex flex-col gap-6 py-5 sm:py-10">
            <div className="sm:hidden">
              <span className="font-semibold">Table of Content</span>
              <ul className="flex flex-col gap-2 py-2">
                <li className="text-sm text-prime/70 underline">
                  <Link href={"#get-started"}>Get started [next steps]</Link>
                </li>
                <li className="text-sm text-prime/70 underline">
                  <Link href={"#usa-ca-guides"}>USA - Canada Guides</Link>
                </li>
                <li className="text-sm text-prime/70 underline">
                  <Link href={"#resume-tips"}>Resume tips</Link>
                </li>
                <li className="text-sm text-prime/70 underline">
                  <Link href={"#all-guides"}>All Guides</Link>
                </li>
                <li className="text-sm text-prime/70 underline">
                  <Link href={"#fullstack-dev"}>Full stack development</Link>
                </li>
                <li className="text-sm text-prime/70 underline">
                  <Link href={"#dsa"}>DSA</Link>
                </li>
                <li className="text-sm text-prime/70 underline">
                  <Link href={"#internship-job"}>
                    Simple internship, job process and steps
                  </Link>
                </li>
                <li className="text-sm text-prime/70 underline">
                  <Link href={"#fullstack-projects"}>
                    Full stack projects inside courses
                  </Link>
                </li>
                <li className="text-sm text-prime/70 underline">
                  <Link href={"#content"}>Useful content and videos</Link>
                </li>
              </ul>
            </div>
            <section className="flex flex-col gap-3">
              <Link
                href={"#get-started"}
                className="text-3xl max-md:text-xl font-bold flex group gap-1"
              >
                <span className="max-sm:opacity-70 opacity-30 group-hover:opacity-70 transition-all duration-100">
                  #
                </span>
                <h2 id="get-started">Get started [next steps]</h2>
              </Link>
              <ol className="flex flex-col gap-4 list-decimal list-inside text-white/80 max-sm:text-sm">
                <li>
                  <b className="text-white">Start Connecting</b> with us through
                  our various means such as:
                  <ul className="list-inside list-disc pl-6 pt-2">
                    <li>
                      Join our Whatsapp Mentorship Group{" "}
                      <LinkMe title="Join Now" href={"https://chat.whatsapp.com/JIJeGL2kLgv7HexOUPSKUH"} />
                    </li>

                    <li>
                      Join our Discord Server{" "}
                      <LinkMe title="Join Now" href={"https://discord.gg/DKebNzkjzV"} />
                    </li>
                    <li>
                      Reach out to Aryan and Connect via Whatsapp Messaging: 
                      <LinkMe title="Message Now." href={"https://wa.me/+16504956282"} />
                    </li>
                    <li>
                      Reach out to Deepanshu and Connect via Whatsapp Messaging:
                      <LinkMe title="Message Now." href={"https://wa.me/+917018765080"} />
                    </li>
                  </ul>
                </li>
                <li>
                  <b className="text-white">Go through</b> this resume guide and
                  send your resume in discord -
                  <LinkMe href={"https://bit.ly/30dc-resume"} /> (resume guide)
                </li>
                <li>
                  <b className="text-white">Make a doc</b> of all the things you
                  want to discuss
                  <ul className="list-inside list-disc pl-6 pt-2">
                    <li>Add all the points you want to discuss</li>
                  </ul>
                </li>
                <li>
                  <b className="text-white">Start posting</b> on LinkedIn and
                  tag us -
                  <ul className="list-inside list-disc pl-6 pt-2">
                    <li>Aryan Singh - <LinkMe href="https://www.linkedin.com/in/singh1aryan/" /></li>
                    <li>Deepanshu Udhwani - <LinkMe href="https://in.linkedin.com/in/deepanshu-udhwani" /></li>
                  </ul>
                </li>
                <li>
                  <b className="text-white">Be active</b> in discord for Jobs,
                  Cold emailing, Networking
                  <ul className="list-inside list-disc pl-6 pt-2">
                    <li>
                      We have channels for everything - so make sure to
                      participate and take use of the things.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>
            <Alert className="border-prime/80 bg-gradient-to-b from-prime/60 to-second/60 shadow-lg">
              <Notebook className="h-4 w-4" />
              <AlertTitle>Note</AlertTitle>
              <AlertDescription>
                Be respectful, everyone is here to learn and grow! <br />
                All our resources and guides that will help you become better (I
                promise)
              </AlertDescription>
            </Alert>

            <section className="flex flex-col gap-3">
              <Link
                href={"#usa-ca-guides"}
                className="text-3xl max-md:text-xl font-bold flex group gap-1"
              >
                <span className="max-sm:opacity-70 opacity-30 group-hover:opacity-70 transition-all duration-100">
                  #
                </span>
                <h2 id="usa-ca-guides">USA / CA Guide</h2>
              </Link>
              <LinkMe href="https://docs.google.com/document/d/1NjMWBuotcI-0vuxrVUPCeuC8NKPw-4GYi8LzQMmyItQ/edit#heading=h.yd9c1a879w43" />
            </section>

            <section className="flex flex-col gap-3">
              <Link
                href={"#resume-tips"}
                className="text-3xl max-md:text-xl font-bold flex group gap-1"
              >
                <span className="max-sm:opacity-70 opacity-30 group-hover:opacity-70 transition-all duration-100">
                  #
                </span>
                <h2 id="resume-tips">Resume Tips</h2>
              </Link>
              <ol className="flex flex-col gap-4 list-decimal list-inside text-white/80 max-sm:text-sm">
                <li>
                  <b className="text-white">Resume Guide</b> -{" "}
                  <LinkMe href={" https://bit.ly/30dc-resume"} /> (resume guide)
                </li>
                <li>
                  <b className="text-white">Make a good resume</b> and cold
                  email
                  <ul className="list-inside list-disc pl-6 pt-2 flex flex-col gap-2">
                    <li>Write action words</li>
                    <li>
                      <LinkMe href="https://www.youtube.com/watch?v=pkfGqhS-WN4 " />
                    </li>
                    <li>Send it to Aryan if you want a review</li>
                  </ul>
                </li>
                <li>
                  <b className="text-white">
                    Good github twitter linkedin - MAKE A STRONG PROFILE
                  </b>
                  <ul className="list-inside list-disc pl-6 pt-2 flex flex-col gap-2">
                    <li>
                      <LinkMe href="https://www.youtube.com/watch?v=8rBdEHhNnZ8" />
                    </li>
                    <li>
                      GitHub Example:{" "}
                      <LinkMe href="https://github.com/sibi-sharanyan" />
                    </li>
                    <li>
                      Portfolio Example:{" "}
                      <LinkMe href="https://www.harshkumarpandey.com/" />
                    </li>
                    <li>
                      GitHub Example:{" "}
                      <LinkMe href="https://github.com/harshpandey002" />
                    </li>
                    <li>
                      <b className="text-white">Aryan singh on platforms</b>
                    </li>
                  </ul>
                </li>
                <li>
                  <b className="text-white">Cold Emails</b>
                  <ul className="list-inside list-disc pl-6 pt-2">
                    <li>Hunter / Apollo / Leapleader</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section className="flex flex-col gap-3">
              <Link
                href={"#all-guides"}
                className="text-3xl max-md:text-xl font-bold flex group gap-1"
              >
                <span className="max-sm:opacity-70 opacity-30 group-hover:opacity-70 transition-all duration-100">
                  #
                </span>
                <h2 id="all-guides">All Guides</h2>
              </Link>

              <ol className="flex flex-col gap-4 list-decimal list-inside text-white/80 max-sm:text-sm">
                <li>
                  <b className="text-white">All Guides</b> -{" "}
                  <LinkMe
                    href={
                      "https://drive.google.com/drive/folders/1WY4im0uCKIQAsbvLFjDc2mEtFhnEsvQP"
                    }
                  />{" "}
                </li>
                <li>
                  <b className="text-white">100 Coding Projects</b> -{" "}
                  <LinkMe
                    href={
                      "https://docs.google.com/document/d/1XeVmmOeXx4nv9j5Er-W13bFpICkE8ikPotPEe7ydgMY/edit?usp=sharing "
                    }
                  />{" "}
                </li>
              </ol>
            </section>

            <section className="flex flex-col gap-3">
              <Link
                href={"#fullstack-dev"}
                className="text-3xl max-md:text-xl font-bold flex group gap-1"
              >
                <span className="max-sm:opacity-70 opacity-30 group-hover:opacity-70 transition-all duration-100">
                  #
                </span>
                <h2 id="fullstack-dev">Full Stack Development</h2>
              </Link>

              <ol className="flex flex-col gap-4 list-decimal list-inside text-white/80 max-sm:text-sm">
                <li>
                  <b className="text-white">Courses</b>
                  <ul className="list-inside list-disc pl-6 pt-2 flex flex-col gap-2">
                    <li>
                      All courses -
                      <LinkMe href="https://30dayscoding.com/courses " />
                    </li>
                  </ul>
                </li>

                <li>
                  <b className="text-white">Interview</b>
                  <ul className="list-inside list-disc pl-6 pt-2 flex flex-col gap-2">
                    <li>
                      Js and react questions -
                      <LinkMe href="https://algochurn.com" />
                    </li>
                    <li>
                      All guides -{" "}
                      <LinkMe href="https://drive.google.com/drive/folders/1WY4im0uCKIQAsbvLFjDc2mEtFhnEsvQP" />
                    </li>
                    <li>Find interview questions in the full stack course</li>
                    <li>
                      Full stack interview questions -
                      <LinkMe href="https://brwnboi.notion.site/Full-stack-interview-questions-30DaysCoding-com-f696a3a0b4e74bde9e2484c10eabbba8?pvs=4 " />
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <section className="flex flex-col gap-3">
              <Link
                href={"#dsa"}
                className="text-3xl max-md:text-xl font-bold flex group gap-1"
              >
                <span className="max-sm:opacity-70 opacity-30 group-hover:opacity-70 transition-all duration-100">
                  #
                </span>
                <h2 id="dsa">DSA</h2>
              </Link>

              <ol className="flex flex-col gap-4 list-decimal list-inside text-white/80 max-sm:text-sm">
                <li>
                  Do 150-200 questions minimum - share your strategy and goals
                  in <b className="text-white">Discord</b>
                </li>
                <li>
                  <b>Slides and guides</b> -{" "}
                  <LinkMe href=" https://drive.google.com/drive/folders/159owuenEq2H9eM9_5IDaV844jUg8Ge-N " />
                </li>
                <li>
                  DSA course -{" "}
                  <LinkMe href="https://30dayscoding.com/courses" />
                </li>
                <li>
                  DSA tracking sheet -{" "}
                  <LinkMe href="https://30dayscoding.com/dsa" />
                  <ul className="list-inside list-disc pl-6 pt-2 flex flex-col gap-2">
                    <li>
                      Look at the discuss section aggressively -
                      <LinkMe href="https://leetcode.com/discuss/" />
                      for your use case
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <section className="flex flex-col gap-3">
              <Link
                href={"#internship-job"}
                className="text-3xl max-md:text-xl font-bold flex group gap-1"
              >
                <span className="max-sm:opacity-70 opacity-30 group-hover:opacity-70 transition-all duration-100">
                  #
                </span>
                <h2 id="internship-job">
                  Simple internship, job process and steps
                </h2>
              </Link>

              <ol className="flex flex-col gap-4 list-decimal list-inside text-white/80 max-sm:text-sm">
                <li>
                  <b className="text-white">Learn</b> full stack development -
                  MERN or Next JS
                  <ul className="list-inside list-disc pl-6 pt-2 flex flex-col gap-2">
                    <li>JS, React, any DB and server</li>
                    <li>Make some good projects</li>
                  </ul>
                </li>
                <li>
                  <b className="text-white">Study</b> DSA for interviews
                  <ul className="list-inside list-disc pl-6 pt-2 flex flex-col gap-2">
                    <li>DSA revision guide </li>
                    <li>DSA course </li>
                    <li>Practice on leetcode</li>
                  </ul>
                </li>
                <li>
                  <b className="text-white">Work</b> on your portfolio
                  <ul className="list-inside list-disc pl-6 pt-2 flex flex-col gap-2">
                    <li>
                      Make a good portfolio page if you don’t have one Good
                    </li>
                    <li>profile on twitter / linkedin / github / peerlist </li>
                    <li>
                      Github ko chamkao thoda - fork / basic projects se start
                      kro - pick up momentum
                    </li>
                  </ul>
                </li>
                <li>
                  <b className="text-white">Application</b> process
                  <ul className="list-inside list-disc pl-6 pt-2 flex flex-col gap-2">
                    <li>Make a good cold email </li>
                    <li>Make good projects </li>
                    <li>Post in public </li>
                    <li>DM recruiters </li>
                    <li>DM hiring managers </li>
                    <li>Apply online</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section className="flex flex-col gap-3">
              <Link
                href={"#fullstack-projects"}
                className="text-3xl max-md:text-xl font-bold flex group gap-1"
              >
                <span className="max-sm:opacity-70 opacity-30 group-hover:opacity-70 transition-all duration-100">
                  #
                </span>
                <h2 id="fullstack-projects">
                  Full stack projects inside courses
                </h2>
              </Link>

              <ol className="flex flex-col gap-4 list-decimal list-inside text-white/80 max-sm:text-sm">
                <li>
                  25+ Full stack projects -
                  <LinkMe href="https://drive.google.com/drive/folders1TyAohanaxltao0D-CkltcKYtj9Laq-vO" />
                </li>
                <li>
                  Ecommerce, social media, trello, linkedin, youtube clone -
                  MERN course{" "}
                </li>
                <li>
                  Book my show, traveling, chat app, link in bio, etc - Next JS
                  course{" "}
                </li>
                <li>10+ projects in all Course </li>
                <li>Complete guides and videos</li>
              </ol>
            </section>

            <p className="font-semibold">
              Mast tutorials hai / complete krke deploy kro 🙏❤️
            </p>

            <section className="flex flex-col gap-3">
              <Link
                href={"#content"}
                className="text-3xl max-md:text-xl font-bold flex group gap-1"
              >
                <span className="max-sm:opacity-70 opacity-30 group-hover:opacity-70 transition-all duration-100">
                  #
                </span>
                <h2 id="content">Useful Content and Videos</h2>
              </Link>

              <ol className="flex flex-col gap-4 list-decimal list-inside text-white/80 max-sm:text-sm">
                <li>
                  Gyaan videos:{" "}
                  <LinkMe href="https://www.youtube.com/watch?v=DiuFbYd5EOw&list=PLhH5oXzpy_sRoTEyJrTNo1Iqq-KWZcBjj" />
                </li>
                <li>
                  Previous Masterclasses:{" "}
                  <LinkMe href="https://www.youtube.com/watch?v=DYfRdyXJil8&list=PLhH5oXzpy_sS7tX3jouPRqTFjh5_2jxjA " />
                </li>
              </ol>
            </section>
          </div>
        </div>
      </div>
      {/* Table of Content */}
      <div className="max-sm:hidden px-5 py-3 mr-auto sticky top-28 h-fit max-w-60">
        <span className="font-semibold">Table of Content</span>
        <ul className="flex flex-col gap-2 py-2">
          <li className="text-sm text-white/80 hover:text-prime/80 transition-colors hover:underline">
            <Link href={"#get-started"}>Get started [next steps]</Link>
          </li>
          <li className="text-sm text-white/80 hover:text-prime/80 transition-colors hover:underline">
            <Link href={"#usa-ca-guides"}>USA / Canada Guides</Link>
          </li>
          <li className="text-sm text-white/80 hover:text-prime/80 transition-colors hover:underline">
            <Link href={"#resume-tips"}>Resume tips</Link>
          </li>
          <li className="text-sm text-white/80 hover:text-prime/80 transition-colors hover:underline">
            <Link href={"#all-guides"}>All Guides</Link>
          </li>
          <li className="text-sm text-white/80 hover:text-prime/80 transition-colors hover:underline">
            <Link href={"#fullstack-dev"}>Full stack development</Link>
          </li>
          <li className="text-sm text-white/80 hover:text-prime/80 transition-colors hover:underline">
            <Link href={"#dsa"}>DSA</Link>
          </li>
          <li className="text-sm text-white/80 hover:text-prime/80 transition-colors hover:underline">
            <Link href={"#internship-job"}>
              Simple internship, job process and steps
            </Link>
          </li>
          <li className="text-sm text-white/80 hover:text-prime/80 transition-colors hover:underline">
            <Link href={"#fullstack-projects"}>
              Full stack projects inside courses
            </Link>
          </li>
          <li className="text-sm text-white/80 hover:text-prime/80 transition-colors hover:underline">
            <Link href={"#content"}>Useful content and videos</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
