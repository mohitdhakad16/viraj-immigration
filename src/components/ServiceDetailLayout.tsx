"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceItem } from "@/data/immigrationData";
import {
  Clock,
  CheckCircle2,
  FileText,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  PhoneCall,
  Sparkles,
  HelpCircle,
  Award
} from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";
import { COMPANY_INFO } from "@/data/immigrationData";

interface Props {
  service: ServiceItem;
}

export default function ServiceDetailLayout({ service }: Props) {
  const { openModal } = useConsultationModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full bg-[#f8f6f1]">
      {/* 1. HERO HEADER - Visaz Dark Style */}
      <section className="relative bg-[#16171A] text-white py-16 sm:py-20 border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E20935]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#E20935]/15 border border-[#E20935]/40 text-[#ff476d]">
              <ShieldCheck className="w-4 h-4 text-[#E20935]" />
              <span>Regulated Immigration Practice</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {service.fullDesc}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs">
                <Clock className="w-4 h-4 text-[#E20935]" />
                <span>Processing Time: <strong className="text-white">{service.processingTime}</strong></span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Audited Approval Rate: <strong className="text-white">{service.successRate}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN BODY GRID */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Feature Banner Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16171A]/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 px-4 py-2 rounded-xl text-xs font-bold bg-[#E20935] text-white shadow-md">
                  {service.badge}
                </span>
              </div>

              {/* Legal Scope & Key Features */}
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#16171A]">
                  What Our Immigration Legal Representation Includes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3 hover:border-[#E20935]/40 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#E20935] shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-[#16171A] leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Eligibility Checklist */}
              <div className="space-y-4 p-8 rounded-3xl bg-[#16171A] text-white border border-[#E20935]/30 shadow-xl">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#E20935]" />
                  <h3 className="text-xl font-bold text-white">
                    Mandatory Eligibility Requirements
                  </h3>
                </div>
                <p className="text-xs text-slate-300">
                  Meeting these criteria ensures a frictionless application lodgement through official government channels:
                </p>
                <div className="space-y-3 pt-2">
                  {service.eligibilityRequirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-slate-200">
                      <span className="w-5 h-5 rounded-full bg-[#E20935]/20 text-[#ff476d] border border-[#E20935]/50 flex items-center justify-center shrink-0 text-[11px] font-bold">
                        {idx + 1}
                      </span>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Lodgement Roadmap */}
              <div className="space-y-6">
                <h2 className="text-2xl font-extrabold text-[#16171A]">
                  Step-by-Step Legal Lodgement Roadmap
                </h2>
                <div className="space-y-4">
                  {service.processSteps.map((s) => (
                    <div
                      key={s.step}
                      className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4 hover:border-[#E20935] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#E20935] text-white font-extrabold flex items-center justify-center shrink-0 shadow-md">
                        0{s.step}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#16171A]">{s.title}</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frequently Asked Questions */}
              {service.faqs.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#E20935]" />
                    <h3 className="text-xl font-bold text-[#16171A]">
                      Frequently Asked Questions
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {service.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-slate-200 overflow-hidden bg-white"
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          className="w-full p-4 text-left font-bold text-xs sm:text-sm text-[#16171A] flex items-center justify-between hover:bg-slate-50 transition-colors"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-[#E20935] transition-transform ${
                              openFaq === idx ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openFaq === idx && (
                          <div className="p-4 bg-slate-50 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Sidebar (4 Cols) - Notice Generous Top Spacing when Sticky! */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 lg:top-32 space-y-6 pt-2">
                
                {/* Consultation Lead Card - Visaz Red Design */}
                <div className="p-7 rounded-3xl bg-[#16171A] text-white border border-[#E20935]/30 shadow-2xl space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#ff476d] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-[#E20935]" />
                    <span>Free Evaluation</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">
                    Check Your Eligibility for {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Have our licensed MARA & CICC counsels audit your credentials and provide a free success feasibility report.
                  </p>

                  <div className="pt-2 space-y-3">
                    <button
                      onClick={() => openModal(service.title)}
                      className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-lg shadow-red-600/30 uppercase tracking-wider"
                    >
                      Apply For Case Evaluation
                    </button>

                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                      className="w-full py-3 rounded-xl font-bold text-xs text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-2"
                    >
                      <PhoneCall className="w-4 h-4 text-[#E20935]" />
                      <span>Call {COMPANY_INFO.phone}</span>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-2 text-[11px] text-slate-300">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>MARA & CICC Regulated Filing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-[#E20935]" />
                      <span>Transparent Retainer Agreement</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
