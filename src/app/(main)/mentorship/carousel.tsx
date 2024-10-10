import {
    Check,
    ChevronUpCircle,
    ChevronDownCircle,
    CreditCard,
    Play,
    Star,
    Calendar,
    ChevronRight,
    ChevronLeft,
    YoutubeIcon,
  } from "lucide-react";
  import { useState, useRef, useEffect } from "react";

export default function Carousel() {
    
  const [state, setState] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showOfferDialog, setShowOfferDialog] = useState(false);

    const communityBenefits = [
        {
          title: "24/7 Chat Support",
          description: "Get instant help and guidance from our community, anytime.",
          icon: "💬",
          details: [
            "Round-the-clock access to experienced developers",
            "Quick problem-solving and code reviews",
            "Diverse perspectives from a global community",
          ],
        },
        {
          title: "1:1 Calls with TAs",
          description: "Schedule personalized sessions with Teaching Assistants.",
          icon: "📞",
          details: [
            "In-depth code reviews and debugging assistance",
            "Tailored advice for your coding journey",
            "Mentorship from industry professionals",
          ],
        },
        {
          title: "Q&A Sessions",
          description: "Participate in regular group discussions and learning events.",
          icon: "🎓",
          details: [
            "Weekly live Q&A sessions on various coding topics",
            "Opportunity to learn from peers' questions",
            "Expert-led discussions on industry trends",
          ],
        },
        {
          title: "Coding Challenges",
          description: "Sharpen your skills with regular coding exercises.",
          icon: "🏆",
          details: [
            "Daily and weekly coding challenges",
            "Compete with peers and track your progress",
            "Tackle real-world programming problems",
          ],
        },
        {
          title: "Project Collaboration",
          description: "Work on team projects to build your portfolio.",
          icon: "🤝",
          details: [
            "Join or initiate open-source projects",
            "Learn version control and collaboration tools",
            "Gain experience in agile development practices",
          ],
        },
        {
          title: "Tech Talks and Workshops",
          description: "Stay updated with the latest in tech through expert sessions.",
          icon: "🎤",
          details: [
            "Regular webinars on cutting-edge technologies",
            "Hands-on workshops for practical skills",
            "Guest lectures from industry leaders",
          ],
        },
        {
          title: "Career Support",
          description: "Get guidance on launching and advancing your tech career.",
          icon: "🚀",
          details: [
            "Resume and portfolio reviews",
            "Mock interviews and feedback sessions",
            "Job board and networking opportunities",
          ],
        },
      ];
      
  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % communityBenefits.length);
  };

  const prevStep = () => {
    setCurrentStep(
      (prev) => (prev - 1 + communityBenefits.length) % communityBenefits.length
    );
  };

  return (
    <>
    <div className=" py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            Succeed in{" "}
            <span className="underline decoration-red-500 decoration-4">
              your tech career
            </span>{" "}
            with our awesome community
          </h2>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentStep * 100}%)` }}
              >
                {communityBenefits.map((step, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-second rounded-lg p-6 shadow-md h-full">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl font-bold text-primary mr-4">
                          {index + 1}
                        </span>
                        <h3 className="text-2xl font-semibold flex items-center">
                          <span className="mr-3 text-3xl">{step.icon}</span>
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevStep}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-md"
              aria-label="Previous step"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextStep}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-md"
              aria-label="Next step"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center mt-4">
            {communityBenefits.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`h-2 w-2 rounded-full mx-1 ${currentStep === index ? "bg-primary" : "bg-gray-300"
                  }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}