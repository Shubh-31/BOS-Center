import { CheckIcon } from "lucide-react";
import React from "react";

export const BlogDescription = () => {
  const services = [
    "Account Management: Create and manage savings, checking, and fixed deposit accounts",
    "Loan Management: Automate loan origination, disbursement, and EMI tracking",
    "Transaction Processing: Real-time fund transfers, payments, and reconciliations",
    "Customer Relationship Management (CRM): Maintain detailed customer profiles",
    "Regulatory Compliance: Automated tax and audit reporting",
    "Digital Banking Integration: Internet and mobile banking platforms",
  ];

  return (
    <section className="py-16 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#f0f4ff,#ffffff_100%)]">
      <div className="container mx-auto px-6">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#001E80]">
          What Are Core Banking Services?
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          Core banking services typically include:
        </p>

        <ul className="space-y-4">
          {services.map((service, index) => {
            const [title, description] = service.split(":");
            return (
              <li key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {/* <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#001E80] text-white font-bold">
                    {index + 1}
                  </div> */}
                </div>
                <span className="text-gray-800 text-base flex items-center justify-center">
                  {" "}
                  <CheckIcon className="h-6 w-6 text-green-600 mr-2" />
                  <strong>{title.trim()}</strong>: {description.trim()}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
