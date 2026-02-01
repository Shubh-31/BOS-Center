import Image from "next/image";
import logo from "@/assets/logosaas.png";
const TrialSection = () => {
  return (
    <section className="bg-gray-50 px-8 md:py-24 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Trial Box */}
        <div className="bg-gray-900 rounded-lg p-4 md:p-12 flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="flex flex-col justify-between flex-1">
            {/* Top Content: Heading + Rating */}
            <div className="text-left">
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-snug m-0 p-0">
                Get <span className="text-orange-400">Free Demo</span> today!
              </h2>
              <p className="text-gray-300 text-sm mt-2">
                4.8/5 <span className="ml-2">From 300+ Customer Reviews</span>
              </p>
            </div>

            {/* Bottom Content: Email + Phone */}
            <div className="flex gap-8 mt-8">
              <div className="text-left mb-2">
                <p className="text-orange-400 font-medium m-0 p-0">
                  Send us an email
                </p>
                <a
                  href="mailto:info@bos.center"
                  className="text-white hover:underline"
                >
                  info@bos.center
                </a>
              </div>
              <div className="text-left mb-2">
                <p className="text-orange-400 font-medium m-0 p-0">
                  Give us a call
                </p>
                <a
                  href="tel:+91 892-989-8905"
                  className="text-white cursor-pointer m-0 p-0"
                >
                  +91 892-989-8905
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-4 mt-8 md:mt-0 md:ml-8 justify-center">
            {[
              "Free 7-day trial",
              "No credit card required",
              "Cancel anytime",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white bg-gray-900 py-3 px-4 rounded-lg"
              >
                <span className="text-orange-400 text-xl">✔</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        {/* <div className="flex flex-col md:flex-row items-center justify-between mt-16 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <Image src={logo} height={40} alt="SaaS logo" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#12054a]">
                JUST PRODUCE.
              </h4>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="text-center mt-4">
              <p className="text-[#0b0133] font-medium">Send us an email</p>
              <a href="mailto:info@bos.center" className="text-gray-500">
                info@bos.center
              </a>
            </div>
            <div className="text-center mt-4">
              <p className="text-[#0b0133] font-medium">Give us a call</p>
              <a href="tel:+918181898904">
                <p className="text-gray-500 cursor-pointer">+91 81818 98904</p>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TrialSection;
