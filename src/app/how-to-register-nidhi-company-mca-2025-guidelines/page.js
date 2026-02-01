import Head from "next/head";
import { NidhiHero } from "@/sections/NidhiHero";
import { NidhiSection } from "@/sections/NidhiSection";
import NidhiContent from "@/sections/NidhiContent";
import { NidhiDescription } from "@/sections/NidhiDescription";
import { NidhiBankingSoftware } from "@/sections/NidhiBankingSoftware";
import TableOfContents from "@/components/TableOfContents";
import { NidhiBenefits } from "@/sections/NidhiBenefits";
import { NidhiCompliance } from "@/sections/NidhiCompliance";
import { NidhiChallenge } from "@/sections/NidhiChallenge";
import { NidhiFinal } from "@/sections/NidhiFinal";
import { BlogMiddleSection } from "@/sections/BlogMiddleSection";

export const metadata = {
  title: "How to Register Nidhi Company: Complete Guide 2025",
  description:
    "Learn how to register a Nidhi Company with MCA 2025 guidelines. Complete procedure, eligibility criteria, documents required & step-by-step process.",
  keywords: [
    "nidhi company registration",
    "how to register nidhi company",
    "nidhi company eligibility criteria",
    "MCA 2025 guidelines",
    "nidhi company procedure",
    "company registration India",
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://bos.center/how-to-register-nidhi-company-mca-2025-guidelines",
  },
  openGraph: {
    type: "article",
    title: "How to Register a Nidhi Company: Complete Guide 2025",
    description:
      "Learn how to register Nidhi Company with MCA 2025 guidelines. Complete procedure, eligibility criteria, documents required & step-by-step process.",
    url: "https://bos.center/how-to-register-nidhi-company-mca-2025-guidelines",
    siteName: "BOS Banking & Financial Solutions",
    images: [
      {
        url: "https://bos.center/images/nidhi-company-registration.jpg",
        width: 800,
        height: 600,
        alt: "Nidhi Company Registration: MCA Guidelines 2025",
      },
    ],
    publishedTime: "2025-06-27T08:00:00+00:00",
  },
  other: {
    "http-equiv": "content-language",
    "content-language": "en-IN",
  },
};


const tocItems = [
  {
    id: "blog-hero",
    title: "How to Register a Nidhi Company: MCA 2025 Complete Guidelines",
  },
  { id: "blog-section", title: "What is a Nidhi Company?" },
  {
    id: "blog-content",
    title: "Eligibility Criteria for Nidhi Company Registration",
  },
  {
    id: "blog-description",
    title: "Documents Required for Nidhi Company Registration",
  },
  {
    id: "blog-banking",
    title: "Step-by-Step Nidhi Company Registration Procedure",
  },
  {
    id: "blog-benefits",
    title: "Key Benefits of Nidhi Company Registration",
  },
  {
    id: "blog-compliance",
    title: "Important Compliance Requirements Post-Registration",
  },
  {
    id: "blog-challenge",
    title: "Common Challenges and Solutions",
  },
  { id: "blog-final", title: "Final Words" },
];

const NidhiBlog = () => {
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
                "@id":
                  "https://bos.center/how-to-register-nidhi-company-mca-2025-guidelines",
              },
              headline: "How to Register a Nidhi Company: Complete Guide 2025",
              description:
                "Learn how to register a Nidhi Company with MCA 2025 guidelines. Complete procedure, eligibility criteria, documents required & step-by-step process.",
              image: "https://bos.center/images/core-banking-thumbnail.jpg",
              author: {
                "@type": "Organization",
                name: "BOS Center",
              },
              publisher: {
                "@type": "Organization",
                name: "BOS Center",
                logo: {
                  "@type": "ImageObject",
                  url: "https://bos.center/images/logo.png",
                },
              },
              datePublished: "2025-07-25",
              dateModified: "2025-07-25",
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
                heading: "Nidhi Software for Easy Member Management",
                subheading:
                  "Your Nidhi Company’s Growth, Supported By Our Advanced Solution.",
                imgSrc: "/assets/NidhiSideBar.png",
                buttonLabel: "Explore",
                buttonLink: "https://aopay.in/",
              }}
            />
          </div>
        </aside>

        {/* ✅ Main Content */}
        <article className="flex-1 w-full">
          <section id="blog-hero">
            <NidhiHero />
          </section>
          <section id="blog-section">
            <NidhiSection />
          </section>
          <section id="blog-content">
            <NidhiContent />
          </section>
          <section id="blog-description">
            <NidhiDescription />
          </section>
          <section id="blog-banking">
            <NidhiBankingSoftware />
          </section>
          <section id="blog-benefits">
            <NidhiBenefits />
          </section>
          <BlogMiddleSection
            heading="Nidhi Company Registration"
            subheading="Your Nidhi Company’s Growth, Supported By Our Advanced Solution."
            buttonLabel="Learn More"
            buttonLink="https://aopay.in/"
          />
          <section id="blog-compliance">
            <NidhiCompliance />
          </section>
          <section id="blog-challenge">
            <NidhiChallenge />
          </section>
          <section id="blog-final">
            <NidhiFinal />
          </section>
        </article>
      </main>
    </>
  );
};

export default NidhiBlog;
