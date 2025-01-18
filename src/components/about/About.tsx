import Image from "next/image";
import React from "react";
import enjoy from "/public/images/hero-2-bg-shape-cover (1).png";
const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-slate-100">
        <div className="container mx-auto flex px-2 py-4 md:flex-row flex-col justify-center items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p>ABOUT COMPANY</p>
            <h1 className="title-font sm:text-4xl  mt-2 mb-4 font-medium text-gray-900">
              ABOUT US
            </h1>
            <p className="mb-8 leading-relaxed">
              We know how large objects will act, but things on a small scale
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Get Quote Now
              </button>
            </div>
          </div>

          {/* Image for large screens */}
          <div className="block relative w-full h-[680px]">
            <Image
              src={enjoy}
              alt="Summer collection"
              layout="fill"
              objectFit="cover"
              objectPosition="80% 70%" // Adjust to focus on the hand of the girl
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
