"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useConsultationModal } from "@/context/ModalContext";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Compass,
  GraduationCap,
  Briefcase,
  Award,
  TrendingUp,
  Plane,
  Clock,
  Search,
  LayoutGrid
} from "lucide-react";
import { COMPANY_INFO, SERVICES_LIST, COUNTRIES_LIST } from "@/data/immigrationData";
import CountryFlag from "@/components/CountryFlag";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [countriesDropdown, setCountriesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCountriesOpen, setMobileCountriesOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useConsultationModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setCountriesDropdown(false);
  }, [pathname]);

  const renderServiceIcon = (id: string) => {
    const iconClass = "w-4 h-4 text-[#E20935] group-hover:text-white transition-colors duration-200";
    switch (id) {
      case "study-visa": return <GraduationCap className={iconClass} />;
      case "work-permit": return <Briefcase className={iconClass} />;
      case "permanent-residency": return <Award className={iconClass} />;
      case "business-investor": return <TrendingUp className={iconClass} />;
      case "tourist-visitor": return <Plane className={iconClass} />;
      default: return <Award className={iconClass} />;
    }
  };

  return (
    <>
      {/* 1. Visaz Dark Top Strip (Matches theme_header.png) */}
      <div className="bg-[#16171A] text-slate-300 text-xs py-2.5 border-b border-white/10 hidden md:block w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Top Left: Address and Email */}
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#E20935]" />
              10th Floor, Devika Tower, Nehru Place, New Delhi &amp; Melbourne VIC
            </span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#E20935]" />
              {COMPANY_INFO.email}
            </a>
          </div>

          {/* Top Right: Links, Separator, and Social Icons */}
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-4 text-xs font-semibold">
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/assessment" className="hover:text-white transition-colors">FAQ&apos;s</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>

            <span className="text-slate-600">/</span>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 text-slate-300">
              <a href="#" className="hover:text-[#E20935] transition-colors" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="hover:text-[#E20935] transition-colors" aria-label="X">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="hover:text-[#E20935] transition-colors" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar (Matches theme_header.png) */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white shadow-md py-0 border-slate-200 backdrop-blur-md"
            : "bg-white shadow-xs py-0 border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Solid Red Logo Box (Iconic Visaz Theme Feature) */}
          <div className="flex items-center shrink-0">
            <Link
              href="/"
              className="bg-[#E20935] hover:bg-[#c5072d] text-white px-5 sm:px-7 py-4.5 sm:py-5 flex items-center gap-3 transition-colors cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black tracking-tight text-white leading-none">
                  VIRAJ
                </span>
                <span className="text-[10px] tracking-widest text-white/90 font-bold uppercase mt-0.5">
                  IMMIGRATION
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 mx-auto">
            <Link
              href="/"
              className={`text-sm font-extrabold whitespace-nowrap px-3 py-2 transition-all cursor-pointer relative ${
                pathname === "/"
                  ? "text-[#E20935] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#E20935]"
                  : "text-[#16171A] hover:text-[#E20935]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-sm font-extrabold whitespace-nowrap px-3 py-2 transition-all cursor-pointer relative ${
                pathname === "/about"
                  ? "text-[#E20935] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#E20935]"
                  : "text-[#16171A] hover:text-[#E20935]"
              }`}
            >
              About
            </Link>

            {/* Visa Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1 text-sm font-extrabold whitespace-nowrap px-3 py-2 transition-all cursor-pointer relative ${
                  pathname.startsWith("/services")
                    ? "text-[#E20935] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#E20935]"
                    : "text-[#16171A] hover:text-[#E20935]"
                }`}
              >
                <span>Visa Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#E20935]" />
              </Link>

              {servicesDropdown && (
                <div className="absolute top-full -left-20 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="w-[720px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-4">
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100 px-2">
                      <span className="text-xs uppercase tracking-wider text-[#E20935] font-extrabold flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5" />
                        Regulated Immigration Practices &amp; Pathways
                      </span>
                      <Link href="/services" className="text-xs font-bold text-slate-500 hover:text-[#E20935]">
                        View All Visa Practices →
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {SERVICES_LIST.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group cursor-pointer"
                        >
                          <div className="p-2.5 rounded-xl bg-red-50 border border-red-100 group-hover:bg-[#E20935] transition-all shrink-0 mt-0.5">
                            {renderServiceIcon(service.id)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-sm font-bold text-[#16171A] group-hover:text-[#E20935] transition-colors leading-snug">
                                {service.title}
                              </span>
                              <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded shrink-0">
                                {service.successRate}
                              </span>
                            </div>
                            <p className="text-xs text-slate-600 mt-1 leading-snug line-clamp-2">
                              {service.shortDesc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Countries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCountriesDropdown(true)}
              onMouseLeave={() => setCountriesDropdown(false)}
            >
              <Link
                href="/countries"
                className={`flex items-center gap-1 text-sm font-extrabold whitespace-nowrap px-3 py-2 transition-all cursor-pointer relative ${
                  pathname.startsWith("/countries")
                    ? "text-[#E20935] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#E20935]"
                    : "text-[#16171A] hover:text-[#E20935]"
                }`}
              >
                <span>Countries</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#E20935]" />
              </Link>

              {countriesDropdown && (
                <div className="absolute top-full -left-10 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="w-64 bg-white border border-slate-200 rounded-2xl shadow-2xl p-3 space-y-1">
                    {COUNTRIES_LIST.map((country) => (
                      <Link
                        key={country.id}
                        href={`/countries/${country.slug}`}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer"
                      >
                        <CountryFlag code={country.flagCode} size="sm" />
                        <div>
                          <div className="text-sm font-bold text-[#16171A] group-hover:text-[#E20935] transition-colors">
                            {country.name}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            Points: {country.minPointsNeeded}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/assessment"
              className={`text-sm font-extrabold whitespace-nowrap px-3 py-2 transition-all cursor-pointer relative ${
                pathname === "/assessment"
                  ? "text-[#E20935] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#E20935]"
                  : "text-[#16171A] hover:text-[#E20935]"
              }`}
            >
              Points Calculator
            </Link>

            <Link
              href="/success-stories"
              className={`text-sm font-extrabold whitespace-nowrap px-3 py-2 transition-all cursor-pointer relative ${
                pathname === "/success-stories"
                  ? "text-[#E20935] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#E20935]"
                  : "text-[#16171A] hover:text-[#E20935]"
              }`}
            >
              Success Stories
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-extrabold whitespace-nowrap px-3 py-2 transition-all cursor-pointer relative ${
                pathname === "/contact"
                  ? "text-[#E20935] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#E20935]"
                  : "text-[#16171A] hover:text-[#E20935]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right: Search + Appointment Button + Grid Trigger (Exact Theme Header match) */}
          <div className="flex items-center justify-end shrink-0 gap-3">
            
            {/* Search Icon */}
            <button
              onClick={() => openModal()}
              aria-label="Search"
              className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-[#16171A] hover:text-[#E20935] transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Appointment Button */}
            <button
              onClick={() => openModal()}
              className="btn-style-one hidden sm:inline-flex py-3 px-6 text-xs uppercase tracking-wider font-extrabold cursor-pointer"
            >
              <span>Appointment &gt;</span>
            </button>

            {/* Red Grid Icon Box */}
            <button
              onClick={() => openModal()}
              aria-label="Menu drawer"
              className="w-10 h-10 rounded-xl bg-[#E20935] hover:bg-[#c5072d] text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
            >
              <LayoutGrid className="w-5 h-5" />
            </button>

            {/* Mobile / Tablet Toggle Button */}
            <div className="flex lg:hidden items-center ml-1">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 text-[#16171A] hover:text-[#E20935] cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-8 space-y-3 shadow-2xl max-h-[calc(100vh-75px)] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-1">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#16171A] hover:bg-red-50 hover:text-[#E20935]">
                Home
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#16171A] hover:bg-red-50 hover:text-[#E20935]">
                About Us
              </Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#16171A] hover:bg-red-50 hover:text-[#E20935]">
                Visa Services
              </Link>
              <Link href="/countries" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#16171A] hover:bg-red-50 hover:text-[#E20935]">
                Countries
              </Link>
              <Link href="/assessment" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#16171A] hover:bg-red-50 hover:text-[#E20935]">
                Points Calculator
              </Link>
              <Link href="/success-stories" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#16171A] hover:bg-red-50 hover:text-[#E20935]">
                Success Stories
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#16171A] hover:bg-red-50 hover:text-[#E20935]">
                Contact
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="btn-style-one w-full text-center"
              >
                <span>Book Free Consultation</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
