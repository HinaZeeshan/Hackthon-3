import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";
const montseerat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});
const Post = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
       

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
           
           
            <div className="flex flex-col justify-center items-center">
         
          <h6
            className={`${montseerat.className}  sm:text-2xl text-sm mb-4 font-medium white`}
          >
            Practice Advice
          </h6>
          <h1
            className={`${montseerat.className} title-font sm:text-4xl text-3xl hover:scale-105 transition-transform duration-500 ease-in-out  mb-4 font-bold text-black`}
          >
            Featured Posts
          </h1>
          <p className={`${montseerat.className} mb-8 leading-relaxed`}>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
          
          
          </div>

          <div className="flex flex-col sm:flex-row sm:-m-4 -mx-4 -mb-10 -mt-4 gap-2">
            <div className="border-2 border-slate-500 shadow-lg  p-2 rounded-lg md:w-1/3 sm:mb-0 mb-6">
              <div className=" rounded-lg h-64 overflow-hidden">
                <Image
                  width={350}
                  height={300}
                  alt="content"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  h-full w-full"
                  src="/images/unsplash_hHdHCfAifHU.png"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Shooting Stars
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="border-2 border-slate-500 shadow-lg  p-2 rounded-lg md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  width={350}
                  height={300}
                  alt="content"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  h-full w-full"
                  src="/images/unsplash_tVEqStC2uz8.png"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                The Catalyzer
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="border-2 border-slate-500 shadow-lg  p-2 rounded-lg  md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  width={350}
                  height={300}
                  alt="content"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  h-full w-full"
                  src="/images/unsplash_dEGu-oCuB1Y.png"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                The 400 Blows
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="w-24 h-full bg-indigo-500 mt-8"></div>
    </div>
  );
};

export default Post;
