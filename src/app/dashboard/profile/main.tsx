"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookMarked,
  Notebook,
  Activity,
  GraduationCap,
  Star,
  Timer,
  Trophy,
  Target,
  Zap
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Dummy data
const userData = {
  name: "Alex Johnson",
  role: "Full Stack Developer",
  joinedDate: "January 2024",
  stats: {
    daysStreak: 15,
    completedLessons: 47,
    totalTime: "32h 15m",
    achievements: 8
  },
  courses: [
    {
      title: "MERN Stack",
      progress: 75,
      lastAccessed: "2 days ago",
      nextLesson: "Redux Integration"
    },
    {
      title: "DSA Mastery",
      progress: 45,
      lastAccessed: "1 day ago",
      nextLesson: "Graph Algorithms"
    }
  ],
  savedItems: [
    {
      title: "React Performance Optimization",
      type: "Example",
      savedAt: "3 days ago"
    },
    {
      title: "Node.js Authentication",
      type: "Tutorial",
      savedAt: "1 week ago"
    }
  ],
  notes: [
    {
      title: "useEffect Cleanup",
      content: "Remember to clean up event listeners...",
      createdAt: "2024-01-15"
    },
    {
      title: "MongoDB Indexing",
      content: "Best practices for indexing in production...",
      createdAt: "2024-01-10"
    }
  ],
  achievements: [
    {
      title: "30 Days Streak",
      description: "Coded for 30 days straight",
      progress: 50
    },
    {
      title: "Problem Solver",
      description: "Completed 50 DSA problems",
      progress: 75
    }
  ]
};

export default function Main() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-primary-foreground flex items-center justify-center text-2xl font-bold text-white">
            {userData.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{userData.name}</h1>
            <p className="text-muted-foreground">{userData.role}</p>
            <p className="text-sm">Member since {userData.joinedDate}</p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-4 flex items-center gap-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Timer className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Daily Streak</p>
            <p className="text-2xl font-bold">{userData.stats.daysStreak} days</p>
          </div>
        </Card>
        {/* Similar cards for other stats */}
      </div>

      {/* Course Progress */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {userData.courses.map((course) => (
          <Card key={course.title} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">{course.title}</h3>
                <p className="text-sm text-muted-foreground">Next: {course.nextLesson}</p>
              </div>
              <Button variant="outline" size="sm">Resume</Button>
            </div>
            <Progress value={course.progress} className="mb-2" />
            <p className="text-sm text-muted-foreground">
              Last accessed {course.lastAccessed}
            </p>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid md:grid-cols-[2fr_1fr] gap-6">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Recent Notes</h2>
          {userData.notes.map((note) => (
            <Card key={note.title} className="p-4">
              <h3 className="font-semibold mb-2">{note.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{note.content}</p>
              <p className="text-xs text-muted-foreground">{note.createdAt}</p>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Achievements</h2>
          {userData.achievements.map((achievement) => (
            <Card key={achievement.title} className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <h3 className="font-semibold">{achievement.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                {achievement.description}
              </p>
              <Progress value={achievement.progress} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 