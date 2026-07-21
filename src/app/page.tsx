import Image from "next/image";
import Link from "next/link";
import { business, services, cityPages, reviews, projects } from "@/lib/site-data";
import { TrustBar, CTABand, Eyebrow, FAQAccordion } from "@/components/Sections";
import CraftReveal from "@/components/CraftReveal";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-walnut overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-8 pt-24 pb-28 md:pt-32 md:pb-36 grid md:grid-cols-12 gap-10 items-end relative">
          <div className="md:col-span-8">
            <Eyebrow>
              <span className="text-brass-light">Family-Owned · Tempe, AZ · Est. Craftsmanship 15+ Years</span>
            </Eyebrow>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-cream mt-5 leading-[1.02] max-w-3xl">
              Cabinetry Built to Fit Your Home, Not the Other Way Around
            </h1>
            <p className="mt-6 text-cream/60 text-lg max-w-xl leading-relaxed">
              Custom cabinets, kitchen and bathroom remodeling, and fine finish carpentry —
              designed, built, and installed by Chris Ramos for homeowners across Tempe,
              Gilbert, Mesa, Chandler, Scottsdale, and Phoenix.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-brass text-walnut text-sm tracking-wide text-center hover:bg-brass-light transition-colors"
              >
                Request a Free Estimate
              </Link>
              <a
                href={business.phoneHref}
                className="px-8 py-3.5 border border-cream/30 text-cream text-sm tracking-wide text-center hover:border-brass hover:text-brass-light transition-colors"
              >
                Call {business.phone}
              </a>
            </div>
          </div>
          <div className="md:col-span-4 hidden md:block">
            <div className="relative aspect-[3/4] border border-line-dark overflow-hidden">
              <Image
                src={projects[0].image}
                alt={projects[0].alt}
                fill
                priority
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-walnut/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-brass-light text-xs tracking-[0.2em] uppercase">Featured Build</div>
                <div className="font-display text-cream text-xl mt-2">{projects[0].title}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Intro / value prop */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Eyebrow>Why Ramos</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl mt-4 leading-tight reveal-line">
            One Craftsman, One Standard, Every Project
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 text-charcoal/70 leading-relaxed text-lg">
          <p>
            Chris Ramos started Ramos Cabinetry &amp; Construction on a simple idea: cabinetry
            should be built for the room it lives in, not pulled off a warehouse shelf. Fifteen-plus
            years later, that same hands-on approach still runs every project — from a single
            custom vanity to a full kitchen remodel.
          </p>
          <p className="mt-4">
            No sales team, no subcontracted guesswork. You work directly with the person
            measuring, designing, and building your cabinetry, start to finish.
          </p>
        </div>
      </section>

      {/* Craft reveal — scroll-driven before/after, real project photos */}
      <CraftReveal
        beforeSrc={projects.find((p) => p.slug === "vanity-boxes-install")!.image}
        beforeAlt={projects.find((p) => p.slug === "vanity-boxes-install")!.alt}
        beforeLabel="Cabinet Boxes, Mid-Install"
        afterSrc={projects.find((p) => p.slug === "wet-bar-built-in")!.image}
        afterAlt={projects.find((p) => p.slug === "wet-bar-built-in")!.alt}
        afterLabel="Finished Built-In"
      />

      {/* Services — asymmetric, not a generic 3-col grid */}
      <section className="bg-paper-dim reveal-divider">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <Eyebrow>What We Build</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl mt-4">Services</h2>
            </div>
            <Link href="/services" className="text-sm text-brass hover:text-charcoal transition-colors underline underline-offset-4">
              View all services →
            </Link>
          </div>

          <div className="grid md:grid-cols-12 gap-px bg-line">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`group bg-paper-dim hover:bg-paper transition-colors p-8 flex flex-col justify-between min-h-[220px] ${
                  i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5" : "md:col-span-4"
                }`}
              >
                <div>
                  <span className="text-xs text-brass tracking-[0.14em] uppercase">{s.eyebrow}</span>
                  <h3 className="font-display text-2xl mt-3 group-hover:text-brass transition-colors">
                    {s.name}
                  </h3>
                </div>
                <span className="text-sm text-charcoal/50 mt-6">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured project / gallery teaser */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <Eyebrow>Recent Work</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl mt-4">Featured Projects</h2>
          </div>
          <Link href="/gallery" className="hidden sm:inline text-sm text-brass hover:text-charcoal underline underline-offset-4">
            View full gallery →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((p, i) => (
            <div key={p.slug} className={i === 0 ? "md:col-span-2 aspect-[16/10] relative" : "aspect-[4/5] relative"}>
              <div className="relative w-full h-full border border-line overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-walnut/85 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-display text-cream text-lg">{p.title}</div>
                  <div className="text-cream/60 text-sm mt-1">{p.tag}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href="/gallery" className="sm:hidden block text-center mt-8 text-sm text-brass underline underline-offset-4">
          View full gallery →
        </Link>
      </section>

      {/* Why homeowners choose Ramos */}
      <section className="bg-walnut">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-24">
          <Eyebrow>
            <span className="text-brass-light">Why Homeowners Choose Ramos</span>
          </Eyebrow>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 mt-10">
            {[
              {
                title: "Direct Communication",
                body: "You talk to Chris, not a rotating cast of project managers. Questions get answered by the person doing the work.",
              },
              {
                title: "Built In-House",
                body: "Cabinetry and finish carpentry are built and installed by us — not farmed out to the lowest-bid subcontractor.",
              },
              {
                title: "Licensed, Bonded & Insured",
                body: `Fully licensed under ${business.license}, with insurance in place to protect your home and your project.`,
              },
              {
                title: "15+ Years of Craftsmanship",
                body: "Over a decade and a half of hands-on carpentry experience, applied to every joint, drawer, and finish.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-line-dark pt-6">
                <h3 className="font-display text-xl text-cream">{item.title}</h3>
                <p className="mt-3 text-cream/55 leading-relaxed">{item.body}</p>
              </div>
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
          <Link href="/reviews" className="hidden sm:inline text-sm text-brass hover:text-charcoal underline underline-offset-4">
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
                <span className="font-display text-lg group-hover:text-brass transition-colors">{c.city}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 md:px-8 py-24">
        <Eyebrow>Common Questions</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl mt-4 mb-12">Frequently Asked Questions</h2>
        <FAQAccordion
          faqs={[
            {
              q: "Do you offer free estimates?",
              a: "Yes. Call 480-358-8607 or fill out our contact form and we'll schedule an in-home consultation at no cost.",
            },
            {
              q: "What areas do you serve?",
              a: "Tempe, Gilbert, Mesa, Chandler, Scottsdale, Phoenix, and the surrounding East Valley communities.",
            },
            {
              q: "Are you licensed, bonded, and insured?",
              a: `Yes — Ramos Cabinetry & Construction is licensed, bonded, and insured under ${business.license}.`,
            },
            {
              q: "Do you build custom and semi-custom cabinets?",
              a: "Both. We'll help you decide which fits your project, timeline, and budget best during your estimate.",
            },
            {
              q: "How do I get started?",
              a: "Call, email, or submit the estimate form on our contact page, and we'll set up a time to see your space.",
            },
          ]}
        />
      </section>

      <CTABand />
    </>
  );
}
