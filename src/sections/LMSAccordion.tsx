"use client";

import { useState, ReactNode } from "react";
import Image from "next/image";

interface Loan {
  title: string;
  content: ReactNode;
}

export default function LoanAccording() {
  // state typed as number (or -1 when nothing is open)
  const [openIndex, setOpenIndex] = useState<number>(0);

  const loans: Loan[] = [
    {
      title: "Gold Loans",
      content: (
        <>
          <p className="mb-4">
            Gold loans offer liquidity with minimal risk, and LMS helps manage
            these secured loans efficiently. By automating asset verification,
            loan approvals, and repayment tracking, LMS speeds up the entire
            process, helping lenders manage higher volumes while ensuring full
            compliance with regulations.
          </p>
          <p>
            BOS Gold Loan Solution automates valuation, risk management, and
            compliance for efficient secured lending. It features a two-step
            gold valuation, packet tracking, and an integrated appraiser module
            for accurate assessments. Lenders benefit from flexible schemes
            (regular, step-up, rebate), partial asset release, and RBI-compliant
            cash vs. bank disbursement splits. The Gold Movement Module enhances
            inventory tracking across branches, while self-release and auction
            management streamline servicing. Built on a scalable SaaS framework
            with CRM integration, LMS by BOS ensures secure, efficient, and
            compliant gold loan management.
          </p>
        </>
      ),
    },
    {
      title: "Mortgage Loans",
      content: (
        <>
          <p className="mb-4">
            Mortgage lending involves complex documentation, risk analysis, and
            long-term repayment schedules. LMS simplifies these processes with
            document digitization, multi-step approval workflows, and repayment
            schedule automation.
          </p>
          <p>
            LMS by BOS supports dynamic interest calculations, foreclosure
            handling, and integration with valuation and legal verification
            services. Lenders gain better control over disbursements,
            post-disbursement inspections, and escrow tracking, all from one
            unified dashboard.
          </p>
        </>
      ),
    },
    {
      title: "Auto Loans",
      content: (
        <>
          <p className="mb-4">
            Auto loans require coordination with dealers, insurers, and
            registrars. LMS automates vehicle verification, loan-to-value (LTV)
            calculations, and loan disbursement scheduling, reducing manual
            errors and ensuring faster turnaround times.
          </p>
          <p>
            BOS LMS supports dealer onboarding, down payment tracking, and
            instant e-mandate collection, making the vehicle financing process
            seamless for both lenders and borrowers.
          </p>
        </>
      ),
    },
    {
      title: "Personal Loans",
      content: (
        <>
          <p className="mb-4">
            Unsecured personal loans are high-risk but high-demand. LMS enables
            instant KYC, AI-driven credit scoring, and automated loan
            decisioning, allowing lenders to disburse funds quickly with minimal
            manual review.
          </p>
          <p>
            With BOS LMS, lenders can customize workflows based on credit
            profiles, automate reminders, and flag early delinquencies using
            real-time analytics and borrower behavior tracking.
          </p>
        </>
      ),
    },
    {
      title: "Business Loans",
      content: (
        <>
          <p className="mb-4">
            Business loans, including SME and working capital financing, require
            customized structuring and risk profiling. LMS supports flexible
            tenures, collateral mapping, and multi-party loan management (e.g.,
            co-applicants, guarantors).
          </p>
          <p>
            LMS by BOS allows integration with GST, bank statement analyzers,
            and balance sheet tools to assess business creditworthiness. Track
            revolving limits, renewals, and fund utilization seamlessly with a
            robust back-office engine.
          </p>
        </>
      ),
    },
    {
      title: "Education Loans",
      content: (
        <>
          <p className="mb-4">
            Education loans often involve deferred repayments and co-applicants
            (parents/guardians). LMS handles moratorium periods, step-up
            repayment structures, and automated reminders to improve recovery.
          </p>
          <p>
            BOS LMS also integrates with academic institutions and offers
            customized dashboards for lenders to monitor tuition fee schedules,
            partner approvals, and disbursement tracking.
          </p>
        </>
      ),
    },
    {
      title: "Buy Now, Pay Later (BNPL)",
      content: (
        <>
          <p className="mb-4">
            BNPL is rapidly growing across eCommerce and offline retail. LMS
            ensures real-time credit checks, micro-loan approvals, and EMI
            generation within seconds.
          </p>
          <p>
            With BOS BNPL Module, lenders can onboard merchants, manage flexible
            repayment schemes, and ensure transaction-level reconciliation. The
            system supports zero-cost EMI, partial payments, and automatic
            collections via UPI, cards, or wallets.
          </p>
        </>
      ),
    },
    {
      title: "Microfinance Loans",
      content: (
        <>
          <p className="mb-4">
            Microfinance lending involves field officers, remote borrowers, and
            group lending models. LMS simplifies this with offline-capable
            mobile apps, center creation, and field collection tracking.
          </p>
          <p>
            BOS LMS supports Joint Liability Groups (JLGs), SHGs, biometric
            integrations, and Aadhaar-based verification. Real-time sync,
            geo-tracking, and MIS reports help lenders manage disbursements and
            collections across rural and semi-urban regions.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white" id="blog-banking">
      <div className="container max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl sm:text-3xl md:text-5xl font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent text-center mb-8 pb-1">
          Types of Loans Managed by LMS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Accordion */}
          <div className="space-y-4">
            {loans.map((loan, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={loan.title + index}
                  className="border rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 text-left text-xl font-semibold text-gray-800"
                  >
                    <span>{loan.title}</span>
                    <span className="text-2xl">{isOpen ? "−" : "+"}</span>
                  </button>

                  {isOpen && (
                    <div className="px-6 py-4 text-gray-700 text-lg leading-relaxed">
                      {loan.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Side Image */}
          <div className="flex justify-center items-start">
            <Image
              src="/assets/Loan-types-managed-by-LMS.png"
              alt="Loan management dashboard illustration"
              width={600}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
