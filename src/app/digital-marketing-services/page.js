import {
  PagesHeader,
  TravelContent,
  BenefitsSection,
  Values,
  FAQSection,
  GetStarted,
} from "@/sections/mySection";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "BOS | Digital Marketing Services For Long-Term Business Growth",
  description:
    "Drive traffic, increase conversions, & grow your brand with BOS expert digital marketing services. Specialized in SEO, PPC, Social Media & Content Marketing.",
  keywords: [
    "Best Digital Marketing Services for Businesses",
    "Best Digital Marketing services for Enterprises",
    "Best Digital Marketing Services for Small Businesses",
    "Digital Marketing Services Price",
    "Digital Marketing Company in Delhi",
    "Best Digital Marketing Company in India",
    "Best Digital Marketing Service for MSMEs",
    "India’s Best Digital Marketing Services Provider Company",
    "SEO services",
    "PPC advertising",
    "social media marketing",
    "digital marketing agency",
    "content marketing",
    "conversion optimization",
    "website traffic",
    "digital marketing strategies",
    "SEO experts",
    "lead generation",
    "business marketing solutions",
    "paid search advertising",
    "digital advertising",
    "brand marketing",
    "social media campaigns",
    "search engine marketing",
    "marketing for businesses",
    "digital branding",
    "lead nurturing",
    "SEO strategies",
    "eCommerce marketing",
    "digital marketing consultants",
    "social media advertising",
    "website optimization",
    "PPC experts",
    "business marketing strategies",
    "content promotion",
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://bos.center/digital-marketing-services",
  },
  openGraph: {
    title: "Max Your Business with BOS Digital Marketing Services",
    description:
      "Increase traffic, generate leads, and grow your brand with our comprehensive digital marketing strategies. SEO, PPC, and social media solutions tailored to your business.",
    url: "https://bos.center/digital-marketing-services",
    siteName: "Digital Marketing Experts",
    images: [
      {
        url: "https://bos.center/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Bos Center Open Graph Image",
      },
    ],
    type: "website",
  },
};

