"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { COUNTRIES_LIST } from "@/data/immigrationData";
import CountryFlag from "@/components/CountryFlag";
import { ArrowRight, CheckCircle2, DollarSign, Clock, Award, Shield } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

export default function CountryTabs() {
  const [activeTab, setActiveTab] = useState(COUNTRIES_LIST[0].id);
  const { openModal } = useConsultationModal();

  const currentCountry = COUNTRIES_LIST.find((c) => c.id === activeTab) || COUNTRIES_LIST[0];

  return (
    <div className="w-full">
      {/* Country Selector Tabs */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 sm:gap-3 no-scrollbar">
        {COUNTRIES_LIST.map((country) => (
          <button
            key={country.id}
            onClick={() => setActiveTab(country.id)}
            className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
              activeTab === country.id
                ? "bg-[#E20935] text-white shadow-xl shadow-red-600/25 scale-105"
                : "bg-white text-[#16171A] border border-slate-200 hover:border-[#E20935]/40 hover:bg-slate-50"
            }`}
          >
            <CountryFlag code={country.flagCode} size="md" className="rounded shadow-xs" />
            <span>{country.name}</span>
          </button>
        ))}
      </div>

      {/* Country Details Card */}
      <div className="mt-6 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 animate-in fade-in duration-300">
        {/* Left Visual Column */}
        <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
          <Image
            src={currentCountry.heroImage}
            alt={currentCountry.name}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16171A] via-[#16171A]/40 to-transparent" />

          {/* Floating badge info on image */}
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#E20935] text-white uppercase tracking-wider">
              {currentCountry.tagline}
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white flex items-center gap-2.5">
              <CountryFlag code={currentCountry.flagCode} size="lg" />
              <span>{currentCountry.name} Immigration</span>
            </h3>
            <p className="text-sm text-slate-200 line-clamp-2 leading-relaxed">
              {currentCountry.overview}
            </p>
          </div>
        </div>

        {/* Right Info Column */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100">
            <div>
              <span className="text-xs font-bold text-slate-500 block uppercase tracking-wider">Avg Salary</span>
              <span className="text-base sm:text-lg font-extrabold text-[#16171A] flex items-center gap-1 mt-0.5">
                <DollarSign className="w-4 h-4 text-emerald-600 shrink-0" />
                {currentCountry.avgSalary}
              </span>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-500 block uppercase tracking-wider">Min Points</span>
              <span className="text-sm sm:text-base font-extrabold text-[#E20935] block truncate mt-0.5">
                {currentCountry.minPointsNeeded}
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="text-xs font-bold text-slate-500 block uppercase tracking-wider">PR Pathway</span>
              <span className="text-sm sm:text-base font-extrabold text-[#16171A] flex items-center gap-1 mt-0.5">
                <Shield className="w-4 h-4 text-[#E20935] shrink-0" />
                Direct Settlement
              </span>
            </div>
          </div>

          {/* Popular Visa Streams */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
              Top Visa Streams & Programs
            </h4>
            <div className="space-y-3">
              {currentCountry.topVisas.map((visa, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 hover:bg-red-50/50 border border-slate-200/80 transition-colors flex items-start justify-between gap-3"
                >
                  <div>
                    <div className="text-sm sm:text-base font-bold text-[#16171A] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E20935] shrink-0" />
                      <span>{visa.name}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 pl-6 leading-relaxed">
                      {visa.description}
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700 shrink-0">
                    {visa.processing}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Advantages */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Why Immigrate to {currentCountry.name}?
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
              {currentCountry.whyChoose.slice(0, 4).map((advantage, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#E20935] font-bold shrink-0 mt-0.5">✓</span>
                  <span className="leading-snug">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row items-center gap-3 border-t border-slate-100">
            <Link
              href={`/countries/${currentCountry.slug}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#16171A] hover:bg-black transition-colors flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <span>Explore {currentCountry.name} Guide</span>
              <ArrowRight className="w-4 h-4 text-[#ff476d]" />
            </Link>

            <button
              onClick={() => openModal(`Permanent Residency (${currentCountry.name})`, currentCountry.name)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-md shadow-red-600/20 uppercase tracking-wider cursor-pointer text-center"
            >
              Check My {currentCountry.name} Eligibility
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
