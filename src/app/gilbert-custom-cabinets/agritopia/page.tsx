import type { Metadata } from "next";
import NeighborhoodPageContent from "@/components/NeighborhoodPageContent";

export const metadata: Metadata = {
  title: "Custom Cabinets & Millwork in Agritopia, Gilbert AZ",
  description:
    "Custom millwork, built-ins, and warm finishes for Agritopia's Craftsman-style homes in Gilbert, AZ. Licensed, bonded & insured — free estimates.",
};

export default function AgritopiaPage() {
  return <NeighborhoodPageContent slug="agritopia" />;
}
