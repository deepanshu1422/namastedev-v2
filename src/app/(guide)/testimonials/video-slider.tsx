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
import { Play } from "lucide-react";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
      {testimonials.map(({ id, name, company, text, profilePic, thumbnail }, index) => (
        <div key={index} className="flex flex-col gap-6 bg-second/30 p-4 rounded-lg">
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
                className="relative w-full h-full cursor-pointer group"
              >
                <Image
                  src={thumbnail}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  alt={`${company} Testimonial`}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full transform group-hover:scale-110 transition-all">
                    <Play className="w-12 h-12 fill-white" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-white/10">
                <Image
                  src={profilePic}
                  fill
                  className="object-cover"
                  alt={name}
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-xl">{name}</h3>
                <p className="text-sm text-white/70">{company}</p>
              </div>
            </div>
            <blockquote className="text-base text-white/80 italic">"{text}"</blockquote>
          </div>
        </div>
      ))}
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
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-center">More Student Stories</h2>
          <p className="text-white/70 text-center">Watch more success stories from our students</p>
        </div>
        
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
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
                <Card className="overflow-hidden bg-second/30 border-prime/20 hover:border-prime/40 transition-colors">
                  <CardContent className="p-0">
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
                          className="group cursor-pointer w-full h-full"
                        >
                          <Image
                            src={`https://i3.ytimg.com/vi/${ytId}/maxresdefault.jpg`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            alt={title}
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full transform group-hover:scale-110 transition-all">
                              <Play className="w-8 h-8 fill-white" />
                            </div>
                          </div>
                          
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-prime transition-colors">
                        {title}
                      </h3>
                      <p className="text-xs text-white/60">{views}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 h-12 w-12" />
          <CarouselNext className="-right-4 h-12 w-12" />
        </Carousel>
      </div>
    </div>
  );
}

export default function VideoSlider() {
  return (
    <div className="w-full p-2">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
      <span className="flex items-center justify-center gap-4 relative">
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-r from-0% from-transparent to-100% to-prime" />
        <h2 className="font-jakarta phone:shrink-0 text-[2rem] font-extrabold text-center">
          Hear it from our students!
        </h2>
        <hr className="max-phone:hidden h-0.5 max-lg:w-20 w-60 max-w-60 rounded bg-gradient-to-l from-0% from-transparent to-100% to-prime" />
      </span>
      <p className="max-w-2xl text-center mx-auto text-sm text-white/70 px-10 line-clamp-2 text-balance">
        The love we get from our students can&apos;t go unnoticeable and
        unforgottable, here are some featured once.
      </p>

      </div>
      <VideoCarousel />
      <NewVideoCarousel />
    </div>
  );
}
