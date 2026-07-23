import Image from "next/image";
import Link from "next/link";
import { business, cityPages, projects, reviews, services } from "@/lib/site-data";
import { CTABand, Eyebrow, TrustBar } from "@/components/Sections";
import CraftReveal from "@/components/CraftReveal";
import VideoScrubScene from "@/components/VideoScrubScene";

const storyBeats = [
  {
    label: "Measure",
    title: "The room tells us what the cabinets need to become.",
    body: "Chris starts in the home, measuring walls, appliances, corners, storage habits, and the places stock cabinets usually waste space.",
    image: "/images/gallery/raw-lumber-material.jpg",
    alt: "Raw hardwood lumber staged before custom cabinetry fabrication",
  },
  {
    label: "Build",
    title: "Material turns into proportion, joinery, and finish.",
    body: "Cabinet boxes, panels, shelves, vanities, and built-ins are built around the exact room, not ordered as a generic set.",
    image: "/images/gallery/vanity-boxes-install.jpg",
    alt: "Charcoal vanity cabinet boxes mid-install",
  },
  {
    label: "Fit",
    title: "Installation is where the work either disappears or shows.",
    body: "Level lines, scribed edges, door gaps, trim returns, and final hardware decide whether a project feels built-in or simply placed there.",
    image: "/images/gallery/laundry-built-ins.jpg",
    alt: "Custom laundry room cabinetry with quartz counter and farmhouse sink",
  },
  {
    label: "Live",
    title: "The finished room should feel like it was always meant to be there.",
    body: "The payoff is storage that works, surfaces that belong, and finish carpentry that makes the whole home feel more resolved.",
    image: "/images/gallery/river-table-island-kitchen.jpg",
    alt: "Custom walnut river-table kitchen island with blue epoxy inlay",
  },
];

const proofPoints = [
  { value: business.yearsExperience, label: "years hands-on carpentry" },
  { value: business.reviewRating, label: "star local reputation" },
  { value: business.reviewCount, label: "homeowner reviews" },
  { value: business.license, label: "licensed, bonded, insured" },
];

const challenges = [
  {
    problem: "A kitchen that fights the way you cook",
    solution:
      "Layouts are reworked around prep zones, appliance clearances, storage habits, and the things you reach for every day.",
  },
  {
    problem: "Storage that looks fine until you live with it",
    solution:
      "Drawer depth, pantry width, shelf spacing, and built-in details are sized for the way the room is actually used.",
  },
  {
    problem: "Cabinets that look added-on",
    solution:
      "Door style, profile, stain, trim, and reveal lines are chosen to belong with the rest of the home.",
  },
  {
    problem: "Too many people between you and the work",
    solution:
      "Chris stays directly involved from measure to install, so answers come from the person responsible for the final fit.",
  },
];

const serviceStory = [
  "Custom cabinet builds",
  "Kitchen and bathroom remodels",
  "Built-ins, vanities, laundry rooms",
  "Finish carpentry and installation",
];

