import React from "react";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_LIST } from "@/data/immigrationData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Visa & PR Pathways | Viraj Immigration",
  description: "Strategic student visa lodgement with clear pathways to post-study work permits (PGWP / 485) and Permanent Residency in Canada & Australia."
};

export default function StudyVisaPage() {
  const service = SERVICES_LIST.find((s) => s.id === "study-visa")!;
  return <ServiceDetailLayout service={service} />;
}
