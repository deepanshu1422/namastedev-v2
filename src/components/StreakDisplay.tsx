"use client"

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Flame } from 'lucide-react';
import { getStreak, updateStreak } from '../../actions/updateStreak';

interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: Date | null;
}

export function StreakDisplay() {
  const { data: session, status } = useSession();
  const [streakData, setStreakData] = useState<StreakData>({
    currentStreak: 0,
    longestStreak: 0,
    lastActivityDate: null
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchStreak = async () => {
      try {
        if (status === 'authenticated' && session?.user?.email) {
          await updateStreak();
          const data = await getStreak(session.user.email);
          if (isMounted) {
            setStreakData(data);
            setIsLoading(false);
          }
        }
      } catch (error) {
        console.error('Error fetching streak:', error);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if (status !== 'loading') {
      fetchStreak();
    }

    const interval = setInterval(fetchStreak, 60000);
    
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [status, session]);

  if (isLoading || status === 'loading' || !session?.user?.email) {
    return null;
  }

  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gradient-to-r from-emerald-900/90 to-emerald-800/90 hover:from-emerald-800/90 hover:to-emerald-700/90 transition-all duration-200 shadow-lg group">
      {/* Current Streak */}
      <div className="flex items-center gap-1.5" title="Current Streak">
        <Flame className="w-4 h-4 text-orange-400 group-hover:animate-bounce" />
        <div className="flex flex-col">
          <span className="text-white text-sm font-medium">
            {streakData.currentStreak}
            <span className="text-emerald-100/80 text-xs ml-1">
              {streakData.currentStreak !== 1 ? "days" : "day"}
            </span>
          </span>
          <span className="text-emerald-200/60 text-xs">Current</span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-8 w-px bg-emerald-700/50"></div>

      {/* Longest Streak */}
      <div className="flex items-center gap-1.5" title="Longest Streak">
        <Flame className="w-4 h-4 text-yellow-500" />
        <div className="flex flex-col">
          <span className="text-white text-sm font-medium">
            {streakData.longestStreak}
            <span className="text-emerald-100/80 text-xs ml-1">
              {streakData.longestStreak !== 1 ? "days" : "day"}
            </span>
          </span>
          <span className="text-emerald-200/60 text-xs">Best</span>
        </div>
      </div>
    </div>
  );
}