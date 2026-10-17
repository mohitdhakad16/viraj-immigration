"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Award,
  Sparkles,
  PhoneCall,
  ArrowRight,
  FileText,
  Clock,
  CheckCircle2
} from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

interface FAQItem {
  q: string;
  a: string;
  category: "all" | "canada" | "australia" | "general";
}

const FAQS: FAQItem[] = [
  {
    category: "general",
    q: "Why should I file through MARA and CICC registered immigration lawyers instead of unaccredited agents?",
    a: "Under Australian law (Migration Act 1958) and Canadian law (IRPA), only registered migration agents (MARA) and licensed Canadian immigration consultants (CICC) can legally provide immigration advisory and represent your case before the High Commission. Unaccredited agents often miscalculate CRS points or submit false declarations, resulting in 5-year bans. Viraj Immigration files 100% of cases through accredited legal counsel with formal statutory liability."
  },
  {
    category: "canada",
    q: "What is the minimum CRS score required for Canada Express Entry in 2026?",
    a: "While general Express Entry draws for Federal Skilled Worker (FSW) typically range between 495 to 515 CRS, category-based selection rounds (Healthcare, STEM, Trades, Agriculture, Transport, and French proficiency) frequently issue Invitations to Apply (ITAs) at significantly lower CRS cutoffs between 420 and 460. Furthermore, securing a Provincial Nominee Program (PNP) nomination adds 600 points instantly, guaranteeing an ITA in the subsequent draw."
  },
  {
    category: "australia",
    q: "How many points do I need for Australia Permanent Residency (Subclass 189/190)?",
    a: "The statutory threshold for lodging an Expression of Interest (EOI) via SkillSelect is 65 points. However, invitation rounds are merit-based. For independent Subclass 189 visas, competitive scores range between 75 and 85 points depending on your ANZSCO code. For Subclass 190 (State Nominated), states award 5 nomination bonus points and frequently invite profiles at 70 to 75 points for shortage occupations."
  },
  {
    category: "general",
    q: "How long does the entire skilled migration PR process take?",
    a: "The complete timeline depends on destination: Canada Express Entry averages 5 to 7 months from ITA lodgement, plus 6 to 8 weeks for initial WES ECA assessment. Australia GSM averages 7 to 10 months including skills assessment (ACS, Engineers Australia, or VETASSESS). UK Skilled Worker and Germany Opportunity Cards can be processed in 4 to 8 weeks."
  },
  {
    category: "general",
    q: "What is your refund policy or zero-rejection guarantee?",
    a: "Viraj Immigration operates under a strict Legal Pre-Screening Protocol. We only accept clients whose profiles meet statutory eligibility criteria. If we assess that your points or background are insufficient, we decline the retainer or provide an optimization strategy. For eligible cases, our contracts include clear milestone deliverables and money-back clauses in the event of administrative oversight."
  },
  {
    category: "canada",
    q: "Can I transition from an international student visa to Permanent Residency?",
    a: "Yes. In Canada, graduating from a designated learning institution qualifies you for a Post-Graduation Work Permit (PGWP) of up to 3 years. Gaining 1 year of Canadian skilled work experience qualifies you for the Canadian Experience Class (CEC), dramatically boosting your CRS score. In Australia, the Subclass 485 Temporary Graduate visa enables you to accumulate local work points toward Subclass 189 or 190 PR."
  },
  {
    category: "general",
    q: "Can my spouse and dependent children be included in the same PR application?",
    a: "Yes. All primary PR programs (Canada Express Entry, Australia Subclass 189/190, UK Skilled Worker, Germany EU Blue Card) permit family reunification. Your spouse and dependent children receive direct permanent residency rights, including unrestricted work rights, subsidized public healthcare, and free government schooling."
  }
];

export default function HomeFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"all" | "canada" | "australia" | "general">("all");
  const { openModal } = useConsultationModal();

  const filteredFaqs = activeTab === "all"
    ? FAQS
    : FAQS.filter((f) => f.category === activeTab || f.category === "general");

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-red-50 text-[#E20935] border border-red-200">
            <HelpCircle className="w-4 h-4 text-[#E20935]" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight">
            Frequently Asked <span className="red-gradient-text">Immigration Questions</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Direct, legally accurate answers to common queries on PR eligibility, CRS cutoff engineering, processing windows, and regulatory standards.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
            {[
              { id: "all", label: "All Questions" },
              { id: "general", label: "Legal & General" },
              { id: "canada", label: "Canada Express Entry" },
              { id: "australia", label: "Australia GSM PR" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#E20935] text-white shadow-md shadow-red-600/25 scale-105"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-[#E20935]/40 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#16171A] leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#E20935] text-white rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/60 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="max-w-4xl mx-auto mt-12 p-6 sm:p-8 rounded-3xl bg-[#16171A] text-white border border-[#E20935]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-[#E20935]" />
              <span>Have a Specific Visa Inquiry?</span>
            </h3>
            <p className="text-xs text-slate-300">
              Our registered migration barristers evaluate your resume and points free of charge.
            </p>
          </div>

          <button
            onClick={() => openModal()}
            className="px-6 py-3.5 rounded-xl font-extrabold text-xs text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-lg shadow-red-600/30 uppercase tracking-wider shrink-0 cursor-pointer"
          >
            Ask a Registered Lawyer
          </button>
        </div>

      </div>
    </section>
  );
}
