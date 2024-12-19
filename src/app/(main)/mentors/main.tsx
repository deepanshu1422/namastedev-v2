"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mentors } from "./page";

export default function Main({ mentorsCollection }: Mentors) {
  // const { items } = mentorsCollection;

  const [searchTerm, setSearchTerm] = useState("");
  const [expertiseFilter, setExpertiseFilter] = useState("");
  // const [priceFilter, setPriceFilter] = useState<any>("");
  // const [selectedMentor, setSelectedMentor] = useState(null);
  const [majorFilter, setMajorFilter] = useState("");
  const [levelFilter, setLevelFilter] = useState("");

  // const mentors = [
  //   {
  //     _id: "1",
  //     name: "Aryan Singh",
  //     about:
  //       "Aryan Singh is a seasoned software engineer with over 4 years of experience in the tech industry. He did his undergrad from UMass Amherst in Computer Science.",
  //     imgSrc: "/images/aryan1.jpeg",
  //     colleges: ["University of Massachusetts Amherst"],
  //     degrees: ["Undergraduate"],
  //     states: ["Boston, California"],
  //     countries: ["USA", "Canada"],
  //     linkedinProfile: "https://www.linkedin.com/in/priya-sharma",
  //     twitterProfile: "https://www.twitter.com/ananya_desai",
  //     instagramProfile: "https://www.instagram.com/ananya_desai",
  //     yearsAbroad: 8,
  //     majors: ["Computer Science"],
  //     expertiseTopics: [
  //       "Computer Science",
  //       "Undergrad admissions",
  //       "On campus jobs",
  //       "Internships",
  //       "College selection",
  //     ],
  //     testScores: {
  //       toefl: 108,
  //       sat: 1420,
  //     },
  //     workExperience: "Software Engineer at Google",
  //     languages: ["English", "Hindi"],
  //     visasObtained: ["F1", "OPT", "H1B"],
  //     testimonial:
  //       "Aryan was instrumental in helping me navigate the US college application process.",
  //     price: 2499,
  //     currency: "INR",
  //     available: true,
  //     paymentLink: "https://tagmango.app/df47d4196c",
  //   },
  //   {
  //     _id: "2",
  //     name: "Ashok Sharma",
  //     about:
  //       "Ashok Sharma is a senior data scientist with over 10 years of experience in the tech industry. He did his Postdoc from UMN",
  //     imgSrc: "/images/ashoks.jpeg",
  //     colleges: ["University of Minnesota Twin Cities"],
  //     degrees: ["PhD", "Postdoc"],
  //     states: ["Minnesota", "California"],
  //     countries: ["USA"],
  //     linkedinProfile: "https://www.linkedin.com/in/rahul-patel",
  //     twitterProfile: "https://www.twitter.com/ananya_desai",
  //     instagramProfile: "https://www.instagram.com/ananya_desai",
  //     yearsAbroad: 6,
  //     majors: ["Computational Biology", "Statistics"],
  //     expertiseTopics: [
  //       "Postdoc",
  //       "Data science",
  //       "On campus jobs",
  //       "Internships",
  //       "College selection",
  //     ],
  //     testScores: {
  //       toefl: 116,
  //       sat: 1520,
  //     },
  //     workExperience: "Data scientist at Cedars-Sinai Medical Center",
  //     languages: ["English", "Gujarati", "C++", "VHDL"],
  //     visasObtained: ["F1", "OPT", "H1B"],
  //     testimonial:
  //       "Ashkok's guidance was crucial in helping me prepare before coming to USA.",
  //     price: 999,
  //     currency: "INR",
  //     available: true,
  //     paymentLink: "https://tagmango.app/bf7e55ca1e",
  //   },
  //   {
  //     _id: "3",
  //     name: "Jugal Bhatt",
  //     about:
  //       "Jugal Bhatt is a computer science student at UIUC. He has a passion for helping other international students in their masters admissions",
  //     imgSrc: "/images/jugal.jpeg",
  //     colleges: ["University of Illinois at Urbana-Champaign"],
  //     degrees: ["Masters"],
  //     states: ["Illinois"],
  //     countries: ["USA"],
  //     linkedinProfile: "https://www.linkedin.com/in/ananya-desai",
  //     twitterProfile: "https://www.twitter.com/ananya_desai",
  //     instagramProfile: "https://www.instagram.com/ananya_desai",
  //     yearsAbroad: 2,
  //     majors: ["Computer Science"],
  //     expertiseTopics: [
  //       "Computer science",
  //       "Masters admission",
  //       "Internships",
  //       "College selection",
  //     ],
  //     testScores: {
  //       toefl: 119,
  //       sat: 1560,
  //     },
  //     workExperience: "Software engineer intern at Verint",
  //     languages: ["English", "Marathi", "French"],
  //     visasObtained: ["F1", "CPT"],
  //     testimonial:
  //       "Jugal's insights for my masters were invaluable for my career planning.",
  //     price: 999,
  //     currency: "INR",
  //     available: true,
  //     paymentLink: "https://tagmango.app/5e545a9111",
  //   },
  //   {
  //     _id: "4",
  //     name: "Yashwardhan Rathore",
  //     about:
  //       "Yashwardhan is a computer science student at San Francisco State University. He has a passion for helping other international students in their masters admissions",
  //     imgSrc: "/images/yash.jpg",
  //     colleges: ["San Francisco State University"],
  //     degrees: ["Undergraduate"],
  //     states: ["California"],
  //     countries: ["USA"],
  //     linkedinProfile: "https://www.linkedin.com/in/ananya-desai",
  //     twitterProfile: "https://www.twitter.com/ananya_desai",
  //     instagramProfile: "https://www.instagram.com/ananya_desai",
  //     yearsAbroad: 7,
  //     majors: ["Computer Science"],
  //     expertiseTopics: [
  //       "Computer science",
  //       "Undergrad admission",
  //       "Internships",
  //       "College selection",
  //     ],
  //     testScores: {
  //       toefl: 119,
  //       sat: 1560,
  //     },
  //     workExperience: "California Department of Water Resources",
  //     languages: ["English", "Hindi"],
  //     visasObtained: ["F1"],
  //     testimonial:
  //       "Yashwardhan's insights for my masters were invaluable for my career planning.",
  //     price: 499,
  //     currency: "INR",
  //     available: true,
  //     paymentLink: "https://tagmango.app/4dd5bde63d",
  //   },
  // ];

  // Add this array for level options
  const levelOptions = ["Undergraduate", "Masters", "PhD", "Postdoc"];

  const filteredMentors = mentorsCollection.items.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.colleges.some((college) =>
        college.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesUniversity =
      expertiseFilter === "" || mentor.colleges.includes(expertiseFilter);
    // const matchesPrice =
    //   priceFilter === "" ||
    //   (priceFilter === "low" && mentor.price <= 2000) ||
    //   (priceFilter === "medium" &&
    //     mentor.price > 2000 &&
    //     mentor.price <= 2500) ||
    //   (priceFilter === "high" && mentor.price > 2500);
    const matchesMajor =
      majorFilter === "" || mentor.major.includes(majorFilter);
    const matchesLevel =
      levelFilter === "" || mentor.degrees.includes(levelFilter);
    return matchesSearch && matchesUniversity && matchesMajor && matchesLevel;
  });

  // const handleOpenDialog = (mentor: any) => {
  //   setSelectedMentor(mentor);
  //   const dialog: HTMLDialogElement = document.getElementById("mentorDialog");
  //   dialog?.showModal();
  // };

  // const handleCloseDialog = () => {
  //   const dialog: HTMLDialogElement = document.getElementById("mentorDialog");
  //   dialog?.close();
  // };

  return (
    <div className="min-h-screen bg-bg text-black">
      <main className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        <div className="text-center my-12">
          <h2 className="text-4xl font-extrabold text-green-500/90 sm:text-5xl md:text-6xl">
            Get 1:1 Guidance from Students & Alumni in the USA & Canada!
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-zinc-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Unlock 1:1 sessions with students and alumni from the USA and
            Canada. Whether it is about university life, assignments, or landing
            that dream internship—connect directly and get personalized help
            from the students.
          </p>
          {/* <div className="mt-8 flex flex-col sm:flex-row justify-center gap-2">
            <Link
              href="https://forms.gle/p1VCLvTCoDX9eLMaA"
              target="_blank"
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Request a Mentor
            </Link>
            <Link
              href="https://forms.immigrantjobhelp.com/form/8A6DW5XhnKiq93M3esviyB"
              target="_blank"
              className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300"
            >
              Join as a Mentor
            </Link>
          </div> */}
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search mentors..."
            className="w-full p-2 border rounded-md bg-zinc-900 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          <select
            className="p-2 border rounded-md max-phone:max-w-80 bg-zinc-900 text-white"
            value={expertiseFilter}
            onChange={(e) => setExpertiseFilter(e.target.value)}
          >
            <option value="">All Universities</option>
            {Array.from(
              new Set(
                mentorsCollection.items.flatMap((mentor) => mentor.colleges)
              )
            ).map((college) => (
              <option key={college} value={college}>
                {college}
              </option>
            ))}
          </select>

          <select
            className="p-2 border bg-zinc-900 text-white rounded-md"
            value={majorFilter}
            onChange={(e) => setMajorFilter(e.target.value)}
          >
            <option value="">All Majors</option>
            {Array.from(
              new Set(mentorsCollection.items.flatMap((mentor) => mentor.major))
            ).map((major) => (
              <option key={major} value={major}>
                {major}
              </option>
            ))}
          </select>

          <select
            className="p-2 border bg-zinc-900 text-white rounded-md"
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
          >
            <option value="">Level of Study</option>
            {levelOptions.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMentors.map((mentor, i) => (
            <Link
              href={`/mentors/${mentor.slug}`}
              key={i}
              rel="noopener noreferrer"
            >
              <div
                key={i}
                className="bg-zinc-800 text-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="p-4 relative flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="w-20 h-20 relative rounded-lg overflow-hidden mr-4">
                      <Image
                        src={mentor.image?.url || "/profile3.webp"}
                        alt={mentor.name}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {mentor.name}
                      </h3>
                      <p className="text-sm leading-4 text-emerald-400 font-medium mb-1">
                        {mentor?.degrees?.join(", ")}
                      </p>
                      <p className="text-sm leading-4 text-sky-400 font-medium">
                        {mentor.major}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between gap-2 mt-4">
                    <h4 className="font-semibold text-white/90 mb-1">
                      Countries:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {mentor?.countries?.slice(0, 3).map((country, index) => (
                        <span
                          key={index}
                          className="bg-emerald-900 text-emerald-200 text-sm font-bold px-2.5 py-0.5 rounded truncate max-w-full"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-white/90 mb-1">
                      College:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {mentor?.colleges?.slice(0, 3).map((college, index) => (
                        <span
                          key={index}
                          className="bg-sky-900 text-sky-200 text-xs font-medium px-2.5 py-0.5 rounded truncate max-w-full"
                        >
                          {college}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-zinc-900">
                  <div className="flex justify-center gap-4">
                    <button className="flex-1 inline-block bg-sky-600 text-white font-medium py-2 px-4 rounded hover:bg-sky-700 transition-colors duration-300 w-1/2">
                      Learn More
                    </button>

                    <button
                      className={`flex-1 w-full inline-block font-medium py-2 px-4 rounded transition-colors duration-300 ${
                        mentor.available
                          ? "bg-emerald-600 text-white hover:bg-emerald-700"
                          : "bg-zinc-600 text-zinc-300 cursor-not-allowed"
                      }`}
                      disabled={!mentor.available}
                    >
                      {mentor.available
                        ? "Book 1:1 Session"
                        : "All Slots Booked"}
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-500 text-xl">
              No mentors found matching your criteria. Please try different
              filters.
            </p>
          </div>
        )}

        {/* <dialog
          id="mentorDialog"
          className="p-0 w-full max-w-3xl rounded-lg shadow-xl"
        >
          {selectedMentor && (
            <div className="overflow-y-auto max-h-[90vh]">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 sm:px-6 py-4 flex justify-between items-center text-white sticky top-0 z-10">
                <h2 className="text-xl sm:text-2xl font-bold flex items-center">
                  <span className="mr-2">🎓</span> {selectedMentor.name}
                </h2>
                <button
                  // onClick={handleCloseDialog}
                  className="text-white hover:text-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4 sm:p-6 bg-gray-50">
                <div className="flex flex-col sm:flex-row items-center mb-6">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6">
                    <Image
                      src={selectedMentor.imgSrc}
                      alt={selectedMentor.name}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  </div>
                  <div className="text-center sm:text-left flex-grow">
                    <p className="text-gray-700">{selectedMentor.about}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-blue-600 font-medium text-lg mb-2">
                      🎯 {selectedMentor.majors.join(", ")}
                    </p>
                    <p className="text-gray-700 mb-2">
                      🏫 {selectedMentor.colleges.join(", ")}
                    </p>
                    <p className="text-gray-700 mb-2">
                      💼 {selectedMentor.workExperience}
                    </p>
                    <p className="text-gray-700 mb-4">
                      🌍 {selectedMentor.yearsAbroad} years abroad experience
                    </p>

                    <InfoSection
                      title="States"
                      icon="🇺🇸"
                      items={selectedMentor.states}
                    />
                    <InfoSection
                      title="Countries"
                      icon="🌎"
                      items={selectedMentor.countries}
                    />
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <InfoSection
                      title="Expertise"
                      icon="🚀"
                      items={selectedMentor.expertiseTopics}
                    />
                    <InfoSection
                      title="Languages"
                      icon="🗣️"
                      items={selectedMentor.languages}
                    />

                    <h4 className="font-semibold mt-4 flex items-center">
                      <span className="mr-2">💬</span> Testimonial:
                    </h4>
                    <p className="italic bg-yellow-50 p-3 rounded-lg mt-2">
                      &quot;{selectedMentor.testimonial}&quot;
                    </p>
                    <p className="bg-blue-50 p-3 rounded-lg mt-4">
                      💰 {selectedMentor.price} {selectedMentor.currency}/30
                      mins
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    // onClick={() => selectedMentor.available && handleBookSession(selectedMentor)}
                    href={selectedMentor.paymentLink}
                    target="_blank"
                    className={`font-medium py-3 px-6 rounded-full transition-colors duration-300 text-lg w-full sm:w-auto ${
                      selectedMentor.available
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-gray-400 text-gray-200 cursor-not-allowed"
                    }`}
                    disabled={!selectedMentor.available}
                  >
                    {selectedMentor.available
                      ? `🗓️ Book a 1:1 Session with ${selectedMentor.name}`
                      : "🚫 All Slots Booked"}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </dialog> */}
      </main>

      {/* <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Mentor Booking Platform. All rights reserved.
          </p>
        </div>
      </footer> */}
    </div>
  );
}

function InfoSection({
  title,
  icon,
  items,
}: {
  title: string;
  icon: string;
  items: string[];
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center mb-4">
      <div className="flex items-center mb-2 sm:mb-0 sm:mr-2">
        <span className={`text-2xl mr-2 ${icon}`}></span>
        <span className="text-gray-700 underline">{title}:</span>
      </div>
      <p className="text-gray-700">{items.join(", ")}</p>
    </div>
  );
}
