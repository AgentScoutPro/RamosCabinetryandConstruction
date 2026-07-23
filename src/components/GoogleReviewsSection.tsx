"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { business } from "@/lib/site-data";

const clientReviews = [
  {
    author: "Keri McCleary",
    initials: "KM",
    time: "a month ago",
    location: "Arizona",
    text:
      "I had a wonderful experience with my cabinet installation project. The craftsmanship and attention to detail were excellent, and everything was installed beautifully and professionally. Communication throughout the process was great, the …",
  },
  {
    author: "Fran Merz",
    initials: "FM",
    time: "7 months ago",
    location: "Arizona",
    text:
      "The cabinets in our new bathroom are high-quality with excellent functionality, durable and flawless. The workmanship is superb. Chris was very professional, and the pride he takes in his work emphasizes his personal investment and high standards beyond just a job. I would recommend this company without hesitation.",
  },
  {
    author: "Chelsie Grassilli",
    initials: "CG",
    time: "a year ago",
    location: "Arizona",
    text:
      "I had a custom coffee table built by C Ramos Cabinets and Construction, and I couldn’t be happier with the result! I love doing puzzles and wanted a pullout section that I could do my puzzles on and put it away to store safely when I wasn’t …",
  },
  {
    author: "Chris Reddick",
    initials: "CR",
    time: "3 months ago",
    location: "Arizona",
    text:
      "Chris came out and did some cabinets for me in my kitchen he was able to make the whole process super simple he is a true craftsmen I watched him build some of the cabinets wile I was home and he truly is a professional at what he does if I …",
  },
  {
    author: "Tiffanie Wade",
    initials: "TW",
    time: "a year ago",
    location: "Arizona",
    text:
      "Chris is absolutely amazing at cabinetry work! If you're looking for the best, look no further! My new kitchen and bathrooms are so beautiful. Chris was very professional and upfront with any and all questions my husband and I had. Our job …",
  },
  {
    author: "Mikaella Carpeso",
    initials: "MC",
    time: "a year ago",
    location: "Arizona",
    text:
      "So pleased we got to work with Chris. He is so easy to work with and we greatly appreciate the quality of his work! Highly recommend his company and will definitely work with him again in the future.",
  },
  {
    author: "Geoffrey Hoffman",
    initials: "GH",
    time: "a year ago",
    location: "Arizona",
    text:
      "Chris is one of those people that feels like a family member from the moment you start working with him. Professional, honest, and tries to give you options to save money. And of course he does great work.",
  },
  {
    author: "Nina Elli",
    initials: "NE",
    time: "a year ago",
    location: "Arizona",
    text:
      "Love working with Chris who was able to remodel my counter kitchen counter. With the new counter top we are able to have more living room space in our home. While remodeling Chris was able to hear my dogs health concerns and made us a …",
  },
  {
    author: "LORI Arnold",
    initials: "LA",
    time: "a year ago",
    location: "Arizona",
    text:
      "I can’t recommend C Ramos Cabinetry and Construction enough! From start to finish, they exceeded all of my expectations. The team was incredibly thorough, paying close attention to every detail to ensure that my vision came to life …",
  },
  {
    author: "Angelica Elliott",
    initials: "AE",
    time: "11 months ago",
    location: "Arizona",
    text:
      "Excellent work! Happy with cabinet installation and countertop. Answered all questions in timely manner and very quick to respond. Highly recommend. A+++",
  },
  {
    author: "Cheryl Eagy",
    initials: "CE",
    time: "a year ago",
    location: "Arizona",
    text:
      "Professional honest reliable. They installed my laundry room cabinets and did a beautiful job accent wall that I am really proud of.",
  },
  {
    author: "Shelby Moody",
    initials: "SM",
    time: "a year ago",
    location: "Arizona",
    text:
      "Chris did an amazing job at fixing my dog chewed kitchen cabinets. They look new!",
  },
  {
    author: "Karina Rivera",
    initials: "KR",
    time: "a year ago",
    location: "Arizona",
    text:
      "He is the best at what he does! Couldn’t be happier with everything! I thought I was picky, but he is a perfectionist like me. Never felt like herushed his work. Yet! Still got the job done fast. Don’t hesitate to reach out to him! You will not regret it! This guy can do it all!",
  },
  {
    author: "John Hunter",
    initials: "JH",
    time: "a year ago",
    location: "Arizona",
    text:
      "This guy does amazing work! Super happy with the results! 100% will recommend to everyone that needs this type of work.",
  },
  {
    author: "Allison Danielle",
    initials: "AD",
    time: "a year ago",
    location: "Arizona",
    text:
      "It’s a pleasure working with Chris. I love my hallway and bathroom cabinets!",
  },
];

function GoogleIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-label="Google">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function Stars({ size = "sm" }: { size?: "sm" | "lg" }) {
  const className = size === "lg" ? "h-5 w-5 md:h-6 md:w-6" : "h-4 w-4";

  return (
    <div className="flex gap-0.5" aria-label="5 star rating">
      {[0, 1, 2, 3, 4].map((star) => (
        <svg key={star} className={`${className} text-brass`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof clientReviews)[number] }) {
  return (
    <article className="flex min-h-[18rem] w-[300px] shrink-0 select-none flex-col gap-4 border border-line bg-paper p-6 shadow-[0_2px_12px_rgba(36,29,22,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_42px_rgba(36,29,22,0.10)] sm:w-[340px]">
      <div className="flex items-center justify-between gap-3">
        <Stars />
        <div className="flex items-center gap-1.5 rounded-full border border-line bg-paper-dim px-2.5 py-1">
          <GoogleIcon size={14} />
          <span className="text-[10px] font-medium tracking-wide text-charcoal/45">Google</span>
        </div>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-charcoal/68">&ldquo;{review.text}&rdquo;</p>
      <div className="flex items-center gap-3 border-t border-line pt-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-paper-dim text-[11px] font-semibold text-brass">
          {review.initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-charcoal">{review.author}</p>
          <p className="truncate text-xs text-charcoal/42">
            {review.time} · {review.location}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function GoogleReviewsSection() {
  const [paused, setPaused] = useState(false);
  const railItems = useMemo(() => [...clientReviews, ...clientReviews], []);

  return (
    <section className="overflow-hidden bg-paper py-20 md:py-28" aria-label="Google reviews">
      <style jsx>{`
        @keyframes ramos-reviews-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reviews-rail {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="mx-auto mb-14 max-w-7xl px-5 text-center md:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brass">Real Client Reviews</p>
        <h2 className="font-display text-4xl leading-tight text-charcoal md:text-6xl">
          Trusted by Homeowners Across
          <br />
          <span className="text-brass">Tempe, Gilbert, Mesa &amp; the East Valley</span>
        </h2>

        <div className="mt-8 inline-flex flex-col items-center gap-4 border border-line bg-paper-dim px-7 py-5 shadow-[0_2px_12px_rgba(36,29,22,0.04)] sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2.5">
            <GoogleIcon size={28} />
            <span className="font-display text-4xl leading-none text-charcoal">{business.reviewRating}</span>
          </div>
          <div className="hidden h-12 w-px bg-line sm:block" />
          <div className="flex flex-col items-center gap-1.5 sm:items-start">
            <Stars size="lg" />
            <p className="text-sm text-charcoal/55">
              Rated 5 Stars on the live Google Maps profile
            </p>
          </div>
        </div>
      </div>

      <div
        className="relative w-full"
        role="region"
        aria-label="Scrolling Google profile signals"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-paper to-transparent sm:w-32" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-paper to-transparent sm:w-32" />
        <div className="overflow-hidden py-4">
          <div
            className="reviews-rail flex w-max gap-4 px-4"
            style={{
              animation: "ramos-reviews-scroll 38s linear infinite",
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {railItems.map((signal, index) => (
              <ReviewCard key={`${signal.author}-${index}`} review={signal} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 px-5 text-center">
        <Link
          href="/reviews"
          className="inline-flex items-center gap-2.5 text-sm font-medium text-charcoal/55 transition-colors duration-200 hover:text-brass"
        >
          <GoogleIcon size={18} />
          Read All Reviews
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
