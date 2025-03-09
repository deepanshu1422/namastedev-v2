"use client";

// Facebook Pixel tracking has been replaced with GTM-based tracking
// This component redirects to GTM tracking to prevent import errors

import { useEffect } from 'react';
import { trackEvent } from './gtm-verification';

export default function Pixel() {
  useEffect(() => {
    // Track page view through GTM
    trackEvent('page_view', {
      url: window.location.pathname,
      source: 'pixel_component'
    });
  }, []);

  return null;
} 