const DigitalMarketingServices = () => {

      const schema = {
        "@context": "https://schema.org",
        "@type": "MarketingAgency",
        "@id": "https://bos.center/digital-marketing-services/#localbusiness",
        name: "BOS Center Pvt. Ltd.",
        url: "https://bos.center/digital-marketing-services",
        telephone: "+91-8929898920",
        priceRange: "$$$",
        image: "https://bos.center/assets/img/logo.png",
        description:
          "Boost your business with BOS Center's affordable digital marketing services — SEO, social media, PPC, and performance marketing to attract customers and grow your brand.",

        address: {
          "@type": "PostalAddress",
          streetAddress: "73, Block B-1, Sewak Park Extension",
          addressLocality: "Uttam Nagar",
          addressRegion: "Delhi",
          postalCode: "110059",
          addressCountry: "IN",
        },

        geo: {
          "@type": "GeoCoordinates",
          latitude: "28.6219",
          longitude: "77.0521",
        },

        openingHours: "Mo-Sa 10:00-19:00",

        sameAs: [
          "https://www.facebook.com/BOSCenterIND",
          "https://www.instagram.com/boscenter.in/?next=%2F",
          "https://www.linkedin.com/company/bos-center-pvt-ltd",
        ],

        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Delhi" },
          { "@type": "City", name: "Hyderabad" },
          { "@type": "City", name: "Chennai" },
          { "@type": "City", name: "Pune" },
          { "@type": "City", name: "Gurgaon" },
          { "@type": "City", name: "Noida" },
          { "@type": "City", name: "Ghaziabad" },
          { "@type": "City", name: "Lucknow" },
          { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
          { "@type": "AdministrativeArea", name: "Bihar" },
          { "@type": "City", name: "Kolkata" },
          { "@type": "AdministrativeArea", name: "Gujarat" },
          { "@type": "AdministrativeArea", name: "Rajasthan" },
          { "@type": "City", name: "Faridabad" },
          { "@type": "AdministrativeArea", name: "Karnataka" },
          { "@type": "AdministrativeArea", name: "Kerala" },
          { "@type": "AdministrativeArea", name: "Tamil Nadu" },
          { "@type": "City", name: "Bengaluru" },
          { "@type": "AdministrativeArea", name: "Andhra Pradesh" },
          { "@type": "AdministrativeArea", name: "Telangana" },
          { "@type": "AdministrativeArea", name: "Maharashtra" },
          { "@type": "AdministrativeArea", name: "Madhya Pradesh" },
          { "@type": "City", name: "Jaipur" },
          { "@type": "AdministrativeArea", name: "Punjab" },
          { "@type": "City", name: "Chandigarh" },
        ],

        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Marketing Services",
              description:
                "Complete digital marketing including SEO, SMM, SEM, PPC, and online branding.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Local SEO Services",
              description:
                "Local SEO and Google Business Profile optimization for local businesses.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social Media Marketing",
              description:
                "Social media marketing for small businesses, startups, and enterprises.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Content Marketing Services",
              description:
                "Content creation, content strategy, and performance content marketing.",
            },
          },
        ],
      };


  const headerContent = {
    tag: "Digital Marketing",
    title:
      "Professional Digital Marketing Services That Drive Results & Growth",
    description:
      "In the ever-evolving digital landscape, businesses need a strategic approach to ensure they stand out from the competition. Our digital marketing services are designed to help businesses of all sizes increase their online presence, drive more traffic, & ultimately grow their revenue.",
    imgSrc: "/assets/Digital Marketing 1.png",
    alt: "Digital Marketing Team creating complete online marketing strategies for business growth.",
    buttonLabel: "Drive More Traffic & Conversions Today",
  };

  const marketingServices = [
    {
      title:
        "Search Engine Optimization: Improving Website Ranking & Organic Traffic",
      description:
        "Enhance your organic search rankings & drive targeted traffic to your website. Our team of SEO experts will work with you to improve your website’s visibility, generate high-quality leads, & help you rank higher on Google, Bing, Yahoo & other search engines.",
      points: [
        "Increase visibility in search engine results",
        "Drive organic traffic to your site",
        "Improve your site’s on-page SEO & user experience",
      ],
      image: "/assets/Digital Marketing 2.png",
      alt: "SEO specialist optimizing website content for higher search engine rankings.",
    },
    {
      title:
        "Pay-Per-Click Advertising: Managing Profitable PPC Campaigns For Businesses",
      description:
        "Get instant visibility with PPC campaigns. Whether it's Google Ads, Bing Ads, Meta Ads or LinkedIn Ads we create custom ads tailored to your business goals. Pay only when users click your ads, ensuring every penny counts.",
      points: [
        "Maximize ROI through well-optimized campaigns",
        "Immediate results with targeted ads",
        "Boost sales & leads in a short timeframe",
      ],
      image: "/assets/Digital Marketing 3.png",
      alt: "Google Ads PPC campaign dashboard showing high-performing paid advertising results.",
    },
    {
      title:
        "Social Media Marketing: Strategic Social Campaigns Driving Engagement & Brand Awareness",
      description:
        "Social media is where your audience is, and we help you leverage platforms like Facebook, Instagram, LinkedIn, & Twitter to increase engagement, build brand awareness, & drive conversions.",
      points: [
        "Build a strong brand presence online",
        "Engage with your audience directly",
        "Boost website traffic & online sales",
      ],
      image: "/assets/Digital Marketing 4.png",
      alt: "Social media marketing manager creating engaging content for Facebook, Instagram and LinkedIn",
    },
    {
      title:
        "Content Marketing Services: Strategic Content Creation Driving Traffic & Lead Generation",
      description:
        "Engaging, high-quality content is the backbone of any digital marketing strategy. Our content marketing services focus on creating compelling blog posts, videos, infographics, & more to educate your audience, build trust, and convert them into loyal customers.",
      points: [
        "Educate & inform your audience",
        "Drive organic traffic through valuable content",
        "Increase brand authority & trust",
      ],
      image: "/assets/Digital Marketing 5.png",
      alt: "Content marketing specialist writing SEO-optimized blog posts for lead generation.",
    },
    {
      title:
        "Email Marketing: Automated Campaigns & Newsletters Driving Customer Engagement",
      description:
        "Reach your customers directly with personalized email campaigns. We create targeted email marketing strategies to nurture leads, increase engagement, & increase conversions.",
      points: [
        "Nurture relationships with potential customers",
        "Improve customer retention",
        "Boost conversions with targeted email campaigns",
      ],
      image: "/assets/Digital Marketing 6.png",
      alt: "Email marketing campaign dashboard showing high open rates and click-through performance.",
    },
    {
      title: "Web Analytics & Reporting",
      description:
        "Track your performance with data-driven insights. We provide you with detailed reports to track campaign effectiveness, analyze website traffic, & optimize for maximum results.",
      points: [
        "Measure success of your campaigns",
        "Analyze website traffic & user behavior",
        "Optimize strategies for better performance",
      ],
      image: "/assets/Digital Marketing 7.png",
      alt: "Google Analytics report showing digital marketing campaign performance and ROI.",
    },
    {
      title: "Brand Strategy",
      description:
        "Your brand’s online presence should reflect your business’s true values & mission. We help you create a strong digital identity that resonates with your audience & enhances your brand reputation.",
      points: [
        "Develop a unique brand voice",
        "Build an engaging online presence",
        "Align your digital presence with your business values",
      ],
      image: "/assets/Digital Marketing 8.png",
      alt: "Brand strategy consultant developing comprehensive brand identity and positioning guidelines.",
    },
  ];

  const benefitsContent = {
    heading: "Why Choose Our Digital Marketing Services?",
    description: "",
    benefits: [
      {
        title: "Experienced Team of Experts",
        description:
          "We have a team of certified digital marketing professionals who specialize in SEO, PPC, Social Media, & more. Our team is passionate about driving growth for your business & is always up to date with the latest digital marketing trends and strategies.",
        icon: "/assets/Experienced Team of Experts.png",
      },
      {
        title: "Advance Marketing Solutions",
        description:
          "No two businesses are the same, and neither are their digital marketing needs. We provide customized strategies that align with your business goals and deliver measurable results.",
        icon: "/assets/Advance Marketing Solutions.png",
      },
      {
        title: "Proven Success with Data-Driven Results",
        description:
          "Our strategies are based on real-time data & continuous optimization. We believe in transparency and share the results with you every step of the way. On average, our clients experience a 30% increase in organic traffic within the first three months.",
        icon: "/assets/Proven Success with Data-Driven Results.png",
      },
      {
        title: "Full Transparency",
        description:
          "We value transparency. That’s why we provide you with regular reports & updates, so you’re always in the loop. Track your ROI with our easy-to-understand analytics.",
        icon: "/assets/Full Transparency.png",
      },
    ],
  };

  const valuesContent = {
    title: "Success Stories from Our Clients",
    description:
      "Don’t just take our word for it. Here’s how we’ve helped businesses grow",
    valueCard: [
      {
        title: "Client A",
        description:
          "Increased their organic search traffic by 60% within just 6 months through our SEO strategies.",
      },
      {
        title: "Client B",
        description:
          "Achieved a 50% growth in leads within first 3 months using PPC advertising.",
      },
      {
        title: "Client C",
        description:
          "Increased social media engagement by 40% and built a loyal community with our tailored social media marketing plan.",
      },
    ],
  };

  const faqs = [
    {
      question: "What is digital marketing?",
      answer:
        "Digital marketing involves promoting products or services through online channels like search engines, social media, email, and websites. It includes strategies like SEO, PPC, content marketing, and more.",
    },
    {
      question: "How long will it take to see results from SEO?",
      answer:
        "SEO is a long-term strategy. You can start seeing initial results in 3-6 months, but for significant results, it could take 6-12 months.",
    },
    {
      question: "What is PPC advertising?",
      answer:
        "Pay-Per-Click (PPC) advertising is a form of online advertising where you pay each time someone clicks on your ad. It provides immediate visibility and can help businesses generate leads and sales quickly.",
    },
    {
      question:
        "How do I measure the success of my campaigns? Can I customize the booking interface?",
      answer:
        "We provide regular performance reports and Google Analytics integration to track metrics like traffic, engagement, conversions, and ROI.",
    },
    {
      question: "Start Your Journey with Digital Marketing Today",
      answer:
        "Ready to boost your business? Get in touch with our team of digital marketing experts, and let us help you create a customized strategy that aligns with your goals. We provide actionable, data-driven insights to help you reach your target audience effectively and efficiently.",
    },
  ];
  const getStarted = {
    title: "Ready to take your next step?",
    description:
      "Contact us today to schedule your free consultation and find out how we can help you reach your business goals.",
    CTABtn2: "Get Free Strategy Session Now",
  };

  
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
      </Head>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <PagesHeader headerContent={headerContent} />
      <TravelContent
        content={marketingServices}
        heading="Expert Digital Marketing Services"
     
      />
      <BenefitsSection benefitsContent={benefitsContent} />
      {/* <Values valuesContent={valuesContent} /> */}
      <FAQSection faqs={faqs} />
      <GetStarted getStarted={getStarted} />
    </>
  );
};

export default DigitalMarketingServices;
