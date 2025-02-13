"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle, Award, BookOpenText, Users, Clock, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Courses({
  coursesCollection,
}: {
  coursesCollection: {
    items: {
      title: string;
      slug: string;
      rating: number;
      courseImage: {
        url: string;
      };
    }[];
  };
}) {
  const filteredCourses = coursesCollection.items
    .filter(e => !["data-analytics-course", "ai-complete-course"].includes(e.slug));

  return (
    <section className="relative py-24 text-white overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 [background:linear-gradient(to_right,#0A1A1A,transparent_1px),linear-gradient(to_bottom,#0A1A1A,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,black_70%,transparent_110%)]">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-green-500/30 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]" style={{ transform: 'translateY(-50%)' }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-4 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 mr-2" />
              Premium Course Collection
            </Badge>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200 bg-clip-text text-transparent">
                Master Modern Tech Stack
              </span>
            </h2>
            
            <p className="text-xl text-emerald-100/80 max-w-3xl mx-auto">
              Comprehensive learning paths crafted by industry experts to accelerate your tech career journey
            </p>
          </motion.div>
          
          <div className="w-px h-20 bg-gradient-to-b from-emerald-500 to-transparent mx-auto" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCourses.map((course, index) => (
            <Course key={index} {...course} index={index} />
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Stat 
            icon={<Users className="w-6 h-6 text-emerald-400" />}
            title="21,000+"
            description="Active Students"
          />
          <Stat 
            icon={<Clock className="w-6 h-6 text-emerald-400" />}
            title="Lifetime"
            description="Course Access"
          />
          <Stat 
            icon={<Award className="w-6 h-6 text-emerald-400" />}
            title="Industry"
            description="Certification"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Course({
  title,
  slug,
  courseImage,
  rating,
  index
}: {
  title: string;
  slug: string;
  rating: number;
  courseImage: {
    url: string;
  };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <Card className="relative overflow-hidden border-emerald-500/20 hover:border-emerald-500/40 bg-gradient-to-br from-[#112121] to-[#0A1A1A] transition-all duration-500 rounded-2xl text-white h-full">
        <Link href={`/courses/${slug}`} className="block h-full">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={courseImage?.url ?? ""}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#112121] via-[#112121]/50 to-transparent" />
            <div className="absolute top-4 right-4">
              <Badge className="bg-emerald-500/10 backdrop-blur-md text-emerald-400 border-emerald-500/20">
                <Star className="mr-1 h-4 w-4 text-emerald-400" />
                {rating.toFixed(1)}
              </Badge>
            </div>
          </div>
          
          <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
            <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent mb-4 line-clamp-2 flex-grow">
              {title}
            </h3>
            <div className="flex items-center justify-between text-emerald-300/70 mt-auto">
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-emerald-400" />
                <span className="text-sm">8 weeks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpenText className="h-4 w-4 text-emerald-400" />
                <span className="text-sm">12 modules</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-emerald-400 text-sm font-medium">
              <span>View Course</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </Link>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Card>
    </motion.div>
  );
}

function Stat({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-gradient-to-br from-[#112121] to-[#0A1A1A] p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500">
        <div className="flex items-center gap-6">
          <div className="h-14 w-14 rounded-xl bg-emerald-500/10 flex items-center justify-center">
            {icon}
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              {title}
            </span>
            <span className="text-emerald-300/70 text-lg">
              {description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}