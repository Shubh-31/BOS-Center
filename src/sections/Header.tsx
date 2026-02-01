"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface SubMenuItem {
  title: string;
  description?: string;
  link: string;
  subItems?: { title: string; link: string }[];
}

interface MenuItem {
  label: string;
  sectionId: string;
  link: string;
  items?: SubMenuItem[];
}

const NAV_MENU: MenuItem[] = [
  {
    label: "Services",
    sectionId: "services",
    link: "/services",
    items: [
      {
        title: "Application Development",
        description: "Marketing and branding solutions",
        link: "/application-development-services",
      },
      {
        title: "Digital Marketing",
        description: "Marketing and branding solutions",
        link: "/digital-marketing-services",
      },
    ],
  },
  {
    label: "Solutions",
    sectionId: "solutions",
    link: "/solutions",
    items: [
      {
        title: "Travel",
        description: "travel",
        link: "",
        subItems: [
          {
            title: "Flight Booking API",
            link: "/flight-booking-api-provider-india/",
          },
          { title: "Train Booking", link: "/train-ticket-booking-api-india" },
          { title: "Bus Booking", link: "/bus-booking-api-india" },
          { title: "Hotel Booking", link: "/hotel-booking-api-india" },
        ],
      },
      {
        title: "Enterprise",
        description: "Mobile solutions for businesses",
        link: "",
        subItems: [
          { title: "API Management", link: "/api-management-software" },
          { title: "CRM & Lead Management", link: "/crm-software" },
          {
            title: "B2B & B2C Management",
            link: "/b2b-b2c-management-software",
          },
          { title: "Travel Management", link: "/travel-management-software" },
          {
            title: "Travel Booking Platform",
            link: "/travel-booking-platform",
          },
          { title: "FinNest", link: "/finnest" },
          { title: "FinServe", link: "/finserve" },
          {
            title: "B2B Reseller Module",
            link: "/b2b-reseller-module-software",
          },
        ],
      },
      {
        title: "Customers",
        description: "Apps for customers",
        link: "",
        subItems: [
          { title: "Travel Booking App", link: "/travel-booking-app" },
        ],
      },
    ],
  },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setOpenSection((prev) => (prev === sectionId ? null : sectionId));
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setOpenSection(null);
  };

  return (
    <header className="sticky top-0 z-[9999] bg-transparent">
      {/* Translucent overlay */}
      <div className="absolute inset-0 bg-white/70 pointer-events-none z-[1]"></div>

      {/* Main header background */}
      <div className="bg-[radial-gradient(ellipse_80%_80%_at_top_left,#e3edff,#ffffff)] overflow-x-clip shadow-md relative z-[10]">
        <div className="container mx-auto px-4 flex items-center justify-between py-3">
          {/* Logo - always visible */}
          <Link href="/" className="relative z-[1001] flex items-center">
            <Image
              src="/assets/logo.png"
              height={30}
              width={120}
              alt="FinTech Solutions Platform"
              className="object-contain"
            />
          </Link>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <MenuIcon
              className="h-6 w-6 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-[10000]">
              {NAV_MENU.map((menu) => (
                <div key={menu.sectionId} className="border-b">
                  <button
                    className="w-full flex justify-between items-center py-3 px-4 font-medium"
                    onClick={() => toggleSection(menu.sectionId)}
                  >
                    {menu.label}
                    <ArrowRight
                      className={`h-4 w-4 transition-transform ${
                        openSection === menu.sectionId ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {openSection === menu.sectionId && menu.items && (
                    <div className="bg-gray-50 my-2">
                      {menu.items.map((item) =>
                        item.link ? (
                          <Link
                            key={item.title}
                            href={item.link}
                            onClick={handleNavClick}
                            className="block py-2 px-6 font-medium hover:bg-gray-100"
                          >
                            {item.title}
                          </Link>
                        ) : (
                          <details key={item.title} className="group">
                            <summary className="cursor-pointer py-2 px-6 font-medium flex justify-between items-center bg-gray-100">
                              {item.title}
                           
                            </summary>
                            {item.subItems && (
                              <ul className="pl-8 py-2">
                                {item.subItems.map((subItem) => (
                                  <li key={subItem.link}>
                                    <Link
                                      href={subItem.link}
                                      onClick={handleNavClick}
                                      className="block py-1 hover:text-purple-600 transition"
                                    >
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </details>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-gray-700 items-center relative text-base">
            {NAV_MENU.map((menu) => (
              <div key={menu.sectionId} className="relative group py-4">
                <div className="hover:text-[#001E80] font-bold transition-all duration-300 cursor-pointer">
                  {menu.label}
                </div>

                {/* Level 1 Dropdown */}
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg z-[10000] w-64 p-2 hidden group-hover:block transition-all duration-200 ease-in-out">
                  {menu.items?.map((item) =>
                    item.link ? (
                      <Link
                        key={item.title}
                        href={item.link}
                        onClick={handleNavClick}
                        className="block hover:bg-gray-100 p-3 rounded-md font-medium"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <div key={item.title} className="relative group/sub">
                        <div className="flex justify-between items-center hover:bg-gray-100 p-3 rounded-md cursor-pointer">
                          <p className="font-medium">{item.title}</p>
                      
                        </div>

                        {/* Nested Submenu (hover-stable) */}
                        <div className="absolute top-0 left-full bg-white shadow-lg rounded-lg z-[10001] w-64 hidden group-hover/sub:block transition-all duration-200 ease-in-out">
                          {item.subItems?.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.link}
                              onClick={handleNavClick}
                              className="block p-3 hover:bg-gray-100 rounded-md text-md font-medium"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* Static Nav Links */}
            <Link
              href="/sectors"
              className="hover:text-[#001E80] font-bold transition"
            >
              Sectors
            </Link>
         
           
            <Link
              href="/blog"
              className="hover:text-[#001E80] font-bold transition"
            >
              Blog
            </Link>
            <Link
              href="/about-us"
              className="hover:text-[#001E80] font-bold transition"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-[#001E80] font-bold transition"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
