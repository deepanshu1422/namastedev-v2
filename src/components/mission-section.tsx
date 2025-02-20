"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Heart, Sparkles, Trophy, Target, Users, Rocket } from "lucide-react";

type MissionVariant = "default" | "home" | "course" | "bundle";

interface MissionSectionProps {
  variant?: MissionVariant;
}

const variants = {
  default: {
    title: "Why do we keep our courses affordable?",
    subtitle: "Because we believe every passionate Indian deserves a chance to learn and grow, regardless of their financial situation. Your dreams shouldn't have a price tag.",
    quote: "When you succeed, India succeeds. We're here to make that happen. ❤️",
    cards: [
      {
        icon: <Users className="w-6 h-6 text-emerald-400" />,
        title: "For Every Dreamer",
        description: "We've seen too many bright minds held back by expensive courses. That's why we made our education accessible to everyone who dreams of a better future."
      },
      {
        icon: <Rocket className="w-6 h-6 text-emerald-400" />,
        title: "Building India's Future",
        description: "Together, we can make India the world's tech powerhouse. Your success is our success, and we're investing in you to make this dream a reality."
      },
      {
        icon: <Target className="w-6 h-6 text-emerald-400" />,
        title: "Jobs That Matter",
        description: "Every course we create opens doors to high-paying tech jobs. We're not just teaching code - we're changing lives and families."
      },
      {
        icon: <Heart className="w-6 h-6 text-emerald-400" />,
        title: "From the Heart",
        description: "This isn't just business for us - it's personal. We measure our success by your growth, not our profits. Your journey is our mission."
      }
    ]
  },
  home: {
    title: "Join India's Tech Revolution",
    subtitle: "We're on a mission to empower every Indian who dreams of a career in tech. No one should miss out on learning because of high course fees.",
    quote: "Your success story starts here. Let's build something amazing together. 🚀",
    cards: [
      {
        icon: <Trophy className="w-6 h-6 text-emerald-400" />,
        title: "Quality for All",
        description: "World-class tech education shouldn't be a luxury. We're making sure every Indian can learn from the best, at a price they can afford."
      },
      {
        icon: <Sparkles className="w-6 h-6 text-emerald-400" />,
        title: "Dreams Without Limits",
        description: "Your potential shouldn't be limited by your wallet. We believe in you, and we're here to help you achieve your tech dreams."
      },
      {
        icon: <Users className="w-6 h-6 text-emerald-400" />,
        title: "Growing Together",
        description: "Join thousands of students who've transformed their lives through our courses. Your success adds to India's tech story."
      },
      {
        icon: <Heart className="w-6 h-6 text-emerald-400" />,
        title: "Impact First",
        description: "Every student who succeeds through our platform brings India closer to becoming a global tech leader. We're in this together."
      }
    ]
  },
  course: {
    title: "Education That Changes Lives",
    subtitle: "We keep our courses affordable because we believe in you. Your dedication to learning deserves our support, not high price barriers.",
    quote: "Your growth matters more than our profits. Let's build your future together. 💫",
    cards: [
      {
        icon: <Target className="w-6 h-6 text-emerald-400" />,
        title: "Focus on Learning",
        description: "Don't worry about the cost - focus on your dreams. We've made sure our courses are affordable so you can concentrate on what matters."
      },
      {
        icon: <Users className="w-6 h-6 text-emerald-400" />,
        title: "Family of Learners",
        description: "Join a community of dreamers and achievers who support each other. Your journey becomes easier when we grow together."
      },
      {
        icon: <Trophy className="w-6 h-6 text-emerald-400" />,
        title: "Real Results",
        description: "Our students work at top companies worldwide. Your success story could be next - we'll help you get there."
      },
      {
        icon: <Rocket className="w-6 h-6 text-emerald-400" />,
        title: "Start Today",
        description: "Don't let high prices hold you back. Begin your journey to a better career now - we've made it possible for everyone."
      }
    ]
  },
  bundle: {
    title: "Quality Education, Affordable Price",
    subtitle: "We believe everyone deserves a chance to learn and grow. That's why we've made our complete tech education accessible to all.",
    quote: "Your dreams are valid, and we're here to help you achieve them. 🌟",
    cards: [
      {
        icon: <Sparkles className="w-6 h-6 text-emerald-400" />,
        title: "Premium for All",
        description: "Get complete, industry-ready training at a price that works for you. Quality education shouldn't empty your savings."
      },
      {
        icon: <Target className="w-6 h-6 text-emerald-400" />,
        title: "Career Ready",
        description: "Everything you need to succeed in tech, bundled at an affordable price. Your career growth shouldn't be limited by course fees."
      },
      {
        icon: <Users className="w-6 h-6 text-emerald-400" />,
        title: "Everyone Welcome",
        description: "From students to working professionals - our affordable bundles ensure no one misses out on learning opportunities."
      },
      {
        icon: <Heart className="w-6 h-6 text-emerald-400" />,
        title: "Made with Love",
        description: "Our pricing reflects our commitment to your success. We believe in you, and we're invested in your growth."
      }
    ]
  }
};

export default function MissionSection({ variant = "default" }: MissionSectionProps) {
  const content = variants[variant];

  return (
    <div className="relative max-w-7xl mx-auto px-4 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
          <Star className="w-4 h-4 text-emerald-400" />
          <span className="text-emerald-300 text-sm font-medium">Our Mission</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold">
          <span className="relative">
            <span className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-green-500/20 blur-xl" />
            <span className="relative bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200 bg-clip-text text-transparent">
              {content.title}
            </span>
          </span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg text-emerald-100/80 leading-relaxed">
            {content.subtitle}
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {content.cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-emerald-500/5 p-6 rounded-xl border border-emerald-500/20 hover:bg-emerald-500/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  {card.icon}
                  <h3 className="text-xl font-semibold text-emerald-400">{card.title}</h3>
                </div>
                <p className="text-emerald-100/70">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="text-lg text-emerald-100/80 italic mt-6">
            {content.quote}
          </p>
        </div>

        <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent mx-auto" />
      </motion.div>
    </div>
  );
} 