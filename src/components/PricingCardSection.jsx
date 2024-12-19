import React from "react";

const StepsSection = () => {
  const steps = [
    {
      id: 1,
      icon: "fas fa-solar-panel",
      label: "Solar Installation",
    },
    {
      id: 2,
      icon: "fas fa-home",
      label: "Energy Efficient Homes",
    },
    {
      id: 3,
      icon: "fas fa-lightbulb",
      label: "Renewable Energy",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row justify-center items-center py-12 px-4 bg-gray-50">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Step */}
            <div className="relative flex flex-col items-center text-center">
              {/* Circle Container */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 bg-white shadow-lg rounded-full flex justify-center items-center">
                {/* Icon */}
                <i
                  className={`${step.icon} text-3xl md:text-4xl text-gray-700`}
                ></i>
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 bg-[#B0D129] text-white rounded-full flex justify-center items-center text-xs md:text-sm font-bold">
                  {step.id}
                </div>
              </div>
              {/* Label */}
              <p className="mt-4 text-sm md:text-base text-gray-700 font-semibold">
                {step.label}
              </p>
            </div>

            {/* Arrow (if not the last step) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
