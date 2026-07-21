import type { MetadataRoute } from "next";
import { business, services, cityPages, neighborhoodPages } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.domain;
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/gallery",
    "/reviews",
    "/service-areas",
    "/services",
  ];

  const serviceRoutes = services.map((s) => `/services/${s.slug}`);
  const cityRoutes = cityPages.map((c) => `/${c.slug}-custom-cabinets`);
  const neighborhoodRoutes = neighborhoodPages.map(
    (n) => `/${n.citySlug}-custom-cabinets/${n.slug}`
  );

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...neighborhoodRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
