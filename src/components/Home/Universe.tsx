import React from 'react'
import Image from 'next/image'
import  { Montserrat } from 'next/font/google'
 const montseerat = Montserrat({
   subsets: ['latin'],
   weight: '700',
});
const Universe = () => {
  return (
    <div  className='flex justify-center items-center'>
      <section className="text-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
      width={725}
      height={774}
      className="object-cover object-center rounded" alt="hero" src="/images/asian-woman-man-with-winter-clothes 1.png"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h4
            className={`${montseerat.className} title-font sm:text-4xl text-3xl mb-4 font-medium white`}
          >
            SUMMER 2020
          </h4>
      <h1 className={`${montseerat.className}title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900`}>Part of the Neural 
      
        <br className="hidden lg:inline-block"/>Universe
      </h1>
      <p className={`${montseerat.className} mb-8 leading-relaxed`}>We know how large objects will act, 
      but things on a small scale.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-[#2DC071] border-0 py-2 px-6 focus:outline-none hover:bg-green-300 rounded text-lg">BUY NOW</button>
        <button className="ml-4 inline-flex text-[#2DC071] bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">READ MORE</button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Universe
