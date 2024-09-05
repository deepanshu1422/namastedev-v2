import Image from "next/image";
import Link from "next/link";
import HoverInfo from "../hover-info";

function Profile({
  name,
  company,
  link,
  profile,
  position,
  desc,
}: {
  name: string;
  company?: { name: string; path: string }[];
  link: string;
  profile: string;
  position: string;
  desc?: string;
}) {
  return (
    <Link href={link} className="shrink-0 flex rounded-lg text-center bg-second relative z-[1] w-72 min-h-[104px] overflow-hidden shadow-lg shadow-black/20 lg:hover:-translate-y-1 transition-all duration-100">
      <div className="p-1.5">
        <div className="h-24 w-24 overflow-hidden rounded-md shadow-lg shadow-black/50 flex items-center justify-center">
          <Image
            src={profile}
            alt={`${name}'s profile`}
            height={220}
            width={220}
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-between py-3 h-full">
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col items-center">
            <span className="flex flex-col">
              <span className="flex gap-1 font-bold leading-4 line-clamp-1">
                <span className="line-clamp-1">{name}</span>
                <svg
                  className={`fill-sky-500 dark:fill-white h-5 w-5 transition-all hover:scale-110`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </span>
              <span className="text-white/60 text-xs">{position}</span>
            </span>
            <div className="flex gap-2 py-2">
              {company?.length &&
                company.map(({ name, path }, i) => (
                  <HoverInfo key={i} info={name}>
                    <Image
                      className="rounded-md"
                      src={path}
                      alt={`${name} logo`}
                      height={25}
                      width={25}
                    />
                  </HoverInfo>
                ))}
            </div>
          </div>

          {/* <p className="text-base p-6 max-lg:text-left">{desc}</p> */}
        </div>
      </div>
    </Link>
  );
}

export default function Mentor() {
  const mentors: {
    name: string;
    company?: { name: string; path: string }[];
    link: string;
    profile: string;
    position: string;
    desc?: string;
  }[] = [
    {
      name: "Deepanshu",
      profile: "/instructor2.jpg",
      position: "Founder",
      link: "https://www.linkedin.com/in/deepanshu-udhwani/",
      company: [
        { name: "MakeMyTrip", path: "/makemytrip_logo.jfif" },
        { name: "Alibaba Cloud", path: "/alibaba.jfif" },
        { name: "Thapar Institute of Engineering", path: "/thapar.jfif" },
      ],
    },
    {
      name: "Aryan Singh",
      profile: "https://i.ibb.co/YRBGz7v/instructor.jpg",
      position: "SDE @Google",
      link: "https://www.linkedin.com/in/singh1aryan/",
      company: [
        { name: "Google", path: "/company3.png" },
        { name: "Arrow Electronics", path: "/arrow_logo.jfif" },
        {
          name: "Massachusetts Amherst",
          path: "/umassamherst_logo.jfif",
        },
      ],
    },
    // {
    //   name: "Abhinav Awasthi",
    //   profile: "https://i.ibb.co/GHMvNkm/instructor3.jpg",
    //   position: "SDE @Zeta",
    //   link: "https://www.linkedin.com/in/abhinavawasthi1/",
    //   company: [
    //     { name: "Zeta", path: "/zetasuite_logo.jfif" },
    //     { name: "Linedin", path: "/linkedin_logo.jfif" },
    //     {
    //       name: "Harcourt Butler Technology University",
    //       path: "/harcourt_butler_tech_uni.jfif",
    //     },
    //   ],
    // },
    // {
    //   name: "Anand Singh",
    //   profile: "https://i.ibb.co/gRbb7Zq/mentor3.jpg",
    //   position: "SDE@Walmart",
    //   link: "https://www.linkedin.com/in/anand-singh2410/",
    //   company: [
    //     { name: "DBS", path: "/dbs.jpg" },
    //     { name: "Walmart Global IN", path: "/walmart.jpg" },
    //     { name: "Thapar Institute of Engineering", path: "/thapar.jfif" },
    //   ],
    // },
    // {
    //   name: "Kshitiz Khosla",
    //   profile: "https://i.ibb.co/sW80P1p/mentor4.jpg",
    //   position: "SDE@Arcesium",
    //   link: "https://www.linkedin.com/in/kshitizkhosla/",
    //   company: [
    //     { name: "Arcesium", path: "/arcesium.jpg" },
    //     { name: "Amazon", path: "/amazon.jpg" },
    //     {
    //       name: "Birla Institute of Technology and Science, Pilani",
    //       path: "/bits.jpg",
    //     },
    //   ],
    // },
    {
      name: "Dhanush Kamath",
      profile: "https://i.ibb.co/zPbLFjd/mentor5.jpg",
      position: "SDE",
      link: "https://www.linkedin.com/in/dhanushkamaths/",
    },
    {
      name: "Zayn",
      profile: "/zyan.jpg",
      position: "SDE",
      link: "https://in.linkedin.com/in/noonesociedad",
    },
    {
      name: "Rakshit Raj",
      profile: "https://i.ibb.co/12yjQqS/mentor6.jpg",
      position: "SDE",
      link: "https://www.linkedin.com/in/rakshit-raj/",
    },
  ];
  return (
    <div className="m-auto flex flex-col items-center justify-center p-6 lg:p-10 gap-4 max-w-[75rem]">
      {/* Heading */}
      <span className="flex items-center justify-center gap-4 relative">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
          Your Partners in Success
        </h2>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>

      <div className="flex flex-wrap items-center justify-center h-full w-full gap-4 max-sm:gap-7 pt-5">
        {mentors.map(({ company, link, name, position, profile }, i) => (
          <Profile
            key={i}
            name={name}
            profile={profile}
            position={position}
            link={link}
            company={company}
          />
        ))}
      </div>
    </div>
  );
}
