/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function Visit() {
  return (
    <div>
      {/* Office Section */}
      <div className="w-full bg-myGreyBackground py-8 px-4 text-center">
        <h6
          className={`${montserrat.className} font-bold text-sm text-myDark hover:text-blue-500`}
        >
          VISIT OUR OFFICE
        </h6>
        <h2
          className={`${montserrat.className} font-normal text-2xl lg:text-4xl text-myDark mt-2 hover:text-blue-500`}
        >
          We help small businesses with big ideas
        </h2>
      </div>
      {/* Contact Boxes */}
      <div className="w-full flex flex-wrap justify-center bg-myGreyBackground py-8">
        {[
          {
            icon: "phone",
            title: "Get Support",
            emails: ["georgia.young@example.com", "georgia.young@ple.com"],
          },
          {
            icon: "location",
            title: "Visit Us",
            emails: ["123 Street", "City, Country"],
            bg: "bg-[#252B42]",
            text: "text-white",
          },
          {
            icon: "msg",
            title: "Send a Message",
            emails: ["contact@domain.com", "info@domain.com"],
          },
        ].map(
          ({ icon, title, emails, bg="", text = "text-[#252B42]" }, index) => (
            <div
              key={`contact-box-${index}`}
              className={`w-[328px] sm:w-1/2 lg:w-[328px] lg:h-[403px] h-[403px] p-4 flex flex-col justify-center items-center ${bg} rounded-lg transform transition duration-500 hover:scale-110`}
            >
              <Image
                src={`/images/${icon}.png`}
                alt={`${icon} icon`}
                width={72}
                height={72}
              />
              <div className="mt-3">
                {emails.map((email, i) => (
                  <h6
                    key={`email-${index}-${i}`}
                    className={`${montserrat.className} text-center font-bold text-sm hover:text-blue-500 ${text}`}
                  >
                    {email}
                  </h6>
                ))}
              </div>
              <h5
                className={`${montserrat.className} text-center font-bold text-lg mt-3 hover:text-blue-500 ${text}`}
              >
                {title}
              </h5>
              <button className="w-[189px] mt-4 text-myBlue font-bold py-2 px-4 rounded-full outline outline-1 outline-myBlue hover:text-blue-500">
                Submit Request
              </button>
            </div>
          )
        )}
      </div>
      {/* Final Section */}
      <div className="w-full text-center py-8">
        <Image
          src="/images/Arrow 2.png"
          alt="Arrow pointing down"
          width={72}
          height={72}
          className="mx-auto"
        />
        <h5
          className={`${montserrat.className} font-bold text-base text-myDark mt-5 hover:text-blue-500`}
        >
          WE CAN'T WAIT TO MEET YOU
        </h5>
        <h2
          className={`${montserrat.className} font-normal text-3xl lg:text-5xl text-myDark mt-4 hover:text-blue-500`}
        >
          Let’s Talk
        </h2>
        <button className="w-48 mt-4 text-white font-bold py-2 px-6 rounded-md bg-myBlue hover:text-black">
          Try it free now
        </button>
      </div>
    </div>
  );
}




