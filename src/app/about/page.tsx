"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  Compass,
  CheckCircle2,
  Building,
  Scale,
  Clock,
  ArrowRight,
  PhoneCall,
  Globe,
  FileCheck
} from "lucide-react";
import { COMPANY_INFO } from "@/data/immigrationData";
import { useConsultationModal } from "@/context/ModalContext";

export default function AboutPage() {
  const { openModal } = useConsultationModal();

  const leadershipTeam = [
    {
      name: "Marcus Vance, Esq.",
      role: "Principal Migration Barrister & MARA Counsel",
      credentials: "MARN: 1802914 (Australia) | LL.B (Melb)",
      exp: "18+ Years Experience",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      bio: "Former Department of Immigration appeal panelist. Specializes in complex employer nomination appeals, Ministerial Interventions, and Subclass 189/190 legal submissions."
    },
    {
      name: "Siddharth Viraj Mehta",
      role: "Managing Director & Founder",
      credentials: "M.B.A (Global Trade) | Member CAPIC",
      exp: "15+ Years Experience",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      bio: "Pioneered transparent immigration representation in India. Has advised over 4,000 skilled families and business entrepreneurs on permanent residency strategies."
    },
    {
      name: "Elena Rostova, RCIC",
      role: "Senior Canadian Immigration Legal Counsel",
      credentials: "CICC License: R531892 (Canada)",
      exp: "12+ Years Experience",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      bio: "Leading authority on Express Entry CRS optimization and Provincial Nominee Programs (OINP, BC PNP, SINP). Holds a 99.4% approval record across federal PR streams."
    },
    {
      name: "Kavita R. Iyer",
      role: "Head of Corporate & Skill Assessments",
      credentials: "Chartered HR Specialist | QEAC Qualified",
      exp: "11+ Years Experience",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
      bio: "Directs ACS, Engineers Australia, VETASSESS, and WES credential verification dossiers, securing zero-delay assessments for engineering and technology professionals."
    }
  ];

  return (
    <div className="w-full bg-[#f8f6f1]">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#16171A] text-white py-16 sm:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E20935]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#E20935]/15 border border-[#E20935]/40 text-[#ff476d]">
            <Scale className="w-4 h-4 text-[#E20935]" />
            <span>Regulated Immigration Legal Advisory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Advocating For Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff476d] via-[#E20935] to-[#c5072d]">
              Global Future
            </span>{" "}
            With Absolute Legal Integrity
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Founded on the principle that migration is the defining milestone of a family&apos;s generation. We provide licensed representation before Australian, Canadian, UK, and European immigration authorities.
          </p>
        </div>
      </section>

      {/* 2. STATUTORY ACCREDITATIONS DISPLAY */}
      <section className="bg-[#0E0F12] py-12 border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.accreditations.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-[#E20935]/30 flex items-start gap-4 hover:border-[#E20935] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E20935]/20 border border-[#E20935] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#E20935]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{item.title}</div>
                  <div className="text-xs text-[#ff476d] font-mono mt-1">{item.code}</div>
                  <div className="text-[11px] text-slate-400 mt-1">Jurisdiction: {item.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR STORY & PHILOSOPHY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual with Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#E20935]/30">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80"
                  alt="Viraj Immigration Legal Team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#16171A]/20" />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#16171A] text-white p-5 rounded-2xl border border-[#E20935]/40 shadow-2xl max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E20935] text-white flex items-center justify-center font-bold">
                    14+
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Years of Proven Advocacy</div>
                    <div className="text-[11px] text-[#ff476d]">8,500+ Visas Successfully Granted</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-[#E20935] border border-red-200">
                The Viraj Legacy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16171A] tracking-tight">
                Built on Trust, Regulated By Law, Driven By Results
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Over the past decade and a half, immigration policies across Australia, Canada, and the UK have undergone profound tectonic shifts. The era of generic paperwork and guess-work is over; modern immigration requires precision legal advocacy, occupational alignment, and strategic points maneuvering.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At Viraj Immigration, our cases are not handled by sales agents. Every dossier is scrutinized by accredited barristers, licensed MARA migration agents, and CICC consultants. We take full responsibility from initial skill verification to passport stamping and post-landing career setup.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Dual jurisdiction: Australian & Canadian bar licensure",
                  "Over 98.7% audited visa approval track record",
                  "Direct legal representation in refusal review tribunals",
                  "Full transparency: Escrow backed milestone retainer"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#16171A]">
                    <CheckCircle2 className="w-4 h-4 text-[#E20935] shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openModal()}
                  className="px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-[#E20935] hover:bg-[#c5072d] transition-all shadow-md shadow-red-600/30 uppercase tracking-wider"
                >
                  Consult With Our Senior Legal Partners
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEET OUR REGISTERED LEGAL COUNSEL */}
      <section className="py-20 bg-[#f8f6f1] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#16171A] text-white">
              Accredited Barristers & Consultants
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16171A] tracking-tight">
              Meet The Legal Team Behind Your Visa
            </h2>
            <p className="text-sm text-slate-600">
              Registered with official statutory migration boards in Australia, Canada, and globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#E20935] transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16171A] via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#E20935] text-white shadow-xs">
                      {member.exp}
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-base font-extrabold text-[#16171A] group-hover:text-[#E20935] transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-[#E20935]">
                      {member.role}
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 bg-slate-50 p-1.5 rounded border border-slate-100">
                      {member.credentials}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pt-2">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => openModal(member.name)}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-[#16171A] bg-slate-100 hover:bg-[#E20935] hover:text-white transition-colors"
                  >
                    Request Profile Review
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. COMPANY TIMELINE / MILESTONES */}
      <section className="py-20 bg-[#16171A] text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff476d]">
              14 Years of Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Key Milestones in Our Journey
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:w-0.5 before:bg-[#E20935]/30">
            {[
              {
                year: "2011",
                title: "Founding in New Delhi NCR",
                desc: "Established with a focused mission: transparent, legal skilled migration for Indian IT and engineering professionals."
              },
              {
                year: "2015",
                title: "Australian MARA Accreditation",
                desc: "Secured direct registered migration partnership in Melbourne, launching fast-track Subclass 189/190 practice."
              },
              {
                year: "2018",
                title: "Canadian CICC Practice Expansion",
                desc: "Integrated licensed RCIC attorneys for Express Entry CRS score engineering and Provincial Nominee (PNP) processing."
              },
              {
                year: "2021",
                title: "Launch of Investor & Global Talent Stream",
                desc: "Introduced Canada Start-up Visa and European Golden Visa advisory for high-net-worth founders and executives."
              },
              {
                year: "2025",
                title: "8,500+ Visa Grants Milestone",
                desc: "Recognized as one of the premier ethical immigration firms in South Asia and Australasia."
              }
            ].map((milestone, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-start gap-6 md:gap-0 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2 md:px-8">
                  <div className="p-6 rounded-2xl bg-white/5 border border-[#E20935]/30 hover:border-[#E20935] transition-colors space-y-2">
                    <span className="text-xs font-bold text-[#ff476d] font-mono">
                      Year {milestone.year}
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {milestone.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                </div>

                {/* Center Node in Visaz Red */}
                <div className="w-8 h-8 rounded-full bg-[#E20935] text-white font-bold flex items-center justify-center shrink-0 z-10 shadow-lg shadow-red-600/30 mx-auto md:relative md:top-6">
                  ✓
                </div>

                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="bg-gradient-to-r from-[#16171A] to-[#0E0F12] text-white py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Schedule a Confidential Case Review With Our Attorneys
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Book an appointment at our Noida NCR or Melbourne office, or conduct a private video consultation.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => openModal()}
              className="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-xl shadow-red-600/30 uppercase tracking-wider"
            >
              Book Legal Consultation
            </button>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-colors"
            >
              Our Office Addresses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
