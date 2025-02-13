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
    { feature: "Personalised Mentorship", others: "Offered by few", airtribe: true },
    { feature: "Job Assistance", others: "Offered by few", airtribe: true },
    { feature: "Hands-on Real-World Projects", others: "Offered by few", airtribe: true },
    { feature: "Exclusive Sessions with CXOs", others: false, airtribe: true },
    { feature: "Mock Interviews", others: false, airtribe: true },
    { feature: "System Design Module", others: false, airtribe: true },
    { feature: "DSA module", others: "Offered by few", airtribe: true },
    { feature: "Soft-Skill Coaching", others: false, airtribe: true },
    { feature: "Exclusive Community", others: false, airtribe: true },
    { feature: "Interview Preparation", others: "Offered by few", airtribe: true },
  ];

  return (
    <section className="relative w-full py-12 md:py-20 overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 [background:linear-gradient(to_right,#0A1A1A,transparent_1px),linear-gradient(to_bottom,#0A1A1A,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,black_70%,transparent_110%)]">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-green-500/30 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]" style={{ transform: 'translateY(-50%)' }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8 mb-16"
        >
          <div className="flex flex-col items-center gap-4">
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-4 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 mr-2" />
              Feature Comparison
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200 bg-clip-text text-transparent">
                What sets us apart
              </span>
            </h2>
          </div>
          
          <div className="w-px h-20 bg-gradient-to-b from-emerald-500 to-transparent mx-auto" />
        </motion.div>

        {/* Table Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative -mx-4 sm:mx-0"
        >
          {/* Glassmorphism Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#112121] to-[#0A1A1A] rounded-2xl border border-emerald-500/20 shadow-2xl" />
          
          {/* Table */}
          <div className="relative overflow-x-auto scrollbar-thin scrollbar-thumb-emerald-500/20 scrollbar-track-transparent">
            <div className="min-w-[768px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-emerald-500/20">
                    <th className="p-4 md:p-6 text-base md:text-lg font-medium text-emerald-100">Features</th>
                    <th className="p-4 md:p-6 text-base md:text-lg font-medium text-emerald-100 text-center">
                      <div className="flex flex-col items-center gap-1 md:gap-2">
                        <span>Other live courses</span>
                        <span className="text-[10px] md:text-xs font-normal text-emerald-400/50">Standard Learning</span>
                      </div>
                    </th>
                    <th className="p-4 md:p-6 text-base md:text-lg font-medium text-center rounded-tr-xl md:rounded-tr-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20">
                      <div className="flex flex-col items-center gap-1 md:gap-2">
                        <span className="text-emerald-300">Our Courses</span>
                        <span className="text-[10px] md:text-xs font-normal text-emerald-400/80">Premium Experience</span>
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
                      <td className="p-4 md:p-6 text-sm md:text-base text-emerald-100">{item.feature}</td>
                      <td className="p-4 md:p-6 text-center">
                        {typeof item.others === "string" ? (
                          <span className="text-emerald-300/60 text-xs md:text-sm bg-emerald-500/10 px-2 md:px-3 py-1 rounded-full whitespace-nowrap">
                            {item.others}
                          </span>
                        ) : item.others ? (
                          <Check className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 md:w-6 md:h-6 text-red-400 mx-auto" />
                        )}
                      </td>
                      <td className={`p-4 md:p-6 text-center ${i === features.length - 1 ? 'rounded-br-xl md:rounded-br-2xl' : ''} bg-gradient-to-br from-emerald-500/20 to-green-500/20`}>
                        {item.airtribe ? (
                          <div className="flex items-center justify-center">
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-emerald-400" />
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-400/20 flex items-center justify-center">
                              <X className="w-3 h-3 md:w-4 md:h-4 text-red-400" />
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
        <div className="mt-4 text-center block md:hidden">
          <p className="text-emerald-400/50 text-xs">Scroll horizontally to see more →</p>
        </div>
      </div>
    </section>
  );
} 