"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  Clock,
  ArrowRight
} from "lucide-react";
import { COMPANY_INFO, SERVICES_LIST, COUNTRIES_LIST } from "@/data/immigrationData";
import CountryFlag from "@/components/CountryFlag";

export default function Footer() {
  const getAccreditationFlag = (country: string) => {
    switch (country) {
      case "Australia": return "AU";
      case "Canada": return "CA";
      case "New Zealand": return "NZ";
      default: return null;
    }
  };

  return (
    <footer className="bg-[#16171A] text-slate-300 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E20935]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E20935]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Trust & Accreditations Strip */}
      <div className="bg-[#0E0F12] border-b border-white/10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {COMPANY_INFO.accreditations.map((item, idx) => {
            const flagCode = getAccreditationFlag(item.country);
            return (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-[#E20935]/40 flex items-center justify-center shrink-0">
                  {flagCode ? (
                    <CountryFlag code={flagCode} size="sm" />
                  ) : (
                    <ShieldCheck className="w-5 h-5 text-[#E20935]" />
                  )}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white tracking-wide">{item.title}</div>
                  <div className="text-xs text-[#ff476d] font-mono font-semibold">{item.code}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-24 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#a50625] via-[#E20935] to-[#ff476d] p-0.5 shadow-md shadow-red-500/20">
                <div className="w-full h-full bg-[#16171A] rounded-[10px] flex items-center justify-center">
                  <Compass className="w-6 h-6 text-[#E20935]" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-extrabold tracking-tight text-white block leading-none">
                  VIRAJ<span className="text-[#E20935] ml-1">IMMIGRATION</span>
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-300 block font-bold mt-1">
                  Global Visas & Legal Advisory
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Viraj Immigration is an internationally accredited migration and citizenship consulting firm. We specialize in skilled migration, employer sponsorships, study-to-PR pathways, and investor programs for Australia, Canada, the UK, Europe, and the USA.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E20935] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.officeIndia}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E20935] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`} className="hover:text-[#E20935] transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E20935] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#E20935] transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#E20935] shrink-0" />
                <span>Monday – Saturday: 9:30 AM to 6:30 PM IST</span>
              </div>
            </div>
          </div>

          {/* Visa Programs */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#E20935] pl-2.5">
              Visa Categories
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {SERVICES_LIST.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-[#E20935] transition-colors flex items-center gap-2 group cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#E20935] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-[#ff476d] font-semibold hover:underline block pt-1 cursor-pointer"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#E20935] pl-2.5">
              Destinations
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {COUNTRIES_LIST.filter((c) => c.id !== "europe-usa").map((country) => (
                <li key={country.id}>
                  <Link
                    href={`/countries/${country.slug}`}
                    className="hover:text-[#E20935] transition-colors flex items-center gap-2.5 group cursor-pointer"
                  >
                    <CountryFlag code={country.flagCode} size="sm" />
                    <span>{country.name} Immigration</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/assessment"
                  className="text-[#ff476d] font-semibold hover:underline block pt-1 cursor-pointer"
                >
                  Calculate PR Points →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Tools & Legal */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#E20935] pl-2.5">
              Company & Tools
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="hover:text-[#E20935] transition-colors cursor-pointer">
                  About Our Counsel & MARA Team
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="hover:text-[#E20935] transition-colors cursor-pointer">
                  Free PR Points Calculator
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-[#E20935] transition-colors cursor-pointer">
                  Client Success Stories & Grants
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E20935] transition-colors cursor-pointer">
                  Global Office Locations
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#E20935] transition-colors cursor-pointer">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-[#E20935] transition-colors cursor-pointer">
                  Terms & Conditions
                </Link>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-black/40 border border-[#E20935]/30">
              <div className="flex items-center gap-2 text-xs font-bold text-[#ff476d] mb-1">
                <Award className="w-4 h-4 text-[#E20935]" />
                <span>Need Urgent Legal Advice?</span>
              </div>
              <p className="text-xs text-slate-300">
                Direct phone hotline with our certified case lodgement attorneys.
              </p>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                className="mt-2 inline-block text-xs font-bold text-white hover:text-[#E20935] underline"
              >
                Call {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-slate-400 space-y-4">
          <p className="text-xs leading-relaxed text-slate-300">
            <strong className="text-white">Statutory Disclaimer:</strong> Viraj Immigration Consultancy Services is an independent legal and corporate immigration advisory firm. We are not an official arm of the Department of Home Affairs Australia, Immigration, Refugees and Citizenship Canada (IRCC), UK Visas and Immigration (UKVI), or US USCIS. Migration advice for Australian immigration is rendered in direct partnership with Registered Migration Agents (MARA). Advice for Canadian immigration is provided under the oversight of College of Immigration and Citizenship Consultants (CICC / RCIC) licensed representatives.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/5 gap-2">
            <div>
              © 2026 {COMPANY_INFO.name}. All Rights Reserved.
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/privacy-policy" className="hover:text-[#E20935]">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms-of-service" className="hover:text-[#E20935]">Terms of Service</Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-[#E20935]">Legal Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
