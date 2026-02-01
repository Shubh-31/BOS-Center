"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type TocItem = {
  id: string;
  title: string;
};

type CTAProps = {
  heading?: string;
  subheading?: string;
  imgSrc?: string;
  buttonLabel?: string;
  buttonLink?: string;
};

type TableOfContentsProps = {
  items: TocItem[];
  cta?: CTAProps;
};

const TableOfContents: React.FC<TableOfContentsProps> = ({ items, cta }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        });
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="overflow-auto h-screen p-4 bg-white shadow-md rounded-lg">
      <nav
        style={{
          border: "1px solid #ededed",
          padding: "1rem",
          borderRadius: "8px",
          marginBottom: "6rem",
        }}
      >
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {items.map((item) => (
            <li key={item.id} className="text-md mb-4">
              <a
                href={`#${item.id}`}
                style={{
                  color: activeId === item.id ? "#4b5563" : "#9ca3af",
                  fontWeight: activeId === item.id ? 600 : 400,
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.2s ease",
                }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ✅ Professional CTA Card */}
      {cta &&
        (cta.heading || cta.subheading || cta.imgSrc || cta.buttonLabel) && (
          <div className="bg-gradient-to-b from-black to-[#001E80] text-white rounded-xl overflow-hidden shadow-xl p-6 text-center space-y-4">
            {cta.imgSrc && (
              <div className="w-full h-40 relative mb-4">
                <Image
                  src={cta.imgSrc}
                  alt={cta.heading || "CTA image"}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            )}
            {cta.heading && (
              <h3 className="text-xl font-semibold">{cta.heading}</h3>
            )}
            {cta.subheading && <p className="text-sm">{cta.subheading}</p>}

            {cta.buttonLabel && cta.buttonLink && (
              <Link
                href={cta.buttonLink}
                className="inline-block bg-white text-[#001E80] font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300"
              >
                {cta.buttonLabel}
              </Link>
            )}
          </div>
        )}
    </aside>
  );
};

export default TableOfContents;


