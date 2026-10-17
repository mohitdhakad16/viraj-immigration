import React from "react";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_LIST } from "@/data/immigrationData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permanent Residency (PR) & Express Entry | Viraj Immigration",
  description: "Official PR filing for Canada Express Entry, Provincial Nominee Programs (PNP), and Australia Subclass 189/190/491 by licensed MARA & CICC counsel."
};

export default function PermanentResidencyPage() {
  const service = SERVICES_LIST.find((s) => s.id === "permanent-residency")!;
  return <ServiceDetailLayout service={service} />;
}
