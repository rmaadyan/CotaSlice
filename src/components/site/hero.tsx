import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import pizzaHero from "@/assets/pizza-hero.jpg";

const TICKER =
  "Open 24 Jam · Pizza · Pasta · Sparkling · Oat M*lk · Cotato Friet · Malang · Cota Slice · ";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const rise = (delay: number) => ({
    initial: { y: reduce ? 0 : "110%" },
    animate: { y: 0 },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section ref={ref} id="top" className="relative min-h-svh overflow-hidden pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-full md:w-3/5"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(0,0,0,0.85), rgba(0,0,0,0) 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute top-20 right-5 z-20 flex items-center gap-2 rounded-full bg-cream px-4 py-2 md:top-24 md:right-10"
      >
        <motion.span
          className="size-2 rounded-full bg-[oklch(0.72_0.19_150)]"
          animate={reduce ? { opacity: 1 } : { opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
          Open 24 Jam
        </span>
      </motion.div>

      <div className="relative mx-auto flex min-h-svh max-w-[1400px] flex-col justify-center px-5 pb-24 md:px-10">
        <div className="relative">
          <h1 className="display relative z-10 text-foreground">
            <span className="block overflow-hidden">
              <motion.span className="block text-[26vw] md:text-[22vw]" {...rise(0.2)}>
                Cota
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block pl-[8vw] text-[26vw] text-primary md:text-[22vw]"
                {...rise(0.35)}
              >
                Slice
              </motion.span>
            </span>
          </h1>

          <motion.img
            src={pizzaHero}
            alt="Pizza tipis Cota Slice dengan pepperoni dan basil"
            width={1200}
            height={1200}
            style={{
              y: reduce ? 0 : parallaxY,
              filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.6))",
            }}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: -5 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pointer-events-none absolute -top-[6vw] right-0 w-[46vw] max-w-[520px] md:top-[2vw] md:right-[4vw] md:w-[34vw]"
          />
        </div>

        <div className="relative z-10 mt-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-primary md:text-sm">
              Pizza. Malang. 24 Jam.
            </p>
            <div className="mt-4 h-[2px] w-40 bg-primary md:w-64" aria-hidden />
          </div>
          <motion.div
            animate={reduce ? { y: 0 } : { y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary"
            aria-hidden
          >
            <ArrowDown />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Ticker() {
  return (
    <div className="flex overflow-hidden border-y border-ink bg-primary py-3 select-none">
      <div className="marquee-track flex shrink-0 whitespace-nowrap">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="display px-2 text-xl text-primary-foreground"
            aria-hidden={i === 1}
          >
            {TICKER.repeat(3)}
          </span>
        ))}
      </div>
    </div>
  );
}
