import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

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
        <main className="flex flex-col gap-6 bg-background bg-bg min-h-svh transition-all p-4">
            <title>30DC Jobs, Networking, Mentorship Community Roadmap</title>
            <div className="flex flex-col gap-5 mx-auto sm:pt-6 w-full max-w-4xl">
                <div className="w-full text-wrap">
                    <section className="grid gap-3 md:gap-5 place-items-center text-white text-center">
                        <h1 className="text-3xl sm:text-4xl font-bold max-w-3xl text-pretty">
                            Welcome to 30DC Community 🚀
                        </h1>
                    </section>
                    <div className="flex flex-col gap-4 mt-4">
                        <p className="font-medium text-white/60 text-sm sm:text-base md:text-lg w-full m-auto">
                            We will win when you get an awesome job - so let us work hard
                            together. Open this on your laptop.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <Link
                                target="_blank"
                                href={"https://chat.whatsapp.com/D5lPnU51bvJ7uVE9PeLI3C"}
                                className="hover:scale-[1.02] transition-all duration-200 flex-1 font-semibold p-2 rounded-md border-dashed border-2 border-prime bg-second/40 shadow-lg shadow-black/80 flex items-center justify-center"
                            >
                                Join the WhatsApp community
                            </Link>
                            <Link
                                target="_blank"
                                href={"https://wa.me/+919369979951"}
                                className="hover:scale-[1.02] transition-all duration-200 flex-1 font-semibold p-2 rounded-md border-dashed border-2 border-prime bg-second/40 shadow-lg shadow-black/80 flex items-center justify-center"
                            >
                                Message Zayn - WhatsApp
                            </Link>
                            <Link
                                target="_blank"
                                href={"https://wa.me/+917018765080"}
                                className="hover:scale-[1.02] transition-all duration-200 flex-1 font-semibold p-2 rounded-md border-dashed border-2 border-prime bg-second/40 shadow-lg shadow-black/80 flex items-center justify-center"
                            >
                                Message Deepanshu - WhatsApp
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 py-5 sm:py-10  max-w-3xl mx-auto">
                        <section className="flex flex-col gap-4 border border-white/20 rounded-lg p-4 sm:p-6">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white">Starting Points</h2>
                                <p className="text-white/60 text-xs sm:text-sm">Begin your journey with these steps:</p>
                            </div>
                            <ul className="flex flex-col gap-4">
                                <li className="flex gap-3">
                                    <div className="mt-1 flex-shrink-0">✅</div>
                                    <div className="text-white font-medium">Course access is given to you. Check - <a href="https://30dayscoding.com/dashboard" className="text-prime font-bold hover:underline" target="_blank" rel="noopener noreferrer">30dayscoding.com/dashboard</a> </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 flex-shrink-0">✅</div>
                                    <div className="text-white font-medium">Message Zayn for any help and discuss all the points in detail</div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 flex-shrink-0">✅</div>
                                    <div className="text-white font-medium">Join the WhatsApp community and attend all the live sessions</div>
                                </li>
                            </ul>
                        </section>

                        <RoadmapSection
                            title="Get Started"
                            steps={[
                                {
                                    label: "Review your resume",
                                    checked: false,
                                    subSteps: [
                                        "Use our resume guide: https://bit.ly/30dc-resume",
                                        "Incorporate action words: https://www.hsph.harvard.edu/wp-content/uploads/sites/36/2016/06/Resume-Guide-June-2016.pdf",
                                        "Watch resume tips: https://www.youtube.com/watch?v=pkfGqhS-WN4",
                                        "Send to Aryan for review if needed"
                                    ]
                                },
                                {
                                    label: "Create strong online profiles",
                                    checked: false,
                                    subSteps: [
                                        "Optimize GitHub, Twitter, LinkedIn",
                                        "Watch profile building guide: https://www.youtube.com/watch?v=8rBdEHhNnZ8",
                                        "Check example profiles: https://github.com/sibi-sharanyan, https://www.harshkumarpandey.com/, https://github.com/harshpandey002"
                                    ]
                                },
                                {
                                    label: "Download all the resources", subSteps: [
                                        "All guides - https://drive.google.com/drive/folders/1WY4im0uCKIQAsbvLFjDc2mEtFhnEsvQP",
                                        "100 coding projects - https://docs.google.com/document/d/1XeVmmOeXx4nv9j5Er-W13bFpICkE8ikPotPEe7ydgMY/edit?usp=sharing ",
                                    ], checked: false
                                },
                            ]}
                        />

                        <RoadmapSection
                            title="Mastering DSA and Full Stack Development"
                            steps={[
                                {
                                    label: "Learn Full Stack Development",
                                    checked: false,
                                    subSteps: [
                                        "Choose MERN or Next.js stack",
                                        "Master HTML, CSS, JavaScript, React, Node.js, Express",
                                        "Learn a backend language (e.g., Node.js or Next js)",
                                        "Understand databases and APIs",
                                        "Explore all courses at https://30dayscoding.com/courses",
                                        "Practice JS and React questions on algochurn.com",
                                        "Review full stack interview questions: https://brwnboi.notion.site/Full-stack-interview-questions-30DaysCoding-com-f696a3a0b4e74bde9e2484c10eabbba8?pvs=4",
                                        "Access additional guides: https://drive.google.com/drive/folders/1WY4im0uCKIQAsbvLFjDc2mEtFhnEsvQP"
                                    ]
                                },
                                {
                                    label: "Study DSA for interviews",
                                    checked: false,
                                    subSteps: [
                                        "Download all the guides - https://drive.google.com/file/d/1FfigM7xeUkE2rxN8I8xt5g5D1uJrzLAp/view?usp=sharing ",
                                        "Complete 150-200 LeetCode questions minimum",
                                        "Use DSA tracking sheet: https://30dayscoding.com/dsa",
                                        "Review DSA slides and guides: https://drive.google.com/drive/folders/159owuenEq2H9eM9_5IDaV844jUg8Ge-N",
                                        "Enroll in DSA course if needed: 30dayscoding.com/courses",
                                        "Visualize algorithms: https://algorithm-visualizer.org/dynamic-programming/knapsack-problem "
                                    ]
                                },
                            ]}
                        />

                        {/* <RoadmapSection
                            title="Prepare for Job Search"
                            steps={[
                                {
                                    label: "Optimize your resume",
                                    checked: false,
                                    subSteps: [
                                        "Highlight relevant skills and experience",
                                        "Tailor for tech roles",
                                        "Use action words"
                                    ]
                                },
                                {
                                    label: "Master cold emailing",
                                    checked: false,
                                    subSteps: [
                                        "Learn effective cold email techniques",
                                        "Use tools like Hunter, Apollo, or Leapleader"
                                    ]
                                },
                                {
                                    label: "Review all guides",
                                    checked: false,
                                    subSteps: [
                                        "Access guides: https://drive.google.com/drive/folders/1WY4im0uCKIQAsbvLFjDc2mEtFhnEsvQP",
                                        "Check 100 coding projects list"
                                    ]
                                },
                            ]}
                        /> */}

                        <RoadmapSection
                            title="Interview Preparation"
                            steps={[
                                {
                                    label: "Review JS and React questions",
                                    checked: false,
                                    subSteps: [
                                        "JS and React questions - https://docs.google.com/document/d/1XeD60vxniiHR-rO_aR1hz9ZcZmAcPROSUOjr_2muLxE/edit#heading=h.dyclh4up5nn0",
                                        "Practice on https://algochurn.com/frontend",
                                        "Review full stack interview questions"
                                    ]
                                },
                                {
                                    label: "Practice DSA problems",
                                    checked: false,
                                    subSteps: [
                                        "DSA revision guide - https://drive.google.com/file/d/1FfigM7xeUkE2rxN8I8xt5g5D1uJrzLAp/view?usp=sharing",
                                        "DSA roadmap - https://docs.google.com/document/d/1_DQUEJge4nYZNmq2CXlDx82egUIXwufvz2NAl0X2TOc/edit",
                                        "DSA slides - https://drive.google.com/drive/folders/159owuenEq2H9eM9_5IDaV844jUg8Ge-N",
                                        "DSA course - 30dayscoding.com/courses",
                                        "Solve LeetCode problems",
                                        "Review 'Discuss' section on LeetCode",
                                        "Use DSA revision guide"
                                    ]
                                },
                            ]}
                        />

                        <RoadmapSection
                            title="Apply and Network"
                            steps={[
                                { label: "Apply to jobs online", checked: false },
                                { label: "Send cold emails to recruiters", checked: false },
                                { label: "Connect with hiring managers", checked: false },
                                { label: "Participate in community events", checked: false },
                                {
                                    label: "Engage on social platforms",
                                    checked: false,
                                },
                            ]}
                        />

                        <RoadmapSection
                            title="Additional Resources"
                            steps={[
                                {
                                    label: "Watch educational content",
                                    checked: false,
                                    subSteps: [
                                        "Gyaan videos: https://www.youtube.com/watch?v=DiuFbYd5EOw&list=PLhH5oXzpy_sRoTEyJrTNo1Iqq-KWZcBjj",
                                        "Previous masterclasses: https://www.youtube.com/watch?v=DYfRdyXJil8&list=PLhH5oXzpy_sS7tX3jouPRqTFjh5_2jxjA"
                                    ]
                                },
                                {
                                    label: "Explore project tutorials",
                                    checked: false,
                                    subSteps: [
                                        "MERN course projects (e-commerce, social media, Trello clone, etc.)",
                                        "Next.js course projects (BookMyShow, travel app, chat app, etc.)"
                                    ]
                                },
                                {
                                    label: "Utilize all course materials",
                                    checked: false,
                                    subSteps: [
                                        "Complete projects and deploy them",
                                        "Review course-specific guides and videos"
                                    ]
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

function RoadmapSection({ title, steps }: {
    title: string;
    steps: { label: string; checked: boolean; subSteps?: string[] }[]
}) {
    return (
        <section className="flex flex-col gap-4 border border-white/20 rounded-lg p-4 sm:p-6">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
                <p className="text-white/60 text-xs sm:text-sm">Go through the following steps:</p>
            </div>
            <ul className="flex flex-col gap-4">
                {steps.map((step, index) => (
                    <li key={index} className="flex gap-3">
                        <div className="mt-1 flex-shrink-0">
                            ✅
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-white font-medium text-sm sm:text-base">
                                {step.label}
                            </label>
                            {step.subSteps && (
                                <ul className="ml-2 flex flex-col gap-1">
                                    {step.subSteps.map((subStep, subIndex) => (
                                        <li key={subIndex} className="text-white/60 text-xs sm:text-sm flex items-center gap-2">
                                            <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                                            <RenderSubStep text={subStep} />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function RenderSubStep({ text }: { text: string }) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return (
        <>
            {parts.map((part, index) => {
                if (part.match(urlRegex)) {
                    return (
                        <Link
                            key={index}
                            href={part}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-prime font-bold underline"
                        >
                            resource
                        </Link>
                    );
                }
                return <span key={index}>{part}</span>;
            })}
        </>
    );
}