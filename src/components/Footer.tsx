"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  Phone,
  Mail,
  ArrowRight,
  ChevronUp,
  MapPin,
  Send,
  CheckCircle2
} from "lucide-react";
import { COMPANY_INFO, SERVICES_LIST } from "@/data/immigrationData";
import { useConsultationModal } from "@/context/ModalContext";

export default function Footer() {
  const { openModal } = useConsultationModal();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 5000);
  };

  const galleryImages = [
    "/visaz-assets/images/resource/gallery-thumb-1.jpg",
    "/visaz-assets/images/resource/gallery-thumb-2.jpg",
    "/visaz-assets/images/resource/gallery-thumb-3.jpg",
    "/visaz-assets/images/resource/gallery-thumb-4.jpg",
    "/visaz-assets/images/resource/gallery-thumb-5.jpg",
    "/visaz-assets/images/resource/gallery-thumb-6.jpg"
  ];

  return (
    <footer className="bg-[#16171A] text-slate-300 relative border-t border-white/10 font-sans">
      
      {/* 1. Visaz Footer Top: Newsletter Row */}
      <div className="border-b border-white/10 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#E20935] flex items-center justify-center text-white shadow-lg">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-white tracking-tight leading-none">
                  VIRAJ<span className="text-[#E20935] ml-1">IMMIGRATION</span>
                </span>
                <span className="text-[11px] text-slate-400 font-bold tracking-wider uppercase mt-1">
                  Visa &amp; Immigration Advisory
                </span>
              </div>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight whitespace-nowrap">
                Subscribe Newsletter
              </h3>

              <form onSubmit={handleSubscribe} className="relative flex items-center w-full sm:w-[420px]">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#E20935]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                    className="w-full bg-white text-[#16171A] placeholder-slate-400 pl-11 pr-32 py-3.5 rounded-xl font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#E20935]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-5 rounded-lg bg-[#E20935] hover:bg-[#c5072d] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{subscribed ? "Joined" : "Subscribe"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Visaz Main Widgets Section */}
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Column 1: About Company */}
            <div className="lg:col-span-4 space-y-6">
              <h4 className="text-lg font-extrabold text-white tracking-tight">
                About Company
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Viraj Immigration &amp; Smart Geek Visas is India&apos;s premier certified immigration consultancy. Backed by 15+ years of legal mastery in Australia PR (subclasses 189, 190, 491) and Canada Express Entry, we deliver audit-ready applications with an audited 99.9% grant rate.
              </p>

              <div className="space-y-4 pt-1">
                {/* Phone Callout */}
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3.5 group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#E20935] flex items-center justify-center text-[#E20935] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-bold">
                      Make A Call
                    </span>
                    <strong className="text-sm sm:text-base font-extrabold text-white group-hover:text-[#E20935] transition-colors">
                      {COMPANY_INFO.phone}
                    </strong>
                  </div>
                </a>

                {/* Email Callout */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3.5 group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#E20935] flex items-center justify-center text-[#E20935] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-bold">
                      Email Us
                    </span>
                    <strong className="text-xs sm:text-sm font-extrabold text-white group-hover:text-[#E20935] transition-colors">
                      {COMPANY_INFO.email}
                    </strong>
                  </div>
                </a>

                {/* Location Callout */}
                <div className="flex items-start gap-3.5 pt-1">
                  <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E20935] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-slate-400">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-bold">
                      Delhi Head Office
                    </span>
                    <span className="text-slate-300 font-medium">
                      10th Floor, Devika Tower, 1001-A, Nehru Place, New Delhi, Delhi 110019
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links (2 Sub-Columns in Visaz Style) */}
            <div className="lg:col-span-5 space-y-6">
              <h4 className="text-lg font-extrabold text-white tracking-tight">
                Quick Link
              </h4>

              <div className="grid grid-cols-2 gap-6">
                <ul className="space-y-3 text-xs sm:text-sm">
                  <li>
                    <Link href="/services/permanent-residency" className="text-slate-300 hover:text-[#E20935] transition-colors flex items-center gap-2 group cursor-pointer">
                      <span className="text-[#E20935] font-bold">›</span>
                      <span>Australia Subclass 189</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/permanent-residency" className="text-slate-300 hover:text-[#E20935] transition-colors flex items-center gap-2 group cursor-pointer">
                      <span className="text-[#E20935] font-bold">›</span>
                      <span>Australia Subclass 190</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/permanent-residency" className="text-slate-300 hover:text-[#E20935] transition-colors flex items-center gap-2 group cursor-pointer">
                      <span className="text-[#E20935] font-bold">›</span>
                      <span>Australia Subclass 491</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/permanent-residency" className="text-slate-300 hover:text-[#E20935] transition-colors flex items-center gap-2 group cursor-pointer">
                      <span className="text-[#E20935] font-bold">›</span>
                      <span>Canada Express Entry</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/study-visa" className="text-slate-300 hover:text-[#E20935] transition-colors flex items-center gap-2 group cursor-pointer">
                      <span className="text-[#E20935] font-bold">›</span>
                      <span>Student &amp; Post-Study Visa</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/work-permit" className="text-slate-300 hover:text-[#E20935] transition-colors flex items-center gap-2 group cursor-pointer">
                      <span className="text-[#E20935] font-bold">›</span>
                      <span>Work Permit Sponsorship</span>
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-3 text-xs sm:text-sm">
                  <li>
                    <Link href="/about" className="text-slate-300 hover:text-[#E20935] transition-colors flex items-center gap-2 group cursor-pointer">
                      <span className="text-[#E20935] font-bold">›</span>
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/assessment" className="text-slate-300 hover:text-[#E20935] transition-colors flex items-center gap-2 group cursor-pointer">
                      <span className="text-[#E20935] font-bold">›</span>
                      <span>Points Calculator</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/success-stories" className="text-slate-300 hover:text-[#E20935] transition-colors flex items-center gap-2 group cursor-pointer">
                      <span className="text-[#E20935] font-bold">›</span>
                      <span>Success Stories</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-slate-300 hover:text-[#E20935] transition-colors flex items-center gap-2 group cursor-pointer">
                      <span className="text-[#E20935] font-bold">›</span>
                      <span>Contact Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="text-slate-300 hover:text-[#E20935] transition-colors flex items-center gap-2 group cursor-pointer">
                      <span className="text-[#E20935] font-bold">›</span>
                      <span>Privacy Policy</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="text-slate-300 hover:text-[#E20935] transition-colors flex items-center gap-2 group cursor-pointer">
                      <span className="text-[#E20935] font-bold">›</span>
                      <span>Terms &amp; Conditions</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Visaz Destination Photo Gallery */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-lg font-extrabold text-white tracking-tight">
                Gallery
              </h4>

              <div className="grid grid-cols-3 gap-2.5">
                {galleryImages.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative h-20 w-full rounded-xl overflow-hidden group shadow-md cursor-pointer border border-white/10"
                    onClick={() => openModal()}
                  >
                    <Image
                      src={src}
                      alt={`Visaz Global Destination ${idx + 1}`}
                      fill
                      sizes="100px"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#E20935]/0 group-hover:bg-[#E20935]/40 transition-colors" />
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openModal()}
                  className="btn-style-one w-full text-center text-xs py-2.5"
                >
                  Book Free Consultation
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Centered Red Scroll-To-Top Button on Border Line */}
      <div className="relative border-t border-white/10">
        <div className="absolute left-1/2 -top-5 -translate-x-1/2 z-20">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-[#E20935] text-white flex items-center justify-center shadow-xl hover:bg-[#c5072d] hover:scale-110 transition-all cursor-pointer"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>

        {/* 4. Visaz Footer Bottom Strip */}
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              Copyright &copy; {new Date().getFullYear()} <strong className="text-white">Viraj Immigration</strong>. All Rights Reserved.
            </div>

            <div className="flex items-center gap-6 text-slate-400">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/assessment" className="hover:text-white transition-colors">FAQs</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Career</Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
