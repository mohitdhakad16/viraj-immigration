import React from "react";
import CountryDetailLayout from "@/components/CountryDetailLayout";
import { COUNTRIES_LIST } from "@/data/immigrationData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Germany & Europe Immigration Guide | Viraj Immigration",
  description: "Explore Germany Opportunity Card (Chancenkarte), EU Blue Card, Schengen permanent residency, and European Golden Visa programs."
};

export default function EuropeCountryPage() {
  const country = COUNTRIES_LIST.find((c) => c.id === "europe")!;
  return <CountryDetailLayout country={country} />;
}
