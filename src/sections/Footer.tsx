import Image from "next/image";
import Link from "next/link";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import { Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-8">
      <div className="container mx-auto max-w-screen-xl px-6">
        {/* Top: Logo + Content + Company nav pushed right */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left: Logo + text */}
          <div className="flex-1">
            <Image
              src="/assets/logo.png"
              height={40}
              width={120}
              alt="SaaS logo"
              className="relative z-10"
            />
            <p className="-mt-1 max-w-sm text-[#A3A3A3]">
              Empower Your Travel Business with Next-Gen Software Solutions.
            </p>
            <p className="max-w-sm text-[#A3A3A3] mt-2">
              Streamline travel bookings, B2B reseller operations, and customer
              management — all from a single, powerful platform. Our
              intelligent, secure infrastructure allows travel businesses,
              agencies, and resellers to manage, automate, and scale operations
              with ease.
            </p>
            <p className="max-w-sm text-[#A3A3A3] mt-2">
              Built for speed, flexibility, and security — our solutions help
              modern travel businesses grow faster, smarter, and with full
              control.
            </p>
          </div>

          {/* Right: Navs + Social icons stacked vertically */}
          <div className="flex flex-col gap-16">
            {/* Navs side by side on desktop */}
            <div className="flex flex-col md:flex-row gap-10">
              <nav className="w-full md:w-auto">
                <h4 className="text-white font-semibold mb-3">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about-us" className="hover:text-white">
                      About us
                    </Link>
                  </li>
                
                  <li>
                    <Link href="/blog" className="hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" className="hover:text-white">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav className="w-full md:w-auto mt-2">
                <ul className="space-y-8">
                  <li>
                    <Image
                      src="/assets/PCIDSS.png"
                      height={50}
                      width={50}
                      alt="SaaS logo"
                      className="relative z-10"
                    />
                  </li>
                  <li>
                    <Image
                      src="/assets/PCIDSS1.png"
                      height={50}
                      width={50}
                      alt="SaaS logo"
                      className="relative z-10"
                    />
                  </li>
                </ul>
              </nav>
            </div>

            {/* Social icons below navs */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/BOSCenterIND"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1877F2] transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>

              <a
                href="https://www.instagram.com/boscenter.in/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E4405F] transition-colors"
              >
                <SocialInsta className="w-6 h-6" />
              </a>

              <a
                href="https://www.linkedin.com/company/bos-center-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0A66C2] transition-colors"
              >
                <SocialLinkedIn className="w-6 h-6" />
              </a>

              <a
                href="https://twitter.com/boscenter"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffffff] transition-colors"
              >
                <SocialX className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 my-2"></div>

        {/* Bottom: Policies & Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-4">
          <p className="text-[#A3A3A3]">
            &copy; {new Date().getFullYear()} Business Online Solution. All
            rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-[#BCBCBC]">
            <Link href="/terms-condition" className="hover:text-white">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cancellation-refund" className="hover:text-white">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
