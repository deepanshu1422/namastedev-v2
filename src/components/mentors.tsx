import Image from "next/image";
import Link from "next/link";

type Profile = {
  name: string;
  designation: string;
  description: string;
  image: string;
  company: {
    name: string;
    path: string;
  }[];
  social: {
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    twitter?: string;
  };
  career: {
    latest: string;
    joined: string;
    duration: string;
    designation: string;
    company: string;
    imgSrc?: string;
  }[];
  exp: number;
  skills: string[];
  cover: string;
};

function ProfileCard({
  name,
  designation,
  description,
  company,
  image,
  social,
  career,
  exp,
  skills,
  cover,
}: Profile) {
  return (
    <div
      className={`relative flex flex-col border-prime bg-second rounded-lg overflow-hidden shadow-inner transition-all duration-500 w-full items-start gap-7 border pb-6`}
    >
      <div
        className={`w-full relative min-h-24 ${cover} flex items-end justify-end`}
      >
        <section className="flex gap-2 p-3 max-phone:grid max-phone:grid-cols-2">
          {social.linkedin && (
            <Link
              href={social.linkedin ?? "#"}
              className="rounded-md p-1.5 bg-prime/30 h-fit"
            >
              <svg
                className="h-4 w-4 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </Link>
          )}

          {social.instagram && (
            <Link
              href={social.instagram ?? "#"}
              className="rounded-md p-1.5 bg-prime/30 h-fit"
            >
              <svg
                className="h-4 w-4 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </Link>
          )}

          {social.youtube && (
            <Link
              href={social.youtube ?? "#"}
              className="rounded-md p-1.5 bg-prime/30 h-fit"
            >
              <svg
                className="h-4 w-4 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
              </svg>
            </Link>
          )}

          {social.twitter && (
            <Link
              href={social.twitter ?? "#"}
              className="rounded-md p-1.5 bg-prime/30 h-fit"
            >
              <svg
                className="h-4 w-4 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </Link>
          )}
        </section>
      </div>
      <div className="relative flex flex-col items-start gap-2 self-stretch px-5 lg:px-8 bg-second">
        <div className="absolute left-2 top-[-104px] h-32 w-32 rounded-md shadow-md shadow-black drop-shadow-xl border-4 object-cover lg:left-3 lg:top-[-110px] lg:h-40 lg:w-40 overflow-hidden">
          <Image
            src={image}
            fill
            alt={`${name} profile`}
            className="rounded-md bg-second"
          />
        </div>

        <div className="mt-7 flex flex-col justify-between gap-4 self-stretch md:mt-[75px] md:flex-row">
          <div className="flex max-w-[480px] flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-1">
              <span className="text-[20px] font-semibold md:text-2xl">
                {name}
              </span>
              <p className="font-normal text-sm leading-5 text-muted-foreground">
                {designation}
              </p>
            </div>

            <div className="md:hidden flex w-full flex-col gap-2">
              <p className="text-xs">{exp}+ years of experience</p>
              {company.map(({ name, path }, i) => {
                return (
                  <section
                    key={i}
                    className="flex items-center gap-2 md:max-w-[216px]"
                  >
                    <Image
                      className="rounded-md"
                      src={path}
                      alt={`${name} logo`}
                      height={28}
                      width={28}
                    />
                    <span className="text-sm">{name}</span>
                  </section>
                );
              })}
            </div>

            {/* <p className="self-stretch whitespace-pre-line text-sm leading-5 md:min-h-[80px]">
                  {description}
                </p> */}
          </div>

          <div className="hidden md:block">
            <div className="flex w-full flex-col gap-2">
              <p className="text-xs">{exp}+ years of experience</p>
              {company.map(({ name, path }, i) => {
                return (
                  <section
                    key={i}
                    className="flex items-center gap-2 md:max-w-[216px]"
                  >
                    <Image
                      className="rounded-md"
                      src={path}
                      alt={`${name} logo`}
                      height={28}
                      width={28}
                    />
                    <span className="text-sm">{name}</span>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      {/* <div className="max-lg:hidden flex flex-col gap-5 rounded-xl bg-second px-5 lg:px-8 w-full">
            <span className="self-stretch text-xl font-semibold leading-[30px] lg:pb-6">
              Skills
            </span>

            <div className="flex flex-wrap gap-4">
              {skills.map((skill, i) => (
                <button
                  key={i}
                  className="flex items-center justify-center gap-2 rounded-full border px-3 py-2 duration-200 border-prime bg-second box-border"
                >
                  {skill}
                </button>
              ))}
            </div>
        </div> */}

      {/* Career */}
      {/* <Career details={career} /> */}
    </div>
  );
}

function NewProfileCard({
  name,
  designation,
  image,
  company,
  social,
}: {
  name: string;
  designation: string;
  image: string;
  company: { name: string; path: string }[];
  social: {
    linkedin?: string;
    twitter?: string;
  };
}) {
  return (
    <div className="group relative">
     
      <div className="flex flex-col items-center">
        
        <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10" />
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
         
          <div className="absolute top-4 right-4 flex gap-2 z-20">
            {social.linkedin && (
              <Link
                href={social.linkedin}
                target="_blank"
                className="p-2 rounded-lg bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-colors"
              >
                <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </Link>
            )}
            {social.twitter && (
              <Link
                href={social.twitter}
                target="_blank"
                className="p-2 rounded-lg bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-colors"
              >
                <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </Link>
            )}
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-semibold text-white">
            {name}
          </h3>
          <p className="text-sm text-gray-400">
            {designation}
          </p>
          
          {/* Company Logo */}
          {company[0] && (
            <div className="flex items-center justify-center gap-2 mt-3">
              <Image
                src={company[0].path}
                alt={company[0].name}
                width={20}
                height={20}
                className="rounded"
              />
              <span className="text-sm text-gray-400">{company[0].name}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Mentors() {
  let mentors: Profile[] = [
    {
      name: "Aryan",
      designation: "Software Engineer @ Google",
      image: "https://i.ibb.co/YRBGz7v/instructor.jpg",
      description:
        "Our lead mentor Aryan Singh, a visionary software engineer at Google, leads 30 Days Coding with a resilience hardly seen before. With roles in tech giants and projects like Blocktrain and DSA Revision, Aryan combines professional expertise with a passion for mentoring. His zeal to impart guidance to people stuck in the 'How do I brush my technical skills for this job?' phase, has led to him joining hands with Deepanshu Udhwani, resulting in the birth of 30 Days Coding.",
      company: [
        { name: "Google", path: "/company3.png" },
        { name: "Arrow Electronics", path: "/arrow_logo.jpg" },
        {
          name: "UMass Amherst",
          path: "/umassamherst_logo.jpg",
        },
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/singh1aryan/",
        instagram: "https://www.instagram.com/singh.aryan.45/",
      },
      career: [
        {
          latest: "Present",
          joined: "August, 2020",
          duration: "3y 8m",
          company: "Google",
          designation: "Software Engineer",
          imgSrc: "/google.jpg",
        },
        {
          latest: "August, 2020",
          joined: "May, 2020",
          duration: "4m",
          company: "Google",
          designation: "Software Engineer Intern",
          imgSrc: "/google.jpg",
        },
        {
          latest: "May, 2020",
          joined: "January, 2019",
          duration: "1y 5m",
          company: "University of UMass Amherst",
          designation: "Software Engineer",
          imgSrc: "/umassamherst_logo.jpg",
        },
        {
          latest: "August, 2019",
          joined: "June, 2019",
          duration: "3m",
          company: "Arrow Electronics",
          designation: "Software Engineer Intern",
          imgSrc: "/arrow_logo.jpg",
        },
      ],
      exp: 5,
      skills: [
        "Algorithms",
        "Full-Stack Development",
        // "User Experience",
        // "Artificial Intelligence ",
        // "User Interface Design",
        // "Statistics",
        "Data Structures",
        "Web Applications",
        "Object-Oriented Programming",
        "Machine Learning",
        // "Data Analysis",
        "Java",
        "JavaScript",
        // "Android",
        "Python ",
        "HTML5",
        "CSS",
        // "XML",
        "Node.js",
        "Kotlin",
        "React Native",
        // "Ruby on Rails",
        // "Github",
        "React.js",
        "Next.js",
        // "Ruby",
        // "Firebase",
        // "RESTful WebServices",
        // "Flutter",
        "SQL",
        "MongoDB",
        // "PHP",
        // "MySQL",
        // "Git",
        // "REST",
        // "Matlab",
        // "Retrofit",
        // "Mobile Experiences",
        // "Android StudioAndroid Studio",
        // "Back-End Web Development",
      ],
      cover: "cover",
    },
    {
      name: "Deepanshu",
      image: "/instructor2.jpg",
      designation: "Software Engineer @ Alibaba Cloud & MakeMyTrip",
      social: {
        linkedin: "https://www.linkedin.com/in/deepanshu-udhwani/",
        instagram: "https://www.instagram.com/itsudhwani/",
      },
      company: [
        { name: "MakeMyTrip", path: "/makemytrip_logo.jpg" },
        { name: "Alibaba Cloud", path: "/alibaba.jpg" },
        { name: "Thapar - Engineering", path: "/thapar.jpg" },
      ],
      description:
        "Deepanshu Udhwani, drawing from experience at MakeMyTrip, Alibaba Cloud, and various startups, founded 30 Days Coding to solve a simple problem faced by engineers across the globe - 'How do I prepare for this interview?' With a background in Computer Science and Marketing, he knows the exact composition of techical and non-technical aspects required for getting to your dream job.",
      career: [
        {
          latest: "Present",
          joined: "July, 2023",
          duration: "9m",
          company: "30 Days Coding",
          designation: "Founder",
          imgSrc: "/30days_logo.jpg",
        },
        {
          latest: "February, 2024",
          joined: "June, 2021",
          duration: "2y 9m",
          company: "MakeMyTrip",
          designation: "Senior Software Engineer",
          imgSrc: "/makemytrip_logo.jpg",
        },
        {
          latest: "September, 2020",
          joined: "July, 2020",
          duration: "3m",
          company: "Alibaba Cloud",
          designation: "Software Development Intern",
          imgSrc: "/alibaba.jpg",
        },
        {
          latest: "March, 2020",
          joined: "December, 2019",
          duration: "4m",
          company: "Ancient Vedic Roots",
          designation: "Software Engineer",
        },
      ],
      exp: 6,
      skills: [
        "MySQL",
        "MongoDB",
        "Django",
        "Product Development",
        "Python",
        "C++",
        "HTML5",
        "JavaScript",
        "Blockchain",
        "Cloud Computing",
        "Artificial Intelligence",
        "Java",
        "Node.js",
        "React.js",
        "Go",
        "Full-Stack Development",
        "DSA",
        "Data Structures",
        "Software Development",
      ],
      cover: "cover",
    },
    {
      name: "Ashok",
      image: "/as-mentor.jpeg",
      designation: "Senior Data Analyst & Scientist",
      social: {
        linkedin: "https://www.linkedin.com/in/sharma-ak/",
        // instagram: "https://www.instagram.com/itsudhwani/",
      },
      company: [
        { name: "Cedars", path: "/cedars.jpeg" },
        { name: "Takeda", path: "/takeda.jpeg" },
        { name: "Minnesota", path: "/minnesota.jpeg" },
      ],
      description:
        "Deepanshu Udhwani, drawing from experience at MakeMyTrip, Alibaba Cloud, and various startups, founded 30 Days Coding to solve a simple problem faced by engineers across the globe - 'How do I prepare for this interview?' With a background in Computer Science and Marketing, he knows the exact composition of techical and non-technical aspects required for getting to your dream job.",
      career: [
        {
          latest: "Present",
          joined: "July, 2023",
          duration: "9m",
          company: "30 Days Coding",
          designation: "Founder",
          imgSrc: "/30days_logo.jpg",
        },
        {
          latest: "February, 2024",
          joined: "June, 2021",
          duration: "2y 9m",
          company: "MakeMyTrip",
          designation: "Senior Software Engineer",
          imgSrc: "/makemytrip_logo.jpg",
        },
        {
          latest: "September, 2020",
          joined: "July, 2020",
          duration: "3m",
          company: "Alibaba Cloud",
          designation: "Software Development Intern",
          imgSrc: "/alibaba.jpg",
        },
        {
          latest: "March, 2020",
          joined: "December, 2019",
          duration: "4m",
          company: "Ancient Vedic Roots",
          designation: "Software Engineer",
        },
      ],
      exp: 12,
      skills: [
        "MySQL",
        "MongoDB",
        "Django",
        "Product Development",
        "Python",
        "C++",
        "HTML5",
        "JavaScript",
        "Blockchain",
        "Cloud Computing",
        "Artificial Intelligence",
        "Java",
        "Node.js",
        "React.js",
        "Go",
        "Full-Stack Development",
        "DSA",
        "Data Structures",
        "Software Development",
      ],
      cover: "cover",
    },
  ];

  return (
    <section className=" px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Meet Our Team
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn from industry professionals with years of experience at top tech companies
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {mentors.map((mentor, i) => (
            <NewProfileCard
              key={i}
              name={mentor.name}
              designation={mentor.designation}
              image={mentor.image}
              company={mentor.company}
              social={mentor.social}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
