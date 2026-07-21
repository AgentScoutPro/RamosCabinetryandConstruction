import type { Metadata } from "next";
import CityPageContent from "@/components/CityPageContent";

export const metadata: Metadata = {
  title: "Custom Cabinets & Remodeling in Mesa, AZ",
  description:
    "Custom cabinetry, kitchen and bathroom remodeling, and finish carpentry for homeowners in Mesa, AZ. Licensed, bonded & insured — free estimates.",
};

export default function MesaPage() {
  return <CityPageContent citySlug="mesa" />;
}
