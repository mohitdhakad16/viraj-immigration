import React from "react";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_LIST } from "@/data/immigrationData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business & Investor Visa | Viraj Immigration",
  description: "High-net-worth investor immigration: Canada Start-Up Visa, European Golden Visas (Greece, Portugal), and Australia Subclass 188/888."
};

export default function BusinessInvestorPage() {
  const service = SERVICES_LIST.find((s) => s.id === "business-investor")!;
  return <ServiceDetailLayout service={service} />;
}
