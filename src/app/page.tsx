'use client';

import React from "react";
import Hero from "@/components/Hero";
import BundleNavbar from "@/components/BundleNavbar";
import CourseSection from "@/components/CourseSection";
import VideoGallery from "@/components/VideoGallery";
import FAQ from "@/components/FAQ";
import Footer from "@/components/new-cohort/footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import Mentors from "@/components/mentors";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import Image from "next/image";
import TableHome from "@/components/TableHome";
import HomeCurriculum from "@/components/HomeCurriculum";
import useUtmTracker from '@/hooks/use-utm-tracker';



const HomePage = () => {
  // Add UTM tracker
  useUtmTracker();
  
  

  return (
    <>
      <BundleNavbar />
      <main className="min-h-screen">
        <div>
          <Hero />
          <HomeCurriculum />
          <CourseSection />
          <TableHome />
          <WhyChooseUs />
          <Mentors />
          
          {/* Certificate Section */}
          <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid tab:grid-cols-2 gap-8 p-8 shadow-xl rounded-2xl border-prime/20 border bg-second/30 backdrop-blur-sm">
              <div className="m-auto flex flex-col gap-4 max-tab:text-center">
                <Badge variant="outline" className="w-fit bg-prime/10 text-prime border-prime/20 px-3 py-1">
                  <Award className="w-4 h-4 mr-1" />
                  Professional Certificate
                </Badge>
                <h3 className="font-bold text-2xl md:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Boost Your Resume with Industry Recognition 🎖️
                </h3>
                <p className="text-base text-foreground/70">
                  Stand out in the job market with our professionally accredited certification. Join thousands of successful graduates who have transformed their careers.
                </p>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-prime/50 to-prime/30 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-200" />
                <Image
                  src={"/certificate.jpg"}
                  alt={"30DC Project Preview"}
                  height={600}
                  width={900}
                  className="relative rounded-xl aspect-video w-full shadow-2xl object-cover group-hover:scale-[1.01] transition duration-200"
                />
              </div>
            </div>
          </section>

          <VideoGallery />
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage; 