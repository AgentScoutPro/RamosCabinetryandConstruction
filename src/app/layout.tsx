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
    "Custom cabinetry, kitchen and bathroom remodeling, and finish carpentry for Tempe, Gilbert, Mesa, Chandler, Scottsdale, and Phoenix. Family owned, licensed, bonded & insured, ROC #364821.",
  openGraph: {
    title: `${business.shortName} | Custom Cabinets & Remodeling`,
    description:
      "Family owned custom cabinetry and remodeling serving the East Valley. Licensed, bonded & insured, ROC #364821.",
    url: business.domain,
    siteName: business.shortName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://cramoscabinetry.com/images/og/ramos-cabinetry-hero-kitchen.jpg",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: business.name,
  url: `${business.domain}/`,
  telephone: "+14803588607",
  email: business.email,
  image: "https://cramoscabinetry.com/images/og/ramos-cabinetry-hero-kitchen.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressRegion: business.state,
    addressCountry: "US",
  },
  areaServed: ["Tempe, AZ", "Gilbert, AZ", "Mesa, AZ", "Chandler, AZ", "Scottsdale, AZ", "Phoenix, AZ"].map((c) => ({
    "@type": "City",
    name: c,
  })),
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/profile.php?id=100083588461527",
    "https://www.yelp.com/biz/c-ramos-cabinetry-and-construction-tempe-2",
    "https://www.bbb.org/us/az/tempe/profile/finish-carpentry/cramos-cabinetry-construction-llc-1126-1000105094",
  ],
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
    <html lang="en-US">
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
