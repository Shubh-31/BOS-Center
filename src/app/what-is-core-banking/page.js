import Head from "next/head";
import { BlogHero } from "@/sections/BlogHero";
import { BlogSection } from "@/sections/BlogSection";
import BlogContent from "@/sections/BlogContent";
import { BlogDescription } from "@/sections/BlogDescription";
import { BlogBankingSoftware } from "@/sections/BlogBankingSoftware";
import { BlogFinal } from "@/sections/BlogFinal";
import TableOfContents from "@/components/TableOfContents";
import { BlogMiddleSection } from "@/sections/BlogMiddleSection";

export const metadata = {
  title:
    "Core Banking Software Explained: How It Works, Services, and Choosing the Best Solution",
  description:
    "Learn what core banking software is, how it works, key services it offers, and how to choose the best core banking solution for your financial institution.",
  keywords: [
    "Core Banking",
    "Core Banking Software",
    "Core Banking Services",
    "Digital Banking",
    "Banking Software",
    "Banking Technology",
    "Banking Solutions",
    "Financial Services",
    "FinTech",
    "Digital Finance",
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.bos.center/what-is-core-banking",
  },
  openGraph: {
    type: "article",
    title:
      "Core Banking Software Explained: How It Works, Services, and Choosing the Best Solution",
    description:
      "Learn what core banking software is, how it works, core services, and how to choose the right solution for your institution.",
    url: "https://www.bos.center/what-is-core-banking",
    siteName: "BOS Banking & Financial Solutions",
    images: [
      {
        url: "https://bos.center/images/core-banking-thumbnail.jpg",
        width: 800,
        height: 600,
        alt: "Core Banking Software Explained",
      },
    ],
    publishedTime: "2025-06-27T08:00:00+00:00",
  },
};

const tocItems = [
  { id: "blog-hero", title: "What is Core Banking Software?" },
  { id: "blog-section", title: "What is Core Banking Solution?" },
  { id: "blog-content", title: "How Does a Core Banking System Work?" },
  { id: "blog-description", title: "What Are Core Banking Services?" },
  { id: "blog-banking", title: "Which Is The Best Core Banking Software?" },
  { id: "blog-final", title: "Final Thoughts" },
];
const BlogPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.bos.center/blog/what-is-core-banking/",
              },
              headline:
                "Core Banking Software Explained: How It Works, Services, and Choosing the Best Solution",
              description:
                "Learn what core banking software is, how it works, key services it offers, and how to choose the best core banking solution for your financial institution.",
              image: "https://bos.center/images/core-banking-thumbnail.jpg",
              author: {
                "@type": "Organization",
                name: "BOS Solutions",
              },
              publisher: {
                "@type": "Organization",
                name: "BOS Solutions",
                logo: {
                  "@type": "ImageObject",
                  url: "https://bos.center/images/logo.png",
                },
              },
              datePublished: "2025-06-27",
              dateModified: "2025-06-27",
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
                heading: "Core Banking Software for the Digital Age",
                subheading: "Your Bank - Our Technology",
                imgSrc: "/assets/WhatIsCoreBankingCard.png",
                buttonLabel: "Explore",
                buttonLink: "https://aopay.in/",
              }}
            />
          </div>
        </aside>

        {/* ✅ Main Content */}
        <article className="flex-1 w-full">
          <section id="blog-hero">
            <BlogHero />
          </section>
          <section id="blog-section">
            <BlogSection />
          </section>
          <section id="blog-content">
            <BlogContent />
          </section>
          <section id="blog-description">
            <BlogDescription />
          </section>
          <BlogMiddleSection
            heading="Next-Gen Core Banking Solution for Agile Financial Institutions"
            subheading="From customer onboarding to transaction management, streamline every banking process with our secure Core Banking Solution."
            buttonLabel="Learn More"
            buttonLink="https://aopay.in/"
          />
          <section id="blog-banking">
            <BlogBankingSoftware />
          </section>
          <section id="blog-final">
            <BlogFinal />
          </section>
        </article>
      </main>
    </>
  );
};

export default BlogPage;
