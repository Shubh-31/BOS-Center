import TableOfContents from "@/components/TableOfContents";
import {
  PagesHeader,
  FAQSection,
  TravelContent,
  GetStarted,
  HowItWorks,
  FinanceSection,
} from "@/sections/mySection";

import { Tag } from "lucide-react";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title:
    "Best Travel Booking App in India - Book Flights, Trains, Buses & Hotels",
  description:
    "Book flights, trains, buses, hotels, cabs, &amp; holiday packages with India’s best travel booking app. Fast, secure, and easy. Plan your trip today.",
  keywords: [
    "Best Travel Booking App for Individuals",
    "Best Travel Booking App for India",
    "Travel Booking at Cheap Price",
    "Android Travel Booking App",
    "Travel Booking App Company in Delhi",
    "Best Travel Booking App For India",
    "Travel Booking App Free Download",
    "India’s Best Travel Booking App Company",
    "Travel Booking App For Flight Booking",
    "trip planning app",
    "hotel booking app",
    "flight booking app",
    "travel reservation app",
    "book flights easily",
    "travel holiday app",
    "online travel booking",
    "vacation booking app",
    "holiday planning app",
    "easy travel bookings",
    "travel bookings made easy",
    "travel planning app",
    "fast travel reservations",
    "travel trip booking & planning app",
    "secure travel booking",
    "travel app for flights",
    "travel app for hotel booking",
    "travel app for tour booking",
    "vacation planning app",
    "trip management app",
    "digital travel booking",
    "mobile travel app",
    "holiday reservations app",
    "simple travel bookings",
    "travel booking platform",
    "travel booking services",
    "flight and hotel app",
    "personalized travel app",
    "easy vacation planning",
    "secure booking app",
    "travel booking system",
    "book your trip app",
    "best travel deals app",
    "travel packages app",
    "tourism booking app",
    "mobile vacation app",
    "global travel booking app",
    "best travel experience app",
    "travel app for easy trips",
    "instant travel bookings",
    "travel booking made simple",
    "travel assistance app",
    "user-friendly travel app",
    "travel app for trip planning",
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://bos.center/travel-booking-app",
  },
  openGraph: {
    title: "Travel Booking App for Easy Trip Planning",
    description:
      "Book your next adventure effortlessly with our Travel Booking App. Fast, secure, and seamless reservations for flights, hotels, & more.",
    url: "https://bos.center/solutions/customers/travel-booking-app",
    siteName: "Travel App Inc.",
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

const TravelBookingApp = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://bos.center/travel-booking-app/#software",
    name: "BOS Travel Booking App",
    url: "https://bos.center/travel-booking-app",
    applicationCategory: "TravelApplication",
    operatingSystem: "iOS, Android, Web",
    softwareVersion: "1.0",
    description:
      "Book cheap flights, hotels, and local tours instantly with BOS easy-to-use travel booking app. Get the best deals, fast support, and personalized recommendations for your city—travel made simple and affordable.",
    creator: {
      "@type": "Organization",
      name: "BOS Center Pvt. Ltd.",
      url: "https://bos.center",
      telephone: "+91-8929898920",
      address: {
        "@type": "PostalAddress",
        streetAddress: "73, Block B-1, Sewak Park Extension",
        addressLocality: "Uttam Nagar",
        addressRegion: "Delhi",
        postalCode: "110059",
        addressCountry: "IN",
      },
    },
    offers: {
      "@type": "Offer",
      price: "Free",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: "https://bos.center/travel-booking-app",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "120",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Best travel booking app for flights, trains, buses, and hotels",
      "Mobile app for booking flights, hotels, and tours",
      "Online travel app for direct customer bookings",
      "All-in-one travel booking app for travelers",
      "Plan trips and book travel tickets easily",
      "Manage itineraries and reservations",
      "Instant ticket confirmation and secure payments",
      "Multi-mode travel bookings with cancellations",
      "Personalized recommendations and travel deals",
      "Budget-friendly and luxury travel options",
      "Travel app with reminders and itinerary management",
      "Mobile travel solution for frequent travelers",
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
  };

  const headerContent = {
    tag: "Travel Booking Partner",
    title: "Book Your Next Trip With BOS Travel Booking App",
    firstSentence: "Planning your dream vacation has never been easier.",
    description:
      "BOS Travel Booking App is the easiest & most reliable way to book flight, hotel, bus, and train – all in one app. Whether you're going on a business trip, a weekend getaway, or a dream vacation, BOS app offers a smooth experience to help you organize everything you need quickly and effortlessly. Transform your travel planning experience with the most comprehensive travel booking app designed for modern travelers. Plan, book, and manage your entire journey in one app.",
    imgSrc: "/assets/TravelBookingApp1.png",
    alt: "Travel booking mobile app interface showing flight search and hotel reservation.",
    buttonLabel: "Explore Deals & Book Trips With BOS",
  };

  const travelContent = [
    {
      title: "Instant Flight Booking at Unbeatable Prices",
      description: "",
      points: [
        "Compare thousands of flights from major airlines worldwide.",
        "Real-time price alerts and exclusive travel deals.",
        "Flexible booking options with easy cancellation policies.",
        "24/7 customer support for flight changes and assistance.",
      ],
      image: "/assets/TravelBookingApp2.png",
      alt: "Complete travel booking app with loyalty program and reward points management.",
    },
    {
      title: "Hotel Reservations Made Simple",
      description: "",
      points: [
        "Access to over 2 million accommodations globally.",
        "Verified reviews from real travelers.",
        "Best price guarantee on hotel bookings.",
        "Instant confirmation for peace of mind.",
      ],
      image: "/assets/TravelBookingApp3.png",
      alt: "AI-enhanced travel booking app with personalized suggestions and smart filters",
    },
    {
      title: "Complete Trip Planning Tools",
      description:
        "We’ve designed the Travel Booking App to make your travel planning as simple as possible. With a clean, intuitive interface, you can easily search for and book your trip with just a few taps.",
      points: [
        "Personalized travel itineraries based on your preferences.",
        "Local attraction recommendations and activity bookings.",
        "Weather forecasts and travel advisories.",
        "Offline access to your booking details.",
      ],
      image: "/assets/TravelBookingApp4.png",
      alt: "Travel booking application displaying destination search and price comparison.",
    },
    // {
    //   title: "Secure & Convenient Payment Processing",
    //   description:
    //     "Rest easy knowing your transactions are secure. The Travel Booking App uses end-to-end encryption** and offers multiple payment methods, including credit cards and PayPal, to make booking your trip easier and safer.",
    //   points: [
    //     "PCI DSS-compliant payment processing.",
    //     "Secure payments with SSL encryption.",
    //     "Multiple payment options for global users.",
    //   ],
    //   image: "/assets/TravelBookingApp5.png",
    //   alt: "Digital travel app with user-friendly booking process and payment integration.",
    // },
  ];

  const howItWorks = {
    layout: "features",
    title: "How It Works",
    description:
      "Integrating the Train Booking API into your platform is quick & straightforward. Here is how you can get started",
    imgSrc: "/assets/TravelAPIs.png",
    alt: "Booking app with map integration and location-based travel recommendations.",
    features: [
      {
        title: "Download the App and Sign Up",
        description:
          "Get started by downloading the Travel Booking App from the App Store or Google Play. Sign up for an account and begin exploring a world of travel possibilities.",
        icon: "/assets/BOS.Center Website Icons/Download the App.png",
      },
      {
        title: "Search & Book Your Trip",
        description:
          "Search for your preferred flights, hotels, car rentals, and activities by entering your destination and travel dates. Customize your search with filters for price, location, and more. With a simple tap, you can make bookings instantly.",
        icon: "/assets/BOS.Center Website Icons/Search&BookYourTrip.png",
      },
      {
        title: "Get Real-Time Updates & Notifications",
        description:
          "Once your bookings are confirmed, receive instant notifications about flight status, hotel check-in reminders, and any changes to your itinerary.",
        icon: "/assets/Real-Time Notifications.png",
      },
      {
        title: "Enjoy Your Trip",
        description:
          "Access all your travel details, including bookings, itineraries, and activity confirmations, all in one place. Need to make adjustments? Simply use the app to manage your bookings while on the go.",
        icon: "/assets/BOS.Center Website Icons/TravelAppIconEnjoyYourTrip.png",
      },
    ],
  };

  const financeContent = {
    heading: "Exclusive Deals Just for You",
    description:
      "Save big on your next trip with exclusive offers available only through the Travel Booking App. Enjoy discounted rates on flights, hotels, and more. Plus, with our loyalty program, the more you book, the more you save.",
    imgSrc: "/assets/TravelBookingApp7.png",
    alt: "Mobile travel platform with real-time booking confirmation and e-ticket generation.",
    points: [
      {
        item: "Save up to 30% on your next booking.",
        icon: <Tag className="text-blue-600 text-2xl shrink-0" />,
      },
      {
        item: "Special last-minute deals and promotions.",
        icon: <Tag className="text-blue-600 text-2xl shrink-0" />,
      },
      {
        item: "Join our loyalty program to earn rewards with every booking.",
        icon: <Tag className="text-blue-600 text-2xl shrink-0" />,
      },
    ],
  };

  const faqs = [
    {
      question: "Is BOS travel booking app free to use?",
      answer:
        "Yes, our app is completely free to download and use. We earn commissions from our travel partners, so you never pay booking fees.",
    },
    {
      question: "Can I cancel or modify my bookings?",
      answer:
        "Absolutely! Most bookings can be modified or cancelled directly through the app, subject to the terms and conditions of your specific reservation.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and other secure payment methods depending on your location.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes, our 24/7 customer support team is available via chat, email, or phone to assist with any booking questions or travel emergencies.",
    },
  ];

  const getStarted = {
    title: "Start Your Journey Today With BOS",
    description:
      "Ready to experience stress-free travel planning? Download our travel booking app now and discover why millions of travelers choose us for their booking needs.",
  };

  return (
    <>
      <Head>
        <title>BOS: Best Flight, Train, Bus, Hotel Booking App</title>
        <meta name="robots" content="index, follow"></meta>
      </Head>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <PagesHeader headerContent={headerContent} />
      <TravelContent
        content={travelContent}
        heading="BOS Travel Booking App for Your Next Adventure"
        subHeading="BOS intuitive travel booking app combines powerful search capabilities with user-friendly design to deliver the ultimate trip planning experience."
      />
      {/* <HowItWorks content={howItWorks} /> */}
      <div className="bg-white text-gray-800">
        {/* ============================
          BOOK YOUR NEXT TRIP SECTION
      =============================*/}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 section-title">
            Book Your Next Trip Easily With BOS Travel App
          </h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                1. Search & Compare
              </h3>
              <p className="text-md text-gray-600">
                Enter your destination, dates, and preferences to instantly
                compare flights, hotels, and activities from hundreds of
                providers. Our advanced algorithms ensure you see the best
                travel deals available.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                2. Book with Confidence
              </h3>
              <p className="text-md text-gray-600">
                Secure your reservations with our encrypted payment system.
                Choose from multiple payment options and enjoy flexible booking
                policies that adapt to your changing plans.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                3. Manage Your Trip
              </h3>
              <p className="text-md text-gray-600">
                Access all your booking confirmations, travel documents, and
                itinerary details in one convenient location. Make changes, add
                activities, or contact support directly through the app.
              </p>
            </div>
          </div>
        </section>

        {/* ============================
          EXCLUSIVE FEATURES SECTION
      =============================*/}
        <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-50">
          <h2 className="text-4xl font-bold mb-8 section-title">
            Exclusive Features That Set Us Apart
          </h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Smart Price Tracking
              </h3>
              <p className="text-md text-gray-600">
                Never miss a deal again with our intelligent price monitoring
                system. Get notified when flight prices drop or hotel rates
                change for your preferred destinations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Personalized Recommendations
              </h3>
              <p className="text-md text-gray-600">
                Our AI-powered recommendation engine learns your travel
                preferences to suggest destinations, accommodations, and
                activities perfectly tailored to your interests.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Group Travel Coordination
              </h3>
              <p className="text-md text-gray-600">
                Planning a trip with friends or family? Our group booking
                features make it easy to coordinate multiple travelers, share
                itineraries, and manage group reservations.
              </p>
            </div>
          </div>
        </section>

        {/* ============================
          DEALS SECTION
      =============================*/}
        <section className="max-w-7xl mx-auto px-6 py-16 flex items-center justify-center flex-col">
          <h2 className="text-4xl font-bold mb-8 section-title p-1">
            Cheap Travel Bookings & Travel Deals
          </h2>

          <p className="text-xl text-gray-700 mb-6">
            Save more on every trip with our exclusive travel deals and
            promotional offers:
          </p>

          <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
            <li>
              <strong className="text-xl">Early Bird Discounts:</strong> Book
              flights 60 days in advance for up to 30% savings.
            </li>
            <li>
              <strong className="text-xl">Last-Minute Deals:</strong>{" "}
              Spontaneous traveler? Find amazing deals on same-day bookings.
            </li>
            <li>
              <strong className="text-xl">Bundle Savings:</strong> Save up to
              40% when you book flights and hotels together.
            </li>
            <li>
              <strong className="text-xl">Loyalty Rewards:</strong> Earn points
              on every booking and unlock VIP travel benefits.
            </li>
          </ul>
        </section>
      </div>
      <FinanceSection financeContent={financeContent} />
      <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
        <h2 className="section-title mb-4 w-full max-w-7xl mx-auto text-center text-5xl container">
          Customer Success Stories
        </h2>
        <div className="section-description mt-5 max-w-4xl mx-auto text-lg">
          <blockquote className="mt-8 border-l-4 border-blue-600 pl-6 italic text-gray-800 max-w-3xl mx-auto">
            This travel booking app transformed how I plan my business trips.
            The seamless integration of flights, hotels, and ground
            transportation saves me hours of planning time.
            <footer className="mt-4 text-right font-medium not-italic text-gray-700">
              - Sarah M., Business Traveler
            </footer>
          </blockquote>
          <blockquote className="mt-8 border-l-4 border-blue-600 pl-6 italic text-gray-800 max-w-3xl mx-auto">
            As a family of five, finding affordable vacation options was always
            stressful. This app&apos;s family-friendly filters and group booking
            features made our Disney World trip planning effortless.
            <footer className="mt-4 text-right font-medium not-italic text-gray-700">
              - Mickey R., Family Traveler
            </footer>
          </blockquote>
        </div>
      </section>
      <section className="bg-gray-50 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="p-6 rounded-lg mb-8">
            <h2 className="section-title mt-5 lg:text-5xl md:text-3xl sm:text-2xl text-center p-1">
              Download BOS Travel Booking App Today
            </h2>
            <p className="section-description mt-2">
              Join millions of satisfied travelers who trust our platform for
              their booking needs. Available on iOS and Android devices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col gap-4 mx-auto">
              <div className="flex items-center gap-3 justify-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  Get Started in Minutes
                </h3>
              </div>

              <ul className="list-disc list-inside text-gray-600">
                <li>Download the app from App Store or Google Play</li>
                <li>Create your free traveler profile</li>
                <li>Start exploring destinations and deals</li>
                <li>Book your first trip with confidence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <GetStarted getStarted={getStarted} />
    </>
  );
};

export default TravelBookingApp;
