import { CircleSmall } from "lucide-react";

export default function BNPLDescription() {
  return (
    <section className="py-6 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#f0f4ff,#ffffff_100%)]">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center max-w-5xl mx-auto mb-4">
          <h2 className="w-full text-4xl sm:text-2xl md:text-4xl lg:text-5xl text-center leading-tight font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-8 p-1">
            What&apos;s the Place of Banks, NBFCs & Fintechs in Embedded Finance
            and BNPL?
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto mb-8 space-y-6 text-gray-700 text-lg">
          <p>
            Traditional banks are repositioning themselves within the embedded
            finance ecosystem, leveraging their regulatory advantages and
            capital reserves. Many banks are developing Banking-as-a-Service
            (BaaS) platforms that enable fintech companies and merchants to
            offer embedded financial products while the bank handles compliance
            and risk management.
          </p>

          {/* Banks Section */}
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Banks bring several advantages to embedded finance:
          </h3>

          {/* Bullet Points */}
          <div className="space-y-2">
            <div className="flex items-center">
              <CircleSmall className="mr-2 text-[#001E80]" />
              <h4 className="text-xl font-semibold text-gray-800">
                Regulatory expertise
              </h4>
            </div>
            <p className="ml-6 text-gray-700">
              Deep understanding of compliance requirements across jurisdictions
            </p>

            <div className="flex items-center">
              <CircleSmall className="mr-2 text-[#001E80]" />
              <h4 className="text-xl font-semibold text-gray-800">
                Capital availability
              </h4>
            </div>
            <p className="ml-6 text-gray-700">
              Substantial funding capacity for lending operations
            </p>

            <div className="flex items-center">
              <CircleSmall className="mr-2 text-[#001E80]" />
              <h4 className="text-xl font-semibold text-gray-800">
                Trust & credibility
              </h4>
            </div>
            <p className="ml-6 text-gray-700">
              Established consumer confidence in traditional banking
              institutions
            </p>

            <div className="flex items-center">
              <CircleSmall className="mr-2 text-[#001E80]" />
              <h4 className="text-xl font-semibold text-gray-800">
                Infrastructure stability
              </h4>
            </div>
            <p className="ml-6 text-gray-700">
              Robust systems capable of handling high transaction volumes
            </p>
          </div>

          <p className="mt-6">
            However, banks face challenges in agility and customer experience
            innovation, often requiring partnerships with more nimble fintech
            providers to deliver competitive embedded solutions.
          </p>

          {/* NBFC Section */}
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-10">
            Non-Banking Financial Companies (NBFCs): Specialized Solutions
          </h3>
          <p>
            NBFCs occupy a unique position in the embedded finance ecosystem,
            offering specialized lending products with greater flexibility than
            traditional banks. These institutions often focus on specific market
            segments or product categories, developing deep expertise in
            particular lending niches.
          </p>
          <p>
            <strong>NBFCs contribute through:</strong>
          </p>
          <div className="space-y-2">
            <div className="flex items-center">
              <CircleSmall className="mr-2 text-[#001E80]" />
              <h4 className="text-xl font-semibold text-gray-800">
                Specialized risk assessment
              </h4>
            </div>
            <p className="ml-6 text-gray-700">
              Tailored underwriting models for specific industries or
              demographics
            </p>

            <div className="flex items-center">
              <CircleSmall className="mr-2 text-[#001E80]" />
              <h4 className="text-xl font-semibold text-gray-800">
                Rapid product development
              </h4>
            </div>
            <p className="ml-6 text-gray-700">
              Faster iteration cycles for new financial products
            </p>

            <div className="flex items-center">
              <CircleSmall className="mr-2 text-[#001E80]" />
              <h4 className="text-xl font-semibold text-gray-800">
                Regulatory agility
              </h4>
            </div>
            <p className="ml-6 text-gray-700">
              More streamlined compliance processes for specific lending
              categories
            </p>

            <div className="flex items-center">
              <CircleSmall className="mr-2 text-[#001E80]" />
              <h4 className="text-xl font-semibold text-gray-800">
                Partnership flexibility
              </h4>
            </div>
            <p className="ml-6 text-gray-700">
              Easier integration with technology platforms and merchant partners
            </p>
          </div>

          {/* Fintech Section */}
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-10">
            Fintech Companies: Innovation Catalysts
          </h3>
          <p>
            Fintech companies serve as the primary innovation drivers in
            embedded finance, developing the technology infrastructure and user
            experiences that make seamless financial integration possible. These
            companies typically focus on specific aspects of the embedded
            finance stack, from payment processing to risk assessment
            algorithms.
          </p>
          <p>
            <strong>Fintech contributions include:</strong>
          </p>
          <div className="space-y-2">
            <div className="flex items-center">
              <CircleSmall className="mr-2 text-[#001E80]" />
              <h4 className="text-xl font-semibold text-gray-800">
                Technology innovation
              </h4>
            </div>
            <p className="ml-6 text-gray-700">
              Advanced APIs, machine learning algorithms, and user interface
              design
            </p>

            <div className="flex items-center">
              <CircleSmall className="mr-2 text-[#001E80]" />
              <h4 className="text-xl font-semibold text-gray-800">
                Rapid deployment
              </h4>
            </div>
            <p className="ml-6 text-gray-700">
              Faster time-to-market for new embedded finance solutions
            </p>

            <div className="flex items-center">
              <CircleSmall className="mr-2 text-[#001E80]" />
              <h4 className="text-xl font-semibold text-gray-800">
                Customer experience optimization
              </h4>
            </div>
            <p className="ml-6 text-gray-700">
              Focus on user-centric design and conversion optimization
            </p>

            <div className="flex items-center">
              <CircleSmall className="mr-2 text-[#001E80]" />
              <h4 className="text-xl font-semibold text-gray-800">
                Data analytics
              </h4>
            </div>
            <p className="ml-6 text-gray-700">
              Sophisticated tools for transaction analysis and risk management
            </p>
          </div>

          <p className="mt-6">
            The most successful embedded finance ecosystems involve
            collaboration between all three types of institutions, each
            contributing their core competencies to create comprehensive
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
