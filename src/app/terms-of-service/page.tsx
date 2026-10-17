import React from "react";
import { ShieldCheck, Scale, FileText } from "lucide-react";
import { COMPANY_INFO } from "@/data/immigrationData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Viraj Immigration",
  description: "Terms of service, client representation agreement, and legal retainer protocols of Viraj Immigration Consultancy Services."
};

export default function TermsOfServicePage() {
  return (
    <div className="w-full bg-slate-50 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          
          <div className="space-y-2 border-b border-slate-100 pb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
              Legal Retainer & Representation
            </span>
            <h1 className="text-3xl font-extrabold text-navy-950">
              Terms & Conditions of Service
            </h1>
            <p className="text-xs text-slate-500">
              Effective Date: January 2026 • Viraj Immigration Consultancy Services
            </p>
          </div>

          <div className="prose prose-slate text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700">
            <h3 className="text-lg font-bold text-navy-950">1. Regulatory Status & Scope of Advisory</h3>
            <p>
              {COMPANY_INFO.legalName} is a private migration consulting firm. Australian migration services are performed under the direct professional supervision of Registered Migration Agents bound by the MARA Code of Conduct. Canadian immigration advisory is rendered in accordance with College of Immigration and Citizenship Consultants (CICC) regulations.
            </p>

            <h3 className="text-lg font-bold text-navy-950">2. No Guarantee of Visa Grant</h3>
            <p>
              Under MARA and CICC statutory regulations, no immigration advisor, barrister, or agency can or may guarantee the approval of a visa. The authority to grant, refuse, or cancel visas rests solely with the sovereign government officers of the respective High Commissions, Embassies, and Departments of Immigration. While we maintain a 98.7% audited historical success rate through strict file review, final adjudications are sovereign government determinations.
            </p>

            <h3 className="text-lg font-bold text-navy-950">3. Client Honesty & Document Authenticity</h3>
            <p>
              Clients agree to provide genuine, authentic, and accurate records. Submission of fraudulent, altered, or fabricated documents is strictly prohibited by law (e.g., Section 4020 Public Interest Criterion in Australia or Section 40 Misrepresentation in Canada) and will result in immediate termination of the retainer agreement without refund.
            </p>

            <h3 className="text-lg font-bold text-navy-950">4. Fee Schedule & Milestones</h3>
            <p>
              Professional legal fees are structured in transparent, agreed milestones corresponding to stages of work: Profile Assessment, Skill Assessment / ECA submission, Expression of Interest (EOI) / Invitation to Apply (ITA), and Final Visa Lodgement.
            </p>

            <h3 className="text-lg font-bold text-navy-950">5. Governing Law & Dispute Resolution</h3>
            <p>
              All client contracts and retainer agreements are governed by the applicable laws of the jurisdiction of execution, with direct recourse to the respective statutory regulatory oversight bodies (MARA Australia / CICC Canada).
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
