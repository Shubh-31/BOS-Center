"use client";

export const BNPLSection = () => {
  return (
    <section className="py-6 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#f0f4ff,#ffffff_100%)]">
      <div className="container">
        <div className="w-full max-w-8xl">
          <h2 className="w-full text-4xl sm:text-2xl md:text-4xl lg:text-5xl text-center leading-tight font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-4 pb-1">
            BNPL: Gateway to Embedded Lending
          </h2>

          <p className="section-description mt-3 text-xl">
            Buy Now, Pay Later represents one of the most successful
            implementations of embedded finance. BNPL solutions allow consumers
            to purchase goods or services immediately and pay for them over time
            through installment plans, typically without traditional credit
            checks or interest charges for short-term arrangements. Unlike
            traditional credit cards or personal loans, BNPL is embedded
            directly at the point of sale, creating a seamless checkout
            experience. This integration eliminates friction in the purchasing
            process while providing consumers with flexible payment options that
            align with their cash flow preferences. BNPL model operates on
            several key principles:
          </p>

          {/* ✅ Bullet List */}
          <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
            <li>
              <strong>Instant approval:</strong> Decisions are made in real-time
              using alternative credit scoring methods
            </li>
            <li>
              <strong>Transparent terms:</strong> Clear payment schedules with
              minimal hidden fees
            </li>
            <li>
              <strong>Embedded integration:</strong> Seamlessly woven into the
              merchant&apos;s checkout process
            </li>
            <li>
              <strong>Risk distribution:</strong> Merchants and BNPL providers
              share transaction risks
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
