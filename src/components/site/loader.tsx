import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export function Loader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("cota-loader-seen")) return;
    sessionStorage.setItem("cota-loader-seen", "1");
    setShow(true);
    const t = setTimeout(() => setShow(false), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.4 }}
          className="fixed inset-0 z-[200] grid place-items-center bg-background"
        >
          <span className="display text-6xl text-primary md:text-8xl">Cota Slice</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
