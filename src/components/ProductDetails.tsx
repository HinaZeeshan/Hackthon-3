
'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AddToCard } from '@/app/operations/Addtocart';
import Swal from 'sweetalert2';
import { addToWishlist } from '@/app/operations/Wishlist';
import Link from 'next/link';
import { CiHeart } from 'react-icons/ci';


// Define Product interface
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
  invevtory?:number,
}

// Props interface
interface ProductDetailsProps {
  product: Product | null; // Allow null in case the product is not found
}

// ProductDetails Component
const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const router = useRouter();
const handleAddToCart = ( e:React.MouseEvent, product : Product) => {
  e.preventDefault()
Swal.fire({
  position:"top-right",
  icon : "success",
  title : `${product.title} added to Cart`,
   showConfirmButton: false ,
    timer :1000 ,

 }) 

   AddToCard(product)
 }
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




  if (!product) {
    return (
      <div>
        <h1 className="text-center text-2xl font-semibold mt-10">
          Product not found
        </h1>
        <button
          onClick={() => router.push('/')}
          className="flex mt-5 mx-auto text-white bg-indigo-400  py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
        >
          Back to Home
        </button>
      </div>
    );
  }

  // Render product details
  return (
    <section className="bg-gray-400 text-white body-font overflow-hidden">
      
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Product Image */}
          {product.imageUrl ? (
            <Image
              alt={product.title}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product.imageUrl}
              width={500}
              height={500}
            />
          ) : (
            <div className="lg:w-1/2 w-full lg:h-auto h-64 bg-gray-300 flex items-center justify-center rounded">
              <p>No image available</p>
            </div>
          )}

          {/* Product Details */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-xl title-font text-red-600 uppercase tracking-widest">
              Product Detail
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              {product.title}
            </h1>
            <p className="leading-relaxed mb-4">{product.description}</p>

            {/* Pricing */}
            <div className="flex items-center mb-4">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product.discountPercentage}%OFF
              </span>
              
            </div>
            {/* tags */}
            <div className='mt-2 flex flex-wrap gap-2'>
              {product.tags?.map((tag , index) =>(
                <span key={index} 
                className='text-xs bg-slate-400 text-black rounded-full x-2 py-1'>
                  {tag}</span>
              ))}

            </div>

            {/* Size Selector */}
            <div className="relative inline-block w-full text-black mb-2">
              <label
                htmlFor="size-select"
                className="block text-sm font-medium text-black mb-2"
              >
                Select Size:
              </label>
              <select
                id="size-select"
                className="block w-full rounded border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base appearance-none"
              >
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>

            {/* Color Selector */}
            <div className="flex justify-start gap-2 mb-4">
              <span className="flex w-6 h-6 bg-blue-600 rounded-full cursor-pointer"></span>
              <span className="flex w-6 h-6 bg-purple-500 rounded-full cursor-pointer"></span>
              <span className="flex w-6 h-6 bg-indigo-500 rounded-full cursor-pointer"></span>
              <span className="flex w-6 h-6 bg-teal-500 rounded-full cursor-pointer"></span>
            </div>
            

            {/* Add to Cart Button */}
            <button 
         onClick={(e)=> handleAddToCart (e,product)}
           
            className="flex w-full justify-center text-white border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded bg-gradient-to-tr from-indigo-500 to-slate-500">
              Add to Cart
            </button>
            <Link
            href="/wishlist"
            className="w-full sm:w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200"
            onClick={(e) => handleAddToWish(e, product)} 
          >
            <CiHeart className="text-red-600 text-2xl" />
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;







