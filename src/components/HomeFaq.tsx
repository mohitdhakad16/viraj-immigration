"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Award,
  Sparkles,
  PhoneCall,
  ArrowRight
} from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";
import CountryFlag from "@/components/CountryFlag";

interface FAQItem {
  q: string;
  a: string;
  category: "all" | "australia" | "canada" | "general";
}

const FAQS: FAQItem[] = [
  {
    category: "australia",
    q: "1. How to apply for Australian PR from India?",
    a: "You can apply for Australian PR from India through skilled migration pathways like Subclass 189 (Skilled Independent), Subclass 190 (Skilled Nominated), or Subclass 491 (Skilled Work Regional) visas. The process includes skills assessment through relevant authorities (ACS, Engineers Australia, VETASSESS), achieving required IELTS or PTE scores, submitting an Expression of Interest (EOI) on SkillSelect, securing state nomination (if applying for 190 or 491), and lodging your visa application with comprehensive documentation."
  },
  {
    category: "australia",
    q: "2. What is the eligibility score for Australian PR?",
    a: "The minimum statutory eligibility score for Australian PR is 65 points under the Points Test. Points are awarded based on age (up to 30 pts), education (up to 20 pts), skilled work experience (up to 15 pts), English language proficiency (up to 20 pts for Superior English), and state nomination bonus (5 pts for Subclass 190, 15 pts for Subclass 491). While 65 is the threshold to enter the pool, competitive scores of 75-85 points ensure faster invitations."
  },
  {
    category: "australia",
    q: "3. What is the age limit for Australian PR?",
    a: "The maximum age limit to apply for Australian PR under General Skilled Migration (GSM) is 45 years at the time of invitation. Applicants aged 25–32 years receive the highest points (30 points), making this age bracket ideal for skilled migration. Applicants aged 33–39 receive 25 points, and 40–44 receive 15 points."
  },
  {
    category: "australia",
    q: "4. How long does Australian PR processing take?",
    a: "Australian PR processing typically ranges between 6 to 12 months, depending on the visa subclass, occupation demand, points score, and whether you have a state nomination. Skills assessment takes approximately 4-8 weeks, EOI invitation depends on draw frequency, and final Department of Home Affairs visa processing takes 5-8 months post-lodgement."
  },
  {
    category: "australia",
    q: "5. What is the minimum IELTS score for Australian PR?",
    a: "The statutory minimum IELTS score is 6 bands in each of the 4 modules (Competent English, 0 points). However, scoring 7 bands (Proficient English) grants 10 points, and scoring 8 bands (Superior English) grants 20 bonus points. Most successful IT, engineering, and finance applicants secure 7 or 8 bands in IELTS or 65+/79+ in PTE Academic to maximize their invitation probability."
  },
  {
    category: "general",
    q: "6. Do I need a PR consultant for an immigration visa?",
    a: "While self-application is permitted, working with a licensed MARA migration consultant dramatically increases your approval rate and prevents costly mistakes. Australian and Canadian immigration laws update frequently. A certified consultant ensures accurate ANZSCO job matching, bulletproof CDR/RPL skills reports, EOI optimization, and complete compliance with Department of Home Affairs guidelines."
  },
  {
    category: "general",
    q: "7. Which immigration visa is best for skilled professionals?",
    a: "For skilled professionals with tertiary qualifications and work experience, points-based visas like Australia Subclass 189/190 and Canada Express Entry (Federal Skilled Worker) are the gold standard. They provide immediate permanent residency upon arrival, unrestricted work rights for your spouse, free public healthcare, subsidized world-class schooling for children, and a direct path to citizenship."
  },
  {
    category: "general",
    q: "8. How to choose the best immigration consultant in India?",
    a: "Always verify that the consultancy operates under registered migration lawyers (such as Australian MARA or Canadian CICC registration numbers). Choose a firm with transparent milestone fees, documented grant letters, physical corporate offices in major hubs (like Delhi and NCR), and verifiable client testimonials. Avoid unregistered agents who promise fake job guarantees or lack statutory licenses."
  },
  {
    category: "canada",
    q: "9. What is the minimum CRS score required for Canada Express Entry in 2026?",
    a: "While general Express Entry draws for Federal Skilled Worker (FSW) typically range between 495 to 515 CRS, category-based selection rounds (Healthcare, STEM, Trades, Agriculture, Transport, and French proficiency) frequently issue Invitations to Apply (ITAs) at significantly lower CRS cutoffs between 420 and 460. Furthermore, securing a Provincial Nominee Program (PNP) nomination adds 600 points instantly, guaranteeing an ITA in the subsequent draw."
  },
  {
    category: "general",
    q: "10. What is your refund policy and zero-rejection guarantee?",
    a: "Viraj Immigration operates under a strict Legal Pre-Screening Protocol. We only accept clients whose profiles meet statutory eligibility criteria. If we assess that your points or background are insufficient, we decline the retainer or provide an optimization strategy. For eligible cases, our contracts include clear milestone deliverables and money-back clauses in the event of administrative oversight."
  }
];

export default function HomeFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"all" | "australia" | "canada" | "general">("all");
  const { openModal } = useConsultationModal();

  const filteredFaqs = activeTab === "all"
    ? FAQS
    : FAQS.filter((f) => f.category === activeTab || (activeTab === "general" && f.category === "general"));

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-10 sm:mb-12">
          <div className="sec-sub-title">
            <span>Frequently Asked Questions (FAQs)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight">
            Clear Answers to Your <span className="red-gradient-text">Immigration &amp; PR Queries</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real, legally accurate answers to the most common questions on points testing, processing timelines, IELTS cutoffs, and visa categories.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
            {[
              { id: "all", label: "All Questions", flag: null },
              { id: "australia", label: "Australia PR (189/190/491)", flag: "AU" },
              { id: "canada", label: "Canada Express Entry & PNP", flag: "CA" },
              { id: "general", label: "Legal & General Advice", flag: null }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#E20935] text-white shadow-md shadow-red-600/30 scale-105"
                    : "bg-[#f8f6f1] text-[#16171A] hover:bg-slate-200"
                }`}
              >
                {tab.flag && <CountryFlag code={tab.flag} size="sm" />}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#E20935]/40 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-[#16171A] leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#E20935] text-white rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-2 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-[#f8f6f1]/50 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="max-w-4xl mx-auto mt-12 p-6 sm:p-8 rounded-3xl bg-[#16171A] text-white border border-[#E20935]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-[#E20935]" />
              <span>Still Have Questions About Your Eligibility?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our registered migration barristers evaluate your resume and points free of charge within 24 hours.
            </p>
          </div>

          <button
            onClick={() => openModal()}
            className="btn-style-one w-full sm:w-auto shrink-0"
          >
            <span>Ask a Registered Lawyer</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
