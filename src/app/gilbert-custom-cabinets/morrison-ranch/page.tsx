import type { Metadata } from "next";
import NeighborhoodPageContent from "@/components/NeighborhoodPageContent";

export const metadata: Metadata = {
  title: "Custom Cabinets & Remodeling in Morrison Ranch, Gilbert AZ",
  description:
    "Functional family cabinetry, pantry organization, and built-ins for Morrison Ranch homes in Gilbert, AZ. Licensed, bonded & insured. Free estimates.",
};

export default function MorrisonRanchPage() {
  return <NeighborhoodPageContent slug="morrison-ranch" />;
}
