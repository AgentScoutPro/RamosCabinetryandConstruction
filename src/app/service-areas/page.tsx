import type { Metadata } from "next";
import Link from "next/link";
import { cityPages } from "@/lib/site-data";
import { PageHero, CTABand, Eyebrow } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Service Areas | East Valley, AZ",
  description:
    "Ramos Cabinetry & Construction serves Tempe, Gilbert, Mesa, Chandler, Scottsdale, and Phoenix with custom cabinetry and remodeling.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Where We Work"
        title="Serving the East Valley"
        sub="Custom cabinetry, remodeling, and finish carpentry for homeowners across the Phoenix metro."
      />

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-px bg-line">
          {cityPages.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}-custom-cabinets`}
              className="group bg-paper hover:bg-paper-dim transition-colors p-10"
            >
              <Eyebrow>Service Area</Eyebrow>
              <h2 className="font-display text-3xl mt-3 group-hover:text-brass transition-colors">{c.city}, AZ</h2>
              <p className="mt-4 text-charcoal/65 leading-relaxed">{c.intro}</p>
              <span className="inline-block mt-6 text-sm text-brass underline underline-offset-4">
                View {c.city} services →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
