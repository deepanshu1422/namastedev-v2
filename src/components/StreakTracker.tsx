"use client"
import { useEffect, useRef, useState } from 'react';
import { updateStreak, getStreak } from '../../actions/updateStreak';
import { useSession } from 'next-auth/react';

export function StreakTracker() {
  const { data: session, status } = useSession();
  const [streakData, setStreakData] = useState({
    currentStreak: 0,
    longestStreak: 0,
    lastActivityDate: null
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const hasUpdatedRef = useRef(false);

  useEffect(() => {
    const fetchStreak = async () => {
      try {
        if (status === 'authenticated' && session?.user?.email) {
          const data = await getStreak(session.user.email);
          setStreakData(data);
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching streak:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (status !== 'loading') {
      fetchStreak();
    }
  }, [status, session]);

  useEffect(() => {
    let timeoutId;

    const handleInteraction = async () => {
      if (!session?.user?.email || hasUpdatedRef.current) return;

      try {
        setIsLoading(true);
        const updatedData = await updateStreak();
        setStreakData(updatedData);
        hasUpdatedRef.current = true;
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
        const timeUntilMidnight = tomorrow.getTime() - now.getTime();
        timeoutId = setTimeout(() => {
          hasUpdatedRef.current = false;
        }, timeUntilMidnight);

      } catch (err) {
        setError(err.message);
        console.error('Error updating streak:', err);
      } finally {
        setIsLoading(false);
      }
    };
    const debouncedHandler = debounce(handleInteraction, 1000);
    const events = ['click', 'scroll', 'keypress'];
    events.forEach(event => {
      document.addEventListener(event, debouncedHandler);
    });
    return () => {
      events.forEach(event => {
        document.removeEventListener(event, debouncedHandler);
      });
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [session]);

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  if (!session?.user?.email) {
    return null;
  }

}