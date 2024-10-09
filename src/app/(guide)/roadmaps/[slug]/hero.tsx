"use client"

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = [
    { id: 'erUg9crXhFw', title: 'Complete Tech job roadmap for success' },
    { id: 'az_kulKlR5I', title: 'Build awesome unique full stack projects' },
    { id: 'wRUy5BiJzxw', title: 'MERN vs Next JS vs Spring Boot' },
    { id: '7bTktYsPGPU', title: 'How to master DSA for interviews' },
    { id: '6rzQKH2Y3QI', title: '25 DSA tips and tricks for interviews' }
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className="w-full bg-bg bg-grid-small-white/[0.2] relative flex items-center px-4 pt-14 pb-10 lg:py-10 lg:px-8 shadow-2xl border-b-2">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-bg [mask-image:radial-gradient(ellipse_at_left,transparent_20%,black)]"></div>

        
      <div className="flex flex-col lg:flex-row relative z-10 w-full max-w-7xl mx-auto gap-8">
        {/* New content: Back to All Roadmaps link */}
        <div className="flex-1">
          
      <div className="">
          <a href="/roadmaps" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to All Roadmaps
          </a>
        </div>
          <h1 className="font-bric text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-green-800 w-fit">
            {title}
          </h1>
          <div className="mt-4">
            <p className="max-w-xl max-sm:text-sm text-muted-foreground">
              {description}
            </p>
            
            {/* New content: Roadmap points */}
            <ul className="mt-4 space-y-2 max-w-xl max-sm:text-sm text-muted-foreground">
              <li>• Set clear goals and milestones for your coding journey</li>
              <li>• Break down complex topics into manageable daily tasks</li>
              <li>• Combine theory with hands-on coding practice</li>
              <li>• Stay consistent and code every day, even if it's just for 30 minutes</li>
              <li>• Join a community or find a coding buddy for support and accountability</li>
              <li>• Review and reflect on your progress regularly</li>
            </ul>
          </div>
        </div>
        {/* Video carousel section */}
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
          <div className="relative">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                loading="lazy"
                src={`https://www.youtube.com/embed/${videos[currentVideoIndex].id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              ></iframe>
            </div>
            <div className="flex justify-between mt-2">
              <button
                onClick={prevVideo}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <span className="p-2 text-lg font-bold">{videos[currentVideoIndex].title}</span>
              <button
                onClick={nextVideo}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
