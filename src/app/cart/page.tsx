"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { getCardItems, removeditem, Updatecart } from "../operations/Addtocart";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Cartpage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCardItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you Sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeditem(id);
        setCartItems(getCardItems());
        Swal.fire("Removed!", "Item has been removed", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    Updatecart(id, quantity);
    setCartItems(getCardItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, (product.inventory || 0) + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && (product.inventory || 0) > 1)
      handleQuantityChange(id, (product.inventory || 0) - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.inventory || 0),
      0
    );
  };

  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success",
          "Your order has been successfully placed!",
          "success"
        );
        router.push("/cart/checkout");
        setCartItems([]);
      }
    });
  };

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
        Your Cart
      </h1>

      {cartItems.length > 0 ? (
        <div className="space-y-6">
          {/* Cart Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item, index) => (
              <div
                key={item._id || index}
                className="flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
              >
                {/* Image */}
                {item.imageUrl && (
                  <Image
                    src={urlFor(item.imageUrl).url()}
                    className="w-24 h-24 object-contain rounded-lg"
                    alt={item.title}
                    width={500}
                    height={500}
                  />
                )}

                {/* Product Details */}
                <div className="flex-1 text-center sm:text-left mt-4 sm:mt-0 sm:ml-4">
                  <h2 className="text-base font-semibold">{item.title}</h2>
                  <p className="text-gray-600">
                    Price: <span className="font-medium">${item.price}</span>
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-center sm:justify-start mt-3 gap-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-3 py-1 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md"
                    >
                      -
                    </button>
                    <span className="font-medium">{item.inventory || 0}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-3 py-1 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(item._id)}
                  className="mt-4 sm:mt-0 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-all"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center md:text-left">
            <h2 className="text-xl font-bold">Cart Summary</h2>
            <p className="mt-2 text-lg font-bold text-red-600">
              Total: <span className="text-blue-500">${calculateTotal()}</span>
            </p>
            <Link
              href="/cart/checkout"
              onClick={handleProceed}
              className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-all"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cartpage;
