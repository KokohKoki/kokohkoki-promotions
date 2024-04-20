import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { FaFish, FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const BannerBottom = () => {
  return (
    <div className="w-full bg-black py-0 border-b border-b-[#e2cf64]">
      <Marquee speed={75}>
        <div className="max-w-container mx-auto h-10 md:h-20 py-0 md:py-2 flex flex-row gap-20 mr-20 items-center">
          <div className="flex">
            <p className="text-[#e2cf64] text-sm md:text-base flex gap-2 justify-center items-center">
              <FaStar /> Best Quality Goldfish
            </p>
          </div>
          <div className="flex">
            <p className="text-[#e2cf64] text-sm md:text-base flex gap-2 justify-center items-center">
              <FaFish /> Limited Edition
            </p>
          </div>
          <div className="flex">
            <p className="text-[#e2cf64] text-sm md:text-base flex gap-2 justify-center items-center">
              <MdLocalShipping /> Ready For Worldwide Shipping
            </p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default BannerBottom;
