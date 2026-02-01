"use client";

export const BlogSection = () => {
  return (
    <section className="py-12 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#f0f4ff,#ffffff_100%)]">
      <div className="container">
        <div className="w-full max-w-8xl">
          <h2 className="w-full text-4xl sm:text-2xl md:text-4xl lg:text-5xl text-center leading-tight font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-4 pb-2">
            What Is a Core Banking Solution?
          </h2>
          {/* <h4 className="text-2xl text-center leading-8 font-bold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent">
            FinServe – Fast, Secure & Scalable Payment Solutions for Merchants
          </h4> */}
          <p className="section-description mt-2 text-xl">
            A{" "}
            <a href="https://aopay.in/core-banking-solutions">
              <strong className="underline">Core Banking Solution (CBS)</strong>
            </a>{" "}
            refers to the complete package—including the software, hardware,
            integration tools, APIs, and support services—that empowers banks to
            digitize and automate their core functions. This solution typically
            supports:
          </p>
        </div>
        <section className="py-4 px-4 md:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Customer onboarding",
              "Account and transaction management",
              "Loan origination",
              "Compliance and reporting",
              "Digital banking integrations (mobile, internet)",
             
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:font-bold"
              >
                <h3 className="p-6 text-center font-medium text-gray-800">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
