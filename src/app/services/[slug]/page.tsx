import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, business, cityPages } from "@/lib/site-data";
import { getGalleryForService } from "@/lib/project-gallery";
import { serviceImages } from "@/lib/service-images";
import { PageHero, CTABand, Eyebrow, FAQAccordion, TrustBar } from "@/components/Sections";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} | ${service.keyword}`,
    description: service.heroSub,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const serviceGallery = getGalleryForService(service.slug, 6);
  const heroImage = serviceImages[service.slug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: { "@type": "GeneralContractor", name: business.name, telephone: business.phone },
    areaServed: cityPages.map((c) => c.city),
    description: service.overview,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow={service.eyebrow}
        title={service.heroHeadline}
        sub={service.heroSub}
        image={heroImage?.image}
        imageAlt={heroImage?.alt}
      />
      <TrustBar />

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <Eyebrow>Overview</Eyebrow>
          <h2 className="font-display text-3xl mt-4 reveal-line">{service.name} in the East Valley</h2>
          <p className="mt-8 text-charcoal/70 leading-relaxed text-lg">{service.overview}</p>

          <div className="mt-14">
            <Eyebrow>Problems We Solve</Eyebrow>
            <div className="mt-6 space-y-8">
              {service.problems.map((p) => (
                <div key={p.title} className="border-t border-line pt-5">
                  <h3 className="font-display text-xl">{p.title}</h3>
                  <p className="mt-2 text-charcoal/65 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <div className="bg-paper-dim border border-line p-8 sticky top-28">
            <Eyebrow>What&apos;s Included</Eyebrow>
            <ul className="mt-5 space-y-3">
              {service.included.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-charcoal/75">
                  <span className="text-brass shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 block text-center px-6 py-3.5 bg-walnut text-cream text-sm tracking-wide hover:bg-brass hover:text-walnut transition-colors"
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
        <div className="mx-auto max-w-4xl px-5 md:px-8 py-24">
          <Eyebrow>Common Questions</Eyebrow>
          <h2 className="font-display text-3xl mt-4 mb-12">FAQ: {service.name}</h2>
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      {serviceGallery.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 md:px-8 py-24">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Project Photos</Eyebrow>
              <h2 className="font-display text-3xl mt-4">Recent {service.name} Work</h2>
            </div>
            <Link href="/gallery" className="text-sm text-brass underline underline-offset-4">
              View Full Gallery
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceGallery.map((project) => (
              <figure key={project.slug} className="group">
                <div className="relative aspect-[4/5] overflow-hidden border border-line">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-3">
                  <div className="font-display text-lg">{project.title}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.12em] text-brass">{project.city}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24">
        <Eyebrow>Related Services</Eyebrow>
        <h2 className="font-display text-3xl mt-4 mb-10">Explore More</h2>
        <div className="grid md:grid-cols-3 gap-px bg-line">
          {otherServices.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group bg-paper hover:bg-paper-dim transition-colors p-8"
            >
              <h3 className="font-display text-xl group-hover:text-brass transition-colors">{s.name}</h3>
              <span className="inline-block mt-4 text-sm text-brass underline underline-offset-4">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
