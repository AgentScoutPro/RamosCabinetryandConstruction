import Link from "next/link";
import { business, services, cityPages, reviews } from "@/lib/site-data";
import { TrustBar, CTABand, Eyebrow } from "@/components/Sections";
import VideoScrubScene from "@/components/VideoScrubScene";

const challenges = [
  {
    problem: "An outdated kitchen that doesn't work anymore",
    solution:
      "We redesign the layout around how you actually cook and store, not just swap doors on the same worn-out boxes.",
  },
  {
    problem: "Storage that never seems like enough",
    solution:
      "Custom cabinetry is built to your inventory: drawer depth, pantry width, and shelf spacing sized for what you actually own.",
  },
  {
    problem: "Finishes and materials that clash with the rest of the house",
    solution:
      "Every door style, stain, and profile is chosen to match your home's existing character, not pulled from a generic catalog.",
  },
  {
    problem: "Contractors who are hard to reach once the job starts",
    solution:
      "Chris is the person who measures, builds, and installs your project, so you're never chasing a rotating crew for answers.",
  },
  {
    problem: "Timelines that shift without warning",
    solution:
      "You get a realistic schedule at your free estimate, and updates straight from the person doing the work as the project moves.",
  },
];

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: business.name,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.reviewRating,
    reviewCount: business.reviewCount,
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewBody: r.text,
    reviewRating: { "@type": "Rating", ratingValue: "5" },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />

      <VideoScrubScene
        id="hero"
        videoSrc="/videos/hero-ramos.mp4"
        posterStart="/videos/hero-ramos-poster-start.jpg"
        posterFinal="/videos/hero-ramos-poster-final.jpg"
        posterAlt="Custom walnut river-table kitchen island with a blue epoxy inlay, built by Ramos Cabinetry & Construction"
        eyebrow="Family-Owned · Tempe, AZ · Est. Craftsmanship 15+ Years"
        heading="Cabinetry Built to Fit Your Home, Not the Other Way Around"
        sub="Custom cabinets, kitchen and bathroom remodeling, and fine finish carpentry, designed, built, and installed by Chris Ramos for homeowners across Tempe, Gilbert, Mesa, Chandler, Scottsdale, and Phoenix."
        showCta
        priority
        runwayDesktopVh={280}
        runwayMobileVh={180}
      />

      <VideoScrubScene
        id="process"
        videoSrc="/videos/ramos-build-wall.mp4"
        posterStart="/videos/ramos-build-wall-poster-start.jpg"
        posterFinal="/videos/ramos-build-wall-poster-final.jpg"
        posterAlt="Custom built-in wood shelving wall with potted greenery in an East Valley home"
        eyebrow="How It Gets Built"
        heading="From Framing to Finish, Every Detail Is Built by Hand"
        sub="No sales team, no subcontracted guesswork. The person measuring your space is the same person cutting, joining, and installing every piece."
        runwayDesktopVh={220}
        runwayMobileVh={160}
      />

      <TrustBar />

      {/* Services */}
      <section className="bg-paper-dim reveal-divider">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <Eyebrow>What We Build</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl mt-4">Services</h2>
            </div>
            <p className="text-charcoal/60 max-w-md">
              Custom cabinetry and remodeling work, built in-house from design to final install.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-paper hover:bg-paper-dim transition-colors p-8"
              >
                <h3 className="font-display text-xl group-hover:text-brass transition-colors">
                  {s.name}
                </h3>
                <p className="mt-3 text-charcoal/65 leading-relaxed text-sm">{s.heroSub}</p>
                <span className="inline-block mt-5 text-sm text-brass underline underline-offset-4">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges we solve */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24">
        <Eyebrow>Common Problems</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl mt-4 reveal-line max-w-2xl">
          Problems Homeowners Bring Us, and How We Solve Them
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 mt-14">
          {challenges.map((c) => (
            <div key={c.problem} className="border-t border-line pt-6">
              <h3 className="font-display text-xl">{c.problem}</h3>
              <p className="mt-3 text-charcoal/70 leading-relaxed">{c.solution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-paper-dim reveal-divider">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-24">
          <Eyebrow>Where We Work</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl mt-4">Serving the East Valley</h2>
          <p className="mt-4 text-charcoal/60 max-w-xl">
            Custom cabinetry and remodeling for homeowners throughout the Phoenix metro.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-line mt-10">
            {cityPages.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}-custom-cabinets`}
                className="bg-paper-dim hover:bg-paper transition-colors py-8 text-center group"
              >
                <span className="font-display text-lg group-hover:text-brass transition-colors">
                  {c.city}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <Eyebrow>Reviews</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl mt-4">
              {business.reviewRating} Stars · {business.reviewCount} Reviews
            </h2>
          </div>
          <Link
            href="/reviews"
            className="hidden sm:inline text-sm text-brass hover:text-charcoal underline underline-offset-4"
          >
            Read all reviews →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((r) => (
            <div key={r.name} className="border-t border-line pt-6">
              <div className="text-brass text-sm">★★★★★</div>
              <p className="mt-4 text-charcoal/75 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-5 text-sm text-charcoal/50">
                {r.name} · {r.city}
              </div>
            </div>
          ))}
        </div>
      </section>

      <TrustBar />

      <CTABand
        heading="Ready to Start Your Project?"
        sub="Call for a free, no-pressure estimate, or request one online and we'll follow up within one business day."
      />
    </>
  );
}
