import React from "react";
import Image from "next/image";
const Oneproduct: React.FC = () => {
  return (
    <div className="max-w-7xl  mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          <div className="relative w-full h-64 md:h-96 bg-gray-200 rounded-md">
            <Image
              src="/images/unsplash_QANOF9iJlFs.png"
              alt="Placeholder"
              className="object-cover w-full h-full rounded-md"
              width={500}
              height={500}
            />
          </div>
          </div>
          {/* middle */}
          <div>
          <div className=" text-lg font-bold">the quick fox jumps over</div>
          <p className="text-gray-600">
            Met minim Mollie non deserunt Alamo est sit aliqua dolor do amet sint.
            Reprehenderit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p className="text-gray-600">
            Met minim Mollie non deserunt Alamo est sit aliqua dolor do amet sint.
            Reprehenderit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p className="text-gray-600">
            Met minim Mollie non deserunt Alamo est sit aliqua dolor do amet sint.
            Reprehenderit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        
          </div>
        {/* Right Section */}
        <div className="space-y-6">
          <div className="text-lg font-bold">the quick fox jumps over</div>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700">
              <span className="mr-2">➤</span> the quick fox jumps over the lazy dog
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-2">➤</span> the quick fox jumps over the lazy dog
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-2">➤</span> the quick fox jumps over the lazy dog
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-2">➤</span> the quick fox jumps over the lazy dog
            </li>
          </ul>
          <div className="text-lg font-bold">the quick fox jumps over</div>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700">
              <span className="mr-2">➤</span> the quick fox jumps over the lazy dog
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-2">➤</span> the quick fox jumps over the lazy dog
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-2">➤</span> the quick fox jumps over the lazy dog
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-2">➤</span> the quick fox jumps over the lazy dog
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Oneproduct;
