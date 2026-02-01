"use client";
import Link from "next/link";

export const BlogBankingSoftware = () => {
  const solutions = [
    {
      name: "FinNest",
      description:
        "Scalable solution offering modules for credit unions, NBFCs, and cooperatives",
      link: "/finnest",
    },
    {
      name: "Temenos",
      description: "Cloud-native, API-first banking platform",
    },
    {
      name: "Infosys",
      description: "Popular in emerging markets for its robustness",
    },
    {
      name: "Oracle",
      description: "Enterprise-grade with advanced analytics",
    },
  ];

  const choosingSolution = [
    {
      solutionName: "Cloud vs. On-premise",
    },
    {
      solutionName: "Integration capabilities",
    },
    {
      solutionName: "Support for compliance and KYC",
    },
    {
      solutionName: "Total cost of ownership",
    },
    {
      solutionName: "Customization and scalability",
    },
  ];

  return (
    <>
      <section className="py-12 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#f0f4ff,#ffffff_100%)]">
        <div className="container">
          <div className="w-full max-w-8xl">
            <h2 className="w-full sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-8 pb-2">
              Which Is The Best Core Banking Software?
            </h2>

            <p className="section-description mt-5">
              The “best” core banking software depends on your{" "}
              <strong>business size, regulatory needs,</strong> and{" "}
              <strong>functional requirements</strong>. However, top solutions
              often include:
            </p>
          </div>

          <section className="py-8 px-4 md:px-20">
            <div className="max-w-4xl mx-auto">
              <ul className="space-y-4 list-disc">
                {solutions.map((solution, idx) => (
                  <li key={idx} className="text-lg text-gray-800">
                    {solution.link ? (
                      <Link
                        href={solution.link}
                        className="text-blue-700 underline hover:text-blue-900 transition font-semibold"
                      >
                        {solution.name}
                      </Link>
                    ) : (
                      <h3 className="font-semibold text-black">
                        {solution.name}
                      </h3>
                    )}
                    {solution.description && (
                      <p className="text-gray-800 text-md">
                        {solution.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>
      <section className="container py-16 px-4 md:px-20">
        <h3 className="text-2xl font-semibold mb-8">
          When choosing a solution, consider:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {choosingSolution.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center text-gray-800 hover:font-bold"
            >
              <h4 className="text-md font-bold">{item.solutionName}</h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
