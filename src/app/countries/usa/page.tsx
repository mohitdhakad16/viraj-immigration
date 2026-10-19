import React from "react";
import CountryDetailLayout from "@/components/CountryDetailLayout";
import { COUNTRIES_LIST } from "@/data/immigrationData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USA Immigration & Green Card Guide | Viraj Immigration",
  description: "Complete guide to US EB-1, EB-2 NIW, EB-5 Immigrant Investor, L-1 executive transfer, and Green Card permanent residency pathways."
};

export default function USACountryPage() {
  const country = COUNTRIES_LIST.find((c) => c.id === "usa")!;
  return <CountryDetailLayout country={country} />;
}
