"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  width,
  overflow = "unset",
}: {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  overflow?: "hidden" | "unset";
}) {
  // const ref = useRef(null);
  // const isInView = useInView(ref, {
  //   once: true,
  // });

  // const animationControls = useAnimation();

  // useEffect(() => {
  //   if (isInView) {
  //     animationControls.start("visible");
  //   }
  // }, [isInView]);

  return (
    <div style={{ position: "relative", width, overflow }}>
      {/* <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animationControls}
        transition={{ duration: 0.5 }}
      > */}
      {children}
      {/* </motion.div> */}
    </div>
  );
}
