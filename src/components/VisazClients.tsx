"use client";

import React from "react";
import Image from "next/image";

const CLIENTS = [
  { id: 1, src: "/visaz-assets/images/clients/1.png", alt: "Global Immigration Partner 1" },
  { id: 2, src: "/visaz-assets/images/clients/2.png", alt: "Global Immigration Partner 2" },
  { id: 3, src: "/visaz-assets/images/clients/3.png", alt: "Global Immigration Partner 3" },
  { id: 4, src: "/visaz-assets/images/clients/4.png", alt: "Global Immigration Partner 4" },
  { id: 5, src: "/visaz-assets/images/clients/5.png", alt: "Global Immigration Partner 5" }
];

export default function VisazClients() {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Outer with Red Lines on Both Sides (Exact Match to theme .clients-section) */}
        <div className="text-center relative mb-14 overflow-hidden">
          <div className="inline-flex items-center justify-center relative">
            {/* Left Red Line */}
            <div className="hidden sm:block absolute right-full mr-8 top-1/2 -translate-y-1/2 w-64 md:w-96 h-[2px] bg-[#E20935]" />
            
            <h5 className="text-xl sm:text-2xl font-bold text-[#16171A] tracking-tight px-4 whitespace-nowrap">
              Trusted Partners
            </h5>

            {/* Right Red Line */}
            <div className="hidden sm:block absolute left-full ml-8 top-1/2 -translate-y-1/2 w-64 md:w-96 h-[2px] bg-[#E20935]" />
          </div>
        </div>

        {/* Client Logos Grid / Strip (Exact Match to Visaz Theme Client Blocks) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-center">
          {CLIENTS.map((c) => (
            <div
              key={c.id}
              className="flex items-center justify-center p-6 rounded-2xl bg-[#FAF8F7] border border-slate-100 hover:border-[#E20935]/40 hover:bg-white hover:shadow-xl transition-all duration-300 group h-28"
            >
              <div className="relative w-36 h-14 flex items-center justify-center">
                <Image
                  src={c.src}
                  alt={c.alt}
                  width={140}
                  height={55}
                  className="max-h-12 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
