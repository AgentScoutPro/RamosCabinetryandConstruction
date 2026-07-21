import Link from "next/link";
import { business, services, cityPages } from "@/lib/site-data";

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
            Family-owned custom cabinetry, carpentry, and remodeling serving the East Valley since day one.
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
            <li><Link href="/about" className="text-sm text-cream/70 hover:text-cream transition-colors">About</Link></li>
            <li><Link href="/gallery" className="text-sm text-cream/70 hover:text-cream transition-colors">Gallery</Link></li>
            <li><Link href="/reviews" className="text-sm text-cream/70 hover:text-cream transition-colors">Reviews</Link></li>
            <li><Link href="/service-areas" className="text-sm text-cream/70 hover:text-cream transition-colors">Service Areas</Link></li>
            <li><Link href="/contact" className="text-sm text-cream/70 hover:text-cream transition-colors">Contact</Link></li>
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
