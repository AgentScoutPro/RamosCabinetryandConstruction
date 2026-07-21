import type { Metadata } from "next";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "Custom Cabinets & Remodeling in Gilbert, AZ",
  description:
    "Custom cabinetry, kitchen and bathroom remodeling, and finish carpentry for homeowners in Gilbert, AZ. Licensed, bonded & insured — free estimates.",
};

export default function GilbertPage() {
  return <CityPageContent citySlug="gilbert" />;
}
