import { client } from '../../../sanity/lib/client';
import ProductDetails from '../../../components/ProductDetails';
import React from 'react';

// Define Params interface
interface Params {
  slug: string;
}

// Async Page Component
export default async function CollectionPage({ params }: { params: Promise<Params> }) {
  // Await and destructure `slug` from the `params` promise
  const { slug } = await params;

  // Fetch data from Sanity
  const products = await client.fetch(
    `*[_type == "product" && slug.current == $slug]{
    _id,
      title,
      "slug": slug.current,
      description,
      "imageUrl": productImage.asset->url,
      price,
      tags,
      discountPercentage,
      isNew,
      inventory
    }`,
    { slug }
  );

  // Get the first product
  const product = products?.[0];

  // Pass product data to ProductDetails component
  return <ProductDetails product={product} />;
}




























// import { client } from '@/sanity/lib/client';
// import Image from 'next/image';
// import React from 'react';

// // Define the Product interface
// interface Product {
//   title: string;
//   slug: string;
//   description: string;
//   imageUrl: string; // Direct URL for the product image
//   price: number;
//   tags?: string[];
//   discountPercentage?: number;
//   isNew?: boolean;
// }

// // Define Props interface
// interface Props {
//   params: {
//     slug: string;
//   };
// }

// // Async Page Component
// export default async function Page({ params }: Props) {
//   // Fetch data from Sanity
//   const products: Product[] = await client.fetch(
//     `*[_type == "product" && slug.current == $slug]{
//       title,
//       "slug": slug.current,
//       description,
//       "imageUrl": productImage.asset->url,
//       price,
//       tags,
//       discountPercentage,
//       isNew
//     }`,
//     { slug: params.slug }
//   );

//   // Get the first product
//   const product = products?.[0];

//   // Handle case where no product is found
//   if (!product) {
//     return (
//       <div>
//         <h1 className="text-center text-2xl font-semibold mt-10">
//           Product not found
//         </h1>
//       </div>
//     );
//   }

//   // Render product details
//   return (
//     <section className="bg-gray-400 text-white body-font overflow-hidden">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="lg:w-4/5 mx-auto flex flex-wrap">
//           {/* Product Image */}
//           {product.imageUrl ? (
//             <Image
//               alt={product.title}
//               className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
//               src={product.imageUrl}
//               width={400}
//               height={400}
//             />
//           ) : (
//             <div className="lg:w-1/2 w-full lg:h-auto h-64 bg-gray-300 flex items-center justify-center rounded">
//               <p>No image available</p>
//             </div>
//           )}

//           {/* Product Details */}
//           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//             <h2 className="text-xl title-font text-red-600 uppercase tracking-widest">
//               Product Detail
//             </h2>
//             <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
//               {product.title}
//             </h1>
//             <p className="leading-relaxed mb-4">{product.description}</p>

//             {/* Pricing */}
//             <div className="flex items-center mb-4">
//               <span className="title-font font-medium text-2xl text-gray-900">
//                 ${product.price.toFixed(2)}
//               </span>
//             </div>

//             {/* Size Selector */}
//             <div className="relative inline-block w-full text-black mb-2">
//               <label
//                 htmlFor="size-select"
//                 className="block text-sm font-medium text-black mb-2"
//               >
//                 Select Size:
//               </label>
//               <select
//                 id="size-select"
//                 className="block w-full rounded border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base appearance-none"
//                 style={{
//                   position: 'relative',
//                   zIndex: 10,
//                 }}
//               >
//                 <option>SM</option>
//                 <option>M</option>
//                 <option>L</option>
//                 <option>XL</option>
//               </select>
//             </div>

//             {/* Color Selector */}
//             <div className="flex justify-start gap-2 mb-4">
//               <span className="flex w-6 h-6 bg-blue-600 rounded-full cursor-pointer"></span>
//               <span className="flex w-6 h-6 bg-purple-500 rounded-full cursor-pointer"></span>
//               <span className="flex w-6 h-6 bg-indigo-500 rounded-full cursor-pointer"></span>
//               <span className="flex w-6 h-6 bg-teal-500 rounded-full cursor-pointer"></span>
//             </div>

//             {/* Add to Cart Button */}
//             <button className="flex w-full justify-center text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }















// // import { client } from "@/sanity/lib/client";
// // import Image from "next/image";
// // import React from "react";

// // interface Props {
// //   params: {
// //     slug: string;
// //   };
// // }

// // export default async function Page({ params }: Props) {
// //   // Fetch data
// //   const products = await client.fetch(
// //     `*[_type == "product" && slug.current == $slug]{
// //       title,
// //       "slug": slug.current,
// //       description,
// //       "imageUrl": productImage.asset->url,
// //       price,
// //       tags,
// //       discountPercentage,
// //       isNew
// //     }`,
// //     { slug: params.slug }
// //   );

// //   // Get the first product
// //   const product = products?.[0];

// //   // Handle case where no product is found
// //   if (!product) {
// //     return (
// //       <div>
// //         <h1 className="text-center text-2xl font-semibold mt-10">
// //           Product not found
// //         </h1>
// //       </div>
// //     );
// //   }

// //   // Render product details
// //   return (
// //     <section className="bg-gray-400 text-white body-font overflow-hidden">
// //       <div className="container px-5 py-24 mx-auto">
// //         <div className="lg:w-4/5 mx-auto flex flex-wrap">
// //           {/* Product Image */}
// //           <Image
// //             alt="ecommerce"
// //             className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
// //             src={product.imageUrl}
// //             width={400}
// //             height={400}
// //           />

// //           {/* Product Details */}
// //           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
// //             <h2 className="text-xl title-font text-red-600  uppercase tracking-widest">
// //               product detail
// //             </h2>
// //             <h1 className="text-gray-900 text-3xl title-font font-medium mb-4 ">
// //               {product.title}
// //             </h1>
// //             <p className="leading-relaxed mb-4">{product.description}</p>

// //             {/* Pricing and Options */}
// //             <div className="flex items-center mb-4">
// //               <span className="title-font font-medium text-2xl text-gray-900">
// //                 ${product.price.toFixed(2)}
// //               </span>
// //             </div>

// //             {/* Size Selector */}
// //             <div className="relative inline-block w-full mb-2">
// //               <label
// //                 htmlFor="size-select"
// //                 className="block text-sm font-medium text-gray-700 mb-2"
// //               >
// //                 Select Size:
// //               </label>
// //               <select
// //                 id="size-select"
// //                 className="block w-full rounded border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base appearance-none"
// //                 style={{
// //                   position: "relative",
// //                   zIndex: 10,
// //                 }}
// //               >
// //                 <option>SM</option>
// //                 <option>M</option>
// //                 <option>L</option>
// //                 <option>XL</option>
// //               </select>
// //             </div>

// //             {/* Color Selector */}
// //             <div className="flex justify-start gap-2 mb-4">
// //               <span className="flex w-6 h-6 bg-blue-600 rounded-full cursor-pointer"></span>
// //               <span className="flex w-6 h-6 bg-purple-500 rounded-full cursor-pointer"></span>
// //               <span className="flex w-6 h-6 bg-indigo-500 rounded-full cursor-pointer"></span>
// //               <span className="flex w-6 h-6 bg-teal-500 rounded-full cursor-pointer"></span>
// //             </div>

// //             {/* Add to Cart Button */}
// //             <button className="flex w-full justify-center text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded">
// //               Add to Cart
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
