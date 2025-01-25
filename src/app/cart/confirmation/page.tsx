"use client";

import React, { useState, useEffect } from "react";

interface OrderDetails {
  orderNumber: string;
  deliveryDate: string;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  totalCost: number;
}

const ConfirmationPage = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch("https://template6-six.vercel.app/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch order details.");
        }
        const data = await response.json();
        
        // Validate the fetched data structure
        if (data.orderNumber && data.deliveryDate && Array.isArray(data.items)) {
          setOrderDetails(data);
        } else {
          throw new Error("Invalid data format received.");
        }
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching order details.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, []);

  const handleViewOrderDetails = () => {
    alert("Navigating to Order Details (Future Feature)");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-6">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center text-green-500 mb-4">
          Thank You for Your Purchase!
        </h1>

        {loading ? (
          <p className="text-gray-500 text-center">Loading order details...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : orderDetails ? (
          <div>
            {/* Order Number */}
            <p className="text-gray-700 text-center mb-4">
              Your order number is{" "}
              <span className="font-semibold text-indigo-500">
                {orderDetails.orderNumber}
              </span>.
            </p>

            {/* Estimated Delivery Date */}
            <p className="text-gray-700 text-center mb-6">
              Estimated delivery date:{" "}
              <span className="font-semibold text-indigo-500">
                {orderDetails.deliveryDate}
              </span>.
            </p>

            {/* Order Summary */}
            <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
            <div className="space-y-4">
              {orderDetails.items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="font-semibold text-gray-700">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold text-gray-700">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            {/* Total Cost */}
            <div className="flex justify-between items-center font-bold text-lg text-gray-800 mt-6">
              <p>Total Cost:</p>
              <p>${orderDetails.totalCost.toFixed(2)}</p>
            </div>

            {/* View Order Details Button */}
            <button
              onClick={handleViewOrderDetails}
              className="w-full mt-6 py-2 px-4 bg-indigo-500 text-white rounded hover:bg-indigo-600"
            >
              View Order Details
            </button>
          </div>
        ) : (
          <p className="text-gray-500 text-center">No order details available.</p>
        )}
      </div>

      {/* Optional Persistent Cart Reminder */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          A confirmation email or SMS has been sent to your registered contact.
        </p>
      </div>
    </div>
  );
};

export default ConfirmationPage;







// "use client"

// import React, { useState, useEffect } from "react";

// interface OrderDetails {
//   orderNumber: string;
//   deliveryDate: string;
//   items: {
//     name: string;
//     quantity: number;
//     price: number;
//   }[];
//   totalCost: number;
// }

// const ConfirmationPage = () => {
//   // Mock State for Order Details
//   const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

//   // Simulate fetching order details (could be fetched from an API)
//   useEffect(() => {
//     const fetchOrderDetails = async () => {
//       const response = await fetch('https://template6-six.vercel.app/api/products');
//       const data = await response.json();
//       setOrderDetails(data);
//     };
  
//     fetchOrderDetails();
//   }, []);
  



//   //   useEffect(() => {
// //     // Mock data for demonstration
// //     const mockOrder = {
// //       orderNumber: "ORD12345678",
// //       deliveryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
// //       items: [
// //         { name: "Product A", quantity: 2, price: 20 },
// //         { name: "Product B", quantity: 1, price: 15 },
// //       ],
// //       totalCost: 55,
// //     };

// //     setOrderDetails(mockOrder);
// //   }, []);

//   // Function to view order details (Optional navigation)
//   const handleViewOrderDetails = () => {
//     alert("Navigating to Order Details (Future Feature)");
//     // Navigate to an order details page if implemented
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-6">
//       <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
//         <h1 className="text-2xl font-bold text-center text-green-500 mb-4">
//           Thank You for Your Purchase!
//         </h1>

//         {orderDetails ? (
//           <div>
//             {/* Order Number */}
//             <p className="text-gray-700 text-center mb-4">
//               Your order number is{" "}
//               <span className="font-semibold text-indigo-500">
//                 {orderDetails.orderNumber}
//               </span>.
//             </p>

//             {/* Estimated Delivery Date */}
//             <p className="text-gray-700 text-center mb-6">
//               Estimated delivery date:{" "}
//               <span className="font-semibold text-indigo-500">
//                 {orderDetails.deliveryDate}
//               </span>.
//             </p>

//             {/* Order Summary */}
//             <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
//             <div className="space-y-4">
//               {orderDetails.items.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex justify-between items-center border-b pb-2"
//                 >
//                   <div>
//                     <p className="font-semibold text-gray-700">{item.name}</p>
//                     <p className="text-sm text-gray-500">
//                       Quantity: {item.quantity}
//                     </p>
//                   </div>
//                   <p className="font-semibold text-gray-700">
//                     ${item.price.toFixed(2)}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Total Cost */}
//             <div className="flex justify-between items-center font-bold text-lg text-gray-800 mt-6">
//               <p>Total Cost:</p>
//               <p>${orderDetails.totalCost.toFixed(2)}</p>
//             </div>

//             {/* View Order Details Button */}
//             <button
//               onClick={handleViewOrderDetails}
//               className="w-full mt-6 py-2 px-4 bg-indigo-500 text-white rounded hover:bg-indigo-600"
//             >
//               View Order Details
//             </button>
//           </div>
//         ) : (
//           <p className="text-gray-500 text-center">Loading order details...</p>
//         )}
//       </div>

//       {/* Optional Persistent Cart Reminder */}
//       <div className="mt-4 text-center">
//         <p className="text-sm text-gray-500">
//           A confirmation email or SMS has been sent to your registered contact.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ConfirmationPage;
