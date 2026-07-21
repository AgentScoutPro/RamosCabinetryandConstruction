import Link from "next/link";
import { services, business, neighborhoodPages } from "@/lib/site-data";
import { PageHero, CTABand, Eyebrow, TrustBar, FAQAccordion } from "@/components/Sections";

export default function NeighborhoodPageContent({ slug }: { slug: string }) {
  const n = neighborhoodPages.find((x) => x.slug === slug)!;
  const otherNeighborhoods = neighborhoodPages.filter((x) => x.slug !== slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: business.name,
    telephone: business.phone,
    areaServed: { "@type": "Place", name: `${n.name}, ${n.cityName}, AZ` },
    description: n.intro,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow={`${n.cityName}, AZ — ${n.angle}`}
        title={`Custom Cabinets & Remodeling in ${n.name}`}
        sub={`Cabinetry and finish carpentry built for ${n.name}'s ${n.angle.toLowerCase()} — not generic builder-grade replacements.`}
      />
      <TrustBar />

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <Eyebrow>Local to {n.name}</Eyebrow>
          <h2 className="font-display text-3xl mt-4 reveal-line">
            Built for {n.name}&apos;s Homes
          </h2>
          <p className="mt-8 text-charcoal/70 leading-relaxed text-lg">{n.intro}</p>
          <p className="mt-5 text-charcoal/70 leading-relaxed text-lg">{n.localNote}</p>

          <div className="mt-14">
            <Eyebrow>What We Focus On in {n.name}</Eyebrow>
            <ul className="mt-6 space-y-4">
              {n.focusAreas.map((f) => (
                <li key={f} className="flex gap-3 border-t border-line pt-4 text-charcoal/75">
                  <span className="text-brass shrink-0">—</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <div className="bg-paper-dim border border-line p-8 sticky top-28">
            <Eyebrow>Get a Free Estimate</Eyebrow>
            <p className="mt-4 text-sm text-charcoal/70 leading-relaxed">
              Serving {n.name} and all of {n.cityName}. Call or request an estimate online
              and we&apos;ll follow up within one business day.
            </p>
            <Link
              href="/contact"
              className="mt-6 block text-center px-6 py-3.5 bg-walnut text-cream text-sm tracking-wide hover:bg-brass hover:text-walnut transition-colors"
            >
              Request a Free Estimate
            </Link>
            <a
              href={business.phoneHref}
              className="mt-3 block text-center text-sm text-charcoal/70 hover:text-brass transition-colors"
            >
              Or call {business.phone}
            </a>
            <Link
              href={`/${n.citySlug}-custom-cabinets`}
              className="mt-4 block text-center text-sm text-brass underline underline-offset-4"
            >
              View all of {n.cityName} →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper-dim reveal-divider">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-24">
          <Eyebrow>Services in {n.name}</Eyebrow>
          <h2 className="font-display text-3xl mt-4 mb-10">What We Build</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-line">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-paper hover:bg-paper-dim transition-colors p-7"
              >
                <h3 className="font-display text-lg group-hover:text-brass transition-colors">{s.name}</h3>
                <span className="inline-block mt-4 text-sm text-brass underline underline-offset-4">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 md:px-8 py-24">
        <Eyebrow>Common Questions</Eyebrow>
        <h2 className="font-display text-3xl mt-4 mb-12">FAQ — {n.name}</h2>
        <FAQAccordion
          faqs={[
            {
              q: `Do you work in ${n.name} specifically?`,
              a: `Yes — ${n.name} is one of our regular service areas within ${n.cityName}, and we're familiar with the neighborhood's ${n.angle.toLowerCase()}.`,
            },
            {
              q: "Do you offer free estimates?",
              a: "Yes. Call 480-358-8607 or request one online and we'll schedule an in-home consultation.",
            },
            {
              q: "Are you licensed, bonded, and insured?",
              a: `Yes — ${business.license}, fully licensed, bonded, and insured.`,
            },
          ]}
        />
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-24">
        <Eyebrow>Other {n.cityName} Neighborhoods</Eyebrow>
        <h2 className="font-display text-3xl mt-4 mb-10">Also Serving</h2>
        <div className="flex flex-wrap gap-3">
          {otherNeighborhoods.map((o) => (
            <Link
              key={o.slug}
              href={`/${o.citySlug}-custom-cabinets/${o.slug}`}
              className="px-5 py-2.5 border border-line hover:border-brass hover:text-brass transition-colors text-sm"
            >
              {o.name}
            </Link>
          ))}
          <Link
            href={`/${n.citySlug}-custom-cabinets`}
            className="px-5 py-2.5 border border-line hover:border-brass hover:text-brass transition-colors text-sm"
          >
            All of {n.cityName} →
          </Link>
        </div>
      </section>

      <CTABand
        heading={`Ready to Start Your ${n.name} Project?`}
        sub="Call for a free estimate, or request one online and we'll follow up within one business day."
      />
    </>
  );
}
