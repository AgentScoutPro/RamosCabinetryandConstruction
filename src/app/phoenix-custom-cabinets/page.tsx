import type { Metadata } from "next";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "Custom Cabinets & Remodeling in Phoenix, AZ",
  description:
    "Custom cabinetry, kitchen and bathroom remodeling, and finish carpentry for homeowners in Phoenix, AZ. Licensed, bonded & insured. Free estimates.",
};

export default function PhoenixPage() {
  return <CityPageContent citySlug="phoenix" />;
}
