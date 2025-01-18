import React from "react";
import Image from "next/image";
import { Product } from '../../interface/product';
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { sanityFetch } from "../../sanity/lib/fetch";
import { mainproduct } from "../../sanity/lib/queries";
const montseerat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});

const Bestselling = async () => {
  const products:Product[] = await sanityFetch({querry : mainproduct})
  return (
  

    <section className="text-gray-600   pt-[80px] pb-[80px] gap-6 body-font">
      <div className="flex flex-col justify-center items-center">
        <h4
          className={`${montseerat.className} text-[#252B42] font-400 text-[20px] `}
        >
          {" "}
          Featured Products
        </h4>
        <h3
          className={`${montseerat.className} font-bold text-[20px] sm:[28px] lg:text-[34px] text-[#252B42]`}
        >
          BESTSELLER PRODUCTS
        </h3>
        <p className={`${montseerat.className} text-sm text-[#252B42]`}>
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>

      <div className="flex flex-wrap justify-center">
  {products.map((product) => (
    <div
      key={product.title}
      className="lg:w-1/4 md:w-1/2 p-4 w-full max-w-xs"
    >
      <Link
        href={`bestselling/${product.slug}`}
        className="block relative h-[350px] w-full rounded overflow-hidden"
      >
        <Image
          width={500}
          height={500}
          alt={product.title}
          className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full block"
          src={product.imageUrl}
        />
      </Link>
      <div className="mt-4 flex flex-col justify-center items-center">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {product.tags?.[0] || "CATEGORY"}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium text-center">
          {product.title}
        </h2>
        <p className="mt-1 text-center">
          ${product.price.toFixed(2)}{" "}
          {product.discountPercentage && (
            <span className="text-red-500 text-sm">
              ({product.discountPercentage}% OFF)
            </span>
          )}
        </p>
        {product.isNew && (
          <p className="text-green-600 text-xs font-semibold mt-1">
            New Product!
          </p>
        )}
      </div>
      <div className="flex justify-center gap-1 mt-2">
        <span className="flex w-3 h-3 bg-blue-600 rounded-full"></span>
        <span className="flex w-3 h-3 bg-purple-500 rounded-full"></span>
        <span className="flex w-3 h-3 bg-indigo-500 rounded-full"></span>
        <span className="flex w-3 h-3 bg-teal-500 rounded-full"></span>
      </div>
    </div>
  ))}
</div>
</section>
  );
};

export default Bestselling;















