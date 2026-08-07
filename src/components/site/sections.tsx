import { motion } from "motion/react";
import aboutImg from "@/assets/pizza-about.jpg";

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
} as const;

const STATS = [
  ["4.7★", "Google Rating"],
  ["2.416", "Ulasan"],
  ["24 Jam", "Selalu Buka"],
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <img
            src={aboutImg}
            alt="Interior Cota Slice di malam hari dengan cermin besar dan meja stainless"
            width={1008}
            height={1200}
            loading="lazy"
            className="w-full object-cover"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-primary opacity-[0.08]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="mb-6 block h-[60px] w-[3px] bg-primary" aria-hidden />
          <h2 className="display text-6xl text-foreground md:text-[5.5vw]">
            Pizza Tipis.
            <br />
            Harga Masuk Akal.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Cota Slice buka 24 jam di jantung Kota Malang. Satu ukuran pizza. Loyang penuh.
            Delapan slice. Tempat kecil, suasana cozy, dan cermin besar buat foto. Karena
            pizza ini terlalu bagus untuk disimpan sendiri.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-primary px-5 py-2 font-mono text-sm text-primary-foreground">
              4.7 ★ · 2.416 ulasan
            </span>
            <span className="text-sm text-muted-foreground">
              Jl. Brigjend Slamet Riadi No.19a, Malang
            </span>
          </div>

          <dl className="mt-8 flex divide-x divide-border border-t border-border pt-6">
            {STATS.map(([value, label]) => (
              <div key={label} className="flex-1 px-4 first:pl-0">
                <dt className="display text-3xl text-foreground md:text-4xl">{value}</dt>
                <dd className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    name: "Nindy Aristi",
    text: "Harga 38ribuan, kualitas premium. Tempat minimalis, aesthetic, ada full mirror buat selfie.",
  },
  {
    name: "Afrashani Sha",
    text: "Pizza tipis ukuran loyang 40-50cm, dapat 8 slices. Harga bersaing banget di 35-38K.",
  },
  {
    name: "Ratna Sari Loebis",
    text: "ONE SIZE pizza tapi gede banget. Porsi yang bikin takjub. Next mau coba pastanya!",
  },
  {
    name: "Uni S",
    text: "Bakal balik lagi JELAS. Harga dan rasa sesuai. Bisa dine in, bisa take out.",
  },
];

const initials = (n: string) =>
  n
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("");

export function Reviews() {
  return (
    <section id="reviews" className="overflow-hidden bg-cream py-24 text-ink md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="relative">
          <span
            aria-hidden
            className="display pointer-events-none absolute -top-[6vw] left-0 text-[20vw] leading-none opacity-[0.04] select-none"
          >
            Reviews
          </span>
          <h2 className="display relative text-[16vw] leading-[0.8] md:text-[8vw]">
            Kata Mereka
          </h2>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
              transition={{ duration: 0.2 }}
              className={`border-l-4 border-primary bg-white p-6 ${
                i % 2 === 1 ? "lg:translate-y-5" : ""
              }`}
            >
              <div className="font-mono text-xs text-primary">★★★★★</div>
              <blockquote className="mt-4 text-sm leading-relaxed">{r.text}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-primary font-mono text-xs text-primary-foreground">
                  {initials(r.name)}
                </span>
                <span className="text-sm font-bold">{r.name}</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <motion.h2 {...reveal} className="display text-[15vw] leading-[0.8] text-foreground md:text-[8vw]">
        Yaudah,
        <br />
        Kesini Aja.
      </motion.h2>

      <motion.div {...reveal} className="mt-10 h-[2px] w-full bg-primary" aria-hidden />

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <motion.dl {...reveal} className="grid gap-6 font-mono text-sm sm:grid-cols-2">
          {[
            ["Alamat", "Jl. Brigjend Slamet Riadi No.19a, Malang"],
            ["Telepon", "0822-2659-3355"],
            ["Web", "cotaslice.id"],
            ["Jam Buka", "Open 24 Jam"],
          ].map(([k, v]) => (
            <div key={k} className="border-t border-border pt-4">
              <dt className="text-xs uppercase tracking-[0.2em] text-primary">{k}</dt>
              <dd className="mt-2 text-foreground">{v}</dd>
            </div>
          ))}
        </motion.dl>

        <motion.div {...reveal} className="flex flex-col gap-4 md:items-end">
          <motion.a
            href="https://wa.me/c/6282226593355"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="display border border-primary px-10 py-4 text-center text-xl tracking-[0.2em] text-primary transition-colors duration-[250ms] hover:bg-primary hover:text-primary-foreground"
          >
            Lihat Menu WhatsApp
          </motion.a>
          <motion.a
            href="https://cotaslice.id"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="display border border-primary px-10 py-4 text-center text-xl tracking-[0.2em] text-primary transition-colors duration-[250ms] hover:bg-primary hover:text-primary-foreground"
          >
            Kunjungi Website
          </motion.a>
        </motion.div>
      </div>

    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary py-5">
      <p className="display mx-auto max-w-[1400px] px-5 text-2xl text-primary-foreground md:px-10 md:text-3xl">
        Cota Slice © 2025 · Malang · Open 24 Jam
      </p>
    </footer>
  );
}
