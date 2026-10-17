import React from "react";
import CountryDetailLayout from "@/components/CountryDetailLayout";
import { COUNTRIES_LIST } from "@/data/immigrationData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Australia PR & Skilled Migration Guide | Viraj Immigration",
  description: "Official guide to Australia General Skilled Migration (Subclass 189, 190, 491), SkillSelect EOI, and MARA registered agent lodgement."
};

export default function AustraliaCountryPage() {
  const country = COUNTRIES_LIST.find((c) => c.id === "australia")!;
  return <CountryDetailLayout country={country} />;
}
