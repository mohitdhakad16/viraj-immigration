import React from "react";
import CountryDetailLayout from "@/components/CountryDetailLayout";
import { COUNTRIES_LIST } from "@/data/immigrationData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USA & Europe Immigration Guide | Viraj Immigration",
  description: "Explore Germany Opportunity Card (Chancenkarte), EU Blue Card, Schengen residency, and US EB-5 investor visas."
};

export default function EuropeUSACountryPage() {
  const country = COUNTRIES_LIST.find((c) => c.id === "europe-usa")!;
  return <CountryDetailLayout country={country} />;
}
