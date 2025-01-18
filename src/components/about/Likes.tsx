/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import video from "/public/images/media bg-cover (1).png";

const Likes = () => {
  return (
    <div>
      <div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <p className="mb-6">Problems trying</p>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent.
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full mb-6 leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <figure className="relative w-full bg-white h-[764px] max-w-[1440px] mx-auto flex justify-center items-center">
        {/* Video Card */}
        <div className="relative bg-white rounded-[20px] w-[90%] max-w-[989px] h-[540px] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 rounded-[20px] overflow-hidden">
            <Image
              src={video}
              alt="Video Background"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-[20px]"
            />
            {/* Gradient Filter */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-80"></div>
          </div>

          {/* Play Button */}
          <div className="relative z-10">
            <button
              type="button"
              aria-label="Play Video"
              className="w-24 h-24 bg-[#23A6F0] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </button>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default Likes;


