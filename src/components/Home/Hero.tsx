import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Hero = () => {
  return (
    <div
      className="w-full h-screen flex items-center bg-cover bg-center "
      style={{
        backgroundImage: "url('/images/shop-hero-1-product-slide-1.jpg')", // Update with your background image path
      }}
    >
      {/* Main container */}
      <div className="w-full h-full flex items-center justify-center">
        {/* Row */}
        <div className="w-full max-w-6xl px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-16 md:py-20 lg:py-24">
          {/* Placeholder Divs */}
          <div className="flex flex-col items-start space-y-6 sm:space-y-8 md:space-y-10">
            <h5
              className={`${montserrat.className} font-bold text-sm sm:text-base md:text-lg lg:text-xl text-white hover:text-blue-500`}
            >
              SUMMER 2020
            </h5>
            <h1
              className={`${montserrat.className} font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight hover:text-blue-500`}
            >
              NEW COLLECTION
            </h1>
            <h4
              className={`${montserrat.className} w-full lg:w-[60%] font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-white hover:text-blue-500`}
            >
              We know how large objects will act, but things on a small scale.
            </h4>

            <div className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-myGreen text-white hover:text-blue-500 font-bold py-3 px-6 rounded-lg sm:py-2 sm:px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 text-sm sm:text-base md:text-lg lg:text-xl">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;




