import type { Metadata } from "next";
import { business, serviceAreas } from "@/lib/site-data";
import { PageHero, Eyebrow } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Contact & Free Estimate | Ramos Cabinetry & Construction",
  description:
    "Request a free estimate from Ramos Cabinetry & Construction. Call (480) 358 8607 or send your project details online. Serving Tempe, Gilbert, Mesa, Chandler, Scottsdale & Phoenix.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Talk About Your Project"
        sub="Call, email, or send a few details below. We'll follow up within one business day to schedule your free, in home estimate."
      />

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24 grid md:grid-cols-12 gap-14">
        <div className="md:col-span-5">
          <Eyebrow>Reach Us Directly</Eyebrow>
          <h2 className="font-display text-3xl mt-4 reveal-line">Contact Details</h2>

          <div className="mt-10 space-y-8">
            <div>
              <div className="text-xs tracking-[0.14em] uppercase text-brass">Phone</div>
              <a href={business.phoneHref} className="block font-display text-2xl mt-2 hover:text-brass transition-colors">
                {business.phone}
              </a>
            </div>
            <div>
              <div className="text-xs tracking-[0.14em] uppercase text-brass">Email</div>
              <a href={`mailto:${business.email}`} className="block text-lg mt-2 hover:text-brass transition-colors">
                {business.email}
              </a>
            </div>
            <div>
              <div className="text-xs tracking-[0.14em] uppercase text-brass">Service Area</div>
              <p className="mt-2 text-charcoal/70 leading-relaxed">
                {serviceAreas.join(", ")}, and the surrounding East Valley.
              </p>
            </div>
            <div>
              <div className="text-xs tracking-[0.14em] uppercase text-brass">License</div>
              <p className="mt-2 text-charcoal/70">
                {business.license} · Licensed, Bonded &amp; Insured
              </p>
            </div>
          </div>

          <div className="mt-10 aspect-[16/10] border border-line bg-paper-dim flex items-center justify-center text-charcoal/40 text-sm">
            Google Map Embed of the Tempe, AZ Service Area
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Eyebrow>Request an Estimate</Eyebrow>
          <h2 className="font-display text-3xl mt-4 reveal-line">Tell Us About the Project</h2>

          <form className="mt-10 space-y-6" action={`mailto:${business.email}`} method="post" encType="text/plain">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-charcoal/70 mb-2">Full Name</label>
                <input id="name" name="name" type="text" required
                  className="w-full border border-line bg-paper px-4 py-3 text-charcoal focus:border-brass outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm text-charcoal/70 mb-2">Phone</label>
                <input id="phone" name="phone" type="tel" required
                  className="w-full border border-line bg-paper px-4 py-3 text-charcoal focus:border-brass outline-none transition-colors" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-charcoal/70 mb-2">Email</label>
              <input id="email" name="email" type="email" required
                className="w-full border border-line bg-paper px-4 py-3 text-charcoal focus:border-brass outline-none transition-colors" />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="project" className="block text-sm text-charcoal/70 mb-2">Project Type</label>
                <select id="project" name="project"
                  className="w-full border border-line bg-paper px-4 py-3 text-charcoal focus:border-brass outline-none transition-colors">
                  <option>Custom Cabinets</option>
                  <option>Kitchen Remodeling</option>
                  <option>Bathroom Remodeling</option>
                  <option>Cabinet Installation</option>
                  <option>Finish Carpentry</option>
                  <option>Home Remodeling</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>
              <div>
                <label htmlFor="neighborhood" className="block text-sm text-charcoal/70 mb-2">City / Neighborhood</label>
                <input id="neighborhood" name="neighborhood" type="text" placeholder="e.g. Power Ranch, Gilbert"
                  className="w-full border border-line bg-paper px-4 py-3 text-charcoal focus:border-brass outline-none transition-colors" />
              </div>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm text-charcoal/70 mb-2">Desired Timeline</label>
              <select id="timeline" name="timeline"
                className="w-full border border-line bg-paper px-4 py-3 text-charcoal focus:border-brass outline-none transition-colors">
                <option>As soon as possible</option>
                <option>Within 1 to 3 months</option>
                <option>3 to 6 months</option>
                <option>Just exploring options</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-charcoal/70 mb-2">Project Details</label>
              <textarea id="message" name="message" rows={5}
                className="w-full border border-line bg-paper px-4 py-3 text-charcoal focus:border-brass outline-none transition-colors" />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-walnut text-cream text-sm tracking-wide hover:bg-brass hover:text-walnut transition-colors"
            >
              Request Free Estimate
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
