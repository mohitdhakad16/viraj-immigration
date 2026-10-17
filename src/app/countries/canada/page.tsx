import React from "react";
import CountryDetailLayout from "@/components/CountryDetailLayout";
import { COUNTRIES_LIST } from "@/data/immigrationData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canada Immigration & PR Guide | Viraj Immigration",
  description: "Complete guide to Canada Express Entry, PNP provincial nominations, CRS points calculation, and citizenship pathways."
};

export default function CanadaCountryPage() {
  const country = COUNTRIES_LIST.find((c) => c.id === "canada")!;
  return <CountryDetailLayout country={country} />;
}
