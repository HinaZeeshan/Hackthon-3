import React from 'react';
import { FaLyft } from 'react-icons/fa';
import { BiLeaf } from 'react-icons/bi';
import { FaStripe } from 'react-icons/fa';
import { FaHeadset } from 'react-icons/fa6';
import { FaAws } from 'react-icons/fa6';
import { FaHooli } from 'react-icons/fa';

const Reacticon = () => {
  return (
    <div id="dropShadow" className="h-auto border-2 w-full p-2 bg-[#FAFAFA]">
      <div
        className="flex flex-wrap justify-between max-w-7xl gap-2 sm:gap-8 lg:gap-12 items-center 
                  mx-2 md:mx-4  lg:mx-auto text-3xl sm:text-5xl md:text-6xl lg:text-8xl"
      >
        <FaHooli />
        <FaLyft />
        <BiLeaf />
        <FaStripe />
        <FaAws />
        <FaHeadset />
      </div>
    </div>
  );
};

export default Reacticon;




