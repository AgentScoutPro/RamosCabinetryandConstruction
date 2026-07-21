import type { Metadata } from "next";
import { business } from "@/lib/site-data";
import { PageHero, CTABand, Eyebrow, TrustBar } from "@/components/Sections";

export const metadata: Metadata = {
  title: "About Chris Ramos | Family-Owned Cabinetry & Construction",
  description:
    "Meet Chris Ramos — 15+ years of hands-on carpentry experience, building custom cabinetry and remodeling projects across Tempe and the East Valley.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Family-Owned. Hands-On. Built Around Craft."
        sub="Ramos Cabinetry & Construction was built on the idea that the person designing your project should be the same person building it."
      />
      <TrustBar />

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="aspect-[3/4] bg-gradient-to-b from-[#4a3624] to-[#241a13] border border-line flex items-end p-6">
            <div>
              <div className="text-brass-light text-xs tracking-[0.2em] uppercase">Owner &amp; Lead Craftsman</div>
              <div className="font-display text-cream text-xl mt-2">Chris Ramos</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <Eyebrow>The Ramos Story</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl mt-4 reveal-line">
            Fifteen-Plus Years of Getting the Joinery Right
          </h2>
          <div className="mt-8 space-y-5 text-charcoal/70 leading-relaxed text-lg">
            <p>
              Chris Ramos founded C Ramos Cabinetry &amp; Construction on a straightforward
              belief: cabinetry should be built for the exact room it lives in — measured,
              designed, and finished by hand, not pulled from a warehouse catalog.
            </p>
            <p>
              After more than fifteen years of hands-on carpentry work across the East Valley,
              that philosophy hasn&apos;t changed. Every project, whether it&apos;s a single custom
              vanity or a full kitchen remodel, gets the same level of attention: careful
              measuring, honest recommendations, and finish work that&apos;s built to last.
            </p>
            <p>
              Ramos Cabinetry &amp; Construction is family-owned and stays intentionally
              hands-on. Chris is directly involved in design and build on every job — not
              managing from a distance, and not handing your project off to a rotating crew.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-dim reveal-divider">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-24">
          <Eyebrow>Craftsmanship Philosophy</Eyebrow>
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            {[
              {
                title: "Measure Twice",
                body: "Every project starts with an in-home consultation and careful measurement — no guesswork, no generic sizing.",
              },
              {
                title: "Build to Last",
                body: "Solid materials, quality construction, and finish work meant to hold up to daily life for years, not seasons.",
              },
              {
                title: "Communicate Directly",
                body: "You'll always know where your project stands, straight from the person doing the work.",
              },
            ].map((v) => (
              <div key={v.title} className="border-t border-line pt-6">
                <h3 className="font-display text-xl">{v.title}</h3>
                <p className="mt-3 text-charcoal/65 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 md:px-8 py-24 text-center">
        <h2 className="font-display text-3xl md:text-4xl">
          Licensed, Bonded &amp; Insured — {business.license}
        </h2>
        <p className="mt-4 text-charcoal/60 max-w-xl mx-auto">
          Ramos Cabinetry &amp; Construction is fully licensed, bonded, and insured, giving
          East Valley homeowners peace of mind on every project, large or small.
        </p>
      </section>

      <CTABand
        heading="Let's Talk About Your Project"
        sub="Reach out for a free, no-pressure estimate and see what custom cabinetry could look like in your home."
      />
    </>
  );
}
