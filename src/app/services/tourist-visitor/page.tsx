import React from "react";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_LIST } from "@/data/immigrationData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tourist & Visitor Visa | Viraj Immigration",
  description: "Fast-track Schengen, USA B1/B2, Canada Visitor, and UK Standard Visitor visas with 99.4% approval and refusal case overturning."
};

export default function TouristVisitorPage() {
  const service = SERVICES_LIST.find((s) => s.id === "tourist-visitor")!;
  return <ServiceDetailLayout service={service} />;
}
