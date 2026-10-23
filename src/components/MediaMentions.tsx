"use client";

import React from "react";
import Image from "next/image";

const MEDIA_LOGOS = [
  { name: "Outlook", src: "/images/media/new-outlook.png" },
  { name: "Times Bulletin", src: "/images/media/times-bullet-in.png" },
  { name: "The Indian Bulletin", src: "/images/media/theinidan-bullet-in.png" },
  { name: "Republic News India", src: "/images/media/republic-news-india.png" },
  { name: "Hindustan Saga", src: "/images/media/hindustan-saga.png" },
  { name: "Indian Thrive", src: "/images/media/indian-thrive.png" },
  { name: "Indian Scoops", src: "/images/media/indianscoops.png" },
  { name: "RD Times", src: "/images/media/rd-times.png" },
  { name: "Abhyuday Times", src: "/images/media/abhyuday-times.png" },
  { name: "Let's Shine", src: "/images/media/letshine.png" },
  { name: "JNews", src: "/images/media/jnews.png" },
  { name: "News 13", src: "/images/media/n13-1.png" }
];

export default function MediaMentions() {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F7] border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2">
          <div className="sec-sub-title">
            <span>Press Recognition</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#16171A] tracking-tight">
            Our Media Mentions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Viraj Immigration &amp; Smart Geek Visas frequently featured across premier news publications for immigration insights and high visa approval accuracy.
          </p>
        </div>

        {/* Static Grid on Medium/Large screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {MEDIA_LOGOS.map((media, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#E20935]/40 transition-all duration-300 flex items-center justify-center h-24 group"
            >
              <div className="relative w-full h-12 flex items-center justify-center">
                <Image
                  src={media.src}
                  alt={`${media.name} Media Feature`}
                  width={140}
                  height={48}
                  className="max-h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 opacity-75 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
