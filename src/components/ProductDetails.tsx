"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AddToCard } from "../app/operations/Addtocart";
import Swal from "sweetalert2";
import { addToWishlist } from "../app/operations/Wishlist";
import { CiHeart } from "react-icons/ci";

interface Product {
  _id: string;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  price: number;
  tags?: string[];
  discountPercentage?: number;
  isNew?: boolean;
  inventory?: number;
}

interface ProductDetailsProps {
  product: Product | null;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <button
          onClick={() => router.push("/")}
          className="mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-md transition-all"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    if (!selectedSize || !selectedColor) {
      Swal.fire({
        icon: "warning",
        title: "Size & Color Required!",
        text: "Please select a size and color before adding to cart.",
      });
      return;
    }
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} added to Cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    AddToCard(product);
  };

  const handleAddToWish = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} added to wishlist`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToWishlist(product);
  };

  return (
    <section className=" text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt={product.title}
            src={product.imageUrl}
            width={400}
            height={400}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          />
          {/* Product Details */}
          <div className="md:w-1/2 w-full md:pl-10 mt-6 md:mt-0">
            <h2 className="text-xl text-red-600 uppercase tracking-widest">
              Product Detail
            </h2>
            <h1 className="text-gray-900 text-3xl font-bold mb-4">
              {product.title}
            </h1>
            <p className="leading-relaxed mb-4 text-gray-700">
              {product.description}
            </p>

            {/* Pricing */}
            <div className="flex items-center mb-4">
              <span className="text-2xl font-semibold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.discountPercentage && (
                <span className="ml-3 text-xl text-red-500 font-semibold">
                  {product.discountPercentage}% OFF
                </span>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-300 text-black px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Size Selector */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Size:
              </label>
              <select
                value={selectedSize || ""}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full rounded border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
              >
                <option value="" disabled>
                  Select Size
                </option>
                <option value="SM">SM</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>

            {/* Color Selector */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Color:
              </label>
              <div className="flex gap-3">
                {["blue", "purple", "indigo", "teal"].map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? "border-black scale-110"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={(e) => handleAddToCart(e, product)}
              className="w-full bg-gradient-to-tr from-indigo-500 to-slate-500 text-white py-3 rounded-md hover:opacity-90 transition-all"
            >
              Add to Cart
            </button>

            {/* Wishlist Button */}
            <button
              onClick={(e) => handleAddToWish(e, product)}
              className="w-full mt-3 flex justify-center items-center gap-2 py-3 text-white bg-red-500 rounded-md hover:bg-red-600 transition-all"
            >
              <CiHeart className="text-2xl" /> Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
