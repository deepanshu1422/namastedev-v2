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
    <div className="shrink-0 flex flex-col rounded-2xl text-center justify-between bg-second relative z-[1] w-72">
      <div className="top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] absolute p-2 bg-gradient-to-t from-prime/80 to-second/80 rounded-full">
        <div className="h-36 w-36 overflow-hidden rounded-full flex items-center justify-center">
          <Image
            src={profile}
            alt={`${name}'s profile`}
            height={220}
            width={220}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between pt-36 h-full">
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col items-center gap-2">
            <span className="font-semibold text-xl">{name}</span>
            <span className="text-muted-foreground text-sm font-semibold">
              {position}
            </span>
            <div className="flex gap-3 py-2">
              {company?.length && company.map(({ name, path }, i) => (
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

          {/* <p className="text-base p-6 max-lg:text-left">{desc}</p> */}
        </div>
      </div>
      <Link className="mx-auto p-2 pb-5" href={link}>
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
        name: "Deepanshu Udhwani",
        profile: "https://i.ibb.co/8mFwp1C/instructor2.jpg",
        position: "Founder",
        link: "https://www.linkedin.com/in/deepanshu-udhwani/",
        company:
          [
            { name: "MakeMyTrip", path: "/makemytrip_logo.jfif" },
            { name: "Alibaba Cloud", path: "/alibaba.jfif" },
            { name: "Thapar Institute of Engineering", path: "/thapar.jfif" },
          ]
      },
      {
        name: "Aryan Singh",
        profile: "https://i.ibb.co/YRBGz7v/instructor.jpg",
        position: "SDE @Google",
        link: "https://www.linkedin.com/in/singh1aryan/",
        company:
          [
            { name: "Google", path: "/company3.png" },
            { name: "Arrow Electronics", path: "/arrow_logo.jfif" },
            {
              name: "Massachusetts Amherst",
              path: "/umassamherst_logo.jfif",
            },
          ]
      }, {
        name: "Abhinav Awasthi",
        profile: "https://i.ibb.co/GHMvNkm/instructor3.jpg",
        position: "SDE @Zeta",
        link: "https://www.linkedin.com/in/abhinavawasthi1/",
        company: [
          { name: "Zeta", path: "/zetasuite_logo.jfif" },
          { name: "Linedin", path: "/linkedin_logo.jfif" },
          {
            name: "Harcourt Butler Technology University",
            path: "/harcourt_butler_tech_uni.jfif",
          },
        ]
      },
      {
        name: "Anand Singh",
        profile: "https://i.ibb.co/gRbb7Zq/mentor3.jpg",
        position: "SDE@Walmart",
        link: "https://www.linkedin.com/in/anand-singh2410/",
        company:
          [
            { name: "DBS", path: "/dbs.jpg" },
            { name: "Walmart Global IN", path: "/walmart.jpg" },
            { name: "Thapar Institute of Engineering", path: "/thapar.jfif" },
          ]
      },
      {
        name: "Kshitiz Khosla",
        profile: "https://i.ibb.co/sW80P1p/mentor4.jpg",
        position: "SDE@Arcesium",
        link: "https://www.linkedin.com/in/kshitizkhosla/",
        company:
          [
            { name: "Arcesium", path: "/arcesium.jpg" },
            { name: "Amazon", path: "/amazon.jpg" },
            { name: "Birla Institute of Technology and Science, Pilani", path: "/bits.jpg" },
          ]
      },
      {
        name: "Dhanush Kamath",
        profile: "https://i.ibb.co/zPbLFjd/mentor5.jpg",
        position: "SDE",
        link: "https://www.linkedin.com/in/dhanushkamaths/",
      },
      {
        name: "Rakshit Raj",
        profile: "https://i.ibb.co/12yjQqS/mentor6.jpg",
        position: "SDE",
        link: "https://www.linkedin.com/in/rakshit-raj/",
      }
    ]
  return (
    <div className="m-auto flex flex-col items-center justify-center p-6 lg:p-10 gap-10 max-w-[80rem]">
      {/* Heading */}
      <div className="flex flex-col gap-5 text-center max-w-2xl mx-auto px-5">

        <span className="text-4xl font-bold text-center">
          Faculty and Experts from <span className="text-prime">FAANG</span>{" "}
          and Big tech
        </span>

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
      </div>

      <div className="flex flex-wrap justify-center h-full w-full gap-3 max-sm:gap-7 pt-12">
        {mentors.map(({ company, link, name, position, profile }, i) => (<Profile
          key={i}
          name={name}
          profile={profile}
          position={position}
          link={link}
          company={company}
        />))}
      </div>
    </div>
  );
}
