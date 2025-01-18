import React from "react";
import Image from "next/image";

import { Montserrat } from "next/font/google";

const montseerat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});
const Editor = () => {
  return (
    <div className="items-center mx-auto my-14">
    {/* h2 #feature-Fsection.1 */}
    <h2
      className={`${montseerat.className}items-center text-center font-bold text-[24px] text-myDark hover:text-blue-500`}
    >
      EDITOR’S PICK
    </h2>
    <p
      className={`${montseerat.className} font-normal text-[14px] text-center text-myDark hover:text-blue-500`}
    >
      Problems trying to resolve the conflict between
    </p>
    {/* row */}
    <div className="flex flex-wrap gap-4 items-center justify-center mt-8">
      {/* Image 1 */}
      <div className="relative">
        <Image
          src="/images/filter.png" // Corrected image path
          alt="card-image-1"
          className="object-cover w-full h-auto md:w-[510px] md:h-[500px] px-8 md:px-0 transform transition duration-500 hover:scale-110"
          width={510}
          height={500}
        />
        <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white text-center px-4 py-3 shadow-lg">
          <p
            className={`${montseerat.className}items-center text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
          >
            MEN
          </p>
        </div>
      </div>

      {/* Image 2 */}
      <div className="relative">
        <Image
          src="/images/filter (1).png" // Corrected image path
          alt="card-image-2"
          className="w-[255] h-[500px] md:w-[240px] md:h-[500px] transform transition duration-500 hover:scale-110"
          width={240}
          height={500}
        />
        <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white mx-auto text-center px-4 py-3 shadow-lg">
          <h5
            className={`${montseerat.className}items-center text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
          >
            WOMEN
          </h5>
        </div>
      </div>

      {/* Nested grid */}
      <div className="flex flex-row lg:flex-col gap-4 flex-wrap">
        {/* Image 3 */}
        <div className="relative  mx-auto items-center">
          <Image
            src="/images/filter (2).png" // Corrected image path
            alt="card-image-3"
            className="w-[240px] h-[242px] transform transition duration-500 hover:scale-110"
            width={240}
            height={242}
          />
          <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white mx-auto text-center px-4 py-3 shadow-lg">
            <h5
              className={`${montseerat.className}items-center text-center font-bold text-[16px]  text-myDark hover:text-blue-500`}
            >
              ACCESSORIES
            </h5>
          </div>
        </div>

        {/* Image 4 */}
        <div className="relative  mx-auto items-center">
          <Image
            src="/images/media bg-cover.png" // Corrected image path
            alt="card-image-4"
            className="w-[240px] h-[242px] object-cover transform transition duration-500 hover:scale-110"
            width={240}
            height={242}
          />
          <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white mx-auto text-center px-4 py-3 shadow-lg">
            <h5
              className={`${montseerat.className}items-center text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
            >
              KIDS
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>


);
};

export default Editor;
