import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { business } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(business.domain),
  title: {
    default: `${business.shortName} | Custom Cabinets & Remodeling in Tempe, AZ`,
    template: `%s | ${business.shortName}`,
  },
  description:
    "Custom cabinetry, kitchen and bathroom remodeling, and finish carpentry for Tempe, Gilbert, Mesa, Chandler, Scottsdale, and Phoenix. Family-owned, licensed, bonded & insured — ROC #364821.",
  openGraph: {
    title: `${business.shortName} | Custom Cabinets & Remodeling`,
    description:
      "Family-owned custom cabinetry and remodeling serving the East Valley. Licensed, bonded & insured — ROC #364821.",
    url: business.domain,
    siteName: business.shortName,
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
  name: business.name,
  telephone: business.phone,
  email: business.email,
  image: `${business.domain}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressRegion: business.state,
    addressCountry: "US",
  },
  areaServed: ["Tempe", "Gilbert", "Mesa", "Chandler", "Scottsdale", "Phoenix"].map((c) => ({
    "@type": "City",
    name: c,
  })),
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "16",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
