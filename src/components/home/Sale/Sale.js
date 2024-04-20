import React from "react";
import { Link } from "react-router-dom";
import { forGroomingBanner, dragonSeriesBanner, specialGradeBanner, superCuteSeriesBanner, superExclusiveSeriesBanner, uniqueSeriesBanner } from "../../../assets/images";
import Image from "../../designLayouts/Image";

const Sale = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-8 md:mt-20 mx-0 md:mx-4">
        <div className="">
          <Link to={`/shop?type=Super Exclusive Series`}>
            <Image className="h-full w-full object-cover" imgSrc={superExclusiveSeriesBanner} />
          </Link>
        </div>
        <div className="">
          <Link to={`/shop?type=Super Cute Series`}>
            <Image className="h-full w-full object-cover" imgSrc={superCuteSeriesBanner} />
          </Link>
        </div>
        <div className="">
          <Link to={`/shop?type=Unique Series`}>
            <Image className="h-full w-full object-cover" imgSrc={uniqueSeriesBanner} />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 mb-8 md:mb-20 mx-0 md:mx-4 mt-4 gap-1">
        <div className="">
          <Link to="/shop?type=Grade AAA">
            <Image className="h-full w-full object-cover" imgSrc={specialGradeBanner} />
          </Link>
        </div>
        <div className="">
          <Link to="/shop?type=For Grooming">
            <Image className="h-full w-full object-cover" imgSrc={forGroomingBanner} />
          </Link>
        </div>
        <div className="">
          <Link to="/shop">
            <Image className="h-full w-full object-cover" imgSrc={dragonSeriesBanner} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sale;
