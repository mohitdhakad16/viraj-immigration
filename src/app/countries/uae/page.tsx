import React from "react";
import CountryDetailLayout from "@/components/CountryDetailLayout";
import { COUNTRIES_LIST } from "@/data/immigrationData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UAE & Dubai Golden Visa Guide | Viraj Immigration",
  description: "Official guide to 10-Year UAE Golden Visas, Dubai Freelancer Green Visas, 0% tax living, and commercial property investor residency."
};

export default function UAECountryPage() {
  const country = COUNTRIES_LIST.find((c) => c.id === "uae")!;
  return <CountryDetailLayout country={country} />;
}
