"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronRight, ChevronLeft, Sparkles, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";
import { useConsultationModal } from "@/context/ModalContext";
import CountryFlag from "@/components/CountryFlag";

export default function EligibilityQuiz() {
  const [step, setStep] = useState(1);
  const [destination, setDestination] = useState("Canada");
  const [ageGroup, setAgeGroup] = useState("25-32");
  const [education, setEducation] = useState("Masters");
  const [experience, setExperience] = useState("3-5");
  const [englishScore, setEnglishScore] = useState("CLB 9+ / Superior");
  const [hasJobOffer, setHasJobOffer] = useState("No");
  const [isFinished, setIsFinished] = useState(false);
  const { openModal } = useConsultationModal();

  const calculatePoints = () => {
    let score = 0;
    if (ageGroup === "18-24") score += 25;
    else if (ageGroup === "25-32") score += 30;
    else if (ageGroup === "33-39") score += 25;
    else if (ageGroup === "40-44") score += 15;
    else score += 0;

    if (education === "PhD") score += 20;
    else if (education === "Masters") score += 15;
    else if (education === "Bachelors") score += 15;
    else score += 10;

    if (experience === "8+") score += 15;
    else if (experience === "5-7") score += 10;
    else if (experience === "3-5") score += 10;
    else score += 5;

    if (englishScore === "CLB 9+ / Superior") score += 20;
    else if (englishScore === "CLB 8 / Proficient") score += 10;
    else score += 0;

    if (hasJobOffer === "Yes") score += 10;

    return score;
  };

  const handleFinish = () => {
    setIsFinished(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const totalPoints = calculatePoints();
  const isEligible = totalPoints >= 65;

  return (
    <div className="w-full bg-[#16171A] rounded-3xl p-6 sm:p-10 border border-[#E20935]/30 shadow-2xl text-white relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#E20935]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

      {/* Progress header */}
      <div className="relative z-10 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E20935]/15 text-[#ff476d] border border-[#E20935]/40 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E20935]" />
              <span>Free Instant PR Points Engine</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Official PR Points & Eligibility Checker
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Evaluated against Canada Express Entry CRS & Australia SkillSelect criteria.
            </p>
          </div>
          {!isFinished && (
            <div className="text-right">
              <span className="text-xs font-mono text-[#ff476d]">Step {step} of 4</span>
              <div className="w-32 h-2 bg-black/60 rounded-full overflow-hidden mt-1 border border-white/10">
                <div
                  className="h-full bg-[#E20935] transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quiz Body */}
      {!isFinished ? (
        <div className="relative z-10 space-y-6">
          {/* Step 1: Destination & Age */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <label className="block text-sm sm:text-base font-bold text-white mb-3">
                  1. Select Your Target Migration Destination:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { name: "Canada", code: "CA" },
                    { name: "Australia", code: "AU" },
                    { name: "United Kingdom", code: "GB" },
                    { name: "Europe / Germany", code: "DE" }
                  ].map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setDestination(item.name)}
                      className={`p-4 rounded-xl text-left border text-sm font-bold transition-all cursor-pointer ${
                        destination === item.name
                          ? "bg-[#E20935]/20 border-[#E20935] text-white shadow-lg shadow-red-600/10"
                          : "bg-black/40 border-white/10 text-slate-300 hover:border-[#E20935]/50"
                      }`}
                    >
                      <div className="mb-2.5">
                        <CountryFlag code={item.code} size="md" />
                      </div>
                      <div>{item.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-bold text-white mb-3">
                  2. What is your current age group?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {[
                    { label: "18 - 24 Yrs", val: "18-24" },
                    { label: "25 - 32 Yrs (Max Pts)", val: "25-32" },
                    { label: "33 - 39 Yrs", val: "33-39" },
                    { label: "40 - 44 Yrs", val: "40-44" },
                    { label: "45+ Yrs", val: "45+" }
                  ].map((item) => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => setAgeGroup(item.val)}
                      className={`p-3.5 rounded-xl text-center border text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        ageGroup === item.val
                          ? "bg-[#E20935]/20 border-[#E20935] text-white ring-1 ring-[#E20935]"
                          : "bg-black/40 border-white/10 text-slate-300 hover:border-[#E20935]/50"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Education Qualification */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <label className="block text-sm sm:text-base font-bold text-white mb-3">
                  3. What is your highest completed educational credential?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    { title: "Master's Degree / Post-Graduation", desc: "M.Tech, MBA, M.Sc, MCA or dual degree", val: "Masters" },
                    { title: "Bachelor's Degree (4-Year Program)", desc: "B.Tech, B.E., B.Sc (Hons), B.Arch", val: "Bachelors" },
                    { title: "Doctorate / PhD", desc: "Doctoral research from recognized university", val: "PhD" },
                    { title: "3-Year Diploma or Certificate", desc: "State technical board or polytechnic", val: "Diploma" }
                  ].map((item) => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => setEducation(item.val)}
                      className={`p-4 sm:p-5 rounded-xl text-left border transition-all cursor-pointer ${
                        education === item.val
                          ? "bg-[#E20935]/20 border-[#E20935] text-white shadow-lg shadow-red-600/10"
                          : "bg-black/40 border-white/10 text-slate-300 hover:border-[#E20935]/50"
                      }`}
                    >
                      <div className="text-sm sm:text-base font-bold text-white">{item.title}</div>
                      <div className="text-xs sm:text-sm text-slate-300 mt-1">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Work Experience & English */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <label className="block text-sm sm:text-base font-bold text-white mb-3">
                  4. Years of continuous skilled work experience:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: "1 - 2 Years", val: "1-2" },
                    { label: "3 - 4 Years", val: "3-5" },
                    { label: "5 - 7 Years", val: "5-7" },
                    { label: "8+ Years (Max Pts)", val: "8+" }
                  ].map((item) => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => setExperience(item.val)}
                      className={`p-4 rounded-xl text-center border text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        experience === item.val
                          ? "bg-[#E20935]/20 border-[#E20935] text-white ring-1 ring-[#E20935]"
                          : "bg-black/40 border-white/10 text-slate-300 hover:border-[#E20935]/50"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-bold text-white mb-3">
                  5. English Language Proficiency (IELTS / PTE / CELPIP):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: "Superior (CLB 9+ / PTE 79+)", sub: "8 in Listening, 7 in others", val: "CLB 9+ / Superior" },
                    { title: "Proficient (CLB 8 / PTE 65+)", sub: "Band 7 in all modules", val: "CLB 8 / Proficient" },
                    { title: "Competent (CLB 7 / PTE 50+)", sub: "Band 6 in all modules", val: "Competent" }
                  ].map((item) => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => setEnglishScore(item.val)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                        englishScore === item.val
                          ? "bg-[#E20935]/20 border-[#E20935] text-white shadow-md shadow-red-600/10"
                          : "bg-black/40 border-white/10 text-slate-300 hover:border-[#E20935]/50"
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-bold text-white">{item.title}</div>
                      <div className="text-xs text-slate-300 mt-1">{item.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Job Offer / Sponsorship */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <label className="block text-sm sm:text-base font-bold text-white mb-3">
                  6. Do you currently hold a verified job offer or state sponsorship?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Yes, I have an offer/sponsor", desc: "Adds significant bonus points on CRS/SkillSelect", val: "Yes" },
                    { title: "No, seeking direct skilled pathway", desc: "Eligible for independent skilled migration streams", val: "No" }
                  ].map((item) => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => setHasJobOffer(item.val)}
                      className={`p-5 rounded-xl text-left border transition-all cursor-pointer ${
                        hasJobOffer === item.val
                          ? "bg-[#E20935]/20 border-[#E20935] text-white ring-1 ring-[#E20935]"
                          : "bg-black/40 border-white/10 text-slate-300 hover:border-[#E20935]/50"
                      }`}
                    >
                      <div className="text-sm sm:text-base font-bold text-white">{item.title}</div>
                      <div className="text-xs sm:text-sm text-slate-300 mt-1">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step Navigation Controls */}
          <div className="flex items-center justify-between pt-5 border-t border-white/10">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-200 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Step</span>
              </button>
            ) : <div />}

            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="flex items-center gap-2 px-7 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-md shadow-red-600/20 cursor-pointer"
              >
                <span>Continue</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinish}
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm sm:text-base font-extrabold text-white bg-[#E20935] hover:bg-[#c5072d] active:scale-95 transition-all shadow-xl shadow-red-600/30 uppercase tracking-wider cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Calculate My PR Score</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="relative z-10 text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-4 h-4" />
            <span>Official Assessment Complete</span>
          </div>

          <div>
            <div className="text-slate-300 text-sm">Estimated Points Score for {destination}:</div>
            <div className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff476d] via-[#E20935] to-[#c5072d] mt-2">
              {totalPoints} / 100
            </div>
            <div className="text-xs text-[#ff476d] font-mono mt-1">
              Minimum Benchmark: 65 Points
            </div>
          </div>

          <div className="max-w-xl mx-auto p-5 rounded-2xl bg-black/50 border border-white/10 text-left space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              {isEligible ? (
                <>
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400">High Eligibility Rating! Excellent Profile for Skilled Migration</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-400">Borderline Score — PNP or Spouse Score Optimization Recommended</span>
                </>
              )}
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Based on your age ({ageGroup}), {education} qualification, and {experience} years experience, you are in a prime tier for {destination}. With professional skills assessment guidance, you can maximize your chances of an official Invitation to Apply (ITA).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openModal(`Permanent Residency (${destination})`, destination)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-sm bg-[#E20935] hover:bg-[#c5072d] text-white shadow-xl shadow-red-600/30 active:scale-95 transition-all flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
            >
              <span>Get Detailed Profile Audit & Visa Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setIsFinished(false);
                setStep(1);
              }}
              className="w-full sm:w-auto px-6 py-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              Recalculate Score
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
