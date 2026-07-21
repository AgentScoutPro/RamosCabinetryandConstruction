import type { Metadata } from "next";
import { PageHero, CTABand } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Project Gallery | Custom Cabinets & Remodeling",
  description:
    "Browse custom cabinetry, kitchen remodels, bathroom vanities, and finish carpentry projects by Ramos Cabinetry & Construction across the East Valley.",
};

const projects = [
  { title: "Custom Walnut Kitchen", city: "Gilbert, AZ", tag: "Kitchen · Custom Cabinets" },
  { title: "Primary Bath Vanity Rebuild", city: "Tempe, AZ", tag: "Bathroom Remodeling" },
  { title: "Living Room Built-Ins", city: "Chandler, AZ", tag: "Finish Carpentry" },
  { title: "Full Kitchen Remodel", city: "Scottsdale, AZ", tag: "Kitchen Remodeling" },
  { title: "Farmhouse Cabinet Suite", city: "Gilbert, AZ", tag: "Custom Cabinets" },
  { title: "Mudroom Storage Build", city: "Mesa, AZ", tag: "Custom Cabinets" },
  { title: "Guest Bath Cabinetry", city: "Phoenix, AZ", tag: "Bathroom Remodeling" },
  { title: "Crown Molding & Trim", city: "Tempe, AZ", tag: "Finish Carpentry" },
  { title: "Pantry & Butler's Cabinetry", city: "Chandler, AZ", tag: "Custom Cabinets" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Recent Work"
        title="Project Gallery"
        sub="A look at custom cabinetry, remodeling, and finish carpentry projects across the East Valley."
      />

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <figure key={p.title} className="group">
              <div
                className="aspect-[4/5] border border-line flex items-end p-6"
                style={{
                  background: `linear-gradient(160deg, ${
                    i % 3 === 0 ? "#5a4530" : i % 3 === 1 ? "#4a3624" : "#3a2c1f"
                  } 0%, #241a13 100%)`,
                }}
              >
                <div>
                  <div className="font-display text-cream text-lg leading-snug">{p.title}</div>
                  <div className="text-cream/50 text-sm mt-1">{p.city}</div>
                </div>
              </div>
              <figcaption className="mt-2 text-xs tracking-wide uppercase text-brass">
                {p.tag}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTABand
        heading="Have a Project in Mind?"
        sub="See what a custom-built approach could look like in your own kitchen, bathroom, or living space."
      />
    </>
  );
}
