import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const montseerat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});
const Bestproduct = () => {
  return (
 <section className="text-gray-600   pt-[80px] pb-[80px] gap-6 body-font">
      <div className="flex flex-col justify-center items-center">
      
        <h3
          className={`${montseerat.className} font-bold text-[20px] sm:text-[28px] lg:text-[34px] text-[#252B42]`}
        >
          BESTSELLER PRODUCTS
        </h3>
        
      </div>

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="" className="block relative h-[450px] w-72 rounded overflow-hidden">
              <Image
               width={800}
               height={774}
                alt="ecommerce"
                className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
                src="/images/product-cover-5 (13).png"
              />
            </Link>
            <div className="mt-4 mr-20 flex flex-col justify-center items-center">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">$16.00</p>
            </div>
           
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="" className="block relative h-[450px] w-72 rounded overflow-hidden">
              <Image
              width={700}
              height={800}
                alt="ecommerce"
                className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
                src="/images/product-cover-5 (16).png"
              />
            </Link>
            <div className="mt-4 mr-20 flex flex-col justify-center items-center" >
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Shooting Stars
              </h2>
              <p className="mt-1">$21.15</p>
            </div>
            
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="" className="block relative h-[450px] w-72 rounded overflow-hidden">
              <Image
              width={700}
              height={800}
                alt="ecommerce"
                className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
                src="/images/product-cover-5 (17).png"
              />
            </Link>
            <div className="mt-4 mr-20 flex flex-col justify-center items-center">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">$12.00</p>
            </div>
           
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="" className="block relative h-[450px] w-72 rounded overflow-hidden">
              <Image
              width={700}
              height={800}
                alt="ecommerce"
                className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
                src="/images/product-cover-5 (20).png"
              />
            </Link>
            <div className="mt-4 mr-20 flex flex-col justify-center items-center">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The 400 Blows
              </h2>
              <p className="mt-1">$18.40</p>
            </div>
           
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="" className="block relative h-[450px] w-72 rounded overflow-hidden">
              <Image
              width={700}
              height={800}
                alt="ecommerce"
                className="object-cover object-centerhover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
                src="/images/product-cover-5 (23).png"
              />
            </Link>
            <div className="mt-4 mr-20 flex flex-col justify-center items-center">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">$16.00</p>
            </div>
            
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="" className="block relative h-[450px] w-72 rounded overflow-hidden">
              <Image
              width={700}
              height={800}
                alt="ecommerce"
                className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
                src="/images/single-product-1-thumb-1.jpg"
              
              />
            </Link>
            <div className="mt-4 mr-20 flex flex-col justify-center items-center">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Shooting Stars
              </h2>
              <p className="mt-1">$21.15</p>
            </div>
           
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="" className="block relative h-[450px] w-72 rounded overflow-hidden">
              <Image
              width={700}
              height={800}
                alt="ecommerce"
                className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
                src="/images/product-cover-5 (13).png"
              />
            </Link>
            <div className="mt-4 mr-20 flex flex-col justify-center items-center">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">$12.00</p>
            </div>
           
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="" className="block relative h-[450px] w-72 rounded overflow-hidden">
              <Image
              width={700}
              height={800}
                alt="ecommerce"
                className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
                src="/images/product-cover-5 (15).png"
              />
            </Link>
            <div className="mt-4 mr-20 flex flex-col justify-center items-center">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The 400 Blows
              </h2>
              <p className="mt-1">$18.40</p>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bestproduct;
