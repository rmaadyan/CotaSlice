import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/nav";
import { Hero, Ticker } from "@/components/site/hero";
import { MenuSection } from "@/components/site/menu-section";
import { About, Reviews, Contact, Footer } from "@/components/site/sections";
import { useLenis } from "@/hooks/use-lenis";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Cota Slice | Pizza Malang 24 Jam" },
      {
        name: "description",
        content:
          "Cota Slice buka 24 jam di jantung Kota Malang. Pizza tipis satu ukuran, loyang penuh, delapan slice, harga masuk akal.",
      },
      { property: "og:title", content: "Cota Slice | Pizza Malang 24 Jam" },
      {
        property: "og:description",
        content:
          "Pizza tipis, loyang penuh, delapan slice. Buka 24 jam di Jl. Brigjend Slamet Riadi No.19a, Malang.",
      },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Cota Slice",
          servesCuisine: "Pizza",
          telephone: "+6282226593355",
          url: "https://cotaslice.id",
          openingHours: "Mo-Su 00:00-23:59",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Brigjend Slamet Riadi No.19a",
            addressLocality: "Malang",
            addressCountry: "ID",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            reviewCount: "2416",
          },
        }),
      },
    ],
  }),
});

function Index() {
  useLenis();

  return (
    <div className="bg-background">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <MenuSection />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
