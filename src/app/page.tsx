import Image from "next/image";
import Link from "next/link";
import { business, cityPages, projects, reviews, services } from "@/lib/site-data";
import { CTABand, Eyebrow, TrustBar } from "@/components/Sections";
import VideoScrubScene from "@/components/VideoScrubScene";

const featuredGallery = [
  projects[0],
  projects[1],
  projects[2],
  projects[3],
  projects[4],
  projects[6],
];


function CinematicImageChapter({
  chapter,
  eyebrow,
  heading,
  body,
  image,
  alt,
  align = "left",
  objectPosition = "center",
}: {
  chapter: string;
  eyebrow: string;
  heading: string;
  body: string;
  image: string;
  alt: string;
  align?: "left" | "right";
  objectPosition?: string;
}) {
  return (
    <section className="relative min-h-screen overflow-hidden isolate bg-walnut text-cream flex items-end">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-walnut/88 via-walnut/30 to-walnut/24" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(42,31,23,0.82),rgba(42,31,23,0.24)_48%,rgba(42,31,23,0.54))]" />
      <div className={
        align === "right"
          ? "relative z-10 w-full px-5 sm:px-7 md:px-12 pb-20 md:pb-24 flex justify-end"
          : "relative z-10 w-full px-5 sm:px-7 md:px-12 pb-20 md:pb-24"
      }>
        <div className="max-w-2xl">
          <div className="text-xs md:text-sm tracking-[0.2em] uppercase text-brass-light">{chapter} · {eyebrow}</div>
          <h2 className="font-display text-[2.35rem] sm:text-5xl md:text-6xl text-cream mt-4 leading-[1.02]">
            {heading}
          </h2>
          <p className="mt-5 text-cream/72 text-[1rem] sm:text-lg leading-relaxed max-w-xl">{body}</p>
        </div>
      </div>
    </section>
  );
}

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
        videoSrc="/videos/ramos-v2/hero-v2-scroll.mp4"
        posterStart="/videos/ramos-v2/hero-v2-poster-start.jpg"
        posterFinal="/videos/ramos-v2/hero-v2-poster-final.jpg"
        posterAlt="Warm wood grain transforming into Ramos custom cabinetry craftsmanship"
        eyebrow="Chapter 01 · Craft Begins"
        heading="Every Masterpiece Begins With a Single Piece of Wood"
        sub="A scroll-built opening scene for Ramos craftsmanship: raw material, morning light, precision, and the first quiet moment before a room becomes home."
        showCta
        priority
        runwayDesktopVh={280}
        runwayMobileVh={180}
        playback="scrub"
        copyRevealStart={0}
        copyRevealEnd={0.28}
        layeredHero
      />

      <CinematicImageChapter
        chapter="Chapter 02"
        eyebrow="The First Cut"
        heading="The Frame Begins to Explain the Room"
        body="The story continues from raw material into structure: exposed joinery, drawer boxes, shelves, trim, and cabinet frames beginning to make the work recognizable."
        image="/images/ramos-v2/chapter-2-first-cut.png"
        alt="Partially assembled Ramos cabinetry inside a warm luxury woodworking studio"
        objectPosition="center center"
      />

      <CinematicImageChapter
        chapter="Chapter 03"
        eyebrow="Workshop to Home"
        heading="The Cabinetry Becomes the Anchor"
        body="The shop gives way to the home without losing the craft. Materials, scale, and light stay connected so the visitor feels the same piece becoming part of a real room."
        image="/images/ramos-v2/chapter-3-workshop-home.png"
        alt="Ramos custom cabinetry transitioning from workshop craft into a finished kitchen environment"
        align="right"
        objectPosition="center center"
      />

      <VideoScrubScene
        id="home-living"
        videoSrc="/videos/ramos-v2/chapter-4-home-living-scroll.mp4"
        posterStart="/videos/ramos-v2/chapter-4-poster-start.jpg"
        posterFinal="/videos/ramos-v2/chapter-4-poster-final.jpg"
        posterAlt="A luxury Arizona home connected by custom Ramos cabinetry from kitchen to living spaces"
        eyebrow="Chapter 04 · Where Life Happens"
        heading="A Home Built Around the Way You Live"
        sub="Kitchen, pantry, coffee bar, built-ins, fireplace, office, laundry, mudroom, and bath details unfold as one connected Ramos story."
        runwayDesktopVh={260}
        runwayMobileVh={190}
        playback="scrub"
        copyRevealStart={0.38}
        copyRevealEnd={0.68}
      />

      <CinematicImageChapter
        chapter="Chapter 05"
        eyebrow="The Details"
        heading="The Quiet Parts Decide the Quality"
        body="Wood grain, reveals, miters, edges, hardware, and joinery slow the story down. This is where premium work stops being a promise and becomes visible."
        image="/images/ramos-v2/chapter-5-details.png"
        alt="Macro detail of handcrafted Ramos cabinetry with warm wood grain and precision finish work"
        objectPosition="center center"
      />

      <CinematicImageChapter
        chapter="Chapter 06"
        eyebrow="Across the East Valley"
        heading="Craftsmanship Carried From Home to Home"
        body="Ramos work belongs to Arizona homes: Gilbert, Mesa, Chandler, Scottsdale, Tempe, Phoenix, and the neighborhoods where custom detail still matters."
        image="/images/ramos-v2/chapter-6-east-valley.png"
        alt="Golden hour East Valley residential landscape representing Ramos service areas"
        align="right"
        objectPosition="center center"
      />

      <section className="bg-walnut text-cream reveal-divider-dark">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <Eyebrow>
                <span className="text-brass-light">Services</span>
              </Eyebrow>
              <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight">
                Choose the chapter your home needs next.
              </h2>
            </div>
            <p className="text-cream/62 max-w-md leading-relaxed">
              The home page introduces the craft; the service pages keep the same SEO
              structure and go deeper into each project type.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line-dark">
            {services.map((s, index) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-walnut-2 hover:bg-[#3f2e20] transition-colors p-7 md:p-8 min-h-72 flex flex-col"
              >
                <span className="text-brass-light text-xs tracking-[0.18em] uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl mt-5 group-hover:text-brass-light transition-colors">
                  {s.name}
                </h3>
                <p className="mt-4 text-cream/62 leading-relaxed text-sm">{s.heroSub}</p>
                <span className="mt-auto pt-8 text-sm text-brass-light underline underline-offset-4">
                  Learn more
                </span>
              </Link>
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
                Proof you can see in the details.
              </h2>
            </div>
            <p className="text-charcoal/62 max-w-md leading-relaxed">
              Finished rooms, mid-install moments, raw material, and detail work all stay
              visible because the process is part of the trust.
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
                  <div className="text-xs tracking-[0.14em] uppercase text-brass">{project.tag}</div>
                  <h3 className="font-display text-xl mt-2">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
          <div>
            <Eyebrow>East Valley</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight">
              Local work, local homes, one direct path to Chris.
            </h2>
            <p className="mt-6 text-charcoal/66 leading-relaxed">
              Ramos Cabinetry & Construction serves Tempe, Gilbert, Mesa, Chandler,
              Scottsdale, Phoenix, and surrounding East Valley neighborhoods with custom
              cabinetry and remodel work built for Arizona homes.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-line">
            {cityPages.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}-custom-cabinets`}
                className="bg-paper-dim hover:bg-paper transition-colors p-7 min-h-36 flex items-end"
              >
                <span className="font-display text-2xl hover:text-brass transition-colors">
                  {c.city}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-dim reveal-divider">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
          <div className="flex items-end justify-between gap-8 mb-12">
            <div>
              <Eyebrow>Homeowner Proof</Eyebrow>
              <h2 className="font-display text-3xl md:text-5xl mt-4">
                {business.reviewRating} Stars · {business.reviewCount} Reviews
              </h2>
            </div>
            <Link
              href="/reviews"
              className="hidden sm:inline text-sm text-brass hover:text-charcoal underline underline-offset-4"
            >
              Read all reviews
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-line">
            {reviews.slice(0, 3).map((r) => (
              <article key={r.name} className="bg-paper p-7 md:p-8 min-h-80">
                <div className="text-brass text-sm">★★★★★</div>
                <p className="mt-6 text-charcoal/76 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                <div className="mt-7 text-sm text-charcoal/52">
                  {r.name} · {r.city}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />

      <CTABand
        heading="Start With the Room You Want to Change"
        sub="Call for a free, no-pressure estimate, or send a few project details online and Chris will follow up within one business day."
      />

      <VideoScrubScene
        id="legacy"
        videoSrc="/videos/ramos-v2/chapter-7-legacy-scroll.mp4"
        posterStart="/videos/ramos-v2/chapter-7-poster-start.jpg"
        posterFinal="/videos/ramos-v2/chapter-7-poster-final.jpg"
        posterAlt="A finished Arizona home glowing at sunset with handcrafted cabinetry inside"
        eyebrow="Chapter 07 · Legacy"
        heading="Built to Be Lived In"
        sub="The final chapter is not about selling. It is the feeling a homeowner has when the house is quiet, the work is finished, and every detail feels permanent."
        runwayDesktopVh={250}
        runwayMobileVh={185}
        playback="scrub"
        copyRevealStart={0.42}
        copyRevealEnd={0.72}
      />
    </>
  );
}
