'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
import { Play, Star, ChevronRight } from "lucide-react";

const mainVideoData = [
  { ytId: "-iUaW0RFnsY", title: "This course has completely transformed my understanding of programming. The hands-on projects and clear explanations." },
  { ytId: "lwbiCt32hk8", title: "GraphQL & Apollo Complete Guide" },
  { ytId: "PD-4lCg0m1Y", title: "Docker & Kubernetes Essentials" },
  { ytId: "Lf2IxMQYn3Q", title: "I had zero coding experience before starting this course, but now I feel confident building my own projects." },
  { ytId: "oSVlTXH0yU8", title: "The step-by-step guidance made learning to code a breeze. I especially loved the community support and mentorship."  },
  { ytId: "bVFUF-mpEIo", title: "This course helped me transition from a complete beginner to someone who can confidently write and understand code." },
  { ytId: "fp975mgrQjI", title: "Next.js 14 Advanced Concepts" },
  { ytId: "85gPxiJiWtc", title: "I've taken many online coding courses before, but none were as well-structured and engaging as this one." },
  { ytId: "zCDkAgWWvzw", title: "MERN Stack Project Course" },
  { ytId: "wpBfGNGKKg0", title: "Thanks to this program, I finally understand coding concepts that once seemed too complex." }
];

const carouselVideoData = [
  { ytId: "85gPxiJiWtc", title: "Complete Full Stack Development" },
  { ytId: "kq99NxArQss", title: "Complete System Design Course" },
  { ytId: "fUuuC0-BbhQ", title: "Complete DSA Course" },
  { ytId: "-iUaW0RFnsY", title: "Complete Interview Preparation" },
  { ytId: "KPcOMfIBBcY", title: "Master React Native Development" },
  { ytId: "lwbiCt32hk8", title: "GraphQL & Apollo Complete Guide" },
  { ytId: "PD-4lCg0m1Y", title: "Docker & Kubernetes Essentials" },
  { ytId: "fp975mgrQjI", title: "Next.js 14 Advanced Concepts" },
  { ytId: "zCDkAgWWvzw", title: "MERN Stack Project Course" },
  { ytId: "hvNitUGAtsI", title: "Advanced JavaScript Patterns" }
];

function VideoGrid() {
  const [activeVideo, setActiveVideo] = useState("");

  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse-slower" />
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {mainVideoData.map(({ ytId, title }, index) => (
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
                    className="relative w-full h-full cursor-pointer group/play"
                  >
                    <Image
                      src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/play:scale-105"
                      alt={title}
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
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function VideoCarousel() {
  const [activeVideo, setActiveVideo] = useState("");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-16">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(-45deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      {/* Enhanced Carousel Header */}
      <div className="relative text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
            <Play className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">Success Stories</span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-green-500/20 blur-xl" />
              <span className="relative bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200 bg-clip-text text-transparent">
                Explore More Success Stories
              </span>
            </span>
          </h3>

          <p className="text-lg text-emerald-100/80 max-w-2xl mx-auto">
          Watch inspiring stories from our successful students
          </p>

          <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent mx-auto" />
        </motion.div>
      </div>

      {/* Enhanced Carousel */}
      <div className="relative">
        {/* Side Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A1F1C] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A1F1C] to-transparent z-10" />

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
            {carouselVideoData.map(({ ytId, title }, index) => (
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
                              src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`}
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
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 h-12 w-12 bg-emerald-500/10 border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/40 z-20" />
          <CarouselNext className="-right-4 h-12 w-12 bg-emerald-500/10 border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/40 z-20" />
        </Carousel>

        {/* Course Count Badge */}
       
      </div>
    </div>
  );
}

export default function VideoGallery() {
  return (
    <div className="relative w-full py-20 overflow-hidden bg-[#0A1F1C]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Section Header */}
      <div className="relative max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
            <Star className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">Student Reviews</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-green-500/20 blur-xl" />
              <span className="relative bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200 bg-clip-text text-transparent">
                What Our Students Say
              </span>
            </span>
          </h2>

          <p className="text-lg text-emerald-100/80 max-w-2xl mx-auto">
            Hear directly from our students about their learning journey and success stories. Real experiences, real transformations.
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
           
            <span className="text-emerald-300 font-medium">4.9/5 Average Rating</span>
          </div>

          <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent mx-auto" />
        </motion.div>
      </div>

      <VideoGrid />
      <VideoCarousel />
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