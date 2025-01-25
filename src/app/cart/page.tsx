"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { getCardItems, removeditem, Updatecart } from "../operations/Addtocart";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

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
    if (product && (product.inventory || 0) > 1) handleQuantityChange(id, (product.inventory || 0) - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * (item.inventory || 0), 0);
  };

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
        Swal.fire("Success", "Your order has been successfully placed!", "success");
        setCartItems([]);
      }
    });
  };

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length > 0 ? (
        <div>
          {/* Cart Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item,index) => (
              <div
                key={item._id || index}
                className="flex flex-col bg-white shadow rounded-lg p-4">
                {item.imageUrl && (
                  <Image
                    src={urlFor(item.imageUrl).url()}
                    className="w-16 h-16 object-cover rounded-lg"
                    alt="image"
                    width={500}
                    height={500}
                  />
                )}

                <div className="mt-4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <div className="flex items-center mt-2 gap-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded"
                    >
                      -
                    </button>
                    <span className="font-medium">{item.inventory || 0}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Total */}
          <div className="mt-8 bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-bold">Cart Summary</h2>
            <p className="mt-2 text-lg">Total: ${calculateTotal()}</p>
            <Link
            href="/cart/checkout"
              onClick={handleProceed}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cartpage;




// "use client";

// import React, { useEffect, useState } from "react";
// import { Product } from "@/types/product";
// import { getCardItems, removeditem, Updatecart } from "../operations/Addtocart";
// import Swal from "sweetalert2";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";

// const Cartpage = () => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   useEffect(() => {
//     setCartItems(getCardItems());
//   }, []);

//   const handleRemove = (id: string) => {
//     Swal.fire({
//       title: "Are you Sure?",
//       text: "You will not be able to recover this item!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, remove it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         removeditem(id);
//         setCartItems(getCardItems());
//         Swal.fire("Removed!", "Item has been removed", "success");
//       }
//     });
//   };

//   const handleQuantityChange = (id: string, quantity: number) => {
//     Updatecart(id, quantity);
//     setCartItems(getCardItems());
//   };

//   const handleIncrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id);
//     if (product) handleQuantityChange(id, product.inventory + 1);
//   };

//   const handleDecrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id);
//     if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
//   };

//   const handleProceed = () => {
//     Swal.fire({
//       title: "Proceed to Checkout",
//       text: "Please review your cart before checkout",
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, Proceed!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire("Success", "Your order has been successfully placed!", "success");
//         setCartItems([]);
//       }
//     });
//   };

//   return (
//     <div className="p-4 md:p-8 max-w-5xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

//       {cartItems.length > 0 ? (
//         <div>
//           {/* Cart Items */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {cartItems.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex flex-col bg-white shadow rounded-lg p-4">
//                {
//                 item.imageUrl && (
//                   <Image
//                   src={urlFor(item.imageUrl).url()}
//                   className="w-16 h-16 object-cover rounded-lg"
//                   alt="image"
//                   width={500}
//                   height={500}
//                   />
//                 )
//                }
               
//                 <div className="mt-4">
//                   <h2 className="text-lg font-semibold">{item.title}</h2>
//                   <p className="text-gray-600">Price: ${item.price}</p>
//                   <div className="flex items-center mt-2 gap-2">
//                     <button
//                       onClick={() => handleDecrement(item._id)}
//                       className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded"
//                     >
//                       -
//                     </button>
//                     <span className="font-medium">{item.inventory}</span>
//                     <button
//                       onClick={() => handleIncrement(item._id)}
//                       className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => handleRemove(item._id)}
//                   className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Cart Total */}
//           <div className="mt-8 bg-white shadow rounded-lg p-4">
//             <h2 className="text-xl font-bold">Cart Summary</h2>
//             <p className="mt-2 text-lg">Total: ${calculateTotal()}</p>
//             <button
//               onClick={handleProceed}
//               className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-gray-600">Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cartpage;






