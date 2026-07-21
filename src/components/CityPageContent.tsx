import Link from "next/link";
import { services, business, cityPages } from "@/lib/site-data";
import { PageHero, CTABand, Eyebrow, TrustBar } from "@/components/Sections";

export default function CityPageContent({ citySlug }: { citySlug: string }) {
  const city = cityPages.find((c) => c.slug === citySlug)!;
  const otherCities = cityPages.filter((c) => c.slug !== citySlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: business.name,
    telephone: business.phone,
    areaServed: { "@type": "City", name: city.city },
    description: city.intro,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow={`Serving ${city.city}, AZ`}
        title={`Custom Cabinets & Remodeling in ${city.city}, AZ`}
        sub={`Custom cabinetry, kitchen and bathroom remodeling, and finish carpentry for homeowners throughout ${city.city}.`}
      />
      <TrustBar />

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <Eyebrow>Local to {city.city}</Eyebrow>
          <h2 className="font-display text-3xl mt-4 reveal-line">
            Cabinetry Built for {city.city} Homes
          </h2>
          <p className="mt-8 text-charcoal/70 leading-relaxed text-lg">{city.intro}</p>
          <p className="mt-5 text-charcoal/70 leading-relaxed text-lg">{city.localNote}</p>

          <div className="mt-10">
            <div className="text-xs tracking-[0.14em] uppercase text-brass">Neighborhoods We Serve</div>
            <p className="mt-3 text-charcoal/65 leading-relaxed">{city.neighborhoods}</p>
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <div className="bg-paper-dim border border-line p-8 sticky top-28">
            <Eyebrow>Get a Free Estimate</Eyebrow>
            <p className="mt-4 text-sm text-charcoal/70 leading-relaxed">
              Serving {city.city} and the surrounding East Valley. Call or request an
              estimate online and we&apos;ll follow up within one business day.
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
          </div>
        </div>
      </section>

      <section className="bg-paper-dim reveal-divider">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-24">
          <Eyebrow>Services in {city.city}</Eyebrow>
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

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24">
        <Eyebrow>Nearby Service Areas</Eyebrow>
        <h2 className="font-display text-3xl mt-4 mb-10">Also Serving</h2>
        <div className="flex flex-wrap gap-3">
          {otherCities.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}-custom-cabinets`}
              className="px-5 py-2.5 border border-line hover:border-brass hover:text-brass transition-colors text-sm"
            >
              {c.city}, AZ
            </Link>
          ))}
        </div>
      </section>

      <CTABand
        heading={`Ready to Start Your ${city.city} Project?`}
        sub="Call for a free estimate, or request one online and we'll follow up within one business day."
      />
    </>
  );
}
