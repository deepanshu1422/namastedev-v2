import { Award, BookMarked, Briefcase, CalendarRange, Clock3, Laptop, Radio } from "lucide-react";

function Achieved({
    children,
    title,
    amount,
}: {
    children: React.ReactNode;
    title: string;
    amount: string;
}) {
    return (
        <section
            className={`grid grid-col-1 gap-1`}
        >
            <div className="bg-gradient-to-r from-lime-300 to-green-800 bg-clip-text flex items-center w-fit gap-2">
                {children}
                <span
                    className={`text-transparent font-bold max-sm:text-sm text-center`}
                >
                    {title}
                </span>
            </div>
            <span className="text-sm text-white/80">{amount}</span>
        </section>
    );
}

export default function About() {
    return (
        <div className="sm:px-10 px-4"><div
            className={`font-spaceMono lg:flex max-lg:grid max-lg:grid-cols-2 justify-around gap-10 p-6 py-10 bg-gradient-to-b from-second to-bg border dark:bg-background/90 rounded-md max-w-[80rem] mx-auto`}
        >
            <Achieved title="12 Weeks" amount="Duration of the course">
                <CalendarRange className="h-5 w-5 stroke-lime-500" />
            </Achieved>
            <Achieved title="Live Sessions" amount="By experts mentors">
                <Radio className="h-5 w-5 stroke-lime-500" />
            </Achieved>
            <Achieved title="2 Hrs Per Class" amount="Weekend only">
                <Clock3 className="h-5 w-5 stroke-lime-500" />
            </Achieved>
            <Achieved title="Lifetime" amount="Access to our courses">
                <BookMarked className="h-5 w-5 stroke-lime-500" />
            </Achieved>
        </div></div>
    );
}
