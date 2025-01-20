"use client";
import { useState } from "react";
import { useRouter } from "next/router"; // Correctly import useRouter
import Link from "next/link";
import Image from "next/image";
import login from "../../../public/images/login.webp";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Initialize useRouter

  const handleLogin = () => {
    // Dummy authentication logic
    const dummyUser = {
      email: "user@example.com",
      password: "password123",
    };

    if (email === dummyUser.email && password === dummyUser.password) {
      setError("");
      // Redirect to homepage after successful login
      router.push("/"); // Use router instance from useRouter
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-[129px] mt-12 mb-20 px-6 lg:px-24">
      {/* Login Image */}
      <Image
        className="w-full max-w-md lg:max-w-[650px] mx-auto lg:mx-0"
        src={login}
        alt="login image"
      />

      {/* Login Form */}
      <div className="flex flex-col justify-center gap-10 w-full max-w-md mx-auto lg:mx-0">
        {/* Header Section */}
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h1 className="text-2xl lg:text-4xl">Log in to Exclusive</h1>
          <p className="text-[#707070]">Enter your details below</p>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col gap-6">
          <input
            className="outline-none border-b border-[#707070] py-2"
            type="email"
            placeholder="Email or Phone Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="outline-none border-b border-[#707070] py-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Button and Forgot Password */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[87px] items-center">
          <button
            onClick={handleLogin}
            className="bg-[#db4444] text-white py-3 lg:py-4 px-10 lg:px-12 rounded-sm w-full lg:w-auto"
          >
            Login
          </button>
          <Link
            href="/forgot-password"
            className="text-[#db4444] text-center lg:text-left"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Redirect to Signup */}
        <p className="text-center lg:text-left">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-[#db4444]">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page;




// "use client"
// import { useState } from "react";
// // import { useRouter } from "next/router";
// import Link from "next/link";
// import Image from "next/image";
// import login from "../../../public/images/login.webp";
// import router from "next/router";

// function Page() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   // const router = useRouter();

//   const handleLogin = () => {
//     // Dummy authentication logic
//     const dummyUser = {
//       email: "user@example.com",
//       password: "password123",
//     };

//     if (email === dummyUser.email && password === dummyUser.password) {
//       setError("");
//       // Redirect to homepage after successful login
//       router.push("/");
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row gap-10 lg:gap-[129px] mt-12 mb-20 px-6 lg:px-24">
//       {/* Login Image */}
//       <Image
//         className="w-full max-w-md lg:max-w-[650px] mx-auto lg:mx-0"
//         src={login}
//         alt="login image"
//       />

//       {/* Login Form */}
//       <div className="flex flex-col justify-center gap-10 w-full max-w-md mx-auto lg:mx-0">
//         {/* Header Section */}
//         <div className="flex flex-col gap-4 text-center lg:text-left">
//           <h1 className="text-2xl lg:text-4xl">Log in to Exclusive</h1>
//           <p className="text-[#707070]">Enter your details below</p>
//         </div>

//         {/* Input Fields */}
//         <div className="flex flex-col gap-6">
//           <input
//             className="outline-none border-b border-[#707070] py-2"
//             type="email"
//             placeholder="Email or Phone Number"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             className="outline-none border-b border-[#707070] py-2"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         {/* Error Message */}
//         {error && <p className="text-red-500 text-sm">{error}</p>}

//         {/* Button and Forgot Password */}
//         <div className="flex flex-col lg:flex-row gap-4 lg:gap-[87px] items-center">
//           <button
//             onClick={handleLogin}
//             className="bg-[#db4444] text-white py-3 lg:py-4 px-10 lg:px-12 rounded-sm w-full lg:w-auto"
//           >
//             Login
//           </button>
//           <Link
//             href="/forgot-password"
//             className="text-[#db4444] text-center lg:text-left"
//           >
//             Forgot Password?
//           </Link>
//         </div>

//         {/* Redirect to Signup */}
//         <p className="text-center lg:text-left">
//           Don’t have an account?{" "}
//           <Link href="/signup" className="text-[#db4444]">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Page;
