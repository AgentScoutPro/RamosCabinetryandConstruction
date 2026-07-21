import type { Metadata } from "next";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "Custom Cabinets & Remodeling in Chandler, AZ",
  description:
    "Custom cabinetry, kitchen and bathroom remodeling, and finish carpentry for homeowners in Chandler, AZ. Licensed, bonded & insured. Free estimates.",
};

export default function ChandlerPage() {
  return <CityPageContent citySlug="chandler" />;
}
