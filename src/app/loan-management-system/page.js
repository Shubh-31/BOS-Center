import Head from "next/head";
import { BlogHero } from "@/sections/BlogHero";
import { BlogSection } from "@/sections/BlogSection";
import BlogContent from "@/sections/BlogContent";
import { BlogDescription } from "@/sections/BlogDescription";
import { BlogBankingSoftware } from "@/sections/BlogBankingSoftware";
import { LMSFinal } from "@/sections/LMSFinal";
import TableOfContents from "@/components/TableOfContents";
import { BlogMiddleSection } from "@/sections/BlogMiddleSection";
import { BlogTitle } from "@/sections/BlogTitle";
import { LMSContentSection1 } from "@/sections/LMSContentSection1";
import { LMSContentSection2 } from "@/sections/LMSContentSection2";
import Image from "next/image";
import LMSAccordion from "@/sections/LMSAccordion";

export const metadata = {
  title: "Loan Management System: Benefits, Capabilities & Types | BOS LMS",
  description:
    "Learn how a Loan Management System helps lenders automate gold, BNPL, personal & business loans with compliance, speed, and efficiency.",
//   keywords: [
//     "Core Banking",
//     "Core Banking Software",
//     "Core Banking Services",
//     "Digital Banking",
//     "Banking Software",
//     "Banking Technology",
//     "Banking Solutions",
//     "Financial Services",
//     "FinTech",
//     "Digital Finance",
//   ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://bos.center/loan-management-system",
  },
  openGraph: {
    type: "article",
    title: "What is Loan Management System? Benefits & Types Explained",
    description:
      "Explore how BOS LMS helps lenders manage gold, BNPL, mortgage, and personal loans efficiently with automation, compliance, and real-time risk control.",
    url: "https://bos.center/loan-management-system",
    siteName: "BOS Center",
    images: [
      {
        url: "https://bos.center/images/lms-og-banner.jpg",
        width: 800,
        height: 600,
        alt: "Loan Management System",
      },
    ],
    publishedTime: "2025-06-27T08:00:00+00:00",
  },
};

const loans = [
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
          compliance for efficient secured lending. It features a two-step gold
          valuation, packet tracking, and an integrated appraiser module for
          accurate assessments. Lenders benefit from flexible schemes (regular,
          step-up, rebate), partial asset release, and RBI-compliant cash vs.
          bank disbursement splits. The Gold Movement Module enhances inventory
          tracking across branches, while self-release and auction management
          streamline servicing. Built on a scalable SaaS framework with CRM
          integration, LMS by BOS ensures secure, efficient, and compliant gold
          loan management.
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
          calculations, and loan disbursement scheduling, reducing manual errors
          and ensuring faster turnaround times.
        </p>
        <p>
          BOS LMS supports dealer onboarding, down payment tracking, and instant
          e-mandate collection, making the vehicle financing process seamless
          for both lenders and borrowers.
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
          instant KYC, AI-driven credit scoring, and automated loan decisioning,
          allowing lenders to disburse funds quickly with minimal manual review.
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
          LMS by BOS allows integration with GST, bank statement analyzers, and
          balance sheet tools to assess business creditworthiness. Track
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
          (parents/guardians). LMS handles moratorium periods, step-up repayment
          structures, and automated reminders to improve recovery.
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
          group lending models. LMS simplifies this with offline-capable mobile
          apps, center creation, and field collection tracking.
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


const tocItems = [
  { id: "blog-hero", title: "What Is Loan Management System?" },
  { id: "blog-section", title: "Benefits of Loan Management System" },
  { id: "blog-content", title: "Capabilities of Loan Management System" },
  { id: "blog-banking", title: "Types of Loans Managed by LMS" },
  { id: "blog-final", title: "Conclusion" },
];





const LoanManagementSystem = () => {

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://bos.center/loan-management-system",
              },
              headline:
                "What is Loan Management System? Benefits, Capabilities & Loan Types Explained",
              description:
                "Discover how a Loan Management System (LMS) simplifies loan operations. Learn benefits, capabilities, and how BOS LMS manages gold, personal, BNPL, and business loans efficiently.",
              image: "https://bos.center/images/lms-article-banner.jpg",
              author: {
                "@type": "Organization",
                name: "BOS Center",
                url: "https://bos.center",
              },
              publisher: {
                "@type": "Organization",
                name: "BOS Center",
                logo: {
                  "@type": "ImageObject",
                  url: "https://bos.center/images/logo.png",
                },
              },
              datePublished: "2025-08-24",
              dateModified: "2025-08-24",
            }),
          }}
        />
      </Head>

      <main className="w-full mx-auto px-4 py-8 flex gap-8">
        {/* ✅ Sticky Sidebar */}
        <aside className="hidden lg:block md:block w-1/5">
          <div className="sticky top-24 left-2">
            <TableOfContents
              items={tocItems}
              cta={{
                heading: "Best Loan Management System in India",
                subheading:
                  "Digital Loan Origination Management Platform to Accelerate Lending Efficiently",
                imgSrc: "/assets/Loan Management System 1.png",
                buttonLabel: "Explore",
                buttonLink: "https://aopay.in/",
              }}
            />
          </div>
        </aside>

        {/* ✅ Main Content */}
        <article className="flex-1 w-full">
          <section id="blog-hero">
            <BlogTitle />
          </section>
          <section id="blog-section">
            <LMSContentSection1 />
          </section>
          <section id="blog-content">
            <LMSContentSection2 />
          </section>

          <BlogMiddleSection
            heading="Simplify loan origination with automated KYC, Credit checks, & Workflows"
            subheading="Go digital with BOS LMS"
            buttonLabel="Schedule a personalized demo today!"
            buttonLink="https://aopay.in/"
          />

          <LMSAccordion />
          <div className="flex justify-center mt-6">
            <Image
              src="/assets/Lms-automation.png"
              alt="Automated loan lifecycle stages including origination, underwriting, disbursement, and collections using BOS LMS"
              width={800}
              height={450}
              className="rounded-xl shadow-lg w-3/4"
            />
          </div>
          <section id="blog-final">
            <LMSFinal />
          </section>
        </article>
      </main>
    </>
  );
};

export default LoanManagementSystem;
