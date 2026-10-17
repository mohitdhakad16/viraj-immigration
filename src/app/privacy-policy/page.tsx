import React from "react";
import { ShieldCheck, Lock, FileText } from "lucide-react";
import { COMPANY_INFO } from "@/data/immigrationData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Viraj Immigration",
  description: "Privacy policy and client data protection practices of Viraj Immigration Consultancy Services."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-slate-50 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          
          <div className="space-y-2 border-b border-slate-100 pb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
              Statutory Compliance
            </span>
            <h1 className="text-3xl font-extrabold text-navy-950">
              Privacy & Client Data Policy
            </h1>
            <p className="text-xs text-slate-500">
              Last updated: January 2026 • Compliant with Privacy Act 1988 (Cth Australia) & PIPEDA (Canada)
            </p>
          </div>

          <div className="prose prose-slate text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700">
            <p>
              At <strong>{COMPANY_INFO.legalName}</strong> (&ldquo;Viraj Immigration&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), we take the confidentiality of your immigration documents, personal identity, and financial records with paramount seriousness. Because immigration processing necessitates handling sensitive personal documentation, we maintain strict privacy protocols aligned with statutory obligations in India, Australia, and Canada.
            </p>

            <h3 className="text-lg font-bold text-navy-950">1. Information We Collect</h3>
            <p>
              To evaluate eligibility, verify credentials with assessing bodies (WES, ACS, Engineers Australia, VETASSESS), and prepare visa lodgements, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Identity documents: Passports, national identification cards, birth and marriage certificates.</li>
              <li>Academic records: Transcripts, degree certificates, syllabus outlines, and language test reports (IELTS, PTE, CELPIP).</li>
              <li>Employment verification: Reference letters, payslips, tax assessments, and work contracts.</li>
              <li>Financial records: Bank statements, proof of settlement funds, and audited balance sheets.</li>
            </ul>

            <h3 className="text-lg font-bold text-navy-950">2. How Your Information Is Used</h3>
            <p>
              Your personal data is used solely for the preparation, review, and legal lodgement of immigration applications before official government departments:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Direct submission to the Department of Home Affairs (Australia) via ImmiAccount.</li>
              <li>Direct submission to Immigration, Refugees and Citizenship Canada (IRCC) via authorized representative portals.</li>
              <li>Assessment bodies for credential validation.</li>
            </ul>

            <h3 className="text-lg font-bold text-navy-950">3. Non-Disclosure & Security</h3>
            <p>
              We enforce an absolute non-disclosure guarantee. Your personal details, contact information, and dossiers will never be sold, rented, or transferred to third-party commercial vendors. All documents submitted through our encrypted client portal are safeguarded by 256-bit SSL encryption.
            </p>

            <h3 className="text-lg font-bold text-navy-950">4. Contact Privacy Officer</h3>
            <p>
              If you have queries regarding your stored records or wish to request data purging following visa grant, contact our Data Protection Officer at:{" "}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-gold-600 font-bold underline">
                {COMPANY_INFO.email}
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
