import { Button } from "@/components/ui/button";
import { Check, Star, Users, BookOpen, Award, Clock, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { Reviews } from "../checkout";
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";

// Lazy load the curriculum component
const CourseCurriculum = dynamic(() => import("./curriculum"), {
  loading: () => null,
  ssr: false
});

export default function ProfessionalHero({
  bundleId,
  title,
  image,
  rating,
  price,
  shortDescription,
  courseOffer,
  setOpen,
  videoId,
}) {
  const [isPlaying] = useState(true);
  const [seatsLeft, setSeatsLeft] = useState(30);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Only keep the seats decrease effect
  useEffect(() => {
    const randomDecrease = setInterval(() => {
      setSeatsLeft(prev => Math.max(1, prev - Math.floor(Math.random() * 2)));
    }, 120000);

    return () => clearInterval(randomDecrease);
  }, []);

  return (
    <>
      <div className="relative min-h-screen bg-[#0A1A1A] text-white overflow-hidden">
        {/* Background with reduced complexity */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 [background:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]"
            style={{
              maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 110%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 110%)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-emerald-500/10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
         

          {/* Title Section - No animation */}
          <div className="text-center  max-w-3xl mx-auto mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200 bg-clip-text text-transparent">
                Master Modern Tech Stack
              </span>
              <br />
              <span className="text-white/90">Become Industry Ready</span>
            </h1>

            <p className="text-xl text-emerald-100/80 max-w-3xl mx-auto leading-relaxed">
              {shortDescription}
            </p>
          </div>

          {/* Video Section with lazy loading */}
          <div className="relative max-w-3xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 mix-blend-overlay" />
              <div className="relative pb-[56.25%] h-0">
                <Suspense fallback={
                  <div className="absolute inset-0 flex items-center justify-center bg-emerald-500/10">
                    <div className="text-emerald-400">Loading...</div>
                  </div>
                }>
                  <iframe
                    src={`https://www.youtube.com/embed/hOcTPtZYTto?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&playsinline=1`}
                    className="absolute top-0 left-0 w-full h-full"
                    allowFullScreen
                    loading="lazy"
                    onLoad={() => setIsVideoLoaded(true)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </Suspense>
              </div>
            </div>
          </div>

          {/* Price Section */}
          <div className="flex flex-col items-center gap-3 mt-8 mb-12">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                ₹999
              </span>
              <span className="text-lg text-emerald-100/60 line-through">₹4999</span>
              <span className="text-sm px-2 py-1 bg-emerald-500/10 rounded-md text-emerald-400 font-medium border border-emerald-500/20">
                80% OFF
              </span>
            </div>
            <div className="flex items-center gap-2 text-emerald-300/80">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm font-medium">Limited Time Offer - Save ₹4000 Today!</span>
            </div>
          </div>

          {/* Stats Section - No animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <StatCard icon={<Users className="w-6 h-6" />} value="21,580+" label="Active Students" />
            <StatCard icon={<Clock className="w-6 h-6" />} value="Lifetime" label="Course Access" />
            <StatCard icon={<Award className="w-6 h-6" />} value="Industry" label="Certification" />
          </div>

          {/* CTA Section with seats notification */}
          <div className="flex flex-col items-center gap-6 mt-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setOpen(true)}
                size="lg"
                className="group relative px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 rounded-xl"
              >
                <span className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span>Enroll Now at ₹999</span>
                  
                </div>
              </Button>

              <Button 
                variant="outline"
                size="lg"
                className="group relative px-8 py-3 border-emerald-500/20 hover:border-emerald-500/40 rounded-xl"
              >
                <Reviews>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span>See Reviews</span>
                  </div>
                </Reviews>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lazy load curriculum */}
      <Suspense fallback={null}>
        <CourseCurriculum />
      </Suspense>

      {/* Add Sticky Price Bar */}
      <StickyPriceBar price={999} originalPrice={4999} setOpen={setOpen} />
    </>
  );
}

// StatCard component without animations
function StatCard({ icon, value, label }) {
  return (
    <div className="relative flex items-center gap-4 p-6 bg-emerald-500/10 rounded-xl border border-emerald-500/20 backdrop-blur-sm hover:bg-emerald-500/20 transition-colors">
      <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
          {value}
        </div>
        <div className="text-emerald-300/80">
          {label}
        </div>
      </div>
    </div>
  );
}

// Sticky Price Bar Component
function StickyPriceBar({ price, originalPrice, setOpen }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0A1A1A]/80 border-t border-emerald-500/20 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                ₹{price}
              </span>
              <span className="text-base text-emerald-100/60 line-through">₹{originalPrice}</span>
              <span className="text-xs px-2 py-1 bg-emerald-500/10 rounded-md text-emerald-400 font-medium border border-emerald-500/20">
                80% OFF
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-emerald-300/80">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm font-medium">Limited Time Offer</span>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            size="lg"
            className="group relative px-6 py-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 rounded-xl"
          >
            <span className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center">
              <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span>Enroll Now</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}