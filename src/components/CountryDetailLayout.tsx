"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CountryItem } from "@/data/immigrationData";
import {
  DollarSign,
  Award,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronRight,
  PhoneCall,
  Sparkles,
  MapPin,
  Building
} from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";
import { COMPANY_INFO } from "@/data/immigrationData";
import CountryFlag from "@/components/CountryFlag";

interface Props {
  country: CountryItem;
}

export default function CountryDetailLayout({ country }: Props) {
  const { openModal } = useConsultationModal();

  return (
    <div className="w-full bg-[#f8f6f1]">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#16171A] text-white py-16 sm:py-24 border-b border-white/10 overflow-hidden">
        {/* Authentic Country Hero Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={country.heroImage}
            alt={country.name}
            fill
            priority
            className="object-cover object-center opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#16171A]/95 via-[#16171A]/85 to-[#16171A]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(226,9,53,0.22),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#E20935]/20 border border-[#E20935]/40 text-[#ff476d] backdrop-blur-md">
              <CountryFlag code={country.flagCode} size="sm" />
              <span>Official Country Immigration Guide</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Immigrate to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff476d] via-[#E20935] to-[#c5072d]">
                {country.name}
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              {country.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              {country.overview}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-4">
              <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] text-slate-400 block mb-0.5">Average Income</span>
                <span className="text-sm sm:text-base font-bold text-white flex items-center gap-1">
                  <DollarSign className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">{country.avgSalary}</span>
                </span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] text-slate-400 block mb-0.5">Min Points Required</span>
                <span className="text-xs sm:text-sm font-bold text-[#ff476d] block leading-tight">
                  {country.minPointsNeeded}
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] text-slate-400 block mb-0.5">Capital City</span>
                <span className="text-sm sm:text-base font-bold text-white flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-[#E20935] shrink-0" />
                  <span>{country.capital}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BODY CONTENT & SIDEBAR */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Country Hero Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src={country.heroImage}
                  alt={`${country.name} immigration landscape`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16171A]/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#E20935] text-white shadow-md flex items-center gap-2">
                  <CountryFlag code={country.flagCode} size="sm" />
                  <span>{country.name} PR & Skilled Visas</span>
                </span>
              </div>

              {/* Top Visa Streams */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#16171A]">
                  Leading Visa Programs for {country.name}
                </h2>
                <div className="space-y-4">
                  {country.topVisas.map((v, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#E20935] transition-colors space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-[#E20935] shrink-0" />
                          <h3 className="text-base sm:text-lg font-bold text-[#16171A]">{v.name}</h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold px-3 py-1 rounded-md bg-red-50 text-[#E20935] border border-red-100">
                            {v.type}
                          </span>
                          <span className="text-xs text-slate-500 font-mono">
                            {v.processing}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lifestyle & Benefits */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#16171A] text-white border border-[#E20935]/30 shadow-xl space-y-6">
                <div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ff476d]">
                    Why Choose {country.name}?
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mt-1">
                    Quality of Life, Healthcare & Citizenship
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {country.whyChoose.map((perk, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-[13px] text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Streams Ticker */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-[#16171A]">
                  Targeted Occupation & Stream Pathways
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {country.popularStreams.map((stream, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-white text-[#16171A] text-xs font-bold border border-slate-200 shadow-2xs"
                    >
                      {stream}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar (4 Cols) - Clean sticky top spacing */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                
                <div className="p-6 sm:p-8 rounded-3xl bg-[#16171A] text-white border border-[#E20935]/30 shadow-2xl space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#ff476d] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-[#E20935]" />
                    <span>Licensed Assessment</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Immigrate to {country.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Calculate your points and find out if you qualify for direct PR or work permits in {country.name}.
                  </p>

                  <div className="pt-2 space-y-3">
                    <button
                      onClick={() => openModal(`Permanent Residency (${country.name})`, country.name)}
                      className="w-full py-3 sm:py-3.5 rounded-xl font-extrabold text-xs sm:text-sm text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-lg shadow-red-600/30 uppercase tracking-wider cursor-pointer"
                    >
                      Check My {country.name} Points
                    </button>

                    <Link
                      href="/assessment"
                      className="w-full py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Use Points Calculator</span>
                      <ChevronRight className="w-4 h-4 text-[#E20935]" />
                    </Link>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-2.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>MARA & CICC Licensed Representation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#E20935]" />
                      <span>Official High Commission Submissions</span>
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
