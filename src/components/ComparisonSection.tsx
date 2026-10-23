"use client";

import React from "react";
import { SMART_GEEK_COMPARISON } from "@/data/immigrationData";
import { CheckCircle2, XCircle, ShieldCheck, ArrowRight, Award } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

export default function ComparisonSection() {
  const { openModal } = useConsultationModal();

  return (
    <section className="py-16 sm:py-24 bg-[#f8f6f1] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-[#E20935] border border-red-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            Competitive Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight">
            What Makes Us Different From Others?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            See how our legally accredited representation, zero-defect process, and transparent fee model outshine conventional unverified agencies.
          </p>
        </div>

        {/* Comparison Table for Desktop, Cards for Mobile */}
        <div className="hidden lg:block bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-12 bg-[#16171A] text-white p-5 border-b border-white/10 items-center text-sm font-extrabold uppercase tracking-wider">
            <div className="col-span-4 pl-3">Evaluation Parameter</div>
            <div className="col-span-4 text-[#E20935] flex items-center gap-2">
              <Award className="w-4 h-4 text-[#E20935]" />
              <span>Viraj Immigration (What We Offer)</span>
            </div>
            <div className="col-span-4 text-slate-400">Other Regular Consultants</div>
          </div>

          <div className="divide-y divide-slate-100">
            {SMART_GEEK_COMPARISON.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-5 items-center hover:bg-slate-50/80 transition-colors text-xs sm:text-sm"
              >
                {/* Feature Name */}
                <div className="col-span-4 font-bold text-[#16171A] pl-3 pr-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E20935] shrink-0" />
                  <span>{row.feature}</span>
                </div>

                {/* Viraj Offer (Green highlight + Check) */}
                <div className="col-span-4 pr-6 flex items-start gap-2.5 font-semibold text-slate-800 bg-red-50/50 p-2.5 rounded-xl border border-red-100/60">
                  <CheckCircle2 className="w-4 h-4 text-[#E20935] shrink-0 mt-0.5" />
                  <span>{row.virajOffer}</span>
                </div>

                {/* Others Don't (Red cross + Muted) */}
                <div className="col-span-4 pl-4 flex items-start gap-2.5 text-slate-500 font-medium">
                  <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{row.othersDont}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View: Cards */}
        <div className="lg:hidden space-y-4">
          {SMART_GEEK_COMPARISON.map((row, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-sm font-extrabold text-[#16171A] flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-2 rounded-full bg-[#E20935]" />
                {row.feature}
              </h4>
              <div className="bg-red-50 p-3 rounded-xl border border-red-100 space-y-1">
                <div className="text-[11px] font-bold text-[#E20935] uppercase tracking-wider flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Viraj Immigration:
                </div>
                <p className="text-xs font-semibold text-slate-800">
                  {row.virajOffer}
                </p>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60 space-y-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5" />
                  Other Consultants:
                </div>
                <p className="text-xs text-slate-500">
                  {row.othersDont}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => openModal()}
            className="btn-style-one"
          >
            <span>Experience The Viraj Advantage — Book Free Consultation</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
