"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { getWishlistItems, removeFromWishlist } from "../operations/Wishlist";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { AddToCard } from "../operations/Addtocart";


const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch wishlist items on component mount
    setWishlistItems(getWishlistItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromWishlist(id);
        setWishlistItems(getWishlistItems());
        Swal.fire("Removed!", "Item has been removed from your wishlist.", "success");
      }
    });
  };
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
      e.preventDefault();
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: `${product.title} added to Cart`,
        showConfirmButton: false,
        timer: 1000,
      });
  
      AddToCard(product);
    };

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>

      {wishlistItems.length > 0 ? (
        <div>
          {/* Wishlist Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col bg-white shadow rounded-lg p-4"
              >
                {item.imageUrl && (
                  <Image
                    src={urlFor(item.imageUrl).url()}
                    className="w-16 h-16 object-contain rounded-lg"
                    alt={item.title}
                    width={500}
                    height={500}
                  />                )}
                <div className=" flex mt-4 gap-4">
                  
                   <button
              onClick={(e) => handleAddToCart(e, item)}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              <FaCartPlus />
            </button>
            <button
                  onClick={() => handleRemove(item._id)}
                   className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  <MdDeleteForever />
                </button>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default WishlistPage;





