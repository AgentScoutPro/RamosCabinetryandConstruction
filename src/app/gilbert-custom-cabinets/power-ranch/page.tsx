import type { Metadata } from "next";
import NeighborhoodPageContent from "@/components/NeighborhoodPageContent";

export const metadata: Metadata = {
  title: "Custom Cabinets & Remodeling in Power Ranch, Gilbert AZ",
  description:
    "Kitchen modernization, custom islands, and cabinetry upgrades for Power Ranch homes in Gilbert, AZ. Licensed, bonded & insured. Free estimates.",
};

export default function PowerRanchPage() {
  return <NeighborhoodPageContent slug="power-ranch" />;
}
