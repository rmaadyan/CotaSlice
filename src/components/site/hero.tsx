import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import pizzaHero from "@/assets/pizza-hero.jpg";

const TICKER =
  "Open 24 Jam · Pizza · Pasta · Sparkling · Oat M*lk · Cotato Friet · Malang · Cota Slice · ";

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: { y: reduce ? 0 : "110%" },
    animate: { y: 0 },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" className="relative min-h-svh overflow-hidden pt-24">
      <div className="mx-auto flex min-h-svh max-w-[1400px] flex-col justify-center px-5 pb-24 md:px-10">
        <div className="relative">
          <h1 className="display text-foreground">
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
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={
              reduce
                ? { opacity: 1, scale: 1, rotate: -5 }
                : { opacity: 1, scale: 1, rotate: -5, y: [0, -12, 0] }
            }
            transition={{
              opacity: { duration: 0.8, delay: 0.5 },
              scale: { duration: 0.8, delay: 0.5 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.3 },
            }}
            className="pointer-events-none absolute -top-[6vw] right-0 w-[46vw] max-w-[520px] md:top-[2vw] md:right-[4vw] md:w-[34vw]"
          />
        </div>

        <div className="mt-10 flex items-end justify-between gap-6">
          <p className="text-xs uppercase tracking-[0.45em] text-primary md:text-sm">
            Pizza. Malang. 24 Jam.
          </p>
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
    <div className="flex overflow-hidden border-y border-primary bg-primary py-3 select-none">
      <div className="marquee-track flex shrink-0 whitespace-nowrap">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="display px-2 text-3xl text-primary-foreground md:text-5xl"
            aria-hidden={i === 1}
          >
            {TICKER.repeat(3)}
          </span>
        ))}
      </div>
    </div>
  );
}
