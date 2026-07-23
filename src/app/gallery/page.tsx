import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { galleryCategories, projectGallery } from "@/lib/project-gallery";
import { PageHero, CTABand } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Project Gallery | Custom Cabinets & Remodeling",
  description:
    "Browse real custom cabinetry, kitchen remodels, bathroom vanities, and finish carpentry projects by Ramos Cabinetry & Construction across the East Valley.",
};

export default function GalleryPage() {
  const firstProjectByCategory = new Map<string, string>();
  projectGallery.forEach((project) => {
    if (!firstProjectByCategory.has(project.category)) {
      firstProjectByCategory.set(project.category, project.slug);
    }
  });

  return (
    <>
      <PageHero
        eyebrow="Recent Work"
        title="Project Gallery"
        sub="Real cabinetry, remodeling, and finish carpentry projects, built and photographed on the job across the East Valley."
      />

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24">
        <div className="mb-12 flex flex-wrap gap-3">
          {galleryCategories.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="border border-line px-4 py-2 text-xs uppercase tracking-[0.12em] text-charcoal/70 transition-colors hover:border-brass hover:text-brass"
            >
              {category.label}
            </a>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectGallery.map((p) => (
            <figure key={p.slug} className="group">
              <div
                id={firstProjectByCategory.get(p.category) === p.slug ? p.category : undefined}
                className="relative aspect-[4/5] scroll-mt-28 border border-line overflow-hidden"
              >
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-walnut/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-display text-cream text-lg leading-snug">{p.title}</div>
                  <div className="text-cream/60 text-sm mt-1">{p.city}</div>
                </div>
              </div>
              <figcaption className="mt-2 flex items-center justify-between gap-3 text-xs tracking-wide uppercase text-brass">
                <span>{p.categoryLabel}</span>
                <Link href={p.serviceHref} className="text-charcoal/45 transition-colors hover:text-brass">
                  View Service
                </Link>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTABand
        heading="Have a Project in Mind?"
        sub="See what a custom built approach could look like in your own kitchen, bathroom, or living space."
      />
    </>
  );
}
