import { motion } from "motion/react";

type Item = { name: string; price: string; note?: string };
type Category = { title: string; items: Item[] };

const MENU: Category[] = [
  {
    title: "Sparkling",
    items: [
      { name: "Honey Lime", price: "15K", note: "honey · lime · milk fermented" },
      { name: "Yuzu Moon", price: "18K", note: "yuzu pure · peach · berry" },
      { name: "Leco Tropica", price: "18K", note: "lychee · lemon · coconut water" },
      { name: "Berry Flower", price: "20K", note: "forest berry · lemon · honey · rose" },
    ],
  },
  {
    title: "Cota Milk",
    items: [
      { name: "Ice Cold", price: "13K" },
      { name: "Flurry Oreo", price: "16K" },
      { name: "Chocolate", price: "15K" },
      { name: "Matcha", price: "16K" },
      { name: "Berries", price: "15K" },
    ],
  },
  {
    title: "Oat M*lk",
    items: [
      { name: "Chocoside", price: "18K" },
      { name: "Matcha M*lk", price: "18K" },
      { name: "Oatside Mango", price: "19K" },
    ],
  },
  {
    title: "Pizza",
    items: [
      {
        name: "Beefumo",
        price: "38K",
        note: "beef · mozzarella · dry basil · fresh basil · cota sauce with olive oil",
      },
      {
        name: "Peppe Delight",
        price: "38K",
        note: "pepperoni · fresh basil · dry basil · tomato sauce with olive oil",
      },
      {
        name: "Cota Bufala",
        price: "35K",
        note: "bufallo cheese · parmesan cheese · fresh basil · tomato sauce with olive oil",
      },
      { name: "Packaging", price: "+2K" },
    ],
  },
  {
    title: "Pasta",
    items: [
      {
        name: "Fettucini Bolognesia",
        price: "20K",
        note: "smoke beef · basil · tomato sauce",
      },
      {
        name: "Fettucini Carboneira",
        price: "22K",
        note: "smoke beef · mushroom · basil · parmesan cheese cream sauce",
      },
    ],
  },
  {
    title: "Cotato Friet",
    items: [
      { name: "Reguler", price: "18K" },
      { name: "Large", price: "20K" },
    ],
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <h2 className="display text-[18vw] leading-[0.8] text-foreground md:text-[10vw]">
        The Menu
      </h2>
      <p className="mt-4 max-w-md text-sm text-muted-foreground">
        Satu ukuran pizza, loyang penuh, delapan slice. Semua harga sudah termasuk pajak.
      </p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {MENU.map((cat) => {
          const hero = cat.title === "Pizza" || cat.title === "Pasta";
          return (
            <motion.article
              key={cat.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`relative overflow-hidden rounded-[24px] bg-cream p-7 text-ink shadow-[0_1px_0_rgba(0,0,0,0.06)] hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)] ${
                hero ? "min-h-[320px]" : "min-h-[260px]"
              }`}
            >
              {cat.title === "Pizza" && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-4 -bottom-10 text-[180px] leading-none opacity-[0.04] select-none"
                >
                  🍕
                </span>
              )}
              <h3 className="display relative text-4xl text-primary">{cat.title}</h3>
              <ul className="relative mt-5 space-y-4">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className="flex flex-wrap items-center gap-2 text-[18px] leading-tight font-bold">
                        {item.name}
                        {item.name === "Beefumo" && (
                          <span className="rounded-full bg-ink px-2 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-cream">
                            Most Popular
                          </span>
                        )}
                      </p>
                      {item.note && (
                        <p className="mt-1 text-xs italic text-muted-foreground">{item.note}</p>
                      )}
                    </div>
                    <span className="font-mono text-sm tabular-nums text-primary">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
