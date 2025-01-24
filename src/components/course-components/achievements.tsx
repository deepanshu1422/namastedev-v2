import Reveal from "@/components/framer/reveal";
// import { space_mono } from "@/lib/font";
import { Award, Briefcase, Laptop } from "lucide-react";

function Achieved({
  children,
  title,
  amount,
  border = true,
}: {
  children: React.ReactNode;
  title: string;
  amount: string;
  border?: boolean;
}) {
  return (
    <section
      className={`grid grid-col-1 gap-1 place-items-center ${
        border && "lg:border-r-2"
      } flex-1`}
    >
      {children}
      <span
        className={`text-foreground/70 font-semibold text-sm text-center max-lg:text-xs`}
      >
        {title}
      </span>
      <span className="text-lime-700 font-bold">{amount}+</span>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/10 transition-all">
      <div className="text-2xl mb-1 font-extrabold">{icon}</div>
      <h3 className="font-semibold text-sm">{title}</h3>
      <p className="text-xs text-white/70">{desc}</p>
    </div>
  );
}

export default function Achievements() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 w-full max-w-[80rem] mx-auto">
      <FeatureCard
        icon="95%"
        title="Placement Rate"
        desc="Step-by-step learning"
      />
      <FeatureCard icon="1200+" title="Companies Hiring" desc="Clear explanations" />
      <FeatureCard icon="128%" title="Average Hike" desc="Hands-on experience" />
      <FeatureCard icon="5000+" title="Students" desc="Regular updates" />
    </div>
  );
}
