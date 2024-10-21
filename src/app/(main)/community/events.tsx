import { Check, ChevronUpCircle, CreditCard, Play, Star, Calendar } from "lucide-react";

const generateDates = (startDate: Date, count: number) => {
  const dates = [];
  for (let i = 0; i < count; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i * 5); // Every 3 days
    dates.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
  }
  return dates;
};

const today = new Date();
const eventDates = generateDates(today, 5);

const events = [
  {
    date: eventDates[0],
    title: "Full Stack Development Workshop",
    presenter: "Presented by Jane Doe",
  },
  {
    date: eventDates[1],
    title: "Data Structures and Algorithms Deep Dive",
    presenter: "Presented by John Smith",
  },
  {
    date: eventDates[2],
    title: "Building AI-Powered Applications",
    presenter: "Presented by Alice Johnson",
  },
  {
    date: eventDates[3],
    title: "Effective Job Search Strategies for Tech Roles",
    presenter: "Presented by Bob Williams",
  },
  {
    date: eventDates[4],
    title: "Interview preparation skills",
    presenter: "Presented by Emily Brown",
  },
];

export default function Events(){
    return (<>
    
      {/* New Events Section */}
      <div className="w-full pt-10">
        <div className="max-w-3xl mx-auto px-4">
        <span className="flex items-center justify-center gap-4 relative">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
          Weekly Live Classes
        </h2>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>
      <p className="max-w-2xl text-center mx-auto text-sm text-white/70 px-10 mb-5 line-clamp-2">
        Join our upcoming workshops led by industry experts. Enhance your skills, 
        network with peers, and stay updated on the latest tech trends.
      </p>
          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className="flex items-center bg-second/70 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-head to-second/70 rounded-full flex items-center justify-center text-white font-bold">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">{event.date}</p>
                  <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                  {/* <p className="text-sm text-gray-300">{event.presenter}</p> */}
                </div>
                {/* <div className="ml-auto">
                  <ChevronUpCircle className="h-6 w-6 text-prime" />
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      </>);
}