'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Cookies from 'js-cookie';

const COOKIE_NAME = 'codemasterUtmtest';
const COOKIE_EXPIRY = 30; // Days
const TRACKED_ROUTES = ['/home', '/advanced', '/intermediate', '/beginner','/'];

const useUtmTracker = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only process if we're on a tracked route
    if (!TRACKED_ROUTES.includes(pathname)) {
      return;
    }

    // Get the full query string without the '?' symbol
    const queryString = window.location.search.substring(1);
    
    if (queryString) {
      // Store the raw query string in cookie
      Cookies.set(COOKIE_NAME, queryString, { expires: COOKIE_EXPIRY });
    } else {
      // If no query param in URL but cookie exists, get from cookie
      const storedParam = Cookies.get(COOKIE_NAME);
      
      if (storedParam) {
        // Update URL with stored param without page reload
        const newUrl = `${window.location.pathname}?${storedParam}`;
        window.history.replaceState({}, '', newUrl);
      }
    }
  }, [pathname, searchParams]);

  // Get current parameter from either URL or cookie
  const getUtmParam = () => {
    const queryString = window.location.search.substring(1);
    if (queryString) return queryString;
    return Cookies.get(COOKIE_NAME) || '';
  };

  // Helper function to append param to a URL
  const appendUtmToUrl = (url: string) => {
    const param = getUtmParam();
    if (!param) return url;
    
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}utmpara=${param}`;
  };

  return {
    appendUtmToUrl,
    getUtmParam
  };
};

export default useUtmTracker; 