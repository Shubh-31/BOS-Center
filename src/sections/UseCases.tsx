import React from "react";

const UseCases = ({ useCases }: any) => {
  const renderDescription = (desc: any) => {
    // If description is a simple string
    if (typeof desc === "string") {
      return <p className="text-gray-600">{desc}</p>;
    }

    // If it's an array of strings and {label, content} objects
    if (Array.isArray(desc)) {
      return (
        <div className="space-y-3 text-gray-600">
          {desc.map((item, idx) => {
            if (typeof item === "string") {
              return <p key={idx}>{item}</p>;
            } else if (item.label && item.content) {
              return (
                <div key={idx} className="flex items-start gap-2">
                  {/* <span className="inline-block mt-1">•</span> */}
                  <div>
                    <h4 className="text-md font-semibold">{item.label}</h4>
                    <p className="text-base mt-1">{item.content}</p>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      );
    }

    return null;
  };

  return (
    <section className="bg-gray-50 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="p-6 rounded-lg mb-8 text-center">
          <h2 className="section-title mt-2 text-5xl p-1 capitalize">
            {useCases.heading}
          </h2>
          <p className="section-description mt-2 text-xl">
            {useCases.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {useCases.uses.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4 w-full md:w-[48%] lg:w-[48%]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#EAEEFE] rounded-full flex items-center justify-center relative overflow-hidden">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>

              {renderDescription(item.description)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
