import React from "react";
import CountryDetailLayout from "@/components/CountryDetailLayout";
import { COUNTRIES_LIST } from "@/data/immigrationData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Skilled Worker & Visa Guide | Viraj Immigration",
  description: "Comprehensive guide to UK Skilled Worker Visa, Global Talent, Scale-up visas, and Indefinite Leave to Remain (ILR)."
};

export default function UKCountryPage() {
  const country = COUNTRIES_LIST.find((c) => c.id === "uk")!;
  return <CountryDetailLayout country={country} />;
}