const featuredGallery = [
  projects[0],
  projects[1],
  projects[2],
  projects[3],
  projects[4],
  projects[6],
];

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
        videoSrc="/videos/hero-ramos.mp4"
        posterStart="/videos/hero-ramos-poster-start.jpg"
        posterFinal="/videos/hero-ramos-poster-final.jpg"
        posterAlt="Custom walnut river-table kitchen island with a blue epoxy inlay, built by Ramos Cabinetry & Construction"
        eyebrow="Custom Cabinetry · Finish Carpentry · East Valley"
        heading="A Room Should Feel Built for the Life Inside It"
        sub="Ramos Cabinetry & Construction designs, builds, and installs custom cabinets, remodels, vanities, built-ins, and finish carpentry with Chris Ramos directly involved from measure to final fit."
        showCta
        priority
        runwayDesktopVh={155}
        runwayMobileVh={115}
        playback="ambient"
        copyRevealStart={0}
        copyRevealEnd={0.18}
      />

      <TrustBar />

      <section className="bg-walnut text-cream reveal-divider-dark">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-end">
            <div>
              <Eyebrow>
                <span className="text-brass-light">The Ramos Story</span>
              </Eyebrow>
              <h2 className="font-display text-4xl md:text-6xl mt-5 leading-[1.02] max-w-3xl">
                From raw material to a room that finally works.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-cream/72 text-lg leading-relaxed">
                The home page now moves like the work itself: first the material, then the
                measurement, then the build, then the fit, then the finished room. Every
                scene points back to the same promise: cabinetry built for your home, not
                pulled from a shelf.
              </p>
              <div className="grid grid-cols-2 gap-px bg-line-dark">
                {proofPoints.map((p) => (
                  <div key={p.label} className="bg-walnut-2 p-5">
                    <div className="font-display text-2xl md:text-3xl text-brass-light">{p.value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.16em] text-cream/52">{p.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-line-dark mt-16">
            {storyBeats.map((beat, index) => (
              <article key={beat.label} className="group bg-walnut min-h-[430px] relative overflow-hidden">
                <Image
                  src={beat.image}
                  alt={beat.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover opacity-58 group-hover:opacity-72 group-hover:scale-[1.04] transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-walnut via-walnut/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-brass-light text-xs tracking-[0.18em] uppercase">
                    {String(index + 1).padStart(2, "0")} · {beat.label}
                  </div>
                  <h2 className="font-display text-2xl mt-3 leading-tight">{beat.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-cream/66">{beat.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CraftReveal
        beforeSrc="/images/gallery/raw-lumber-material.jpg"
        beforeAlt="Raw hardwood lumber board staged for custom cabinetry fabrication"
        afterSrc="/images/gallery/river-table-island-kitchen.jpg"
        afterAlt="Finished custom walnut kitchen island with blue river inlay"
        beforeLabel="Raw Material"
        afterLabel="Finished Room"
      />

      <VideoScrubScene
        id="process"
        videoSrc="/videos/ramos-build-wall.mp4"
        posterStart="/videos/ramos-build-wall-poster-start.jpg"
        posterFinal="/videos/ramos-build-wall-poster-final.jpg"
        posterAlt="Custom built-in wood shelving wall with potted greenery in an East Valley home"
        eyebrow="The Build Scene"
        heading="Every Line Has to Land Before the Room Feels Finished"
        sub="Built-ins, vanities, shelves, doors, trim, and cabinet faces only feel calm when the hidden work is exact: level, scribed, joined, and installed with patience."
        runwayDesktopVh={150}
        runwayMobileVh={110}
        playback="ambient"
        copyRevealStart={0.14}
        copyRevealEnd={0.34}
      />

      <section className="bg-paper-dim reveal-divider">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">
            <div>
              <Eyebrow>What Gets Solved</Eyebrow>
              <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight max-w-xl">
                The work starts with the problem the room keeps creating.
              </h2>
              <p className="mt-6 text-charcoal/66 leading-relaxed max-w-lg">
                Custom cabinetry is not just nicer boxes. It is a correction: storage,
                proportion, material, flow, and finish brought into alignment with the way
                the home is lived in.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-line">
              {challenges.map((c) => (
                <article key={c.problem} className="bg-paper p-7 md:p-8 min-h-64">
                  <h3 className="font-display text-xl md:text-2xl leading-tight">{c.problem}</h3>
                  <p className="mt-5 text-charcoal/68 leading-relaxed text-sm">{c.solution}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <Eyebrow>Project Chapters</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight max-w-3xl">
              Cabinets, remodels, and finish details built as one connected story.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-sm text-brass hover:text-charcoal underline underline-offset-4"
          >
            View the gallery
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-px bg-line">
          <div className="bg-paper min-h-[520px] relative overflow-hidden">
            <Image
              src="/images/gallery/wet-bar-built-in.jpg"
              alt="Custom light oak wet bar built-in with open shelving and wine storage"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-walnut/72 via-transparent to-transparent" />
            <div className="absolute left-0 right-0 bottom-0 p-7 md:p-10 text-cream">
              <div className="text-xs tracking-[0.18em] uppercase text-brass-light">
                Built to belong
              </div>
              <h3 className="font-display text-3xl md:text-4xl mt-3 max-w-xl leading-tight">
                The best cabinetry feels permanent the first day it is installed.
              </h3>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-px bg-line">
            {serviceStory.map((item) => (
              <div key={item} className="bg-paper p-7 md:p-8 flex items-center justify-between gap-6">
                <span className="font-display text-xl">{item}</span>
                <span className="h-px flex-1 bg-line" />
              </div>
            ))}
          </div>
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
    </>
  );
}
