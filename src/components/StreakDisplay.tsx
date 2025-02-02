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
    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-900/80 hover:bg-emerald-800/90 transition-colors duration-200">
      <Flame className="w-3.5 h-3.5 text-orange-400" />
      <span className="text-white text-sm font-medium">
        streak {streakData.currentStreak}
        <span className="text-emerald-100/80 text-xs ml-1">
          {streakData.currentStreak !== 1 ? "days" : "day"}
        </span>
      </span>
    </div>
  );
}