import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ProjectGalleryImage } from "@/lib/project-gallery";
import { business, cityPages, services } from "@/lib/site-data";
import { projectGallery } from "@/lib/project-gallery";
import { CTABand, Eyebrow, FAQAccordion } from "@/components/Sections";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import VideoScrubScene from "@/components/VideoScrubScene";

export const metadata: Metadata = {
  title: "Custom Cabinets & Remodeling in Phoenix & East Valley, AZ | C Ramos Cabinetry",
  description:
    "Family owned custom cabinet & remodeling contractor serving Tempe, Gilbert, Mesa, Chandler, Scottsdale & Phoenix. Licensed, bonded & insured. Free estimates. Call (480) 358 8607.",
  alternates: {
    canonical: "https://cramoscabinetry.com/",
  },
  openGraph: {
    title: "Custom Cabinets & Remodeling in Phoenix & East Valley, AZ",
    description:
      "Family owned cabinetry & remodeling craftsmanship for Tempe, Gilbert, Mesa, Chandler, Scottsdale & Phoenix. Licensed ROC with free estimates.",
    type: "website",
    url: "https://cramoscabinetry.com/",
    images: [
      {
        url: "https://cramoscabinetry.com/images/og/ramos-cabinetry-hero-kitchen.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function galleryImage(slug: string) {
  const image = projectGallery.find((project) => project.slug === slug);
  if (!image) {
    throw new Error(`Missing homepage gallery image: ${slug}`);
  }
  return image;
}

const featuredGallery = [
  galleryImage("ramos-kitchen-remodeling-scottsdale-east-valley-az-077"),
  galleryImage("ramos-wet-bar-built-ins-gilbert-east-valley-az-134"),
  galleryImage("ramos-laundry-room-cabinets-tempe-east-valley-az-121"),
  galleryImage("ramos-built-ins-phoenix-east-valley-az-048"),
  galleryImage("ramos-bathroom-remodeling-chandler-east-valley-az-100"),
  galleryImage("ramos-mudroom-built-ins-chandler-east-valley-az-106"),
];

const homeFaqs = [
  {
    q: "How much does custom cabinetry cost in the Phoenix area?",
    a: "Cost depends on cabinet style, material, and project scope. We provide free, no-obligation estimates for homeowners in Tempe, Gilbert, Mesa, Chandler, Scottsdale, and Phoenix.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. Every project starts with a free, in home or virtual estimate.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. C Ramos Cabinetry and Construction LLC is licensed, bonded, and insured.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve the East Valley including Tempe, Gilbert, Mesa, Chandler, Scottsdale, and Phoenix.",
  },
  {
    q: "How long does a kitchen remodel take?",
    a: "Most kitchen remodels take a few weeks depending on scope; timelines are confirmed during your estimate.",
  },
  {
    q: "Do you build custom or semi custom cabinets?",
    a: "Both. We build fully custom cabinetry as well as semi custom options to fit a range of budgets and timelines.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const serviceDescriptions: Record<string, string> = {
  "custom-cabinets": "Custom and semi custom cabinetry for kitchens, bathrooms, and built ins.",
  "kitchen-remodeling": "Full kitchen remodels focused on layout, storage, and finish quality.",
  "bathroom-remodeling": "Vanities, cabinetry, and finish carpentry for cleaner, more functional bathrooms.",
  "cabinet-installation": "Precision installation, hardware, and repair for new or existing cabinetry.",
  "finish-carpentry": "Trim, built ins, mantels, shiplap, wainscoting, and detail carpentry.",
  "home-remodeling": "Broader residential remodeling and construction projects.",
};

const serviceImages: Record<string, ProjectGalleryImage> = {
  "custom-cabinets": galleryImage("ramos-custom-cabinets-gilbert-east-valley-az-008"),
  "kitchen-remodeling": galleryImage("ramos-kitchen-remodeling-tempe-east-valley-az-031"),
  "bathroom-remodeling": galleryImage("ramos-bathroom-remodeling-gilbert-east-valley-az-098"),
  "cabinet-installation": galleryImage("ramos-cabinet-installation-scottsdale-east-valley-az-071"),
  "finish-carpentry": galleryImage("ramos-finish-carpentry-mesa-east-valley-az-003"),
  "home-remodeling": galleryImage("ramos-home-remodeling-chandler-east-valley-az-064"),
};

const whyChoose = [
  {
    title: "Family Owned, Directly Overseen",
    body: "Chris Ramos personally manages every project.",
  },
  {
    title: "15+ Years of Craftsmanship",
    body: "Deep experience in cabinetry and remodeling.",
  },
  {
    title: "Licensed, Bonded & Insured",
    body: "Licensed through the Arizona ROC with full insurance coverage.",
  },
  {
    title: "Custom & Semi Custom Options",
    body: "Cabinetry built to fit the home and budget.",
  },
  {
    title: "Local, East Valley Focused",
    body: "Deep familiarity with Tempe, Gilbert, Mesa, Chandler, Scottsdale homes.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <VideoScrubScene
        id="hero"
        videoSrc="/videos/ramos-v2/hero-v2-scroll.mp4"
        posterStart="/videos/ramos-v2/hero-v2-poster-start.jpg"
        posterFinal="/videos/ramos-v2/hero-v2-poster-final.jpg"
        posterAlt="Warm wood grain transforming into Ramos custom cabinetry craftsmanship"
        eyebrow="Family Owned Custom Cabinetry & Remodeling Serving Tempe & the East Valley"
        heading="Custom Cabinets & Home Remodeling for Phoenix and East Valley Homes"
        sub="C Ramos Cabinetry and Construction LLC builds custom cabinets, kitchen remodels, bathroom upgrades, and finish carpentry with the kind of craftsmanship homeowners notice in every detail. Family owned and personally overseen by Chris Ramos, we serve Tempe, Gilbert, Mesa, Chandler, Scottsdale, and the surrounding East Valley."
        showCta
        primaryCtaLabel="Get a Free Estimate"
        secondaryCtaLabel="Call (480) 358 8607"
        trustItems={[
          "Licensed, Bonded & Insured",
          "ROC #364821",
          "Family Owned",
          "16+ Five Star Reviews",
        ]}
        priority
        runwayDesktopVh={280}
        runwayMobileVh={180}
        playback="scrub"
        copyRevealStart={0}
        copyRevealEnd={0.28}
        layeredHero
      />

      <VideoScrubScene
        id="first-cut"
        videoSrc="/videos/ramos-v2/chapter-2-first-cut-scroll.mp4"
        posterStart="/videos/ramos-v2/chapter-2-poster-start.jpg"
        posterFinal="/videos/ramos-v2/chapter-2-poster-final.jpg"
        posterAlt="Actual Ramos project cabinetry scroll animation showing the first cut and assembly"
        eyebrow="Custom Cabinetry and Remodeling Built Around the Way You Live"
        heading="Custom Cabinetry and Remodeling Built Around the Way You Live"
        sub="For over 15 years, C Ramos Cabinetry and Construction has helped East Valley homeowners turn kitchens, bathrooms, and everyday living spaces into rooms that work as beautifully as they look. As a family owned company, every project is personally overseen by Chris Ramos from the first measurement to the final soft close hinge."
        runwayDesktopVh={260}
        runwayMobileVh={190}
        playback="scrub"
        copyRevealStart={0.38}
        copyRevealEnd={0.68}
        objectPosition="48% center"
        holdPosterOnScrubStart
      />

      <section className="bg-paper px-5 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="max-w-4xl text-lg leading-relaxed text-charcoal/70">
            For over 15 years, C Ramos Cabinetry and Construction has helped East Valley
            homeowners turn kitchens, bathrooms, and everyday living spaces into rooms that work
            as beautifully as they look. As a family owned company, every project is personally
            overseen by Chris Ramos from the first measurement to the final soft close hinge.
            Whether it's a full custom cabinetry build, a{" "}
            <Link href="/services/kitchen-remodeling" className="text-brass underline underline-offset-4">
              kitchen remodel in Gilbert
            </Link>
            , or{" "}
            <Link href="/services/finish-carpentry" className="text-brass underline underline-offset-4">
              finish carpentry in Tempe
            </Link>
            , the same standard of craftsmanship and honest communication applies to every job.
          </p>
        </div>
      </section>

      <section className="bg-walnut text-cream reveal-divider-dark">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <Eyebrow>
                <span className="text-brass-light">Services</span>
              </Eyebrow>
              <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight">
                Cabinetry and Remodeling Services for Phoenix & East Valley Homeowners
              </h2>
            </div>
            <p className="text-cream/62 max-w-md leading-relaxed">
              Custom and semi custom cabinetry, kitchen remodeling, bathroom upgrades,
              installation, finish carpentry, and broader home remodeling for East Valley homes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line-dark">
            {services.map((s, index) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={
                  index === 0
                    ? "group bg-walnut-2 hover:bg-[#3f2e20] transition-colors sm:col-span-2 lg:col-span-2 grid md:grid-cols-[1fr_0.9fr] min-h-80 overflow-hidden"
                    : "group bg-walnut-2 hover:bg-[#3f2e20] transition-colors min-h-80 flex flex-col overflow-hidden"
                }
              >
                <div className="p-7 md:p-8 flex flex-col">
                  <span className="text-brass-light text-xs tracking-[0.18em] uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl mt-5 group-hover:text-brass-light transition-colors">
                    {s.name}
                  </h3>
                  <p className="mt-4 text-cream/62 leading-relaxed text-sm">
                    {serviceDescriptions[s.slug] ?? s.heroSub}
                  </p>
                  <span className="mt-auto pt-8 text-sm text-brass-light underline underline-offset-4">
                    Learn More →
                  </span>
                </div>
                <div className="relative aspect-[4/3] md:aspect-auto min-h-52">
                  <Image
                    src={serviceImages[s.slug]?.image ?? projectGallery[0].image}
                    alt={serviceImages[s.slug]?.alt ?? `${s.name} by C Ramos Cabinetry and Construction`}
                    fill
                    sizes={index === 0 ? "(max-width: 1024px) 100vw, 45vw" : "(max-width: 1024px) 100vw, 30vw"}
                    className="object-cover opacity-82 group-hover:scale-[1.04] transition duration-700"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 md:px-8 py-20 md:py-28 reveal-divider">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Eyebrow>Why Choose Ramos</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight">
              Why East Valley Homeowners Choose C Ramos Cabinetry and Construction
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-5 gap-px bg-line">
            {whyChoose.map((item) => (
              <div key={item.title} className="bg-paper-dim p-6 md:p-7 min-h-52">
                <h3 className="font-display text-xl leading-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/65">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-dim reveal-divider overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <Eyebrow>Real Work</Eyebrow>
              <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight">
                Recent Cabinetry & Remodeling Projects Across the Valley
              </h2>
            </div>
            <p className="text-charcoal/62 max-w-md leading-relaxed">
              Finished rooms, active installation moments, raw material, and detail work all stay visible
              because the process is part of the trust.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-line">
            {featuredGallery.map((project) => (
              <Link key={project.slug} href="/gallery" className="group bg-paper block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-[1.04] transition duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs tracking-[0.14em] uppercase text-brass">
                    {project.city}
                  </div>
                  <h3 className="font-display text-xl mt-2">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/gallery" className="text-sm text-brass underline underline-offset-4">
              View the Full Project Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
          <div>
            <Eyebrow>East Valley</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight">
              Proudly Serving Tempe, Gilbert, Mesa, Chandler, Scottsdale & Phoenix
            </h2>
            <p className="mt-6 text-charcoal/66 leading-relaxed">
              C Ramos Cabinetry and Construction serves homeowners throughout the East Valley,
              from Tempe to Florence along the I-17 corridor. Explore cabinetry and remodeling
              services in your city:
            </p>
            <Link href="/service-areas" className="inline-block mt-8 text-sm text-brass underline underline-offset-4">
              See All Service Areas
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-line">
            {cityPages.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}-custom-cabinets`}
                className="bg-paper-dim hover:bg-paper transition-colors p-7 min-h-36 flex items-end"
              >
                <span className="font-display text-2xl hover:text-brass transition-colors">
                  {c.city}, AZ
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviewsSection />

      <section className="mx-auto max-w-4xl px-5 md:px-8 py-20 md:py-28">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="font-display text-3xl md:text-5xl mt-4 mb-10 leading-tight">
          Frequently Asked Questions
        </h2>
        <FAQAccordion faqs={homeFaqs} />
      </section>

      <CTABand
        heading="Ready to Start Your Cabinetry or Remodeling Project?"
        sub="Get a free, no pressure estimate from a family owned team that treats your home like their own. Serving Tempe, Gilbert, Mesa, Chandler, Scottsdale, and Phoenix."
        primaryLabel="Get a Free Estimate"
        secondaryLabel="Call (480) 358 8607"
      />
    </>
  );
}
