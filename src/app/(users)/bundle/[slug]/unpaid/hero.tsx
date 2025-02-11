import { Button } from "@/components/ui/button";
import {
  Check,
  Star,
  Play,
  Users,
  TrendingUp,
  MessageCircle,
  BookOpen,
  Award,
  Clock,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Reviews } from "../checkout";

export default function ProfessionalHero({
  bundleId,
  title,
  image,
  rating,
  price,
  shortDescription,
  courseOffer,
  setYtOpen,
  setOpen,
  videoId,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div className="relative bg-gradient-to-br from-[#112121] via-[#0A1A1A] to-[#112121] text-white overflow-hidden">
        {/* Enhanced background patterns and animations */}
        <div className="absolute inset-0">
          {/* Main grid - larger squares */}
          <div 
            className="absolute inset-0 [background-size:50px_50px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] opacity-100"
            style={{
              maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 110%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 110%)'
            }}
          />
          
          {/* Secondary grid - smaller squares */}
          <div 
            className="absolute inset-0 [background-size:10px_10px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_0.5px,transparent_0.5px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_0.5px,transparent_0.5px)] opacity-100"
            style={{
              maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 110%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 110%)'
            }}
          />
          
          {/* Diagonal accent lines */}
          <div className="absolute inset-0 [background-image:repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_40px)] opacity-100" />
          
          {/* Glowing spots */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 via-emerald-500/20 to-transparent rounded-full blur-[120px]"></div>
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] animate-pulse delay-1000">
            <div className="absolute inset-0 bg-gradient-to-l from-green-500/30 via-emerald-500/20 to-transparent rounded-full blur-[120px]"></div>
          </div>
          
          {/* Moving particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-2 h-2 bg-green-500/40 rounded-full animate-float-1 top-1/4 left-1/4"></div>
            <div className="absolute w-2 h-2 bg-emerald-500/40 rounded-full animate-float-2 top-3/4 right-1/4"></div>
            <div className="absolute w-2 h-2 bg-green-500/40 rounded-full animate-float-3 top-1/2 left-1/2"></div>
          </div>
          
          {/* Radial fade overlay */}
          <div 
            className="absolute inset-0 bg-gradient-radial from-transparent via-[#0A1A1A]/50 to-[#0A1A1A] opacity-80"
          />

          {/* Additional grid overlay for extra visibility */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] opacity-100"></div>
        </div>

        {/* Add these styles to your globals.css or a style tag */}
        <style jsx>{`
          @keyframes float-1 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(100px, -100px); }
          }
          @keyframes float-2 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-100px, 100px); }
          }
          @keyframes float-3 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(50px, 50px); }
          }
        `}</style>

        <div className="relative max-w-7xl mx-auto px-4 py-16 flex flex-col items-center gap-12">
          {/* Header Section */}
          <div className="space-y-6 text-center max-w-3xl">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight animate-fade-in-up">
              {title}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-6 animate-fade-in-up delay-100">
              {shortDescription}
            </p>

            {/* Stats Cards */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6 animate-fade-in-up delay-200">
              <div className="flex items-center space-x-2 bg-[#1A1A1A] px-4 py-3 rounded-lg border border-gray-800 hover:bg-[#222222] transition-all">
                <Star className="text-yellow-500 fill-current" />
                <span className="font-semibold text-white">{rating}/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#1A1A1A] px-4 py-3 rounded-lg border border-gray-800 hover:bg-[#222222] transition-all">
                <Users className="text-green-400" />
                <span className="text-gray-300">21,580+ Learners</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#1A1A1A] px-4 py-3 rounded-lg border border-gray-800 hover:bg-[#222222] transition-all">
                <Award className="text-green-400" />
                <span className="text-gray-300">Certificate Included</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-4 mt-8 animate-fade-in-up delay-300">
              <div className="flex gap-4">
                <Button 
                  onClick={() => setOpen(true)}
                  className="bg-green-600  text-white font-bold py-3 px-6 rounded-lg shadow-lg  "
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Start Learning Now
                </Button>

                <Reviews>
                  <Button 
                    variant="outline"
                    className="relative group border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 active:scale-95"
                  >
                    <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                      New
                    </div>
                    <Star className="w-4 h-4 mr-2 fill-yellow-500" /> 
                    <span>See {rating}/5 Reviews</span>
                  </Button>
                </Reviews>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Limited time offer - Enroll now!</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div 
            className="relative group cursor-pointer animate-fade-in-up delay-400 w-full max-w-3xl mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setYtOpen(true)}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-800 bg-[#1A1A1A]">
              <Image
                src={image}
                alt={title}
                width={1200}
                height={800}
                className={`w-full h-auto object-cover transition-transform duration-300 ${
                  isHovered ? 'scale-105' : 'scale-100'
                }`}
              />
              <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full shadow-lg transform transition-transform hover:scale-110">
                  <Play className="w-12 h-12 text-green-500 fill-current" />
                </div>
              </div>
            </div>

            {/* Price Tag */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#1A1A1A] p-4 rounded-lg border border-gray-800 inline-flex items-center gap-4 animate-fade-in-up delay-300 hover:bg-[#222222] transition-all shadow-xl">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-green-400">
                  ₹999
                </span>
                <span className="line-through text-gray-500 text-lg">
                  ₹9990
                </span>
                <span className="bg-green-800 text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                  90% OFF
                </span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-16 w-full max-w-3xl animate-fade-in-up delay-500">
            <h3 className="text-2xl font-semibold mb-6 text-white text-center">
              What You'll Get:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {courseOffer.map((offer, index) => (
                <div key={index} className="flex items-center space-x-3 bg-[#1A1A1A] px-4 py-3 rounded-lg hover:bg-[#222222] transition-all border border-gray-800">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <Check className="text-green-400 w-5 h-5" />
                  </div>
                  <span className="text-gray-300">{offer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}