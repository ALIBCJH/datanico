import React from "react";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const claimSteps = [
  {
    title: "Step 1: Report the Incident Immediately",
    content: `When to Report:\n- For motor accidents or injuries, call us within 24 hours of the incident.\n- For home, property, or liability claims, notify us within 7 days.\n- For health claims (hospital bills), inform us before or within 48 hours of admission, if possible.\n\nHow to Report:\n- Phone: Call 0714 046604\n- Email: info@datani.co.ke\n- Online Form: Visit our claims page and fill the form.\n\nWhat We’ll Ask:\n- Your policy number and contact\n- Date, time, location of the incident\n- Description of what happened\n- Injuries (if any), and treatment\n- Police Abstract (for motor claims)\n\nOnce reported, we share next steps within 24 hours.`,
  },
  {
    title: "Step 2: Submit Required Documents",
    content: `Depending on your policy, you’ll be asked for relevant documents:\n\nMotor Insurance:\n- Claim Form\n- Police Abstract\n- Driver’s License copy\n- Logbook copy\n- Repair Estimates\n- Photos of damage\n\nProperty & Fire:\n- Claim Form\n- Police Abstract (if applicable)\n- Damage Photos\n- Fire Brigade Report\n- Original Receipts\n- Repair/Replacement Quotes\n\nLiability & Others:\n- Detailed Claim Form\n- Witness Reports\n- Medical Reports (if injured)\n- Receipts for repairs/legal\n- Third-party correspondence\n\n💡 Tip: Keep copies (digital or physical) of all submissions.`,
  },
  {
    title: "Step 3: Review, Approval & Settlement",
    content: `1. Document Review:\nOur claims adjuster checks for policy coverage, limits, and completeness.\n\n2. Approval:\nOnce verified, the claim is approved. If there’s any issue (like underinsurance or exclusions), we’ll explain clearly.\n\n3. Settlement:\nFunds are disbursed based on policy terms and type of claim.`,
  },
  {
    title: "Tips for a Faster Claim",
    content: `- Report quickly\n- Submit full paperwork\n- Take clear photos\n- Use network garages/hospitals for faster processing\n- Stay reachable via phone/email`,
  },
];

const RequirementClaim = () => {
  return (
    <section
      className="min-h-screen bg-gray-50 px-6 pt-18 pb-20 max-w-6xl mx-auto"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <h1 className="text-4xl sm:text-5xl font-light text-gray-800 mb-6 text-center">
        Claims Process
      </h1>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
        Filing a claim doesn’t have to be stressful. At Datani Insurance Agency,
        we guide you step-by-step to ensure your claim is handled quickly and
        fairly.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {claimSteps.map(({ title, content }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition duration-200"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FF770F] mb-3">
              {title}
            </h2>
            <p className="text-gray-700 whitespace-pre-line text-base leading-relaxed">
              {content}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Cards */}
      <div className="grid gap-6 sm:grid-cols-2 mt-20">
        <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4 shadow-sm">
          <div className="bg-orange-100 text-[#FF770F] p-3 rounded-full">
            <Phone size={26} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Call Our Hotline
            </h3>
            <p className="text-gray-600 text-base">0714 046604</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4 shadow-sm hover:bg-orange-50 transition">
          <div className="bg-orange-100 text-[#FF770F] p-3 rounded-full">
            <Mail size={26} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Email Our Team
            </h3>
            <p className="text-gray-600 text-base">info@datani.co.ke</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-16 flex-wrap">
        <Link to="/faqs">
          <button className="bg-[#FF770F] hover:bg-orange-700 text-white text-base sm:text-lg px-6 py-3 rounded-xl font-medium transition shadow-md">
            FAQs
          </button>
        </Link>
        <Link to="/claimpage">
          <button className="bg-[#FF770F] hover:bg-orange-700 text-white text-base sm:text-lg px-6 py-3 rounded-xl font-medium transition shadow-md">
            File a Claim
          </button>
        </Link>
      </div>
    </section>
  );
};

export default RequirementClaim;
