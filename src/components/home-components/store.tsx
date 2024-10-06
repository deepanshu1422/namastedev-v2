import Link from "next/link";
import Image from "next/image";
import { CourseTabMenu } from "./course-tabs";
import { courses } from "@/util/constants";
import { FaCheck } from 'react-icons/fa';

export default function Store() {
  // const courses = [
  //   {
  //     title: "All 15 Courses Package -  (Certificate + Lifetime)",
  //     imgSrc:
  //       "https://d502jbuhuh9wk.cloudfront.net/courses/652a1994e4b05a145bae5cd0/652a1994e4b05a145bae5cd0_scaled_cover.jpg?v=10",
  //     link: "https://courses.30dayscoding.com/courses/All-courses-package-652a1994e4b05a145bae5cd0",
  //     category: ["fullstack", "package", "job"],
  //   },
  //   {
  //     title: "Job Ready - MERN  Full Stack Web Dev Course (lifetime valid)",
  //     imgSrc:
  //       "https://d502jbuhuh9wk.cloudfront.net/courses/64eebdb8e4b0a14befedc15d/64eebdb8e4b0a14befedc15d_scaled_cover.jpg?v=1",
  //     link: "https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d",
  //     category: ["courses", "fullstack", "job"],
  //   },
  //   {
  //     title: "Job ready DSA course  (Certificate + Lifetime)",
  //     imgSrc:
  //       "https://d502jbuhuh9wk.cloudfront.net/courses/64f93394e4b0e75ce98af312/64f93394e4b0e75ce98af312_scaled_cover.jpg?v=1",
  //     link: "https://courses.30dayscoding.com/courses/DSA-revision-placement-course-64f93394e4b0e75ce98af312",
  //     category: ["courses", "job"],
  //   },
  //   {
  //     title:
  //       "AI full stack dev, Tools, Chat GPT, and prompting course (lifetime valid)",
  //     imgSrc:
  //       "https://d502jbuhuh9wk.cloudfront.net/courses/64eebe76e4b002b964b5645d/64eebe76e4b002b964b5645d_scaled_cover.jpg?v=8",
  //     link: "https://courses.30dayscoding.com/courses/AI-full-stack-project-development-course-64eebe76e4b002b964b5645d",
  //     category: ["ai", "courses"],
  //   },
  //   {
  //     title: "Job ready - NEXT JS full stack web dev course (lifetime valid)",
  //     imgSrc:
  //       "https://d502jbuhuh9wk.cloudfront.net/courses/64eebe15e4b06aa775217381/64eebe15e4b06aa775217381_scaled_cover.jpg?v=6",
  //     link: "https://courses.30dayscoding.com/courses/NEXT-JS-full-stack-web-development-course-64eebe15e4b06aa775217381-64eebe15e4b06aa775217381",
  //     category: ["courses", "fullstack"],
  //   },
  //   {
  //     title: "Chat GPT AI prompt engineering course (lifetime)",
  //     imgSrc:
  //       "https://d502jbuhuh9wk.cloudfront.net/courses/6527591fe4b06a00b8c751a5/6527591fe4b06a00b8c751a5_scaled_cover.jpg?v=2",
  //     link: "https://courses.30dayscoding.com/courses/Chat-GPT-AI-prompt-engineering-course-6527591fe4b06a00b8c751a5",
  //     category: ["nocode"],
  //   },
  //   {
  //     title: "Complete Blockchain and Web3 course",
  //     imgSrc:
  //       "https://d502jbuhuh9wk.cloudfront.net/courses/64eec408e4b002b964b568be/64eec408e4b002b964b568be_scaled_cover.jpg?v=4",
  //     link: "https://courses.30dayscoding.com/courses/Blockchain-developer-course-64eec408e4b002b964b568be",
  //     category: ["ai", "courses"],
  //   },
  // ];

  const bundle = [
    {
      title:
      "17 Course Mega Bundle: Full Stack, DSA, AI, Blockchain, Python & More - Lifetime Access",
      link: "bundle/complete-package-all-course-bundle",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/70h8KSfhjqdiIecfwf6fJY/c67a069d098b3c87e0774b1db9f6f920/17_courses.jpg",
    },
  ];

  const courses = [
    {
      title: "Complete MERN full stack web dev course",
      link: "courses/complete-mern-stack-course",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/7qixtK8KRrnkJalWNJ1RMk/61dbe1a62bc14aa7244bb8e6ce12f237/MERN_Fullstack__1_.jpg",
    },
    {
      title: "DSA Complete Job Ready Course with 250+ videos, revision guide",
      link: "courses/dsa-complete-course",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/5KSVf7vuNxFjxcHfm9idjM/4e5563dfa5f1ca9cc169a7274a7dbcac/64f93394e4b0e75ce98af312_scaled_cover.jpg",
    },
    {
      title:
        "Complete AI mastery course - Tools, Workflows, Automations, Coding, Chat GPT course",
      link: "courses/ai-complete-course",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/71P6wehVL2PNnjTj7vSrjo/bdaa67591233179acdbe03e6f4adc952/AI_Mastery_full_course__1_.jpg",
    },
    {
      title: "SQL mastery complete course for data analytics",
      link: "courses/sql-mastery-complete-course",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/4BX1Hit6PCQieTHeIeZj3p/6d8dcda3c66bafec3ba753211f9d9d44/IMG-20240916-WA0374.jpg",
    },
    {
      title:
        "Blockchain Mastery Complete Course - Solidity, Defi, NFTs, Projects",
      link: "courses/complete-blockchain-course",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/6CtQOysdzsX1zU7T1K0Enw/b704554e417531369ed125131eb0b806/blockchain_mastery2.jpg",
    },
    {
      title: "Complete Next JS mastery course",
      link: "courses/complete-next-js-mastery-course",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/1zxmh6ct5gjgaOJCvAjzzA/9395e9e8283b479bda4f00e51614586a/NExtJs_Fullstack.jpg",
    },
    {
      title: "HTML, CSS, and JS beginner to advanced course",
      link: "courses/html-css-and-js-beginner-to-advanced-course",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/DZP3dyeiNeoFE6eLBjcUq/651acbe07ea1eff8fd3b9362a4f5d649/IMG-20240916-WA0369.jpg",
    },
    {
      title: "Complete Python mastery course",
      link: "courses/complete-python-mastery-course",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/mdRH1g3VSgansurxZCQtC/a09e87d268d088323754a821ab7e2b85/IMG-20240916-WA0373.jpg",
    },
    {
      title: "Prompt engineering Chat GPT complete course",
      link: "courses/prompt-engineering-chat-gpt-complete-course",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/ycDwzGFLof8SimHWAMUGa/9905e118e6f5ab0c4646f63155520428/64eebe76e4b002b964b5645d_scaled_cover.jpg",
    },
    {
      title: "JavaScript and React JS frontend mastery course",
      link: "courses/javascript-and-react-js-frontend-mastery-course",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/1fWaLZ89P7IaTSftLXoUr7/72eb9183413ea1f155565d313afebeb2/IMG-20240916-WA0371.jpg",
    },
    {
      title:
        "Certified Full Stack Web development Job ready Course with 50+ projects",
      link: "courses/complete-webdev-course",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/1A48UlmU2KT534PwkHroKj/70609095acfd38e53a56e332203e2687/WhatsApp_Image_2024-08-24_at_09.56.26_b0ddc2b6.jpg",
    },
    {
      title: "Unique and Crazy Coding Full stack projects",
      link: "courses/unique-and-crazy-coding-full-stack-projects",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/5kcQyEgF7s25EmSciUcmPi/b435c151e910f65ca73ee1bea6f755de/Unique_Projects.jpg",
    },
    {
      title: "Java Mastery Course",
      link: "courses/java-mastery-course",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/69CStvmtfzT40uuFPUtmdU/bdabb346b468556be5f4cedd78059f66/IMG-20240916-WA0372.jpg",
    },
    {
      title: "Complete Statistics course",
      link: "courses/complete-statistics-course",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/6rRoHDW321GaezAN75Y5Ah/8242d135aa37d0d8df367b6672853b96/WhatsApp_Image_2024-09-18_at_14.12.55_4cef637f.jpg",
    },
    {
      title: "Build Coding Projects with AI",
      link: "courses/build-coding-projects-with-ai",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/5sKChWHFizUxHaNvsrzAXU/ac244577166fe5c99335ec305efe054f/Build_Projects_with_AI.jpg",
    },
    {
      title:
        "Complete Data Analytics Mastery Job ready Course - Python, SQL, Excel, Stats, Interview prep",
      link: "courses/data-analytics-course",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/2GK3XOFnieoC39pCvwNDfA/6b4fd56d1acdcfa0bd4d9ebc8b57c357/data_analyst.jpg",
    },
    {
      title: "25+ Full stack projects complete course",
      link: "courses/25-full-stack-projects-complete-course",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/5kcQyEgF7s25EmSciUcmPi/b435c151e910f65ca73ee1bea6f755de/Unique_Projects.jpg",
    },
    {
      title: "Interview focused prep course - Full stack, DSA, Python",
      link: "courses/interview-prep-mastery-course-full-stack-dsa-python",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/3rl985lRDMgLZxVfoAkosh/9f6e977b3196290bb5859f36cfb68131/IMG-20240916-WA0370.jpg",
    },
    {
      title: "Complete Excel mastery course",
      link: "courses/complete-excel-mastery-course",
      imgSrc:
        "https://images.ctfassets.net/3pv3o0yr6pgj/HpGLgoO8QhVXUkd2ZiLPw/24b57fa5e1e9a3603c9afe4e5d4be5de/Excel_Mastery.jpg",
    },
  ];

  return (
    <div className="grid place-items-center gap-8 max-w-[90rem] m-auto py-8">
      <span className="flex items-center justify-center gap-4 relative lg:pb-4">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta text-pretty text-[2rem] font-extrabold text-center">
          Pocket Friendly Courses with Certificates!
        </h2>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>
      
      <div className="w-full max-w-[1200px] px-4">
        <div className="bg-second rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <img src={bundle[0].imgSrc} alt={bundle[0].title} className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-white mb-4">{bundle[0].title}</h3>
              <div className="space-y-6">
                {/* <div>
                  <h4 className="text-xl font-semibold mb-4">Bundle Features:</h4>
                  <ul className="space-y-2">
                    {[
                      "Access to all 17 courses",
                      "Lifetime validity",
                      "Certificate of completion",
                      "24/7 support",
                      "Regular updates",
                      "Hands-on projects",
                      "Interview preparation",
                      "Job assistance"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <FaCheck className="text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}
                <div>
                  <h4 className="text-xl font-semibold mb-4">Included Courses:</h4>
                  <ul className="space-y-2">
                    {courses.slice(0, 5).map((course, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">{course.title}</span>
                      </li>
                    ))}
                    <li className="flex items-start">
                      <FaCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">And {courses.length - 5} more courses!</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-second border-t border-white p-6 flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <span className="text-3xl font-bold text-white">₹999/-</span>
              <span className="text-lg text-gray-300 ml-2">One-time payment</span>
            </div>
            <Link href={bundle[0].link}>
              <button className="bg-prime text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                Get the Bundle
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="flex w-full max-lg:flex-col lg:gap-6 max-lg:items-center max-lg:gap-10 max-lg:px-0 lg:max-w-[925px]">
        <CourseTabMenu
          data={[
            {
              title: "All Courses",
              courses: courses,
            },
          ]}
        />
      </div> */}

      <Link className="text-lg" href={"/courses"}>
        <button
          className={`font-jakarta flex items-center font-semibold gap-1 border-white border transition-all px-6 py-3 rounded-md`}
        >
          Check More Courses
        </button>
      </Link>
    </div>
  );
}