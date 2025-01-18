"use client"
import React, { useState } from "react";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = () => setIsYearly(!isYearly);

  const plans = [
    {
      title: "FREE",
      price: "0",
      features: [
        "Unlimited product updates",
        "Unlimited product uploads",
        "Basic Cloud storage",
      ],
      disabledFeatures: ["Priority support", "Email and community support"],
      buttonText: "Try for free",
    },
    {
      title: "STANDARD",
      price: isYearly ? "99.99" : "9.99",
      features: [
        "Unlimited product updates",
        "Unlimited product uploads",
        "5GB Cloud storage",
        "Priority support",
      ],
      disabledFeatures: ["Email and community support"],
      buttonText: "Try for free",
      highlighted: true,
    },
    {
      title: "PREMIUM",
      price: isYearly ? "199.99" : "19.99",
      features: [
        "Unlimited product updates",
        "Unlimited product uploads",
        "10GB Cloud storage",
        "Priority support",
        "Email and community support",
      ],
      disabledFeatures: [],
      buttonText: "Try for free",
    },
  ];

  return (
    <div className="bg-slate-200 py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-sm md:text-base text-blue-900 font-medium">PRICING</p>
        <h1 className="text-2xl md:text-4xl font-bold mt-2">Simple Pricing</h1>
      </div>
      <div className="max-w-7xl mx-auto text-center mt-8">
        <h2 className="text-xl md:text-3xl font-bold text-gray-900">Pricing</h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Problems trying to resolve the conflict between the key majorities of Classical Physics and Quantum Mechanics
        </p>
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={toggleBilling}
            className={`px-4 py-2 border ${
              isYearly ? "bg-blue-900 text-white" : "bg-gray-100"
            } rounded-l-lg text-sm md:text-base`}
          >
            Yearly
          </button>
          <button
            onClick={toggleBilling}
            className={`px-4 py-2 border ${
              !isYearly ? "bg-blue-900 text-white" : "bg-gray-100"
            } rounded-r-lg text-sm md:text-base`}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-lg p-20 flex flex-col ${
              plan.highlighted ? "bg-[#252B42] text-white" : "bg-gray-50"
            } shadow-md transition-transform transform hover:scale-105`}
          >
            <h3 className="text-lg md:text-xl font-bold mb-4">{plan.title}</h3>
            <p className="text-3xl md:text-4xl font-bold mb-4">
              ${plan.price} <span className="text-sm font-normal">/ Month</span>
            </p>
            <ul className="mb-6 space-y-2 text-sm md:text-base">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  <span>{feature}</span>
                </li>
              ))}
              {plan.disabledFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-400">
                  <span className="w-4 h-4 bg-gray-300 rounded-full mr-2"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`py-2 px-4 font-semibold rounded-md text-sm md:text-base ${
                plan.highlighted
                  ? "bg-white text-[#252B42]"
                  : "bg-[#252B42] text-white"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;











