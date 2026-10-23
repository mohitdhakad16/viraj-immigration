"use client";

import React, { useState } from "react";
import { OCCUPATIONS_DEMAND, OccupationDemandItem } from "@/data/immigrationData";
import {
  Code,
  Stethoscope,
  Cog,
  TrendingUp,
  Wrench,
  GraduationCap,
  Truck,
  Target,
  ArrowRight,
  Briefcase,
  DollarSign,
  CheckCircle2,
  Sparkles,
  Award
} from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

export default function OccupationDemandSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { openModal } = useConsultationModal();

  const categories = ["All", "Technology", "Healthcare", "Engineering", "Finance", "Trades", "Education", "Logistics", "Marketing"];

  const filtered = selectedCategory === "All"
    ? OCCUPATIONS_DEMAND
    : OCCUPATIONS_DEMAND.filter(item => item.category === selectedCategory);

  const getIcon = (name: string) => {
    const cls = "w-6 h-6 text-[#E20935] group-hover:text-white transition-colors duration-200";
    switch (name) {
      case "Code": return <Code className={cls} />;
      case "Stethoscope": return <Stethoscope className={cls} />;
      case "Cog": return <Cog className={cls} />;
      case "TrendingUp": return <TrendingUp className={cls} />;
      case "Wrench": return <Wrench className={cls} />;
      case "GraduationCap": return <GraduationCap className={cls} />;
      case "Truck": return <Truck className={cls} />;
      case "Target": return <Target className={cls} />;
      default: return <Briefcase className={cls} />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-[#E20935] border border-red-200">
            <Sparkles className="w-3.5 h-3.5" />
            High Demand Migration Corridors
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight">
            Occupation Demand & Average Salaries
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Australia, Canada, and Europe have acute shortages in specialized skilled professions. Explore current salary benchmarks and fast-track PR invitation points.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#E20935] text-white shadow-md shadow-red-600/30 scale-105"
                  : "bg-[#f8f6f1] text-[#16171A] hover:bg-slate-200 hover:text-[#E20935]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Occupations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filtered.map((item: OccupationDemandItem) => (
            <div
              key={item.id}
              className="bg-[#f8f6f1] rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-[#E20935] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#E20935] transition-colors duration-300 shadow-xs">
                    {getIcon(item.iconName)}
                  </div>
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    item.demandLevel === "Critical Shortage"
                      ? "bg-red-100 text-[#E20935] border border-red-200"
                      : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                  }`}>
                    {item.demandLevel}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-[#16171A] group-hover:text-[#E20935] transition-colors duration-200 mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Salary Box */}
                <div className="bg-white rounded-xl p-3 border border-slate-200 space-y-1.5 mb-4 group-hover:border-red-100 transition-colors">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-[#E20935]" />
                    <span>Average Annual Salary:</span>
                  </div>
                  <div className="text-sm font-extrabold text-[#16171A]">
                    {item.salaryAud}
                  </div>
                  <div className="text-xs font-semibold text-slate-600">
                    {item.salaryCad} (Canada)
                  </div>
                </div>

                {/* Pathways Tag */}
                <div className="space-y-1 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Fast-Track PR Streams:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {item.pathways.map((p, i) => (
                      <span key={i} className="text-[11px] font-semibold bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-700">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-3 border-t border-slate-200">
                <button
                  onClick={() => openModal(item.title)}
                  className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-red-600/20 cursor-pointer"
                >
                  <span>Check Your Eligibility Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 bg-gradient-to-r from-[#16171A] via-[#1f2126] to-[#16171A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-[#ff476d] uppercase tracking-wider block">
              Don&apos;t See Your Exact Profession?
            </span>
            <h4 className="text-lg sm:text-2xl font-extrabold text-white">
              Over 400+ Occupations Are Currently Eligible For Skilled PR Migration
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Our registered MARA & CICC lawyers conduct a comprehensive ANZSCO / NOC code assessment to map your qualifications to the highest-scoring category.
            </p>
          </div>

          <button
            onClick={() => openModal()}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-xl shadow-red-600/30 uppercase tracking-wider shrink-0 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Request Custom ANZSCO Evaluation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
