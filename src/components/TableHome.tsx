"use client"
import React from "react";
import { Check, X, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ComparisonFeature {
  feature: string;
  others: string | boolean;
  airtribe: boolean;
}

export default function Comparison() {
  const features: ComparisonFeature[] = [
    { feature: "Structured Learning", others: true, airtribe: true },
    { feature: "Job Ready Preparation", others: "Offered by few", airtribe: true },
    { feature: "Hands-on Real-World Projects", others: "Offered by few", airtribe: true },
    { feature: "DSA module", others: "Offered by few", airtribe: true },
    { feature: "Interview Preparation", others: "Offered by few", airtribe: true },
    { feature: "AI content", others:false, airtribe: true },
  ];

  return (
    <section className="relative w-full py-8 md:py-12 lg:py-20 overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 [background:linear-gradient(to_right,#0A1A1A,transparent_1px),linear-gradient(to_bottom,#0A1A1A,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,black_70%,transparent_110%)]">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-green-500/30 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]" style={{ transform: 'translateY(-50%)' }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 md:space-y-8 mb-10 md:mb-16"
        >
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              Feature Comparison
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200 bg-clip-text text-transparent">
                What sets us apart
              </span>
            </h2>
          </div>

          <div className="w-px h-12 md:h-20 bg-gradient-to-b from-emerald-500 to-transparent mx-auto" />
        </motion.div>

        {/* Table Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative -mx-4 sm:mx-0"
        >
          {/* Glassmorphism Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#112121] to-[#0A1A1A] rounded-lg md:rounded-2xl border border-emerald-500/20 shadow-2xl" />

          {/* Table */}
          <div className="relative overflow-x-auto scrollbar-thin scrollbar-thumb-emerald-500/20 scrollbar-track-transparent rounded-lg md:rounded-2xl">
            <div className="w-full md:min-w-[768px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-emerald-500/20">
                    <th className="p-3 md:p-4 lg:p-6 text-sm md:text-base lg:text-lg font-medium text-emerald-100">Features</th>
                    <th className="p-3 md:p-4 lg:p-6 text-sm md:text-base lg:text-lg font-medium text-emerald-100 text-center">
                      <div className="flex flex-col items-center gap-1 md:gap-2">
                        <span>Other courses</span>
                        <span className="text-[9px] md:text-[10px] lg:text-xs font-normal text-emerald-400/50">Standard Learning</span>
                      </div>
                    </th>
                    <th className="p-3 md:p-4 lg:p-6 text-sm md:text-base lg:text-lg font-medium text-center rounded-tr-lg md:rounded-tr-xl lg:rounded-tr-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20">
                      <div className="flex flex-col items-center gap-1 md:gap-2">
                        <span className="text-emerald-300">Our Courses</span>
                        <span className="text-[9px] md:text-[10px] lg:text-xs font-normal text-emerald-400/80">Premium Experience</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((item, i) => (
                    <motion.tr
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      key={i}
                      className="border-b border-emerald-500/20 transition-colors hover:bg-emerald-500/5"
                    >
                      <td className="p-3 md:p-4 lg:p-6 text-xs sm:text-sm md:text-base text-emerald-100">{item.feature}</td>
                      <td className="p-3 md:p-4 lg:p-6 text-center">
                        {typeof item.others === "string" ? (
                          <span className="text-emerald-300/60 text-[10px] xs:text-xs md:text-sm bg-emerald-500/10 px-1.5 sm:px-2 md:px-3 py-0.5 md:py-1 rounded-full whitespace-nowrap">
                            {item.others}
                          </span>
                        ) : item.others ? (
                          <Check className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-emerald-400 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-red-400 mx-auto" />
                        )}
                      </td>
                      <td className={`p-3 md:p-4 lg:p-6 text-center ${i === features.length - 1 ? 'rounded-br-lg md:rounded-br-xl lg:rounded-br-2xl' : ''} bg-gradient-to-br from-emerald-500/20 to-green-500/20`}>
                        {item.airtribe ? (
                          <div className="flex items-center justify-center">
                            <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 text-emerald-400" />
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-red-400/20 flex items-center justify-center">
                              <X className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 text-red-400" />
                            </div>
                          </div>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Mobile scroll indicator */}
        <div className="mt-3 text-center block sm:hidden">
          <p className="text-emerald-400/60 text-[10px] animate-pulse">← Swipe horizontally to see more →</p>
        </div>
      </div>
    </section>
  );
}