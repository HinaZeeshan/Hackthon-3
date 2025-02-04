"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../../types/product";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { sanityFetch } from "../../sanity/lib/fetch";
import { allproducts } from "../../sanity/lib/queries";
import Pagination from "../../components/Pagination";
import Swal from "sweetalert2";
import { AddToCard } from "@/app/operations/Addtocart";
import { addToWishlist } from "@/app/operations/Wishlist";

const montseerat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});

const Bestselling = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts: Product[] = await sanityFetch({
        querry: allproducts,
      });
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let updatedProducts = products;
    if (searchQuery) {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (categoryFilter) {
      updatedProducts = updatedProducts.filter((product) =>
        product.tags?.includes(categoryFilter)
      );
    }
    setFilteredProducts(updatedProducts);
    setCurrentPage(1);
  }, [searchQuery, categoryFilter, products]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: window.innerWidth < 640 ? "center" : "top-right",
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
      position: window.innerWidth < 640 ? "center" : "top-right",
      icon: "success",
      title: `${product.title} added to wishlist`,
      showConfirmButton: false,
      timer: 1000,
    });

    addToWishlist(product);
  };

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
      </div>
      <div className="flex flex-wrap justify-center gap-4 my-6">
        <input
          type="text"
          placeholder="Search by product name..."
          className="px-4 py-2 w-full max-w-sm border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="px-4 py-2 w-full max-w-sm border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {[...new Set(products.flatMap((product) => product.tags || []))].map(
            (tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            )
          )}
        </select>
      </div>
      <div className="flex flex-wrap justify-center ">
        {currentProducts.map((product) => (
          <div
            key={product.title}
            className="lg:w-1/4 md:w-1/2 p-4 w-full max-w-xs "
          >
            <div className="border bg-slate-100 rounded-lg shadow-xl  ">
              <Link
                href={`bestselling/${product.slug}`}
                className="block relative h-[350px] w-full rounded overflow-hidden"
              >
                <Image
                  width={500}
                  height={500}
                  alt={product.title}
                  className="object-contain object-center hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full block"
                  src={product.imageUrl}
                />
              </Link>
              <div className="mt-4 text-center">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.title}
                </h2>
                <p className="mt-1">${product.price.toFixed(2)}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex sm:flex-row sm:flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 pt-4 items-center justify-center">
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  add to cart
                </button>
              </div>
              <div className="flex sm:flex-row sm:flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 pt-4 items-center justify-center mb-5">
                <button
                  onClick={(e) => handleAddToWish(e, product)}
                  className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  add to WishList
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default Bestselling;
