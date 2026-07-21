import type { Metadata } from "next";
import { business, reviews } from "@/lib/site-data";
import { PageHero, CTABand } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Reviews | Ramos Cabinetry & Construction",
  description:
    "See why East Valley homeowners give Ramos Cabinetry & Construction 5-star reviews for custom cabinetry, remodeling, and finish carpentry work.",
};

const jsonLd = {
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

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="What Homeowners Say"
        title={`${business.reviewRating} Stars · ${business.reviewCount} Reviews`}
        sub="Honest work, direct communication, and cabinetry built to last — in the words of East Valley homeowners."
      />

      <section className="mx-auto max-w-6xl px-5 md:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {reviews.map((r) => (
            <div key={r.name} className="border-t border-line pt-6">
              <div className="text-brass text-sm">★★★★★</div>
              <p className="mt-4 text-charcoal/75 leading-relaxed text-lg">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-5 text-sm text-charcoal/50">
                {r.name} · {r.city}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        heading="Ready to Become Our Next Review?"
        sub="Call for a free estimate and see the same craftsmanship for yourself."
      />
    </>
  );
}
