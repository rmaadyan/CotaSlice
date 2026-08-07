import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

export function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 28 });
  const ringY = useSpring(y, { stiffness: 300, damping: 28 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden>
      <motion.div
        style={{ x, y }}
        className="absolute -ml-[6px] -mt-[6px] size-3 rounded-full bg-primary"
      />
      <motion.div
        style={{ x: reduce ? x : ringX, y: reduce ? y : ringY }}
        className="absolute -ml-[14px] -mt-[14px] size-7 rounded-full border border-primary opacity-40"
      />
    </div>
  );
}
