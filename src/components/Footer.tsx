import React from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
const montseerat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});
const Footer = () => {
  return (
    <div className=" mt-4 max-w-7xl  mx-auto p-4">
      <div className="container flex justify-between items-center mx-auto ">
        <div className=" h-[58px]">
          <h1
            className={`${montseerat.className} sm:text-2xl text-xl hover:scale-105 transition-transform duration-500 ease-in-out mt-2 font-bold text-gray-900 mb-4 md:mb-0`}
          >
            Bandage
          </h1>
        </div>
        <nav className=" flex gap-4 ">
          {/* grid-flow-row gap-4 md:place-self-center md:justify-self-end */}
          <Link href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-blue-600"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </Link>
          <Link href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-blue-600"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </Link>
          <Link href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-blue-600"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </Link>
        </nav>
      </div>
      <div className="w-full h-[2px] bg-slate-400"></div>
      <footer className="footer  grbg-base-200 text-base-content p-2 lg:p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link href="" className="link link-hover">
            Branding
          </Link>
          <Link href="" className="link link-hover">
            Design
          </Link>
          <Link href="" className="link link-hover">
            Marketing
          </Link>
          <Link href="" className="link link-hover">
            Advertisement
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="" className="link link-hover">
            About us
          </Link>
          <Link href="" className="link link-hover">
            Contact
          </Link>
          <Link href="" className="link link-hover">
            Jobs
          </Link>
          <Link href="" className="link link-hover">
            Press kit
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link href="" className="link link-hover">
            Terms of use
          </Link>
          <Link href="" className="link link-hover">
            Privacy policy
          </Link>
          <Link href="" className="link link-hover">
            Cookie policy
          </Link>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="p-2 lg:p-4"
              />

              <button className="p-1 lg:p-4 bg-indigo-700">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <p className="m-1 lg:text-center">
        Copyright © {new Date().getFullYear()} - All right reserved
      </p>
    </div>
  );
};

export default Footer;
