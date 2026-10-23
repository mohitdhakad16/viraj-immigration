"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

const COUNTRIES = [
  {
    name: "Australia",
    slug: "australia",
    image: "/visaz-assets/images/resource/country1-2.jpg",
    subclass: "Subclass 189, 190, 491"
  },
  {
    name: "Canada",
    slug: "canada",
    image: "/visaz-assets/images/resource/country1-3.jpg",
    subclass: "Express Entry & PNP"
  },
  {
    name: "Germany",
    slug: "europe",
    image: "/visaz-assets/images/resource/country1-4.jpg",
    subclass: "Opportunity Card & Blue Card"
  },
  {
    name: "United Kingdom",
    slug: "uk",
    image: "/visaz-assets/images/resource/country1-5.jpg",
    subclass: "Skilled Worker & Global Talent"
  }
];

export default function VisazCountry() {
  const { openModal } = useConsultationModal();

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F7] relative overflow-hidden border-b border-slate-200">
      {/* Background Monument Sketch */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="/visaz-assets/images/icons/bg-country.png"
          alt="Landmarks Background"
          fill
          className="object-cover object-bottom"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Circular Photo with Consultant (Matches theme_country.png) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-slate-200 border-8 border-white shadow-2xl overflow-hidden flex items-center justify-center">
              <Image
                src="/visaz-assets/images/resource/country1-1.png"
                alt="Consultant Holding Globe and Passports"
                fill
                className="object-contain object-bottom scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Country Grid (Matches theme_country.png) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="sec-sub-title">
                <span>Choose Country</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16171A] tracking-tight leading-tight">
                Immigration: Choose <br className="hidden sm:block" />Your Destination Country
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Explore points benchmarks, annual incomes, lifestyle standards, and direct PR streams for the world&apos;s top immigration corridors.
              </p>
            </div>

            {/* 2x2 Grid of Country Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {COUNTRIES.map((c) => (
                <div
                  key={c.slug}
                  className="bg-white rounded-2xl p-3.5 pr-0 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#E20935]/40 transition-all duration-300 flex items-center justify-between group overflow-hidden"
                >
                  <div className="flex items-center gap-3.5 pl-1.5">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-slate-100 shadow-xs">
                      <Image
                        src={c.image}
                        alt={c.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-[#16171A] group-hover:text-[#E20935] transition-colors leading-tight">
                        <Link href={`/countries/${c.slug}`}>{c.name}</Link>
                      </h4>
                      <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                        {c.subclass}
                      </span>
                    </div>
                  </div>

                  {/* Red Square Arrow Button on the right edge (Exact Visaz match) */}
                  <Link
                    href={`/countries/${c.slug}`}
                    className="w-12 h-14 bg-[#E20935] group-hover:bg-[#16171A] text-white flex items-center justify-center transition-colors shrink-0 rounded-l-none"
                    aria-label={`Explore ${c.name}`}
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/countries"
                className="btn-style-one inline-flex"
              >
                <span>View All Destination Countries &gt;</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
