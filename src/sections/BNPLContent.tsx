import Image from 'next/image';
import React from 'react'

export const BNPLContent = () => {
  return (
    <section className="py-6 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#f0f4ff,#ffffff_100%)]">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-4">
          <h2 className="w-full text-4xl sm:text-2xl md:text-4xl lg:text-5xl text-center leading-tight font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-8 pb-1">
            Embedded Finance & Embedded Lending (BNPL): Market Value
          </h2>
        </div>

        {/* Intro Paragraphs */}
        <div className="max-w-4xl mx-auto mb-8 text-lg text-gray-700 space-y-2">
          <p>
            Embedded finance market has experienced explosive growth, with
            global market value reaching unprecedented levels. Industry analysts
            project the embedded finance market will exceed $500 trillion by
            2030, representing a compound annual growth rate of over 32%. Within
            this ecosystem, embedded lending, particularly BNPL, accounts for a
            significant portion of the growth trajectory.
          </p>

          <p>
            BNPL segment alone has demonstrated remarkable expansion, with
            transaction volumes growing from approximately $20 billion in 2019
            to over $120 billion by 2024. This growth trajectory reflects
            fundamental shifts in consumer behavior, particularly among
            millennials and Generation Z consumers who prefer flexible payment
            options over traditional credit products.
          </p>
        </div>

        {/* Sub Heading */}
        <div className="max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Embedded finance creates value through multiple channels:
          </h3>

          {/* Sections */}
          <div className="space-y-6">
            {/* For Merchants */}
            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-gray-800">
                For Merchants
              </h4>
              <p className="text-gray-700">
                Integration of BNPL solutions typically increases average order
                values by 20-30% while improving conversion rates by 15-25%. The
                embedded nature reduces cart abandonment rates significantly, as
                customers can complete purchases without leaving the
                merchant&apos;s platform.
              </p>
            </div>

            {/* For Consumers */}
            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-gray-800">
                For Consumers
              </h4>
              <p className="text-gray-700">
                BNPL provides access to credit without the complexity of
                traditional loan applications. The transparent fee structure and
                interest-free short-term options appeal to cost-conscious
                consumers seeking budget management tools.
              </p>
            </div>

            {/* For Financial Service Providers */}
            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-gray-800">
                For Financial Service Providers
              </h4>
              <p className="text-gray-700">
                Embedded lending opens new customer acquisition channels while
                reducing customer acquisition costs. The data generated through
                embedded transactions provides valuable insights for risk
                assessment and product development.
              </p>
            </div>
          </div>
        </div>

        {/* Regional Trends */}
        <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-4">
          <p>
            North America leads the embedded finance market, driven by advanced
            fintech infrastructure and high consumer adoption rates. Europe
            follows closely, with strong regulatory frameworks supporting
            innovation while ensuring consumer protection. The Asia-Pacific
            region shows the highest growth potential, fueled by digital
            transformation initiatives and underserved populations seeking
            financial inclusion.
          </p>

          {/* Chart Image */}
          <div className="flex justify-center mt-6">
            <Image
              src="/assets/BNPLContent.png"
              alt="Embedded finance market growth chart displaying $43 billion in 2021 rising to $138 billion by 2026"
              width={800}
              height={450}
              className="rounded-xl shadow-lg w-3/4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
