"use client";
import { Product } from "../../types/product";

// Add product to wishlist
export const addToWishlist = (product: Product) => {
  const wishlist: Product[] = JSON.parse(localStorage.getItem("wishlist") || "[]");

  // Check if the product already exists in the wishlist
  const existingProduct = wishlist.find((item) => item._id === product._id);

  if (!existingProduct) {
    // Add product if it doesn't exist
    wishlist.push(product);
  }

  // Update localStorage
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

// Remove product from wishlist
export const removeFromWishlist = (productId: string) => {
  let wishlist: Product[] = JSON.parse(localStorage.getItem("wishlist") || "[]");
  wishlist = wishlist.filter((item) => item._id !== productId); // Remove the product
  localStorage.setItem("wishlist", JSON.stringify(wishlist)); // Update localStorage
};

// Get all wishlist items
export const getWishlistItems = (): Product[] => {
  return JSON.parse(localStorage.getItem("wishlist") || "[]");
};
