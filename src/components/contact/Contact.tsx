import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function Contact() {
  return (
    <div className="w-full h-full bg-white flex flex-col md:flex-row lg:flex-row  px-4 lg:px-16">
      {/* Left Content */}
      <div className="w-full flex flex-col mx-auto items-start mt-16 lg:mt-36 px-4 lg:px-0 space-y-10">
        <div>
          <h5
            className={`${montserrat.className} text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
          >
            CONTACT US
          </h5>
        </div>
        <div className="mt-4">
          <h1
            className={`${montserrat.className} text-start font-bold text-3xl lg:text-5xl text-myDark hover:text-blue-500`}
          >
            Get in touch today!
          </h1>
        </div>
        <div className="mt-4">
          <h4
            className={`${montserrat.className} w-full lg:w-[360px] text-start font-normal text-base lg:text-lg text-myGrey hover:text-blue-500`}
          >
            We know how large objects will act, but things on a small scale
          </h4>
        </div>
        <div className="flex flex-col mt-6 mx-auto md:mx-0 lg:mx-0">
          <h4
            className={`${montserrat.className} text-start font-bold text-lg lg:text-xl text-myDark hover:text-blue-500`}
          >
            Phone : +451 215 215
          </h4>
          <h4
            className={`${montserrat.className} text-start font-bold text-lg lg:text-xl text-myDark hover:text-blue-500`}
          >
            Fax : +451 215 215
          </h4>
        </div>
        {/* Social Media */}
        <div className="flex gap-4 mt-6 mx-auto md:mx-0 lg:mx-0">
         
            <Link href="" className="flex gap-2 " >
              <Image
                src={"/images/w-img-fb.png"}
                alt={"facebook"}
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
              <Image
                src={"/images/w-img-inst.png"}
                alt={"instagram"}
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
              <Image
                src={"/images/w-img-twt.png"}
                alt={"twitter"}
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
            </Link>
         
        </div>
      </div>

      {/* Right Content */}
      <div className="relative w-full mt-12 lg:mt-0">
        {/* Background Circles */}
        <div className="absolute inset-0">
          <div className="bg-pink-200 absolute w-[300px] h-[300px] lg:w-[460px] lg:h-[460px] rounded-full right-[65px] bottom-[124px] lg:bottom-[137px] lg:right-[28px] md:w-[360px] md:h-[360px] md:right-[30px] md:bottom-[18px]" />
          <div className="bg-pink-200 absolute w-10 h-10 lg:w-[60px] lg:h-[60px] rounded-full top-10 lg:top-[44px] lg:bottom-[0px] left-[11px] lg:left-[-90px] md:w-[50px] md:h-[50px] md:left-[-10px] md:top-2" />
          <div className="bg-pink-200 absolute w-8 h-8 lg:w-[30px] lg:h-[30px] rounded-full bottom-[215px] lg:bottom-[350px] right-[18px] lg:right-[60px] md:bottom-[260px] md:right-[0px] " />
          <div
            className="bg-myImageBackground2 absolute w-4 h-4 lg:w-[20px] lg:h-[20px] rounded-full top-20 lg:top-32
               right-[20px] lg:right-[20px] md:right-[26px] md:bottom-[18px]"
          />
        </div>
        <Image
          src="/images/technology 1 (2).png"
          alt="technology 1"
          className="relative lg:w-[450px] lg:h-[645px] object-cover transform transition duration-500 hover:scale-110"
          width={650}
          height={645}
        />
      </div>
    </div>
  );
}