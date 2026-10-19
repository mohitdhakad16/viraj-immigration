"use client";

import React, { useState } from "react";
import Image from "next/image";
import EligibilityQuiz from "@/components/EligibilityQuiz";
import {
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  FileCheck2,
  Award
} from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

export default function AssessmentPage() {
  const { openModal } = useConsultationModal();
  const [activeGrid, setActiveGrid] = useState<"canada" | "australia">("australia");

  return (
    <div className="w-full bg-[#f8f6f1]">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#16171A] text-white py-16 sm:py-24 border-b border-white/10 overflow-hidden">
        {/* Authentic Assessment Desk Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80"
            alt="Immigration Points Evaluation and Strategy"
            fill
            priority
            className="object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#16171A]/95 via-[#16171A]/85 to-[#16171A]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(226,9,53,0.22),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#E20935]/20 border border-[#E20935]/40 text-[#ff476d] backdrop-blur-md">
            <Calculator className="w-4 h-4 text-[#E20935]" />
            <span>Official Government Scoring Simulator</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Calculate Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff476d] via-[#E20935] to-[#c5072d]">
              PR Eligibility Score
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Determine your exact points allocation for <strong>Canada Express Entry CRS</strong> and <strong>Australia SkillSelect (Subclass 189/190/491)</strong> in under 60 seconds.
          </p>
        </div>
      </section>

      {/* 2. THE INTERACTIVE ENGINE */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <EligibilityQuiz />
        </div>
      </section>

      {/* 3. POINTS SYSTEM EXPLAINER TABS */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E20935]">
              Statutory Guidelines
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#16171A]">
              Official Points Calculation Criteria
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Compare how Australia and Canada allocate immigration points across age, degrees, language testing, and professional experience.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3 pt-3">
              <button
                onClick={() => setActiveGrid("australia")}
                className={`w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all text-center ${
                  activeGrid === "australia"
                    ? "bg-[#E20935] text-white shadow-lg shadow-red-600/30"
                    : "bg-slate-100 text-[#16171A] hover:bg-slate-200"
                }`}
              >
                🇦🇺 Australia SkillSelect Matrix (Subclass 189/190)
              </button>

              <button
                onClick={() => setActiveGrid("canada")}
                className={`w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all text-center ${
                  activeGrid === "canada"
                    ? "bg-[#E20935] text-white shadow-lg shadow-red-600/30"
                    : "bg-slate-100 text-[#16171A] hover:bg-slate-200"
                }`}
              >
                🇨🇦 Canada Express Entry CRS (1,200 Pts)
              </button>
            </div>
          </div>

          {/* Australia Grid */}
          {activeGrid === "australia" && (
            <div className="bg-[#f8f6f1] rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm animate-in fade-in duration-200">
              <div className="p-4 sm:p-6 bg-[#16171A] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold">Australia General Skilled Migration (GSM)</h3>
                  <p className="text-xs text-[#ff476d]">Minimum Qualifying Threshold: 65 Points</p>
                </div>
                <span className="text-xs bg-[#E20935] text-white px-3 py-1 rounded-full font-bold shrink-0">
                  MARA Compliant
                </span>
              </div>

              <div className="p-4 sm:p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="font-bold text-[#16171A] block mb-1">Age Factor (Max 30 Pts)</span>
                    <ul className="space-y-1 text-slate-600">
                      <li>• 18 - 24 years: 25 Points</li>
                      <li>• 25 - 32 years: <strong>30 Points (Max)</strong></li>
                      <li>• 33 - 39 years: 25 Points</li>
                      <li>• 40 - 44 years: 15 Points</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="font-bold text-[#16171A] block mb-1">English Ability (IELTS/PTE)</span>
                    <ul className="space-y-1 text-slate-600">
                      <li>• Superior (PTE 79+ / IELTS 8+): <strong>20 Points</strong></li>
                      <li>• Proficient (PTE 65+ / IELTS 7+): 10 Points</li>
                      <li>• Competent (PTE 50+ / IELTS 6+): 0 Points (Threshold)</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="font-bold text-[#16171A] block mb-1">Educational Attainment</span>
                    <ul className="space-y-1 text-slate-600">
                      <li>• Doctorate / PhD: <strong>20 Points</strong></li>
                      <li>• Master&apos;s or Bachelor&apos;s Degree: 15 Points</li>
                      <li>• Trade Diploma / Apprenticeship: 10 Points</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="font-bold text-[#16171A] block mb-1">State & Regional Bonus</span>
                    <ul className="space-y-1 text-slate-600">
                      <li>• State Nomination (Subclass 190): <strong>+5 Bonus Points</strong></li>
                      <li>• Regional Nomination (Subclass 491): <strong>+15 Bonus Points</strong></li>
                      <li>• Partner Skills (Competent English): +5 to +10 Points</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Canada Grid */}
          {activeGrid === "canada" && (
            <div className="bg-[#f8f6f1] rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm animate-in fade-in duration-200">
              <div className="p-4 sm:p-6 bg-[#16171A] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold">Canada Comprehensive Ranking System (CRS)</h3>
                  <p className="text-xs text-[#ff476d]">Total Available Scale: 1,200 Points</p>
                </div>
                <span className="text-xs bg-[#E20935] text-white px-3 py-1 rounded-full font-bold shrink-0">
                  CICC Compliant
                </span>
              </div>

              <div className="p-4 sm:p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="font-bold text-[#16171A] block mb-1">Core Human Capital (Max 500 Pts)</span>
                    <ul className="space-y-1 text-slate-600">
                      <li>• Age: Up to 110 Points (Peak between 20-29 yrs)</li>
                      <li>• Education: Up to 150 Points (Master&apos;s / PhD)</li>
                      <li>• First Official Language (CLB 9+): Up to 136 Points</li>
                      <li>• Canadian Work Experience: Up to 70 Points</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="font-bold text-[#16171A] block mb-1">Skill Transferability (Max 100 Pts)</span>
                    <ul className="space-y-1 text-slate-600">
                      <li>• Education + High Language (CLB 9+): <strong>50 Points</strong></li>
                      <li>• Foreign Work Experience + High Language: <strong>50 Points</strong></li>
                      <li>• Certificate of Qualification (Trades): 50 Points</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="font-bold text-[#16171A] block mb-1">Provincial Nomination (PNP)</span>
                    <ul className="space-y-1 text-slate-600">
                      <li>• Provincial Nomination Certificate: <strong>+600 Points (Guaranteed ITA)</strong></li>
                      <li>• Eligible provinces: Ontario, BC, Saskatchewan, Alberta, Manitoba</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="font-bold text-[#16171A] block mb-1">Additional Factors</span>
                    <ul className="space-y-1 text-slate-600">
                      <li>• Arranged Employment (NOC TEER 0, 1, 2, 3): 50 - 200 Points</li>
                      <li>• French Language Proficiency bonus: Up to 50 Points</li>
                      <li>• Sibling in Canada (Citizen/PR): 15 Points</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#16171A] text-white border border-[#E20935]/30 text-center space-y-4 shadow-xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              Need a Legal Strategy to Increase Your Points?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Our registered attorneys specialize in CRS & SkillSelect point fortification — utilizing provincial streams, French bonus points, and partner skill claims.
            </p>
            <div className="pt-2">
              <button
                onClick={() => openModal()}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-lg shadow-red-600/30 uppercase tracking-wider"
              >
                Book One-on-One Score Optimization
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
