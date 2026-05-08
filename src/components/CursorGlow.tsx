"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const springX = useSpring(x, { stiffness: 200, damping: 30, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 200, damping: 30, mass: 0.5 });

  useEffect(() => {
    const isFinePointer =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: springX, y: springY }}
        className="pointer-events-none fixed left-0 top-0 z-[60] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 mix-blend-screen blur-3xl"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),rgba(59,130,246,0.18)_40%,transparent_70%)]" />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: springX, y: springY }}
        className="pointer-events-none fixed left-0 top-0 z-[61] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 mix-blend-difference"
      />
    </>
  );
}
