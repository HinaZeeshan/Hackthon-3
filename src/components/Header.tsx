"use client";

import React, { useState, useEffect } from "react";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure UserButton only renders on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="text-gray-600 bg-white shadow-md">
      <div className="max-w-7xl flex items-center justify-between px-2 py-3 sm:px-6 lg:px-12 mx-2 sm:mx-4 md:mx-6 lg:mx-auto">
        {/* Logo */}
        <h1 className="font-montserrat text-xl sm:text-2xl font-bold text-gray-900">
          Bandage
        </h1>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-6 font-semibold">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <Link href="/shop" className="hover:text-gray-900">
            Shop
          </Link>
          <Link href="/about" className="hover:text-gray-900">
            About
          </Link>
          <Link href="/product" className="hover:text-gray-900">
            Product
          </Link>
          <Link href="/pricing" className="hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/team" className="hover:text-gray-900">
            Team
          </Link>
          <Link href="/contact" className="hover:text-gray-900">
            Contact
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center mr-32 space-x-0 sm:space-x-4">
          {/* Login/Register */}
          <div className="flex items-center sm:gap-2 text-[#23A6F0]">
            <SignedIn>{mounted && <UserButton />}</SignedIn>
            <SignedOut>{mounted && <SignInButton />}</SignedOut>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <AiOutlineSearch
              size={20}
              className="hidden md:block text-[#23A6F0] cursor-pointer"
            />
            <Link href="/wishlist">
              <AiOutlineHeart
                className="text-[#23A6F0] cursor-pointer"
                size={24}
              />
            </Link>
            <Link href="/cart">
              <AiOutlineShoppingCart
                className="text-[#23A6F0] cursor-pointer"
                size={24}
              />
            </Link>
          </div>

          {/* Hamburger Menu */}
          <button
            className="text-gray-600 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="lg:hidden bg-gray-100 border-t border-gray-200 p-2 space-y-4">
          <Link href="/" className="block hover:text-gray-900">
            Home
          </Link>
          <Link href="/shop" className="block hover:text-gray-900">
            Shop
          </Link>
          <Link href="/about" className="block hover:text-gray-900">
            About
          </Link>
          <Link href="/product" className="block hover:text-gray-900">
            Product
          </Link>
          <Link href="/pricing" className="block hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/team" className="block hover:text-gray-900">
            Team
          </Link>
          <Link href="/contact" className="block hover:text-gray-900">
            Contact
          </Link>

          <button
            className="w-full text-gray-600 text-center border border-gray-300 rounded-md py-2"
            onClick={() => setMenuOpen(false)}
          >
            Close Menu
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
