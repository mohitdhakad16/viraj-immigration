"use client";

import React from "react";
import { DollarSign, TrendingUp, CheckCircle2, ArrowRight, Sparkles, Building, Briefcase } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

const SALARY_BENCHMARKS = [
  {
    industry: "IT & Software",
    salaryRange: "AUD 85,000 to 150,000",
    inrEquivalent: "₹46.7 Lakhs - ₹82.5 Lakhs / year",
    cadEquivalent: "$77,000 to $136,000 CAD",
    inDemandRoles: "Software Engineers, Cloud Architects, Cyber Security, DevOps",
    prPathways: "Subclass 189 / 190 / 491 / Global Talent",
    growth: "Very High"
  },
  {
    industry: "Healthcare",
    salaryRange: "AUD 75,000 to 140,000",
    inrEquivalent: "₹41.2 Lakhs - ₹77.0 Lakhs / year",
    cadEquivalent: "$68,000 to $127,000 CAD",
    inDemandRoles: "Registered Nurses, General Practitioners, Physiotherapists",
    prPathways: "Priority Fast-Track (Direct 189 & 190 PR)",
    growth: "Critical Demand"
  },
  {
    industry: "Engineering",
    salaryRange: "AUD 80,000 to 135,000",
    inrEquivalent: "₹44.0 Lakhs - ₹74.2 Lakhs / year",
    cadEquivalent: "$72,000 to $122,000 CAD",
    inDemandRoles: "Civil, Mechanical, Electrical, Structural Engineers",
    prPathways: "Engineers Australia CDR & Subclass 189/190",
    growth: "High"
  },
  {
    industry: "Finance & Banking",
    salaryRange: "AUD 70,000 to 130,000",
    inrEquivalent: "₹38.5 Lakhs - ₹71.5 Lakhs / year",
    cadEquivalent: "$63,000 to $118,000 CAD",
    inDemandRoles: "Management Accountants, Auditors, Financial Analysts",
    prPathways: "CPA/CAANZ Assessment & Skilled Migration",
    growth: "Moderate to High"
  },
  {
    industry: "Trades / Technicians",
    salaryRange: "AUD 60,000 to 120,000",
    inrEquivalent: "₹33.0 Lakhs - ₹66.0 Lakhs / year",
    cadEquivalent: "$54,000 to $108,000 CAD",
    inDemandRoles: "Electricians, Carpenters, Plumbers, Heavy Mechanics",
    prPathways: "TRA Assessment & State Sponsorship",
    growth: "Extreme Shortage"
  },
  {
    industry: "Education",
    salaryRange: "AUD 60,000 to 105,000",
    inrEquivalent: "₹33.0 Lakhs - ₹57.7 Lakhs / year",
    cadEquivalent: "$54,000 to $95,000 CAD",
    inDemandRoles: "Early Childhood, Secondary School, Special Needs Teachers",
    prPathways: "AITSL Assessment & Priority Invitations",
    growth: "High"
  }
];

export default function AverageSalariesSection() {
  const { openModal } = useConsultationModal();

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F7] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="sec-sub-title">
            <span>Income &amp; Lifestyle Benchmarks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight leading-tight">
            Average Salaries in Australia
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Australia offers world-leading compensation benchmarks for skilled migrants. Review current statutory salary ranges across core sectors and check how your occupation qualifies.
          </p>
        </div>

        {/* High-Contrast Interactive Table */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#16171A] text-white text-xs uppercase tracking-wider font-extrabold">
                  <th className="py-4 px-6">Industry / Occupation</th>
                  <th className="py-4 px-6">Annual Salary Range (AUD)</th>
                  <th className="py-4 px-6 hidden md:table-cell">INR Equivalent</th>
                  <th className="py-4 px-6 hidden lg:table-cell">Demand Priority</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {SALARY_BENCHMARKS.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-red-50/40 transition-colors duration-150 group"
                  >
                    <td className="py-5 px-6 font-bold text-[#16171A]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-[#E20935] shrink-0" />
                        <div>
                          <span className="text-base text-[#16171A] group-hover:text-[#E20935] transition-colors">
                            {row.industry}
                          </span>
                          <div className="text-xs text-slate-500 font-normal mt-0.5">
                            {row.inDemandRoles}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-5 px-6">
                      <span className="inline-block px-3 py-1 rounded-xl bg-red-50 border border-red-200 text-[#E20935] font-extrabold text-sm sm:text-base">
                        {row.salaryRange}
                      </span>
                    </td>

                    <td className="py-5 px-6 hidden md:table-cell text-slate-600 font-medium text-xs sm:text-sm">
                      {row.inrEquivalent}
                    </td>

                    <td className="py-5 px-6 hidden lg:table-cell">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        {row.growth}
                      </span>
                    </td>

                    <td className="py-5 px-6 text-right">
                      <button
                        onClick={() => openModal(`Salary Assessment: ${row.industry}`)}
                        className="px-4 py-2 rounded-xl text-xs font-bold bg-[#E20935] text-white hover:bg-[#16171A] transition-all shadow-xs cursor-pointer inline-flex items-center gap-1"
                      >
                        <span>Check Visa</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Bottom Footer CTA */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-slate-600 text-center sm:text-left">
              Salary data compiled from official Australian Fair Work and National Skills Commission benchmarks.
            </div>

            <button
              onClick={() => openModal("Australia PR General Assessment")}
              className="btn-style-one text-xs px-6 py-3 w-full sm:w-auto"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
