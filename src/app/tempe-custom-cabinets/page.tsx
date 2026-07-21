import type { Metadata } from "next";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "Custom Cabinets & Remodeling in Tempe, AZ",
  description:
    "Custom cabinetry, kitchen and bathroom remodeling, and finish carpentry for homeowners in Tempe, AZ. Licensed, bonded & insured. Free estimates.",
};

export default function TempePage() {
  return <CityPageContent citySlug="tempe" />;
}
