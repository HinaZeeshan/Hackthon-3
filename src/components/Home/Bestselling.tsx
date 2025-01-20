"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../../types/product";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { sanityFetch } from "../../sanity/lib/fetch";
import { allproducts } from "../../sanity/lib/queries";
import { useCart } from "../cart/Cartcard";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const montseerat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});

const Bestselling = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products and set them in state
  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts: Product[] = await sanityFetch({
        querry: allproducts,
      });
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);
  const { addToCart } = useCart();

  

  return (
    <section className="text-gray-600 pt-[80px] pb-[80px] gap-6 body-font">
      <div className="flex flex-col justify-center items-center">
        <h4
          className={`${montseerat.className} text-[#252B42] font-400 text-[20px]`}
        >
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
            className="lg:w-1/4 md:w-1/2 p-4 w-full max-w-xs  "
          >
            <Link
              href={`bestselling/${product.slug}`}
              className="block relative h-[350px] w-full rounded overflow-hidden"
            >
              <Image
                width={500}
                height={500}
                alt={product.title}
                className="object-fit object-center hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full block"
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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 pt-4 items-center justify-center">
              <button className="w-full sm:w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200">
                <CiHeart className="text-gray-600" />
              </button>

              <button
                onClick={() =>
                  addToCart({
                    id: product.id, // Adjust field names as per your Product type
                    title: product.title,
                    price: product.price,
                    image: product.imageUrl,

                    quantity: 1,
                  })
                }
                className="w-full sm:w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200"
              >
                <IoCartOutline className="text-gray-600" />
              </button>

              <button className="w-full sm:w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200">
                <FaEye className="text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bestselling;


