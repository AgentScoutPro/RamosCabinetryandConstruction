import Link from "next/link";
import Image from "next/image";
import { business, services, cityPages } from "@/lib/site-data";

const facebookUrl = "https://www.facebook.com/share/18f5iss6YR/?mibextid=wwXIfr";

export default function Footer() {
  return (
    <footer className="bg-walnut text-cream/80">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="font-display text-xl text-cream">Ramos</div>
          <div className="text-[11px] tracking-[0.18em] uppercase text-brass-light mt-1">
            Cabinetry &amp; Construction
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/60">
            Family owned custom cabinetry, carpentry, and remodeling serving the East Valley since day one.
          </p>
          <a href={business.phoneHref} className="block mt-4 text-sm text-cream hover:text-brass-light transition-colors">
            {business.phone}
          </a>
          <a href={`mailto:${business.email}`} className="block mt-1 text-sm text-cream/60 hover:text-brass-light transition-colors">
            {business.email}
          </a>
          <p className="mt-4 text-xs text-cream/50">
            Licensed, Bonded &amp; Insured · {business.license}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <Image
              src="/images/trust/ramos-trust-badge.svg"
              alt="Licensed, Bonded & Insured, C Ramos Cabinetry and Construction, ROC #364821"
              width={80}
              height={80}
              loading="lazy"
              className="h-[72px] w-auto"
            />
            <a
              href="https://www.bbb.org/us/az/tempe/profile/finish-carpentry/cramos-cabinetry-construction-llc-1126-1000105094"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="C Ramos Cabinetry and Construction BBB Accredited Business Profile"
              className="inline-flex"
            >
              <Image
                src="/images/trust/bbb-accredited-seal.png"
                alt="BBB Accredited Business seal"
                width={132}
                height={200}
                loading="lazy"
                className="h-[72px] w-auto"
              />
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="C Ramos Cabinetry and Construction on Facebook"
              className="inline-flex h-[44px] w-[44px] items-center justify-center border border-cream/20 text-cream transition-colors hover:border-brass-light hover:text-brass-light"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.5-3.91 3.79-3.91 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.91h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.14em] uppercase text-brass-light mb-4">Services</h3>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-sm text-cream/70 hover:text-cream transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.14em] uppercase text-brass-light mb-4">Service Areas</h3>
          <ul className="space-y-2.5">
            {cityPages.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}-custom-cabinets`} className="text-sm text-cream/70 hover:text-cream transition-colors">
                  {c.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.14em] uppercase text-brass-light mb-4">Company</h3>
          <ul className="space-y-2.5">
            <li><Link href="/" className="text-sm text-cream/70 hover:text-cream transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-sm text-cream/70 hover:text-cream transition-colors">About</Link></li>
            <li><Link href="/contact" className="text-sm text-cream/70 hover:text-cream transition-colors">Contact</Link></li>
            <li><Link href="/gallery" className="text-sm text-cream/70 hover:text-cream transition-colors">Gallery</Link></li>
            <li><Link href="/reviews" className="text-sm text-cream/70 hover:text-cream transition-colors">Reviews</Link></li>
            <li><Link href="/service-areas" className="text-sm text-cream/70 hover:text-cream transition-colors">Service Areas</Link></li>
          </ul>
        </div>
      </div>

      <div className="reveal-divider-dark">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-cream/40">
          <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
          <span>{business.license} · Licensed, Bonded &amp; Insured · Serving the East Valley, AZ</span>
        </div>
      </div>
    </footer>
  );
}
