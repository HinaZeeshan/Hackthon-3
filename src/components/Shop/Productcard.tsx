import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define Product type
export interface Product {
  id: number;
  name: string;
  department: string;
  originalPrice: string;
  discountedPrice: string;
  colors: string[];
  image: string;
}

// ProductCard Component
const Productcard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="" className="block relative h-[450px] w-72 rounded overflow-hidden mx-auto">
        <Image
          width={500}
          height={500}
          alt={product.name}
          className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full block"
          src={product.image}
        />
      </Link>
      <div className="mt-4 flex flex-col justify-center items-center">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {product.department}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {product.name}
        </h2>
        <p className="line-through text-gray-400 text-sm">{product.originalPrice}</p>
        <p className="mt-1 text-green-500 text-sm">{product.discountedPrice}</p>
      </div>
      <div className="flex justify-center gap-1 mt-2">
        {product.colors.map((color, index) => (
          <span
            key={index}
            className={`flex w-3 h-3 ${color} rounded-full flex-shrink-0`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Productcard;
