"use client";
import { Product } from "../../types/product";

// Add product to cart
export const AddToCard = (product: Product) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

  // Find the product in the cart
  const existingProductIndex = cart.findIndex((item) => item._id === product._id);

  if (existingProductIndex > -1) {
    // If product exists, update its inventory
    if (cart[existingProductIndex].inventory !== undefined) {
      cart[existingProductIndex].inventory += 1; // Increment inventory
    } else {
      cart[existingProductIndex].inventory = 1; // Set default inventory if missing
    }
  } else {
    // Add new product to the cart
    cart.push({
      ...product,
      inventory: 1, // Set initial inventory to 1
    });
  }

  // Update localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Remove product from cart
export const removeditem = (productId: string) => {
  let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  cart = cart.filter((item) => item._id !== productId); // Remove the product
  localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
};

// Update product quantity in cart
export const Updatecart = (productId: string, quantity: number) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const productIndex = cart.findIndex((item) => item._id === productId);

  if (productIndex > -1) {
    // Update inventory if the product exists
    cart[productIndex].inventory = quantity;
  }

  // Update localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Get all cart items
export const getCardItems = (): Product[] => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};





