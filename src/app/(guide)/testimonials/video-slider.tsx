"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useState } from "react";
import { Play, Star, Quote, ChevronRight, Users } from "lucide-react";
import { motion } from "framer-motion";

function VideoCarousel() {
  const testimonials = [
    {
      id: "XSbsuxLfQuk",
      name: "30 Days Coding",
      company: "Awesome Homes",
      text: "The 30 Days Coding course has completely transformed my understanding of programming. The hands-on projects and clear explanations made learning easy and enjoyable.",
      profilePic: "/thumbs/t9.jpg",
      thumbnail: "/thumbs/t9.jpg"
    },
    {
      id: "DBHnTU8Glxk",
      name: "30 Days Coding",
      company: "Front Range HVAC",
      text: "I had zero coding experience before starting this course, but now I feel confident building my own projects. The structured lessons and real-world applications were exactly what I needed.",
      profilePic: "/thumbs/t8.jpg",
      thumbnail: "/thumbs/t8.jpg"
    },
    {
      id: "_0byRr0WgZg",
      name: "30 Days Coding",
      company: "Walls By Design",
      text: "The step-by-step guidance in this course made learning to code a breeze. I especially loved the community support and mentorship throughout the journey.",
      profilePic: "/thumbs/t6.jpg",
      thumbnail: "/thumbs/t6.jpg"
    },
    {
      id: "G-q_thBCKL8",
      name: "30 Days Coding",
      company: "Walls By Design",
      text: "This course helped me transition from a complete beginner to someone who can confidently write and understand code. The projects really solidified my learning.",
      profilePic: "/thumbs/t5.jpg",
      thumbnail: "/thumbs/t5.jpg"
    },
    {
      id: "bAVgLo6jxzA",
      name: "30 Days Coding",
      company: "Walls By Design",
      text: "I've taken many online coding courses before, but none were as well-structured and engaging as this one. 30 Days Coding exceeded my expectations.",
      profilePic: "/thumbs/t4.jpg",
      thumbnail: "/thumbs/t4.jpg"
    },
    {
        id: "oi5mWIP1rt0",
        name: "30 Days Coding",
        company: "Walls By Design",
        text: "Thanks to 30 Days Coding, I finally understand coding concepts that once seemed too complex. The practical exercises made all the difference.",
        profilePic: "/thumbs/t3.jpg",
        thumbnail: "/thumbs/t3.jpg"
    },
    {
      id: "9sSe0RQrzpM",
      name: "30 Days Coding",
      company: "Walls By Design",
      text: "If you're looking for a beginner-friendly coding course that actually teaches you how to build projects, this is the one! Highly recommended.",
      profilePic: "/thumbs/t2.jpg",
      thumbnail: "/thumbs/t2.jpg"
    },
    {
      id: "p3J3KlJbls0",
      name: "30 Days Coding",
      company: "Walls By Design",
      text: "I never thought I could learn coding in just 30 days, but this course proved me wrong! The interactive lessons and challenges kept me motivated.",
      profilePic: "/thumbs/t1.jpg",
      thumbnail: "/thumbs/t1.jpg"
    },
    {
      id: "v2ICShDxcaY",
      name: "30 Days Coding",
      company: "Walls By Design",
      text: "Enrolling in 30 Days Coding was the best decision I've made. The course structure, mentorship, and community support made learning an incredible experience.",
      profilePic: "/thumbs/t0.jpg",
      thumbnail: "/thumbs/t0.jpg"
    }
  ];

  const [activeVideo, setActiveVideo] = useState("");

  return (
    <div className="relative">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse-slower" />
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {testimonials.map(({ id, name, company, text, profilePic, thumbnail }, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex flex-col gap-6 bg-[#112121] p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                {activeVideo === id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div 
                    onClick={() => setActiveVideo(id)}
                    className="relative w-full h-full cursor-pointer group/play"
                  >
                    <Image
                      src={thumbnail}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/play:scale-105"
                      alt={`${company} Testimonial`}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover/play:bg-black/30 transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative p-4 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 transform group-hover/play:scale-110 transition-all duration-300">
                        <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-md animate-pulse" />
                        <Play className="relative w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur-md opacity-40" />
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-500/20">
                      <Image
                        src={profilePic}
                        fill
                        className="object-cover"
                        alt={name}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-xl bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                      {name}
                    </h3>
                    <p className="text-sm text-emerald-300/70">{company}</p>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-emerald-500/20" />
                  <blockquote className="text-base text-emerald-100/80 italic pl-6">
                    {text}
                  </blockquote>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function NewVideoCarousel() {
  const testimonialVideos = [
    { 
      ytId: "zA_jXlo_3YE",
      title: "30 Days Coding",
      views: "Featured Testimonial",
    },
    { ytId: "F2OsMQ7nz3k", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "HQG9ZCSTtr0", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "6lP2w6MLYXk", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "iHWCA-qckII", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "YJKnBut4qYg", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "wSlRs8EQubI", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "X8iGoKglP2c", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "KhwbMajuuKY", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "U8bf4-tsw9k", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "5rU6ZfXs9YY", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "nnEaMT93mTU", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "c_RbgqTQVIk", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "67pe9efDWic", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "soVJa7l9SRA", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "85_B4czAZrY", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "mWSZmMidGFM", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "aSP4X_lP0EM", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "um0L6w0FFZg", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "FbySzm0Igk8", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "QEIRTiQCD3c", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "hcxQFmavLOg", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "pHZhfQrJcQg", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "eeoDuEdOqpQ", title: "30 Days Coding", views: "Featured Testimonial",},
    { ytId: "Zv7PRNFUmuA", title: "30 Days Coding", views: "Featured Testimonial",},
  ];
  
  const [activeVideo, setActiveVideo] = useState("");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(-45deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative flex flex-col gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4 text-center"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm mx-auto">
            <Star className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">More Success Stories</span>
          </div>
          
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200 bg-clip-text text-transparent">
            Student Testimonials
          </h2>
          <p className="text-emerald-100/80 max-w-2xl mx-auto">
            Watch inspiring stories from our successful students
          </p>
        </motion.div>
        
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnFocusIn: true,
              stopOnMouseEnter: true,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonialVideos.map(({ ytId, title, views }, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="group relative overflow-hidden bg-[#112121] border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardContent className="relative p-0">
                      <div className="relative aspect-video overflow-hidden">
                        {activeVideo === ytId ? (
                          <iframe
                            src={`https://www.youtube.com/embed/${ytId}?autoplay=1`}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <div 
                            onClick={() => setActiveVideo(ytId)}
                            className="group/play cursor-pointer w-full h-full"
                          >
                            <Image
                              src={`https://i3.ytimg.com/vi/${ytId}/maxresdefault.jpg`}
                              fill
                              className="object-cover transition-transform duration-500 group-hover/play:scale-105"
                              alt={title}
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover/play:bg-black/30 transition-colors">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="relative p-3 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 transform group-hover/play:scale-110 transition-all duration-300">
                                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-md animate-pulse" />
                                <Play className="relative w-6 h-6 text-white fill-white" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="relative p-4">
                        <h3 className="font-medium text-sm line-clamp-2 mb-1 text-emerald-100 group-hover:text-emerald-300 transition-colors">
                          {title}
                        </h3>
                        <p className="text-xs text-emerald-300/60">{views}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 h-12 w-12 bg-emerald-500/10 border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/40" />
          <CarouselNext className="-right-4 h-12 w-12 bg-emerald-500/10 border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/40" />
        </Carousel>
      </div>
    </div>
  );
}

export default function VideoSlider() {
  return (
    <div className="relative w-full py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
            <Users className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">Student Success Stories</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-green-500/20 blur-xl" />
              <span className="relative bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200 bg-clip-text text-transparent">
                Hear it from our students!
              </span>
            </span>
          </h2>

          <p className="text-lg text-emerald-100/80 max-w-2xl mx-auto">
            The love we get from our students can't go unnoticed. Here are some of their inspiring stories.
          </p>

          <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent mx-auto" />
        </motion.div>
      </div>

      <VideoCarousel />
      <NewVideoCarousel />
    </div>
  );
}

// Add animations
const style = `
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.2); }
  }
  @keyframes pulse-slower {
    0%, 100% { opacity: 0.2; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.3); }
  }
  .animate-pulse-slow {
    animation: pulse-slow 8s ease-in-out infinite;
  }
  .animate-pulse-slower {
    animation: pulse-slower 12s ease-in-out infinite;
  }
`;

// Add the style tag to the document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = style;
  document.head.appendChild(styleElement);
}
