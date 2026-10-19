import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COUNTRIES_LIST } from "@/data/immigrationData";
import CountryFlag from "@/components/CountryFlag";
import { ArrowRight, DollarSign, Award, Compass, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Immigration Destinations | Viraj Immigration",
  description: "Compare PR and skilled migration pathways for Canada, Australia, UK, USA, Germany & Europe, and UAE & Dubai."
};

export default function CountriesPage() {
  // Exclude the legacy 'europe-usa' alias from the main listing
  const destinations = COUNTRIES_LIST.filter((c) => c.id !== "europe-usa");

  return (
    <div className="w-full bg-[#f8f6f1]">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#16171A] text-white pt-24 sm:pt-32 pb-16 sm:pb-20 border-b border-white/10 overflow-hidden">
        {/* Authentic Global Skylines Photography */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1800&q=80"
            alt="Global Migration Destinations"
            fill
            priority
            className="object-cover object-center opacity-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d0f]/85 via-[#16171A]/65 to-[#0c0d0f]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(226,9,53,0.18),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#E20935]/20 border border-[#E20935]/40 text-[#ff476d] backdrop-blur-md shadow-xs">
            <Compass className="w-4 h-4 text-[#E20935]" />
            <span>Official Country Migration Directories</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
            Top Global Destinations for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff476d] via-[#E20935] to-[#c5072d]">
              Permanent Residency & Visas
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
            Explore statutory criteria, minimum points thresholds, salary benchmarks, and direct legal immigration channels across the world&apos;s leading economies.
          </p>
        </div>
      </section>

      {/* 2. COUNTRIES GRID */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {destinations.map((country) => (
              <div
                key={country.id}
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#E20935]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Visual Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <Image
                    src={country.heroImage}
                    alt={country.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16171A]/90 via-[#16171A]/35 to-transparent" />
                  
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <CountryFlag code={country.flagCode} size="md" className="rounded shadow-xs" />
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {country.name}
                      </h3>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-200 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/10">
                      {country.capital}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <p className="text-xs sm:text-[13px] text-slate-600 line-clamp-2 leading-relaxed">
                      {country.overview}
                    </p>

                    {/* Metric mini pills */}
                    <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[10px] text-slate-400 block font-semibold uppercase">Avg Income</span>
                        <span className="text-xs font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                          <DollarSign className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{country.salaryStat?.amount || country.avgSalary}</span>
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[10px] text-slate-400 block font-semibold uppercase">Eligibility</span>
                        <span className="text-xs font-bold text-[#E20935] block truncate mt-0.5">
                          {country.pointsStat?.score || country.minPointsNeeded}
                        </span>
                      </div>
                    </div>

                    {/* Popular Streams Tags */}
                    <div className="pt-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                        Leading Streams
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {country.popularStreams.slice(0, 3).map((stream, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-red-50 text-[#E20935] border border-red-100"
                          >
                            {stream}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/countries/${country.slug}`}
                      className="text-xs font-bold text-[#16171A] group-hover:text-[#E20935] flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <span>Explore {country.name} PR Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={`/countries/${country.slug}`}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#E20935] text-white hover:bg-[#c5072d] transition-colors shadow-xs"
                    >
                      View Visas
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
