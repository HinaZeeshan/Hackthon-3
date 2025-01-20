"use client"
import Link from "next/link";
import React, { useState } from "react";

const CheckoutPage: React.FC = () => {
  // States for managing the checkout steps and form data
  const [step, setStep] = useState(1);
  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    contactNumber: "",
    saveDetails: false,
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [cart] = useState([
    { id: 1, name: "Item 1", price: 20, quantity: 2 },
    { id: 2, name: "Item 2", price: 15, quantity: 1 },
  ]);
  const shippingCost = 10;
  const taxRate = 0.1;

  // Calculate total cost
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * taxRate;
  const totalCost = subtotal + tax + shippingCost;

  // Handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = () => {
    setShippingDetails((prev) => ({
      ...prev,
      saveDetails: !prev.saveDetails,
    }));
  };

  const handlePlaceOrder = () => {
    // Add logic for order placement (API calls or localStorage updates)
    alert("Order placed successfully!");
  };

  // Render steps
  return (
    <div className=" bg-slate-200 max-w-4xl mx-auto p-6 mt-2">
      <h1 className="text-2xl font-bold text-center mb-6">Checkout</h1>

      {/* Step Navigation */}
      <div className="flex justify-around mb-6">
        <div
          className={`p-2 ${
            step === 1 ? "bg-red-600 text-white" : "bg-gray-200"
          } cursor-pointer rounded`}
          onClick={() => setStep(1)}
        >
          Step 1: Shipping Details
        </div>
        <div
          className={`p-2 ${
            step === 2 ? "bg-red-600 text-white" : "bg-gray-200"
          } cursor-pointer rounded`}
          onClick={() => setStep(2)}
        >
          Step 2: Payment Information
        </div>
        <div
          className={`p-2 ${
            step === 3 ? "bg-red-600 text-white" : "bg-gray-200"
          } cursor-pointer rounded`}
          onClick={() => setStep(3)}
        >
          Step 3: Review Order
        </div>
      </div>

      {/* Step Content */}
      {step === 1 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
          <form className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={shippingDetails.fullName}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={shippingDetails.address}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingDetails.city}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={shippingDetails.state}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={shippingDetails.zipCode}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={shippingDetails.country}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              value={shippingDetails.contactNumber}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={shippingDetails.saveDetails}
                onChange={handleCheckboxChange}
              />
              <label>Save shipping details for future purchases</label>
            </div>
          </form>
          <button
            onClick={() => setStep(2)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next: Payment Information
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
          <div className="space-y-4">
            <label>
              <input
                type="radio"
                value="Credit/Debit Card"
                checked={paymentMethod === "Credit/Debit Card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Credit/Debit Card
            </label>
            <label>
              <input
                type="radio"
                value="PayPal"
                checked={paymentMethod === "PayPal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              PayPal
            </label>
            <label>
              <input
                type="radio"
                value="Cash on Delivery"
                checked={paymentMethod === "Cash on Delivery"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery
            </label>
            <input
              type="text"
              placeholder="Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>
          <button
            onClick={() => setStep(3)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next: Review Order
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Review Order</h2>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p>Shipping: ${shippingCost.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p className="font-bold">Total: ${totalCost.toFixed(2)}</p>
          </div>
          <div className="flex gap-2">
          <button
            onClick={handlePlaceOrder}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Place Order
          </button>
          <Link
            href="/cart/confirmation"
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            move to confirmation
          </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
