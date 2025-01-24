import { Collapsible, SubCourse } from "@/components/collabsible";
import {
  Atom,
  Blocks,
  BookOpen,
  Bookmark,
  Briefcase,
  CheckCheck,
  Clock7,
  Code2,
  Folder,
  HelpCircle,
  Laptop2,
  Timer,
  Video,
} from "lucide-react";
import Image from "next/image";
import AnimatedButton from "../animated-button";

type Props = {
  imageSrc: string;
  courseLink: string;
};

function CoursePerks({
  title,
}: {
  title: string;
}) {
  return (
    <span className="flex items-start gap-2 text-sm text-foreground/70">
      <CheckCheck className="shrink-0 h-5 w-5 text-emerald-500" />
      {title}
    </span>
  );
}

export default function Course({ imageSrc, courseLink }: Props) {
  return (
    <div className={"grid grid-cols-1 gap-3 max-w-[80rem] w-full mx-auto"}>
      <h2
        className={`text-4xl font-bold text-center mb-12 text-white text-pretty`}
      >
        The complete <span className="text-prime/80">MERN FullStack</span>{" "}
        Course
      </h2>

      <div className="flex max-md:flex-col md:gap-4">
        <div className="flex flex-col gap-2 justify-start w-full max-lg:grid-col-1 shadow-md h-fit">
          <Collapsible
            title={"Introduction to MERN Stack"}
            session={4}
            time="8:44"
          >
            <SubCourse
              title={"Welcome to our course. DM me for any help!"}
              type="video"
            />
            <SubCourse
              title={"We have EVERYTHING you need in this course."}
              type="file"
              preview="youtubeId"
              time="1:00"
            />
            <SubCourse
              title={"What is MERN stack ?"}
              type="video"
              preview="youtubeId"
              time="2:15"
            />
            <SubCourse
              title={"Role of Every Component of MERN"}
              type="video"
              time="5:28"
            />
          </Collapsible>
          <Collapsible
            title={"Introduction to the world of Web development"}
            session={2}
            time="17:31"
          >
            <SubCourse
              title={"Introduction of HTML, CSS and JS"}
              type="video"
              time="5:9"
            />
            <SubCourse
              title={"CSS, Tailwind CSS, Shadcn, Styling (must watch)"}
              type="video"
              time="12:22"
            />
          </Collapsible>
          <Collapsible
            title={"Everything about HTML, CSS"}
            session={7}
            time="2 hour 20:49"
          >
            <SubCourse
              title={"Introduction of HTML, CSS and JS"}
              type="video"
              time="5:9"
            />
            <SubCourse
              title={"CSS, Tailwind CSS, Shadcn, Styling (must watch)"}
              type="video"
              time="12:22"
            />

            <SubCourse
              title={"HTML: Intro, Tags, elements, headings"}
              time="31:15"
              type="video"
            />

            <SubCourse
              title={"HTML: Lists , Tables , Forms"}
              time="25:52"
              type="video"
            />

            <SubCourse
              title={"HTML: div, classes , id ,styles"}
              time="12:42"
              type="video"
            />

            <SubCourse
              title={"CSS: Flexbox and Gridbox"}
              time="33:4"
              type="video"
            />

            <SubCourse
              title={"Tailwind CSS complete project "}
              time="33:33"
              type="video"
            />

            <SubCourse
              title={"Tailwind CSS generic projects "}
              time="4:20"
              type="video"
            />

            <SubCourse
              title={"planet-selling-main (code zip file)"}
              type="cloud"
            />
          </Collapsible>
          <Collapsible
            title={"Everything about Javascript"}
            session={9}
            time="4 hour 56:8"
          >
            <SubCourse
              title={"Inroduction to JavaScript - basics , Looping"}
              time="31:40"
              type="video"
            />
            <SubCourse
              title={"JavaScript - Functions, Arrays"}
              time="12:38"
              type="video"
            />
            <SubCourse
              title={"JavaScript - promises, async, await, and objects"}
              time="21:00"
              type="video"
            />
            <SubCourse
              title={"JavaScript - proto , prototype and class"}
              time="25:22"
              type="video"
            />
            <SubCourse
              title={"JavaScript - DOM manipulation and apps"}
              time="6:22"
              type="video"
            />
            <SubCourse
              title={
                "JavaScript - Asynchronous, Set Timeout , Callback, Callback Hell"
              }
              time="36:56"
              type="video"
            />
            <SubCourse
              title={
                "JavaScript - live class - async await, promises, callback"
              }
              time="1 hour 37:49"
              type="video"
            />
            <SubCourse
              title={"Portfolio project with JavaScript"}
              time="29:26"
              type="video"
            />
            <SubCourse
              title={"Form Validation project in JS"}
              time="34:52"
              type="video"
            />
          </Collapsible>
          <Collapsible
            title={"Deep understanding of React js"}
            session={9}
            time="5 hour 10:50"
          >
            <SubCourse
              title={"React - Introduction and Folder structure"}
              time="13:29"
              type="video"
            />

            <SubCourse title={"React - Components"} time="8:4" type="video" />

            <SubCourse title={"Introduction to JSX"} time="9:8" type="video" />

            <SubCourse
              title={"Introduction to Components, Props, Projects"}
              time="28:53"
              type="video"
            />

            <SubCourse
              title={"Everything about Hooks - useState, useEffect, Custom"}
              time="1 hour 6:16"
              type="video"
            />

            <SubCourse
              title={
                "Introduction to state management - Context API, useContext"
              }
              time="19:26"
              type="video"
            />

            <SubCourse
              title={"Introduction to useReducer"}
              time="34:30"
              type="video"
            />

            <SubCourse
              title={"React router, error #404, and Form Validation"}
              time="1 hour 6:20"
              type="video"
            />

            <SubCourse
              title={"Redux Toolkit explained"}
              time="1 hour 4:39"
              type="video"
            />
          </Collapsible>
          <Collapsible
            title={"JS and React: projects"}
            session={5}
            time="5 hour 21:56"
          >
            <SubCourse
              title={"JavaScript 5 Beginners Project in One Video"}
              time="1 hour 10:41"
              type="video"
            />
            <SubCourse
              title={"JavaScript 5 Intermediate Project in One Video"}
              time="2 hour 43:38"
              type="video"
            />
            <SubCourse
              title={"Portfolio Site with JavaScript"}
              time="29:26"
              type="video"
            />
            <SubCourse
              title={"Weather App with React JS"}
              time="37:52"
              type="video"
            />
            <SubCourse
              title={"BMI Calculator with React JS"}
              time="20:17"
              type="video"
            />
          </Collapsible>
          <Collapsible
            title={"Build a complete Youtube clone with React JS"}
            session={9}
            time="4 hour 2:28"
          >
            <SubCourse
              title={"Project setup, Home Navbar"}
              time="38:32"
              type="video"
            />
            <SubCourse
              title={"Add a Sidebar to the UI"}
              time="23:5"
              type="video"
            />
            <SubCourse
              title={"Youtube Api Setup, Redux Toolkit"}
              time="12:17"
              type="video"
            />
            <SubCourse
              title={"useDispatch, useSelector, getHomePage"}
              time="27:16"
              type="video"
            />
            <SubCourse
              title={"parseData, parseVideo Duration, convertRawtoString"}
              time="34:28"
              type="video"
            />
            <SubCourse
              title={"timeSince, Spinner Loading, Card"}
              time="33:36"
              type="video"
            />
            <SubCourse
              title={"Search, Search Card"}
              time="32:12"
              type="video"
            />
            <SubCourse
              title={"Scrollbar, Watch, Additional features"}
              time="40:59"
              type="video"
            />
            <SubCourse title="Complete code zip file" type="cloud" />
          </Collapsible>
          <Collapsible
            title={"React + JS Interview exercises"}
            session={7}
            time="11 hour 25:7"
          >
            <SubCourse
              title="50+ JavaScript Practice Exercises - Beginners to Advanced"
              time="4 hour 8:8"
              type="video"
            />

            <SubCourse
              title="5 React JS Beginners Projects"
              time="3 hour 2:51"
              type="video"
            />

            <SubCourse
              title="30 + React JS Practice Exercises in Hindi part 1"
              time="2 hour 6:35"
              type="video"
            />

            <SubCourse
              title="30 + React JS Practice Exercises - part 2"
              time="2 hour 6:35"
              type="video"
            />

            <SubCourse
              title="Practice frontend and react problems - AlgoChurn.com"
              time="55"
              type="video"
            />

            <SubCourse title="JS practice questions (code zip)" type="cloud" />

            <SubCourse
              title="React practice questions (code zip)"
              type="cloud"
            />
          </Collapsible>
          <Collapsible
            title={"Everything about Node JS"}
            session={4}
            time="1 hour 16:23"
          >
            <SubCourse
              title="Introduction to Node JS , Modules , Local Modules"
              time="15:13"
              type="video"
            />

            <SubCourse
              title="Built-in Modules in Node JS"
              time="17:15"
              type="video"
            />

            <SubCourse
              title="Npm, nodemon, package.json etc"
              time="5:2"
              type="video"
            />

            <SubCourse
              title="Event Loop, Events , Streams"
              time="38:51"
              type="video"
            />
          </Collapsible>
          <Collapsible
            title={"Backend development: Node JS + Express JS"}
            session={4}
            time="1 hour 10:12"
          >
            <SubCourse
              title="Creating server using Express , Express Routes"
              time="19:48"
              type="video"
            />
            <SubCourse
              title="Json , params , quesry"
              time="25:18"
              type="video"
            />
            <SubCourse
              title="CRUD Operations - backend"
              time="25:5"
              type="video"
            />
            <SubCourse
              title="Full stack interview questions (bonus) (1 pages)"
              type="file"
            />
          </Collapsible>
          <Collapsible
            title={"Database: Working with MongoDB and other DBs"}
            session={3}
            time="2 hour 36:32"
          >
            <SubCourse
              title="Introduction to MongoDB and NoSQL database"
              time="13:14"
              type="video"
            />

            <SubCourse
              title="Login and Registration using MERN"
              time="1 hour 1:39"
              type="video"
            />

            <SubCourse
              title="Perfo: CRUD operations using MongoDB"
              time="1 hour 21:38"
              type="video"
            />
          </Collapsible>
          <Collapsible
            title={"Firebase: auth, db, functions"}
            session={3}
            time="1 hour 27:23"
          >
            <SubCourse
              title="Firebase overview and speedrun"
              time="14:6"
              type="video"
            />

            <SubCourse
              title="Authentication using React and Firebase"
              time="36:11"
              type="video"
            />

            <SubCourse
              title="CRUD using React and Firebase"
              time="36:5"
              type="video"
            />
          </Collapsible>
          <Collapsible
            title={"Build a full stack E-Commerce App (from scratch)"}
            session={12}
            time="4 hour 47:57"
          >
            <SubCourse
              title="Ecommerce app part 1 - Setup , Server , Mongodb and userModel"
              time="18:1"
              type="video"
            />
            <SubCourse
              title="Ecommerce app part 2 - userctrl , userrouter , cokkies , jwt token"
              time="31:2"
              type="video"
            />
            <SubCourse
              title="Ecommerce app part 3 - register , login , logout ,authorization"
              time="23:26"
              type="video"
            />
            <SubCourse
              title="Ecommerce app part 4 - define a category (CRUD)"
              time="28:16"
              type="video"
            />
            <SubCourse
              title="Ecommerce app part 5 - define a product (CRUD)"
              time="33:00"
              type="video"
            />
            <SubCourse
              title="Ecommerce app part 6 - filtering , pagination , sorting , limitations"
              time="20:38"
              type="video"
            />
            <SubCourse
              title="Ecommerce app part 7 - client side - navbar"
              time="23:59"
              type="video"
            />
            <SubCourse
              title="Ecommerce app part 8 - client side (products), context api , fetching"
              time="36:11"
              type="video"
            />
            <SubCourse
              title="Ecommerce app part 9 - client side (details page)"
              time="16:51"
              type="video"
            />
            <SubCourse
              title="Ecommerce app part 10 - client side (login , logout , a:features)"
              time="35:14"
              type="video"
            />
            <SubCourse
              title="Ecommerce app part 11 - client side (Add to cart)"
              time="21:14"
              type="video"
            />
            <SubCourse
              title="mern-stack-ecommerce (code zip file)"
              type="cloud"
            />
          </Collapsible>
          <Collapsible
            title={"FULL STACK PROJECTS - JS, React, MERN"}
            session={11}
            time="3 hour 9:15"
          >
            <SubCourse title="React Ecommerce app" type="code" />
            <SubCourse
              title="E-commerce project part 1"
              time="1 hour 18:51"
              type="video"
            />
            <SubCourse
              title="E-commerce project part 2"
              type="video"
              time="47:44"
            />
            <SubCourse title="Ecommerce project (download code)" type="cloud" />
            <SubCourse title="Basic and authentication MERN app" type="code" />
            <SubCourse
              title="Login, Registration using MERN stack (video)"
              type="video"
              time="1 hour 1:39"
            />
            <SubCourse title="Code snippets" type="code" />
            <SubCourse
              title="Basic MERN stack app (download code)"
              type="cloud"
            />
            <SubCourse
              title="Youtube clone project (download code)"
              type="cloud"
            />
            <SubCourse
              title="Social media MERN app (download code)"
              type="cloud"
            />
            <SubCourse
              title="Code and notes for live classes (download code)"
              type="link"
            />
          </Collapsible>
          <Collapsible title={"Interview guides (download pdf)"} session={4}>
            <SubCourse
              title="Full stack interview questions (1 pages)"
              type="file"
            />

            <SubCourse title="Complete tech job guide (26 pages)" type="file" />

            <SubCourse
              title="Behaviour interview guide (15 pages)"
              type="file"
            />

            <SubCourse
              title="Cold emailing networking guide (12 pages)"
              type="file"
            />
          </Collapsible>
        </div>

        <div className="relative h-full">
          <div className="sticky top-20 p-3 flex flex-col gap-3 shadow-lg bg-white/5 rounded-lg h-fit">
            <div className="flex gap-3 max-sm:flex-col md:flex-col">
              <Image
                className="w-full rounded shadow-md transition-transform aspect-video object-cover"
                alt="course"
                src={imageSrc}
                width={300}
                height={300}
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold">
                  MERN FullStack Course
                </h2>
                <p className="text-start">
                  Learn MERN Full Stack Development Course in 8 Weeks
                </p>
                <div className="flex gap-2">
                  <span className="text-sm flex text-muted-foreground items-center leading-3">
                    <Blocks className="h-5 w-5" />
                    15 Modules
                  </span>
                  <span className="text-sm flex text-muted-foreground items-center leading-3">
                    <Timer className="h-5 w-5" />
                    7.5 Hours of video content
                  </span>
                </div>
                <AnimatedButton type="ext" link={courseLink}>
                  Join Now
                </AnimatedButton>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-col-1 gap-2 text-sm py-3">
              <CoursePerks title={"Single user license"} />
              <CoursePerks title={"Easy payment method"} />
              <CoursePerks title={"Learn Anytime, Anywhere"} />
              <CoursePerks title={"New chapters unlock every week"} />
              <CoursePerks title={"24/7 Instant Email Support"} />
              <CoursePerks title={"Best Value Price"} />
              <CoursePerks title={"Certificate of Course Completion"} />
              <CoursePerks title={"Full Access of Course including any updates in future"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
