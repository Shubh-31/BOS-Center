"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Link from "next/link";
import ContactForm from "./ContactForm";

const GetStarted = ({ getStarted }: any) => {
  const { title, description, subTitle, CTABtn1, CTABtn2, subTitle1, CTABtn3 } = getStarted || {};

  const showGooglePlayButton =
    title?.includes("Start Your Journey Today With BOS") ||
    title?.includes("FinNest") ||
    title?.includes("FinServe");

  const showAndroidAppLinkButton = title?.includes("B2B Travel Booking Platform");
  const showWebAppLinkButton = title?.includes("B2B Travel Booking Platform");

  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* LEFT: Text Content */}
          <div className="w-full">
            <div className="text-center">
              <h2 className="text-4xl font-bold leading-normal section-title capitalize">
                {title}
              </h2>
              <p className="mt-5 max-w-4xl mx-auto text-lg section-description">
                {description}
              </p>
              {subTitle && (
                <h3 className="text-xl section-title mt-10">{subTitle}</h3>
              )}
              {subTitle1 && (
                <h3 className="text-xl section-title mt-10">{subTitle}</h3>
              )}

              {(CTABtn1 || CTABtn2) && (
                <div className="flex flex-wrap justify-center lg:justify-center gap-4 mt-8">
                  {CTABtn1 && (
                    <a
                      href="https://bosbanking.in/demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-black text-white rounded-md font-semibold transition"
                    >
                      {CTABtn1}
                    </a>
                  )}
                  {CTABtn2 && (
                    <a
                      href="/contact-us"
                      className="px-6 py-3 bg-black text-white rounded-md font-semibold transition"
                    >
                      {CTABtn2}
                    </a>
                  )}
                  {CTABtn3 && (
                    <a
                      href="/contact-us"
                      className="px-6 py-3 bg-black text-white rounded-md font-semibold transition"
                    >
                      {CTABtn3}
                    </a>
                  )}
                </div>
              )}

              <div className="flex items-center justify-center p-2">
                {showAndroidAppLinkButton && (
                  <div className="flex gap-2 mt-5 justify-center lg:justify-center items-center">
                    <Link href="https://play.google.com/store/apps/details?id=com.bos.bos.app">
                      <button
                        className="p-2 bg-blue-300 text-gray-700 rounded-md font-semibold transition hover:underline mr-4
                      "
                      >
                        Travel App
                      </button>
                    </Link>
                  </div>
                )}
                {showWebAppLinkButton && (
                  <div className="flex gap-2 mt-5 justify-center lg:justify-center items-center">
                    <Link href="https://customer.bos.center/">
                      <button className="p-2 bg-blue-300 text-gray-700 rounded-md font-semibold transition hover:underline mr-4">
                        Travel Web App
                      </button>
                    </Link>
                  </div>
                )}
              </div>

              {showGooglePlayButton && (
                <div className="flex gap-2 mt-5 justify-center lg:justify-center items-center">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.bos.bos.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      alt="Get it on Google Play"
                      className="h-12"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
