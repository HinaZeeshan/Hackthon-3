import React from "react";
import Image from "next/image";

const Teamgallery = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="text-center py-8 bg-white shadow-md">
        <h2 className="text-sm uppercase text-gray-500">What We Do</h2>
        <h1 className="text-3xl font-bold mt-2">Innovation tailored for you</h1>
      </header>

      {/* Navigation Path */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-600">Home / Team</p>
        </div>
      </div>
      {/* grid */}

      <div className="flex flex-col md:flex-row lg:flex-row justify-center space-x-0 md:space-x-2 lg:space-x-2 pt-12 ">
        <div>
          {/* Large screen */}
          <Image
            src="/images/hero-1.png" // Corrected image path
            alt="hero-1"
            className="hidden md:block object-cover w-full h-auto md:w-[700px] md:h-[530px] lg:w-[700px] lg:h-[530px] transform transition duration-500 hover:scale-110"
            width={700}
            height={530}
          />
          {/* Small screen */}
          <Image
            src="/images/hero-sm.png" // Corrected image path
            alt="hero-sm"
            className="block md:hidden object-cover w-[413px] h-[530px] transform transition duration-500 hover:scale-110"
            width={413}
            height={530}
          />
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col space-y-[10px]">
          {/* Large screen image */}
          <Image
            src="/images/hero-2.png"
            alt="hero-2"
            className="hidden md:block object-cover w-[361px] h-[260px] transform transition duration-500 hover:scale-110" // Hidden on small screens
            width={361}
            height={260}
          />
          {/* Small screen image */}
          <Image
            src="/images/hero-sm-2.png"
            alt="hero-sm-2"
            className="block md:hidden  w-full h-auto mr-2 transform transition duration-500 hover:scale-110" // Hidden on larger screens
            width={204}
            height={260}
          />
          {/* Large screen image */}
          <Image
            src="/images/hero-3.png"
            alt="hero-3"
            className="hidden md:block object-cover w-[361px] h-[260px] transform transition duration-500 hover:scale-110" // Hidden on small screens
            width={361}
            height={260}
          />
          {/* Small screen image */}
          <Image
            src="/images/hero-sm-3.png"
            alt="hero-sm-3"
            className="block md:hidden  w-full h-auto transform transition duration-500 hover:scale-110" // Hidden on larger screens
            width={204}
            height={260}
          />
        </div>

        <div className="flex flex-row md:flex-col lg:flex-col space-y-[10px]">
          {/* Large screen image */}
          <Image
            src="/images/hero-4.png"
            alt="hero-4"
            className="hidden md:block object-cover w-[361px] h-[260px] transform transition duration-500 hover:scale-110" // Hidden on small screens
            width={361}
            height={260}
          />
          {/* Small screen image */}
          <Image
            src="/images/hero-sm-4.png"
            alt="hero-sm-4"
            className="block md:hidden object-cover w-full h-auto mr-2 transform transition duration-500 hover:scale-110" // Hidden on larger screens
            width={204}
            height={260}
          />
          {/* Large screen image */}
          <Image
            src="/images/hero-5.png"
            alt="hero-5"
            className="hidden md:block object-cover w-[361px] h-[260px] transform transition duration-500 hover:scale-110" // Hidden on small screens
            width={361}
            height={260}
          />
          {/* Small screen image */}
          <Image
            src="/images/hero-sm-5.png"
            alt="hero-sm-5"
            className="block md:hidden object-cover w-full h-auto transform transition duration-500 hover:scale-110" // Hidden on larger screens
            width={204}
            height={260}
          />
        </div>
      </div>
    </div>
  );
};

export default Teamgallery;
