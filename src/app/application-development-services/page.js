import {
  PagesHeader,
  BenefitsSection,
  Values,
  HowItWorks,
  Steps,
  FAQSection,
  GetStarted,
} from "@/sections/mySection";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "BOS | Custom Application Development for All Size Businesses",
  description:
    "Digitalise your business with our custom website & app development services. We create responsive, user-friendly & secure apps tailored to your business needs.",
  keywords: [
    "Best Website development service for Businesses",
    "Best Mobile app development service for Enterprises",
    "Best application development services for Small Businesses",
    "Best Business app development service for Corporate Solution",
    "Application Development Price",
    "Web Application Development Price",
    "Mobile Application Development Price",
    "Application Development Service in Delhi",
    "Website Development Service in Delhi",
    "Mobile Application Development Service in Delhi",
    "Best Application Development Service in India",
    "Best Application Development Service for MSMEs",
    "India’s Best Application Development Service Provider  Company",
    "mobile app development",
    "web application development",
    "custom applications",
    "enterprise software development",
    "app developers",
    "mobile development services",
    "software solutions",
    "custom software development",
    "business app development",
    "app development agency",
    "mobile apps for business",
    "business application development",
    "cross-platform apps",
    "cloud-based applications",
    "iOS app development",
    "Android app development.",
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://bos.center/application-development",
  },
  openGraph: {
    title:
      "Efficient B2B Reseller Management Solution to Streamline Operations",
    description:
      "Increase traffic, generate leads, and grow your brand with our comprehensive digital marketing strategies. SEO, PPC, and social media solutions tailored to your business.",
    url: "https://bos.center/application-development",
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

const ApplicationDevelopment = () => {

    const schema = {
      "@context": "https://schema.org",
      "@type": "SoftwareCompany",
      "@id": "https://bos.center/#softwarecompany",
      name: "BOS Center Pvt. Ltd.",
      url: "https://bos.center",
      telephone: "+91-8929898920",
      priceRange: "$$$",
      image: "https://bos.center/assets/img/logo.png",
      description:
        "BOS Center Pvt. Ltd. provides enterprise-grade software solutions including travel booking systems, CRM, B2B/B2C management platforms, fintech applications, APIs, and cloud-based digital solutions across India.",

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
            name: "White Label Banking Software Solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "White Label Fintech Software Solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Banking & Fintech Software Development",
          },
        },
      ],
    };


  const headerContent = {
    tag: "Application Development",
    title:
      "Empower Your Business with Tailored Application Development Services",
    description:
      "In today's digital-first world, businesses need custom applications that drive growth, streamline processes, and enhance user experience. We’re specialized in building scalable, user-friendly applications that are perfectly tailored to your business needs. From mobile apps to enterprise solutions, we ensure your app delivers value and transforms your operations.",
    imgSrc: "/assets/Application Development 1.png",
    alt: "Custom application development team coding mobile and web apps for business solutions.",
    buttonLabel: "Get Your Custom App Built Today",
  };

  const benefitsContent = {
    heading:
      "Build Smarter, Faster, & Better with Our App Development Expertise",
    description:
      "Are you ready to take your business to the next level with a custom-built app? Whether you're seeking a mobile app, web app, or a fully integrated enterprise solution, we’re here to turn your ideas into reality. Here's why businesses choose us",
    benefits: [
      {
        title: "Custom Solutions",
        description:
          "Every business is unique, and so are our apps. We provide personalized app development tailored to meet your specific goals.",
        icon: "/assets/Custom Solutions.png",
      },
      {
        title: "Faster Time-to-Market",
        description:
          "We use agile development methodologies to bring your project to life quickly, without compromising quality.",
        icon: "/assets/Faster Time-to-Market.png",
      },
      {
        title: "User-Centric Design",
        description:
          "Our designs focus on delivering an intuitive user experience that increases engagement and satisfaction.",
        icon: "/assets/Customer Centric.png",
      },
      {
        title: "Scalability & Flexibility",
        description:
          "Our applications are built to scale, ensuring that your business can grow seamlessly with the evolving market demands.",
        icon: "/assets/Scalable, Scalability.png",
      },
    ],
  };

  const valuesContent = {
    title: "Real-world Results from Clients Who Trusted Us",
    description:
      "Our portfolio speaks for itself. Here are a few case studies that highlight how our application development services have helped businesses across various industries",
    valueCard: [
      {
        title: "Client Name",
        description:
          "We built a custom CRM solution that increased sales by 25% within the first quarter of launch.",
      },
      {
        title: "Client Name",
        description:
          "A mobile app that eased online booking, leading to a 30% increase in customer engagement.",
      },
      {
        title: "Client Name",
        description:
          "A web application designed for project management that improved team collaboration & reduced operational costs by 15%.",
      },
    ],
  };

  const howItWorks = {
    layout : "features",
    title: "Your One-Stop Solution for End-to-End Application Development",
    description:
      "We provide a wide range of application development services that address various needs across industries. Our team is proficient in:",
    imgSrc: "/assets/Application Development 2.png",
    alt: "Professional web app developers creating scalable SaaS applications for business automation.",

    features: [
      {
        title: "Custom Application Development",
        description:
          "From small businesses to large enterprises, we design custom software solutions that meet your unique needs. Our applications are intuitive, secure, & scalable, allowing your business to stay competitive.",
        icon: "/assets/Custom Application Development.png",
      },
      {
        title: "Mobile App Development",
        description:
          "Whether you're targeting Android or iOS users, we develop mobile apps that deliver an exceptional user experience, improves engagement, and drive results.",
        icon: "/assets/Mobile App Development.png",
      },
      {
        title: "Web App Development",
        description:
          "Our web applications are responsive, fast, & secure. We build web apps that help you stay ahead in digital era and ensure that your users enjoy a smooth experience across devices.",
        icon: "/assets/Web App Development.png",
      },
      {
        title: "Enterprise Solutions",
        description:
          "We offer enterprise-grade applications that streamline business processes, improve team collaboration, and enhance operational efficiency. From CRM systems to ERP solutions, we have the expertise to build powerful enterprise applications.",
        icon: "/assets/Business & Enterprise Software.png",
      },
    ],
  };

  const developers = {
    mainTitle:
      "Unleash the Power of Innovation with Our Application Development Services",
    mainDescription:
      "We’re passionate about building applications that create real value for your business. Here’s why we’re the best choice for your application development project:",
    imgSrc: "/assets/Application Development 3.png",
    alt:"Mobile app development specialist creating iOS and Android applications for businesses",
    content: [
      {
        title: "Expert Team",
        description:
          "Our developers, designers, & project managers are highly skilled and have years of experience in application development. We use latest technologies & industry best practices to deliver top-notch apps.",
      },
      {
        title: "Tailored Approach",
        description:
          "We take the time to understand your business goals and objectives. Our solutions are designed to align with your vision, ensuring the success of your application.",
      },
      {
        title: "Fast and Reliable Delivery",
        description:
          "Our agile development process ensures that your app is delivered on time, within budget, and with all the features you need.",
      },
      {
        title: "Ongoing Support",
        description:
          "After your application is launched, we offer continuous maintenance and support, ensuring that your app stays updated and continues to perform at its best.",
      },
    ],
  };

  const business = {
    mainTitle:
      "From Concept to Launch: A Smooth and Collaborative Application Development Journey",
    mainDescription:
      "We understand that developing an application is a significant investment. That’s why we follow a structured, step-by-step process to ensure that your app is delivered on time & meets your expectations. Here’s how we do it:",
    imgSrc: "/assets/Application Development 4.png",
    alt : "Agile application development methodology with sprint planning and continuous integration",
    content: [
      {
        title: "Discovery & Planning",
        description:
          "We begin by understanding your requirements, goals, & target audience. This stage helps us define the scope & features of the application.",
      },
      {
        title: "Design",
        description:
          "Our UX/UI designers create user-friendly and visually appealing interfaces that provide a great user experience.",
      },
      {
        title: "Development",
        description:
          "Our developers work on building application’s core functionality, using cutting-edge technologies to ensure security & scalability.",
      },
      {
        title: "Testing & Quality Assurance",
        description:
          "We test the app thoroughly to ensure it's free of bugs & performs optimally under all conditions.",
      },
      {
        title: "Deployment & Launch",
        description:
          "We help you deploy your application to relevant platforms, whether it’s App Store, Google Play, or your own servers.",
      },
      {
        title: "Maintenance & Updates",
        description:
          "Post-launch, we provide regular updates & continuous support to keep your app running smoothly and adapting to market changes.",
      },
    ],
  };

  const faqs = [
    {
      question: "How long does it take to develop an application?",
      answer:
        "Timeline depends upon the complexity of the application. On average, it takes between 2 to 6 weeks.",
    },
    {
      question: "What is the cost of custom app development?",
      answer:
        "Cost varies based on the features & functionality you require. Contact us for a personalized quote.",
    },
    {
      question: "Do you offer support after the app is launched?",
      answer:
        "Yes, We provide ongoing support & maintenance to ensure your app runs smoothly after launch.",
    },
    {
      question: "Which platforms do you develop for?",
      answer:
        "We build applications for both Android & iOS, as well as web applications for desktop and mobile browsers.",
    },
  ];

  const getStarted = {
    title: "Ready to Build Your Next Big Idea? Let’s Get Started",
    description:
      "We’re excited to help you turn your idea into a fully functional application that drives results. Whether you need a mobile app, web app, or enterprise solution, our team is ready to assist you.",
    // CTABtn1: "Start Your Project",
    CTABtn2: "Book Free App Development Consultation",
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
      <BenefitsSection benefitsContent={benefitsContent} />
      {/* <Values valuesContent={valuesContent} /> */}
      <HowItWorks content={howItWorks} />
      <Steps
        textContent1={developers}
        textContent2={business}
        heading="Why Partner With Us for Your Application Development Needs?"
      />
      <FAQSection faqs={faqs} />
      <GetStarted getStarted={getStarted} />
    </>
  );
};

export default ApplicationDevelopment;
