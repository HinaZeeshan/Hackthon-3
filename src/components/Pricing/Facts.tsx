// components/FaqSection.tsx
import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FiYoutube, FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";

const Facts= () => {
  const faqs = [
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel metus facilisis, luctus nisl quis, aliquet velit. Sed ut libero vitae nunc dictum ultrices.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel metus facilisis, luctus nisl quis, aliquet velit. Sed ut libero vitae nunc dictum ultrices.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel metus facilisis, luctus nisl quis, aliquet velit. Sed ut libero vitae nunc dictum ultrices.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel metus facilisis, luctus nisl quis, aliquet velit. Sed ut libero vitae nunc dictum ultrices.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel metus facilisis, luctus nisl quis, aliquet velit. Sed ut libero vitae nunc dictum ultrices.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel metus facilisis, luctus nisl quis, aliquet velit. Sed ut libero vitae nunc dictum ultrices.",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Pricing FAQs</h2>
        <p className="text-gray-600 mt-4">
          Problems trying to resolve the conflict between the two major realms of Classical physics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-7xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <span className="text-blue-500 mr-2">➤</span>
              {faq.question}
            </h3>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-700">Haven’t got your answer? Contact our support</p>
      </div>

      <div className="bg-gray-50 py-12 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900">Start your 14 days free trial</h3>
          <p className="text-gray-600 mt-2">
            Most calendars include a 30-day trial at no charge. Our service ensures satisfaction.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md">
            Try for Free
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-6">
          <a href="#" className="text-gray-500 hover:text-blue-500">
          <IoLogoInstagram className='text-2xl text-black'/>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500">
          <FiYoutube className='text-2xl text-red-600' />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500">
          <CiFacebook className='text-2xl text-blue-900' />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500">
          <FiTwitter className='text-2xl text-blue-500' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Facts;

