import Link from "next/link";
import { business, trustMarkers } from "@/lib/site-data";

export function TrustBar() {
  return (
    <div className="border-y border-line bg-paper-dim">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs md:text-sm tracking-wide text-charcoal/70 uppercase">
        {trustMarkers.map((m, i) => (
          <span key={m} className="flex items-center gap-8">
            {i > 0 && <span className="hidden md:inline text-brass">/</span>}
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs tracking-[0.2em] uppercase text-brass font-medium">
      {children}
    </div>
  );
}

export function CTABand({
  heading = "Ready to Start Your Project?",
  sub = "Call for a free estimate, or send a few details online and we'll follow up within one business day.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="bg-walnut">
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-cream">{heading}</h2>
        <p className="mt-4 text-cream/60 max-w-xl mx-auto">{sub}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={business.phoneHref}
            className="w-full sm:w-auto px-8 py-3.5 border border-cream/30 text-cream text-sm tracking-wide hover:border-brass hover:text-brass-light transition-colors"
          >
            Call {business.phone}
          </a>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-brass text-walnut text-sm tracking-wide hover:bg-brass-light transition-colors"
          >
            Request a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FAQAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-t border-b border-line">
      {faqs.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <span className="font-display text-lg text-charcoal pr-6">{f.q}</span>
            <span className="text-brass text-xl leading-none transition-transform group-open:rotate-45 shrink-0">+</span>
          </summary>
          <p className="mt-3 text-charcoal/70 leading-relaxed max-w-2xl">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub: string;
}) {
  return (
    <section className="bg-walnut">
      <div className="mx-auto max-w-5xl px-5 md:px-8 pt-24 pb-20 text-center">
        <Eyebrow>
          <span className="text-brass-light">{eyebrow}</span>
        </Eyebrow>
        <h1 className="font-display text-4xl md:text-6xl text-cream mt-4 leading-[1.05]">
          {title}
        </h1>
        <p className="mt-6 text-cream/60 text-lg max-w-2xl mx-auto leading-relaxed">
          {sub}
        </p>
      </div>
    </section>
  );
}
