import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header, Footer } from "@/sections/mySection";
import Script from "next/script";
import WhatsAppButton from "@/components/WhatsappButton";
import Head from "next/head";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Solutions | Financial, Payments, B2B & Travel",
  description:
    "Explore BOS Digital Solutions made for Financial Institutions, Lenders, Payment Collectors, Travel & Business to Business Services with Security, scalablity.",
  keywords: [
    "Fintech",
    "Digital Finance",
    "Financial Technology",
    "Payments",
    "Core Banking Solutions",
    "Secure Payments Solutions",
    "Finance Solutions",
    "FinTech",
    "FinTech Solutions",
    "Digital Fiance Solution",
    "Digital Business Solutions",
    "Digital Travel Solutions",
    "Digital Payment Solutions",
    "BusinessTech Solutions",
    "B2B Solutions",
    "Nidhi Solutions",
    "NBFC Solutions",
    "Lending Solutions",
    "TravelTech Solutions",
    "Travel Management & Booking Solutions",
    "B2C Solutions",
    "B2b Solutions",
    "Customised Software Solutions",
    "Cooperative Society Solutions",
    "Digital ID Verification Solution",
    "Digital Marketing Services",
    "Customised Software Development Services",
    "Customised Application Development Services",
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://bos.center/",
  },
  openGraph: {
    title:
      "Digital Solutions for Financial Institutions, E-commerce, B2B & Travel",
    description:
      "Discover advanced Fintech solutions for digital payments, banking, and financial services—innovative advanced technology solutions for Digital Businesses.",
    url: "https://bos.center/",
    siteName:
      "Digital Solutions Made for Institutions, B2B Businesses & Travel Sector",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5FBQSDHC'
            );
          `,
          }}
        />
        {/* End Google Tag Manager */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Kushaldeep" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="msvalidate.01" content="71D8C2D5F11D705A17C50E4938748FC8" />
        <meta name="yandex-verification" content="a04b3a4895620cd3" />

        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){ c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); })(window, document, "clarity", "script", "pq2db59y2t"); 
            `,
          }}
        />
        <Head>
          <link rel="icon" type="image/png" href="/favicon.ico" />
        </Head>
      </head>
      <Script
        id="hotjar-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:6420549,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `,
        }}
      />
      <body
        className={twMerge(
          dmSans.className,
          "antialiased bg-[radial-gradient(ellipse_100%_80%_at_bottom_left,#f0f4ff,#ffffff)]"
        )}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FBQSDHC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        <div>{children}</div>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
