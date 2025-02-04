"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";
import { getCardItems } from "@/app/operations/Addtocart";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/product";
import PaymentSection from "../../../components/PaymentSection"; 

type ShippingDetails = {
  fullName: string;
  address: string;
  city: string;
  email: string;
  zipCode: string;
  country: string;
  contactNumber: string;
};

type FormErrors = Record<keyof ShippingDetails, boolean>;

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    fullName: "",
    address: "",
    city: "",
    email: "",
    zipCode: "",
    country: "",
    contactNumber: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    fullName: false,
    address: false,
    city: false,
    email: false,
    zipCode: false,
    country: false,
    contactNumber: false,
  });

  useEffect(() => {
    const items = getCardItems();
    if (items) setCartItems(items);

    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) setDiscount(Number(appliedDiscount));
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * (item.inventory || 0),
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const validShipping = () => {
    const errors: FormErrors = {
      fullName: !shippingDetails.fullName,
      address: !shippingDetails.address,
      city: !shippingDetails.city,
      email: !shippingDetails.email,
      zipCode: !shippingDetails.zipCode,
      country: !shippingDetails.country,
      contactNumber: !shippingDetails.contactNumber,
    };
    setFormErrors(errors);
    return Object.values(errors).every((err) => !err);
  };

  const handlePlaceOrder = async () => {
    if (!validShipping()) {
      Swal.fire("Error!", "Please fill in all fields", "error");
      return;
    }

    Swal.fire({
      title: "Processing your order",
      text: "Please wait...",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Proceed!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const orderData = {
          _type: "order",
          ...shippingDetails,
          cartItems: cartItems.map((item) => ({ _type: "reference", _ref: item._id })),
          total: subtotal - discount,
          discount: discount,
          orderDate: new Date().toISOString(),
        };

        try {
          await client.create(orderData);
          setIsOrderPlaced(true);
          localStorage.removeItem("appliedDiscount");
          Swal.fire("Success!", "Proceed to payment", "success");
        } catch (error) {
          console.error("Error creating order", error);
          Swal.fire("Error!", "Order could not be placed", "error");
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-6xl mx-auto">
        <nav className="flex space-x-2 text-gray-900 font-semibold text-sm mb-6">
          <Link href="/cart" className="hover:underline">Cart</Link>
          <IoIosArrowForward className="mt-1" />
          <span> Checkout</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-red-600">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="flex items-center gap-4 border-b pb-4 mb-4">
                  {item.imageUrl && (
                    <Image
                      src={urlFor(item.imageUrl).url()}
                      className="w-16 h-16 object-contain rounded-lg"
                      alt="image"
                      width={500}
                      height={500}
                    />
                  )}
                  <div className="flex-1 text-slate-500">
                    <h3 className="font-semibold text-red-600">{item.title}</h3>
                    <p className="font-semibold">Quantity: {item.inventory}</p>
                    <p className="text-sm font-semibold">${item.price * (item.inventory || 0)}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No items in cart</p>
            )}
            <div className="mt-4 text-blue-600">
              <p className="text-lg font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
              <p className="text-lg font-semibold">Discount: ${discount}</p>
              <p className="text-lg font-bold text-red-600">Total: ${(subtotal - discount).toFixed(2)}</p>
            </div>
          </div>

          <div className="bg-white p-6 shadow rounded-lg">
            {!isOrderPlaced ? (
              <>
                <h2 className="text-xl font-bold mb-4 text-red-600">Billing Information</h2>
                {Object.keys(shippingDetails).map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-semibold capitalize">{field}</label>
                    <input
                      type="text"
                      name={field}
                      value={shippingDetails[field as keyof ShippingDetails]} // Type assertion
                      onChange={handleInputChange}
                      className="w-full border p-2 rounded bg-blue-200 mt-1"
                    />
                    {formErrors[field as keyof FormErrors] && ( // Type assertion
                      <p className="text-red-500 text-sm">{field} is required</p>
                    )}
                  </div>
                ))}
                <button onClick={handlePlaceOrder} className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700">
                  Place Order
                </button>
              </>
            ) : (
              <PaymentSection totalAmount={subtotal - discount} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;





// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { IoIosArrowForward } from "react-icons/io";
// import Swal from "sweetalert2";
// import { client } from "@/sanity/lib/client";
// import { getCardItems } from "@/app/operations/Addtocart";
// import { urlFor } from "@/sanity/lib/image";
// import { Product } from "@/types/product";
// import PaymentSection from "../../../components/Paymentsection"; // Ensure this component is created

// const Checkout = () => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);
//   const [discount, setDiscount] = useState<number>(0);
//   const [isOrderPlaced, setIsOrderPlaced] = useState(false);
//   const [shippingDetails, setShippingDetails] = useState({
//     fullName: "",
//     address: "",
//     city: "",
//     email: "",
//     zipCode: "",
//     country: "",
//     contactNumber: "",
//   });
//   const [formErrors, setFormErrors] = useState({
//     fullName: false,
//     address: false,
//     city: false,
//     email: false,
//     zipCode: false,
//     country: false,
//     contactNumber: false,
//   });

//   useEffect(() => {
//     const items = getCardItems();
//     if (items) setCartItems(items);

//     const appliedDiscount = localStorage.getItem("appliedDiscount");
//     if (appliedDiscount) setDiscount(Number(appliedDiscount));
//   }, []);

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * (item.inventory || 0),
//     0
//   );

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setShippingDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const validShipping = () => {
//     const errors = {
//       fullName: !shippingDetails.fullName,
//       address: !shippingDetails.address,
//       city: !shippingDetails.city,
//       email: !shippingDetails.email,
//       zipCode: !shippingDetails.zipCode,
//       country: !shippingDetails.country,
//       contactNumber: !shippingDetails.contactNumber,
//     };
//     setFormErrors(errors);
//     return Object.values(errors).every((err) => !err);
//   };

//   const handlePlaceOrder = async () => {
//     if (!validShipping()) {
//       Swal.fire("Error!", "Please fill in all fields", "error");
//       return;
//     }

//     Swal.fire({
//       title: "Processing your order",
//       text: "Please wait...",
//       icon: "info",
//       showCancelButton: true,
//       confirmButtonText: "Proceed!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         const orderData = {
//           _type: "order",
//           ...shippingDetails,
//           cartItems: cartItems.map((item) => ({ _type: "reference", _ref: item._id })),
//           total: subtotal - discount,
//           discount: discount,
//           orderDate: new Date().toISOString(),
//         };

//         try {
//           await client.create(orderData);
//           setIsOrderPlaced(true);
//           localStorage.removeItem("appliedDiscount");
//           Swal.fire("Success!", "Proceed to payment", "success");
//         } catch (error) {
//           console.error("Error creating order", error);
//           Swal.fire("Error!", "Order could not be placed", "error");
//         }
//       }
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-200 p-8">
//       <div className="max-w-6xl mx-auto">
//         <nav className="flex space-x-2 text-gray-900 font-semibold text-sm mb-6">
//           <Link href="/cart" className="hover:underline">Cart</Link>
//           <IoIosArrowForward className="mt-1" />
//           <span> Checkout</span>
//         </nav>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="bg-white p-6 shadow rounded-lg">
//             <h2 className="text-xl font-semibold mb-4 text-red-600">Order Summary</h2>
//             {cartItems.length > 0 ? (
//               cartItems.map((item) => (
//                 <div key={item._id} className="flex items-center gap-4 border-b pb-4 mb-4">
//                   {item.imageUrl && (
//                     <Image
//                       src={urlFor(item.imageUrl).url()}
//                       className="w-16 h-16 object-contain rounded-lg"
//                       alt="image"
//                       width={500}
//                       height={500}
//                     />
//                   )}
//                   <div className="flex-1 text-slate-500">
//                     <h3 className="font-semibold text-red-600">{item.title}</h3>
//                     <p className="font-semibold">Quantity: {item.inventory}</p>
//                     <p className="text-sm font-semibold">${item.price * (item.inventory || 0)}</p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-500">No items in cart</p>
//             )}
//             <div className="mt-4 text-blue-600">
//               <p className="text-lg font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
//               <p className="text-lg font-semibold">Discount: ${discount}</p>
//               <p className="text-lg font-bold text-red-600">Total: ${(subtotal - discount).toFixed(2)}</p>
//             </div>
//           </div>

//           <div className="bg-white p-6 shadow rounded-lg">
//             {!isOrderPlaced ? (
//               <>
//                 <h2 className="text-xl font-bold mb-4 text-red-600">Billing Information</h2>
//                 {Object.keys(shippingDetails).map((field) => (
//                   <div key={field}>
//                     <label className="block text-sm font-semibold capitalize">{field}</label>
//                     <input
//                       type="text"
//                       name={field}
//                       onChange={handleInputChange}
//                       className="w-full border p-2 rounded bg-blue-200 mt-1"
//                     />
//                     {formErrors[field] && (
//                       <p className="text-red-500 text-sm">{field} is required</p>
//                     )}
//                   </div>
//                 ))}
//                 <button onClick={handlePlaceOrder} className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700">
//                   Place Order
//                 </button>
//               </>
//             ) : (
//               <PaymentSection totalAmount={subtotal - discount} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;





