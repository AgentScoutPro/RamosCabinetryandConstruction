import type { Metadata } from "next";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "Custom Cabinets & Remodeling in Scottsdale, AZ",
  description:
    "Custom cabinetry, kitchen and bathroom remodeling, and finish carpentry for homeowners in Scottsdale, AZ. Licensed, bonded & insured — free estimates.",
};

export default function ScottsdalePage() {
  return <CityPageContent citySlug="scottsdale" />;
}
