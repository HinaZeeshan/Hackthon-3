
import React from "react";

const Views = () => {
  const stats = [
    { value: "15K", label: "Happy Customers" },
    { value: "150K", label: "Monthly Visitors" },
    { value: "15", label: "Countries Worldwide" },
    { value: "100+", label: "Top Partners" },
  ];

  return (
    <div className="bg-white py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-6xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-gray-600 text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Views;
