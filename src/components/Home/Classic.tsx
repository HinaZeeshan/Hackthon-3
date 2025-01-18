import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
const montseerat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});
const Classic = () => {
  return (
    <div className="">
    <section className="text-white  bg-[#23856D]">
      <div className="container mt-2  mx-auto flex px-3 py-18 md:flex-row flex-col items-center justify-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h4
            className={`${montseerat.className} title-font sm:text-4xl text-3xl mb-4 font-medium white`}
          >
            SUMMER 2020
          </h4>
          <h1
            className={`${montseerat.className} title-font sm:text-4xl text-3xl mb-4 font-bold text-white`}
          >
            Vita Classic
            <br className="hidden lg:inline-block" />
            Product
          </h1>
          <p className="mb-8 leading-relaxed">
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              $16.48
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-green-300 rounded text-lg">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/images/shop-hero-2-png-picture-1.png"
            width={510}
            height={685}
          />
          
        </div>
      </div>
    </section>
    </div>

  );
};

export default Classic;
