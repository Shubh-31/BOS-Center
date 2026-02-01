import BlogFirstPage from "@/sections/BlogPage";

export const metadata = {
  title: "FinTech Blog",
  description:
    "Explore the latest insights, trends, and innovations in financial technology. Our FinTech Blog covers digital payments, blockchain, banking transformation, investment strategies, and regulatory updates to help you stay ahead in the fast-evolving world of finance.",
  keywords: [
    "fintech blog, fintech insights, digital payments, blockchain technology, banking innovation, financial technology trends, fintech news, investment strategies, future of finance, digital banking, fintech startups, financial inclusion, payment solutions, finance blog"
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.bos.center/blog",
  },
  openGraph: {
    title: "BOS FinTech Blog",

    description:
      "Explore the latest insights, trends, and innovations in financial technology. Our FinTech Blog covers digital payments, blockchain, banking transformation, investment strategies, and regulatory updates to help you stay ahead in the fast-evolving world of finance.",
    url: "https://www.bos.center/blog",
    siteName: "BOS Banking & Financial Solutions",
    images: [
      {
        url: "https://bos.center/images/core-banking-thumbnail.jpg",
        width: 800,
        height: 600,
        alt: "FinTech Blog",
      },
    ],
    type: "article",
  },
  other: {
    author: "Kushaldeep",
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "BOS FinTech Blog",
            url: "https://bos.center/blog/",
            description:
              "Stay updated with insights on FinTech, financial services, digital transformation, APIs, and the latest trends in technology.",
            publisher: {
              "@type": "Organization",
              name: "Business Online Solution (BOS)",
              url: "https://bos.center/",
              logo: {
                "@type": "ImageObject",
                url: "https://bos.center/images/logo.png",
              },
            },
            blogPost: [
              {
                "@type": "BlogPosting",
                headline: "Top Trends in FinTech 2025",
                url: "https://bos.center/blog/top-trends-fintech-2025",
                datePublished: "2025-06-01",
                author: {
                  "@type": "Person",
                  name: "Kushaldeep Dhillon",
                },
                description:
                  "Explore the leading innovations shaping the FinTech industry in 2025 including AI in finance, open banking, and embedded finance.",
              },
              {
                "@type": "BlogPosting",
                headline: "How APIs Are Revolutionizing Digital Payments",
                url: "https://bos.center/blog/api-digital-payments",
                datePublished: "2025-05-22",
                author: {
                  "@type": "Person",
                  name: "Kushaldeep Dhillon",
                },
                description:
                  "Learn how APIs streamline digital transactions and enable next-generation financial applications for startups and enterprises alike.",
              },
            ],
          }),
        }}
      />
      <BlogFirstPage />
    </>
  );
}
