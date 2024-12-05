import { ChevronsDown } from "lucide-react";
import Script from "next/script";
import React, { useEffect } from "react";
import { sendGAEvent } from '@next/third-parties/google'

export default function WallOfLove() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const element = document.getElementById("hiddenElement");
      const scrollHeight = 1200; // Adjust scroll height as needed
      if (window.scrollY > scrollHeight) {
        element.classList.add("opacity-0");
        element.classList.remove("opacity-100");
      } else {
        element.classList.add("opacity-100");
        element.classList.remove("opacity-0");
      }
    });
  }, [])

  return (
    <>
      <div id="hiddenElement" onClick={() => {
        sendGAEvent('event', 'reviewClicked', { extID: localStorage.getItem("ext-ID") })
        const target = document.getElementById("wall-of-love-NRy4RMH");
        target.scrollIntoView({ behavior: "smooth" });
      }} className="fixed z-20 bottom-[4.5rem] sm:bottom-7 left-1/2 -translate-x-1/2 bg-footer/20 rounded-full p-1 backdrop-blur-sm transition-all duration-300 opacity-100 shadow-lg shadow-black">
        <button className="flex items-center rounded-full pr-3 p-1 bg-second/70 gap-2">
          <div className="bg-gradient-to-t from-prime/50 to-head/20 p-1 rounded-full">
            <ChevronsDown className="h-5 w-5" />
          </div>
          <span className="sm:text-lg font-semibold sm:font-bold">Reviews</span>
        </button>
      </div>
      <Script
        id="senja-script"
        type="text/javascript"
        src="https://widget.senja.io/js/iframeResizer.min.js"
      />
      <iframe
        id="wall-of-love-NRy4RMH"
        src="https://senja.io/p/30-days-coding/NRy4RMH?hideNavigation=true&embed=true"
        title="Wall of Love"
        frameBorder="0"
        scrolling="yes"
        width="100%"
        className="min-h-[500dvh] sm:min-h-[200dvh]"
      ></iframe>
      <Script
        id="senja-html"
        dangerouslySetInnerHTML={{
          __html: `document.addEventListener("DOMContentLoaded", function () {iFrameResize({log: false, checkOrigin: false}, "#wall-of-love-NRy4RMH");});`,
        }}
      />
    </>
  );
}
