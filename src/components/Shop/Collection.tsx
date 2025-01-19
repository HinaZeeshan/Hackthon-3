import React from "react";
import Image from "next/image";
import { Product } from "../../types/product";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { sanityFetch } from "../../sanity/lib/fetch";
import { collectionproduct } from "../../sanity/lib/queries";
const montseerat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});

const Collection = async () => {
  const products: Product[] = await sanityFetch({ querry: collectionproduct });
  return (
    <section className="text-gray-600   pt-[80px] pb-[80px] gap-6 body-font">
      <div className="flex flex-col justify-center items-center">
        <h4
          className={`${montseerat.className} text-[#252B42] font-400 text-[20px] `}
        >
          {" "}
          Featured Products
        </h4>
        <h3
          className={`${montseerat.className} font-bold text-[20px] sm:[28px] lg:text-[34px] text-[#252B42]`}
        >
          OUR COLLECTION
        </h3>
      </div>

      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div
            key={product.title}
            className="lg:w-1/4 md:w-1/2 p-4 w-full max-w-xs"
          >
            <Link
              href={`collection/${product.slug}`}
              className="block relative h-[350px] w-full rounded overflow-hidden"
            >
              <Image
                width={500}
                height={600}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;

// import React from "react";
// import Productcard, { Product } from "./Productcard"

//   const Collection: React.FC = () => {
//   const products : Product[] = [
//     {
//       id: 1,
//       name: "Graphic Design",
//       department: "English Department",
//       originalPrice: "$16.48",
//       discountedPrice: "$6.48",
//       colors: ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500"],
//       image: "/images/filter.png",
//     },

//        {
//            id: 2,
//            name: "Graphic Design",
//            department: "English Department",
//            originalPrice: "$16.48",
//            discountedPrice: "$6.48",
//            colors: ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500"],
//            image: "/images/filter (1).png",
//          },
//          {
//            id: 3,
//            name: "Graphic Design",
//            department: "English Department",
//            originalPrice: "$16.48",
//            discountedPrice: "$6.48",
//            colors: ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500"],
//            image: "/images/product-cover-5 (9).png",
//          },
//          {
//            id: 4,
//            name: "Graphic Design",
//            department: "English Department",
//            originalPrice: "$16.48",
//            discountedPrice: "$6.48",
//            colors: ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500"],
//            image: "/images/media bg-cover.png",
//          },
//        {
//            id: 5,
//            name: "Graphic Design",
//            department: "English Department",
//            originalPrice: "$16.48",
//            discountedPrice: "$6.48",
//            colors: ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500"],
//            image: "/images/product-cover-5 (8).png",
//          },
//          {
//            id: 6,
//            name: "Graphic Design",
//            department: "English Department",
//            originalPrice: "$16.48",
//            discountedPrice: "$6.48",
//           colors: ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500"],
//            image: "/images/product-cover-5 (11).png",
//          },
//          {
//            id: 7,
//            name: "Graphic Design",
//            department: "English Department",
//            originalPrice: "$16.48",
//            discountedPrice: "$6.48",
//            colors: ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500"],
//            image: "/images/product-cover-5 (12).png",
//          },
//          {
//            id: 8,
//            name: "Graphic Design",
//            department: "English Department",
//            originalPrice: "$16.48",
//            discountedPrice: "$6.48",
//            colors: ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500"],
//            image: "/images/product-cover-5 (2).png",
//         },
//          {
//            id: 9,
//            name: "Graphic Design",
//            department: "English Department",
//            originalPrice: "$16.48",
//            discountedPrice: "$6.48",
//            colors: ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500"],
//            image: "/images/fixed-height.png",
//          },
//          {
//            id: 10,
//            name: "Graphic Design",
//            department: "English Department",
//            originalPrice: "$16.48",
//            discountedPrice: "$6.48",
//          colors: ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500"],
//          image: "/images/product-cover-5 (14).png",
//        },
//        {
//          id: 11,
//          name: "Graphic Design",
//          department: "English Department",
//          originalPrice: "$16.48",
//          discountedPrice: "$6.48",
//          colors: ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500"],
//          image: "/images/product-cover-5 (18).png",
//        },
//         {
//           id: 12,
//           name: "Graphic Design",
//           department: "English Department",
//           originalPrice: "$16.48",
//           discountedPrice: "$6.48",
//           colors: ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500"],
//            image: "/images/product-cover-5 (31).png",
//          },
//   ];

//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex flex-wrap -m-4">
//         {products.map((product) => (
//           <Productcard key={product.id} product={product} />
//         ))}
//       </div>
// {/* for page navigation */}
// <nav aria-label="Page navigation " className="mt-10">
//         <ul className="flex  justify-center items-center mx-auto h-10 text-base">
//           <li>
//             <a
//               href="#"
//               className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//             >
//               <span className="sr-only">Previous</span>
//               <svg
//                 className="w-3 h-3 rtl:rotate-180"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 6 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M5 1 1 5l4 4"
//                 />
//               </svg>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//             >
//               1
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//             >
//               2
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               aria-current="page"
//               className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
//             >
//               3
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//             >
//               4
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//             >
//               5
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//             >
//               <span className="sr-only">Next</span>
//               <svg
//                 className="w-3 h-3 rtl:rotate-180"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 6 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m1 9 4-4-4-4"
//                 />
//               </svg>
//             </a>
//           </li>
//         </ul>
//       </nav>

//     </div>
//    );
// };

// export default Collection;
