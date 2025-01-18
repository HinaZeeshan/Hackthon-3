import Image from "next/image";
import Link from "next/link";

const Shopping = () => {
  // Array of image URLs
  const images = [
    "/images/card-item.png",
    "/images/card-item (1).png",
    "/images/card-item (2).png",
    "/images/card-item (3).png",
    "/images/card-item (4).png",
  ];

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-12">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-0">
          Shop
        </h1>
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>{" "}
          / <span className="text-gray-700">Shop</span>
        </nav>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              width={300}
              height={500}
              src={image}
              alt={`Category ${index + 1}`}
              className="w-full h-72 sm:h-64 md:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-16 space-y-4 sm:space-y-0">
        <p className="text-xs sm:text-sm text-gray-500">
          Showing all 12 results
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex space-x-2">
            <button className="p-2 border rounded-lg hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4h7v7H3V4zm0 9h7v7H3v-7zm9-9h8v7h-8V4zm0 9h8v7h-8v-7z"
                />
              </svg>
            </button>
            <button className="p-2 border rounded-lg hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <select className="border p-2 rounded-lg focus:outline-none text-sm">
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
            <option value="newest">Newest</option>
          </select>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shopping;















