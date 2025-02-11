"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle, Award, BookOpenText, Users, Clock, Sparkles } from "lucide-react";

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
    <section className="flex flex-col gap-6 relative  text-white">
      <div className="absolute inset-0 bg-gradient-radial from-gray-800/5 to-transparent -z-10" />
      <div className="absolute top-10 right-10 w-20 h-20 bg-gray-700/10 rounded-full blur-3xl" />
      
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-gray-700/20 text-white border-gray-600/20 px-3 py-1">
            <Sparkles className="w-4 h-4 mr-1" />
            Premium Courses
          </Badge>
        </div>
        <h2 className="font-bold text-2xl tab:text-3xl text-white">
          Master Modern Tech Stack
        </h2>
        <p className="text-base text-pretty text-gray-300 max-w-2xl">
          Comprehensive learning paths crafted by industry experts to accelerate your tech career journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCourses.map(({ courseImage, slug, title, rating }, index) => (
          <Course
            key={index}
            rating={rating ?? 0}
            title={title}
            courseImage={courseImage}
            slug={slug}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
        <div className="flex items-center gap-3 p-5 rounded-xl border border-gray-700/20 hover:border-gray-600/40 transition-colors">
          <div className="h-12 w-12 rounded-lg  flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-white">21,000+</span>
            <span className="text-sm text-gray-400">Active Students</span>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-gray-800/30 p-5 rounded-xl border border-gray-700/20 hover:border-gray-600/40 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-gray-700/10 flex items-center justify-center">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-white">Lifetime</span>
            <span className="text-sm text-gray-400">Course Access</span>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-gray-800/30 p-5 rounded-xl border border-gray-700/20 hover:border-gray-600/40 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-gray-700/10 flex items-center justify-center">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-white">Industry</span>
            <span className="text-sm text-gray-400">Certification</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Course({
  title,
  slug,
  courseImage,
  rating,
}: {
  title: string;
  slug: string;
  rating: number;
  courseImage: {
    url: string;
  };
}) {
  return (
    <Card className="group relative overflow-hidden border border-gray-700 bg-[#0d1d1d] hover:shadow-xl transition-shadow duration-300 rounded-xl text-white">
      <Link href={`/courses/${slug}`} className="block">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={courseImage?.url ?? ""}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-4 right-4">
            <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20">
              <Star className="mr-1 h-4 w-4 fill-yellow-400 stroke-yellow-400" />
              {rating.toFixed(1)}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-white mb-4 group-hover:text-gray-300 transition-colors line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center justify-between text-gray-400">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-white" />
              <span className="text-sm">8 weeks</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpenText className="h-4 w-4 text-white" />
              <span className="text-sm">12 modules</span>
            </div>
          </div>
        </CardContent>
      </Link>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/40 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
    </Card>
  );
}