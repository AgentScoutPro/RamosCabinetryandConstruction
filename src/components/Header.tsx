"use client";

import Link from "next/link";
import { useState } from "react";
import { business, primaryNav } from "@/lib/site-data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex flex-col leading-none group">
              <span className="font-display text-xl md:text-2xl text-charcoal tracking-tight">
                Ramos
              </span>
              <span className="text-[11px] tracking-[0.18em] uppercase text-brass mt-0.5">
                Cabinetry &amp; Construction
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {primaryNav.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="text-sm tracking-wide text-charcoal hover:text-brass transition-colors"
                    >
                      {item.label}
                    </Link>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 pt-3 w-64">
                        <div className="bg-paper border border-line shadow-lg">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-5 py-3 text-sm text-charcoal hover:text-brass hover:bg-paper-dim border-b border-line last:border-b-0 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm tracking-wide text-charcoal hover:text-brass transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={business.phoneHref}
                className="text-sm font-medium text-charcoal hover:text-brass transition-colors"
              >
                {business.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-walnut text-cream text-sm tracking-wide hover:bg-brass hover:text-walnut transition-colors"
              >
                Free Estimate
              </Link>
            </div>

            <button
              aria-label="Toggle menu"
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setOpen(!open)}
            >
              <span className={`block w-6 h-px bg-charcoal transition-transform ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-6 h-px bg-charcoal transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-px bg-charcoal transition-transform ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-line bg-paper">
            <nav className="mx-auto max-w-7xl px-5 py-4 flex flex-col">
              {primaryNav.map((item) => (
                <div key={item.label} className="py-2 border-b border-line">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block text-base text-charcoal py-1"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 mt-1 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="text-sm text-charcoal/70 py-1"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href={business.phoneHref} className="mt-4 text-center py-3 border border-charcoal text-charcoal">
                Call {business.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 text-center py-3 bg-walnut text-cream"
              >
                Free Estimate
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Sticky mobile CTA bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 border-t border-line-dark">
        <a
          href={business.phoneHref}
          className="flex items-center justify-center py-3.5 bg-charcoal text-cream text-sm font-medium"
        >
          Call {business.phone}
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center py-3.5 bg-brass text-walnut text-sm font-medium"
        >
          Free Estimate
        </Link>
      </div>
      <div className="lg:hidden h-14" />
    </>
  );
}
