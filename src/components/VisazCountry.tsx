"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

const COUNTRIES = [
  {
    name: "Australia",
    slug: "australia",
    image: "/visaz-assets/images/resource/country1-2.jpg",
    subclass: "Subclass 189, 190, 491"
  },
  {
    name: "Dubai",
    slug: "dubai",
    image: "/visaz-assets/images/resource/country1-3.jpg",
    subclass: "Golden Visa & Investor PR"
  },
  {
    name: "Germany",
    slug: "europe",
    image: "/visaz-assets/images/resource/country1-4.jpg",
    subclass: "Opportunity Card & Blue Card"
  },
  {
    name: "United States",
    slug: "canada",
    image: "/visaz-assets/images/resource/country1-5.jpg",
    subclass: "Skilled & Direct PR Streams"
  }
];

export default function VisazCountry() {
  const { openModal } = useConsultationModal();

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F7] relative overflow-hidden border-t-4 border-[#E20935] border-b border-slate-200">
      {/* Background Monument Sketch at bottom right (Matches theme_country.png) */}
      <div className="absolute bottom-0 right-0 w-2/3 h-64 pointer-events-none opacity-20 z-0">
        <Image
          src="/visaz-assets/images/icons/bg-country.png"
          alt="Landmarks Background"
          fill
          className="object-contain object-bottom-right"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Consultant Image standing in front of circular bg-overlay.png */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-[340px] h-[400px] sm:w-[420px] sm:h-[480px]">
              
              {/* Circular Decorative Backdrop (bg-overlay.png from Theme) */}
              <div className="absolute bottom-4 left-2 w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full bg-cover bg-center shadow-2xl pointer-events-none z-0"
                   style={{ backgroundImage: `url('/visaz-assets/images/icons/bg-overlay.png')` }}>
              </div>

              {/* Consultant Figure - breaks out of circle at top/right without clipping */}
              <div className="relative w-full h-full z-10">
                <Image
                  src="/visaz-assets/images/resource/country1-1.png"
                  alt="Consultant Holding Globe and Passports"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain object-bottom drop-shadow-2xl"
                  priority
                />
              </div>

            </div>
          </div>

          {/* Right Column: Country Grid (Matches theme_country.png) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2.5">
              <div className="sec-sub-title">
                <span>Choose Country</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight leading-tight">
                Immigration Choose <br className="hidden sm:block" />Your Country
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Explore points benchmarks, annual incomes, lifestyle standards, and direct PR streams for the world&apos;s top immigration corridors.
              </p>
            </div>

            {/* 2x2 Grid of Country Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {COUNTRIES.map((c) => (
                <div
                  key={c.name}
                  className="bg-white p-5 pr-0 shadow-[0_10px_60px_rgba(171,171,171,0.25)] hover:shadow-2xl transition-all duration-300 flex items-center justify-between group relative overflow-hidden"
                >
                  <div className="flex items-center gap-4 pl-1">
                    {/* Round Flag/City Photo with 360 Spin on Hover */}
                    <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-slate-100 shadow-sm transition-transform duration-700 group-hover:rotate-[360deg]">
                      <Image
                        src={c.image}
                        alt={c.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#16171A] group-hover:text-[#E20935] transition-colors leading-tight">
                        <Link href={`/countries/${c.slug}`}>{c.name}</Link>
                      </h4>
                      <span className="text-xs text-slate-500 font-medium block mt-1">
                        {c.subclass}
                      </span>
                    </div>
                  </div>

                  {/* Square Red Arrow Button at Top Right / Edge */}
                  <Link
                    href={`/countries/${c.slug}`}
                    className="w-11 h-11 bg-[#E20935] group-hover:bg-[#16171A] text-white flex items-center justify-center transition-colors shrink-0"
                    aria-label={`Explore ${c.name}`}
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <Link
                href="/countries"
                className="btn-style-one inline-flex"
              >
                <span>View All Countries &gt;</span>
              </Link>

              {/* Theme Vertical Pagination Dots */}
              <div className="hidden sm:flex items-center gap-1.5 pr-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E20935]" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
