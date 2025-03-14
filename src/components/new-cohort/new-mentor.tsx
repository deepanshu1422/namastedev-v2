import Image from "next/image";
import Reveal from "../framer/reveal";
import Link from "next/link";
import HoverInfo from "../hover-info";
import AnimatedButton from "../animated-button";

function Profile({
  name,
  company,
  link,
  profile,
  position,
  desc,
}: {
  name: string;
  company: { name: string; path: string }[];
  link: string;
  profile: string;
  position: string;
  desc: string;
}) {
  return (
    <div className="mx-auto flex flex-col rounded-2xl text-center justify-between bg-second relative z-[1] lg:h-[700px] w-72 max-sm:w-full max-sm:max-w-96">
      <div className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] absolute p-2 bg-gradient-to-t from-prime/80 to-second/80 rounded-full">
        <div className="h-36 w-36 overflow-hidden rounded-full flex items-center justify-center">
          <Image
            src={profile}
            alt={`${name}'s profile`}
            height={220}
            width={220}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between pt-24 h-full">
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col items-center gap-2">
            <span className="font-semibold text-xl">{name}</span>
            <span className="text-muted-foreground text-sm font-semibold">
              {position}
            </span>
            <div className="flex gap-3 py-2">
              {company.map(({ name, path }, i) => (
                <HoverInfo key={i} info={name}>
                  <Image
                    className="rounded-md"
                    src={path}
                    alt={`${name} logo`}
                    height={35}
                    width={35}
                  />
                </HoverInfo>
              ))}
            </div>
          </div>

          <p className="text-base max-lg:text-left p-6">{desc}</p>
        </div>
      </div>
      <Link className="mx-auto mb-6" href={link} >
        <svg
          className="h-6 w-6 fill-white stroke-white my-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
        </svg>
      </Link>
    </div>
  );
}

export default function NewMentor() {
  return (
    <div className="m-auto flex flex-col items-center justify-center p-10 lg:p-20 gap-10 max-w-[90rem]">
      {/* Heading */}
      <div className="flex flex-col gap-5 text-center max-w-2xl mx-auto">
        <Reveal>
          <span className="text-4xl font-bold text-center">
            Faculty and Experts from <span className="text-prime">FAANG</span>{" "}
            and Big tech
          </span>
        </Reveal>
        <Reveal>
          <p className="text-lg text-center">
            From the Software Engineers of{" "}
            <span className="font-semibold text-prime px-1 text-xl">
              Google
            </span>{" "}
            and
            <span className="font-semibold text-prime px-1 text-xl">
              Alibaba Cloud
            </span>
          </p>
        </Reveal>
      </div>

      <div className="flex flex-wrap max-phone:flex-col lg:items-start max-phone:gap-28 max-lg:gap-20 phone:h-full gap-16 justify-evenly pt-24">
        <Reveal>
          <Profile
            name="Aryan Singh"
            profile="https://i.ibb.co/YRBGz7v/instructor.jpg"
            position="SDE @Google"
            link="https://www.linkedin.com/in/singh1aryan/"
            company={[
              { name: "Google", path: "/company3.png" },
              { name: "Arrow Electronics", path: "/arrow_logo.jfif" },
              {
                name: "UMass Amherst",
                path: "/umassamherst_logo.jfif",
              },
            ]}
            desc="Our lead mentor Aryan Singh, a visionary software engineer at Google, leads 30 Days Coding with a resilience hardly seen before. With roles in tech giants and projects like Blocktrain and DSA Revision, Aryan combines professional expertise with a passion for mentoring. His zeal to impart guidance to people stuck in the 'How do I brush my technical skills for this job?' phase, has led to him joining hands with Deepanshu Udhwani, resulting in the birth of 30 Days Coding."
          />
        </Reveal>
        <Reveal>
          <Profile
            name="Abhinav Awasthi"
            profile="https://i.ibb.co/GHMvNkm/instructor3.jpg"
            position="SDE @Zeta"
            link="https://www.linkedin.com/in/abhinavawasthi1/"
            company={[
              { name: "Zeta", path: "/zetasuite_logo.jfif" },
              { name: "Linedin", path: "/linkedin_logo.jfif" },
              {
                name: "Harcourt Butler Technology University",
                path: "/harcourt_butler_tech_uni.jfif",
              },
            ]}
            desc="One of our valuable Abhinav Awasthi, uprising software engineer currently at Zeta, contributing to 30 Days Coding expecially DSA. Having professional expertise with a passion for mentoring keeps him driven."
          />
        </Reveal>
        {/* <div className="max-lg:hidden flex flex-col gap-5 items-center text-center max-w-2xl px-8">
          <Reveal>
            <span className="text-4xl font-bold">
              Faculty and Experts from{" "}
              <span className="text-prime">FAANG</span> and Big tech
            </span>
          </Reveal>
          <Reveal>
            <p className="text-lg">
              From the Software Engineers of{" "}
              <span className="font-semibold text-prime px-1 text-xl">
                Google
              </span>{" "}
              and
              <span className="font-semibold text-prime px-1 text-xl">
                Alibaba Express
              </span>
            </p>
          </Reveal>
          <div className="py-2" />
          <Reveal>
            <Button>Join 1:1 Mentorship</Button>
          </Reveal>
        </div> */}
        <Reveal>
          <Profile
            name="Deepanshu Udhwani"
            profile="/instructor2.jpg"
            position="Founder"
            link="https://www.linkedin.com/in/deepanshu-udhwani/"
            company={[
              { name: "MakeMyTrip", path: "/makemytrip_logo.jfif" },
              { name: "Alibaba Cloud", path: "/alibaba.jfif" },
              { name: "Thapar - Engineering", path: "/thapar.jfif" },
            ]}
            desc="Deepanshu Udhwani, drawing from experience at MakeMyTrip, Alibaba Cloud, and various startups, founded 30 Days Coding to solve a simple problem faced by engineers across the globe - 'How do I prepare for this interview?' With a background in Computer Science and Marketing, he knows the exact composition of techical and non-technical aspects required for getting to your dream job."
          />
        </Reveal>
      </div>

      {/* <div className="lg:hidden"> */}
      {/* <Reveal>
        <AnimatedButton type="ext" link="/mentorship">
          Join 1:1 Mentorship
        </AnimatedButton>
      </Reveal> */}
      {/* </div> */}
    </div>
  );
}
