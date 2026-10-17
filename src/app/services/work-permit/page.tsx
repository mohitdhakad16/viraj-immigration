import React from "react";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_LIST } from "@/data/immigrationData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Permit & Skilled Migration | Viraj Immigration",
  description: "Employer sponsorship legal representation, Canada LMIA, Australia Subclass 482 / 186, and UK Skilled Worker Visa filing."
};

export default function WorkPermitPage() {
  const service = SERVICES_LIST.find((s) => s.id === "work-permit")!;
  return <ServiceDetailLayout service={service} />;
}
