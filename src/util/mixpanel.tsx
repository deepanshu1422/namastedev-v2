"use client";

import mixpanel from 'mixpanel-browser';
import Script from "next/script";

const MixpanelAnalytics = ({ projectToken }: { projectToken: string }) => {
  if (typeof window !== 'undefined') {
    mixpanel.init(projectToken, {
      debug: process.env.NODE_ENV === 'development',
      track_pageview: true,
      ignore_dnt: true
    });
  }

  return null;
};

export default MixpanelAnalytics; 