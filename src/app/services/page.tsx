import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site-data";
import { PageHero, CTABand, Eyebrow } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Services | Custom Cabinets, Remodeling & Finish Carpentry",
  description:
    "Custom cabinets, kitchen and bathroom remodeling, cabinet installation, finish carpentry, and home remodeling across the East Valley.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Build"
        title="Services"
        sub="Custom cabinetry and carpentry services for East Valley homeowners, built and installed in-house."
      />

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-px bg-line">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group bg-paper hover:bg-paper-dim transition-colors p-10"
            >
              <Eyebrow>{s.eyebrow}</Eyebrow>
              <h2 className="font-display text-3xl mt-3 group-hover:text-brass transition-colors">{s.name}</h2>
              <p className="mt-4 text-charcoal/65 leading-relaxed">{s.heroSub}</p>
              <span className="inline-block mt-6 text-sm text-brass underline underline-offset-4">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
