"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICES_LIST } from "@/data/immigrationData";
import {
  GraduationCap,
  Briefcase,
  Award,
  TrendingUp,
  Plane,
  ArrowRight,
  Clock,
  CheckCircle2,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";
import InteractiveGlobalMap from "@/components/InteractiveGlobalMap";

export default function ServicesOverviewPage() {
  const [filter, setFilter] = useState("all");
  const { openModal } = useConsultationModal();

  const serviceIcons: Record<string, React.ReactNode> = {
    "study-visa": <GraduationCap className="w-6 h-6 text-[#E20935]" />,
    "work-permit": <Briefcase className="w-6 h-6 text-[#E20935]" />,
    "permanent-residency": <Award className="w-6 h-6 text-[#E20935]" />,
    "business-investor": <TrendingUp className="w-6 h-6 text-[#E20935]" />,
    "tourist-visitor": <Plane className="w-6 h-6 text-[#E20935]" />
  };

  const filteredServices = filter === "all"
    ? SERVICES_LIST
    : SERVICES_LIST.filter((s) => s.id === filter);

  return (
    <div className="w-full bg-[#f8f6f1]">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#16171A] text-white py-14 sm:py-20 border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E20935]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#E20935]/15 border border-[#E20935]/40 text-[#ff476d]">
            <ShieldCheck className="w-4 h-4 text-[#E20935]" />
            <span>Full Spectrum Visa Advisory</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff476d] via-[#E20935] to-[#c5072d]">
              Immigration & Visa
            </span>{" "}
            Practices
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From initial skills assessment and CRS points optimization to federal filing and settlement in Canada, Australia, the UK, Europe, and the USA.
          </p>

          {/* Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Visa Services" },
              { id: "permanent-residency", label: "Permanent Residency (PR)" },
              { id: "work-permit", label: "Work Permits" },
              { id: "study-visa", label: "Student PR Pathways" },
              { id: "business-investor", label: "Business & Investor" },
              { id: "tourist-visitor", label: "Tourist & Visitor" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === tab.id
                    ? "bg-[#E20935] text-white shadow-md shadow-red-600/30"
                    : "bg-white/10 text-slate-300 hover:bg-white/15 border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SERVICES LISTING */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Half */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16171A]/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#E20935] text-white shadow-md">
                      {service.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center">
                      {serviceIcons[service.id]}
                    </div>
                    <div className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      Audited Success Rate: {service.successRate}
                    </div>
                  </div>
                </div>

                {/* Content Half */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl sm:text-2xl font-extrabold text-[#16171A]">
                        {service.title}
                      </h2>
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#E20935]" />
                        {service.processingTime}
                      </span>
                    </div>

                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key Service Inclusions:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {service.keyFeatures.slice(0, 4).map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#E20935] font-bold shrink-0">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Strip */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs text-white bg-[#16171A] hover:bg-black transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Complete Requirements & Process</span>
                      <ArrowRight className="w-4 h-4 text-[#ff476d]" />
                    </Link>

                    <button
                      onClick={() => openModal(service.title)}
                      className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-md shadow-red-600/30 uppercase tracking-wider"
                    >
                      Check Eligibility
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE GLOBAL MOBILITY MAP */}
      <section className="py-20 bg-[#16171A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-950/70 text-[#ff476d] border border-[#E20935]/40">
              Interactive Migration Corridors
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Test Visa Routes & Starting Salaries Across Destination Hubs
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Select any destination hub on the radar to inspect PR streams, processing windows, and in-demand occupations.
            </p>
          </div>
          <InteractiveGlobalMap />
        </div>
      </section>

      {/* 4. CTA */}
      <section className="bg-[#0E0F12] text-white py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <Sparkles className="w-8 h-8 text-[#E20935] mx-auto" />
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Unsure Which Visa Category Applies to Your Background?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Our Senior Licensed Immigration Counsel will assess your qualification, work experience, age, and language test scores to identify the quickest route to approval.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-xl shadow-red-600/30 uppercase tracking-wider"
            >
              Get Free Profile Evaluation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
