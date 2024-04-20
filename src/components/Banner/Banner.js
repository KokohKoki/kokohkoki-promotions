import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { newArrivalBanner, ClearanceSellBanner } from "../../assets/images";
import { BannerSkeleton } from "../designLayouts/img-skeleton";

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const [loadingBanner, setLoadingBanner] = useState(true);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "rgb(244 63 94)",
                borderRight: "3px rgb(244 63 94) solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "4%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "rgb(244 63 94)",
                      borderRight: "3px rgb(244 63 94) solid",
                      cursor: "pointer",
                      fontSize: "10px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "10px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className="w-full bg-primeColor border-b-[1px] border-b-[#e2cf64]">
      <Slider {...settings}>
        <Link to="/shop?type=Clearance%20Sale">
          <div>
            {loadingBanner && <BannerSkeleton />}
            <img
              src={ClearanceSellBanner}
              alt="Clearance Sell Banner"
              onLoad={() => setLoadingBanner(false)}
              style={{
                display: loadingBanner ? "none" : "block",
              }}
            />
          </div>
        </Link>
        {/* Add more banner here ! */}
        <Link to="/shop">
          <div>
            <img
              src={newArrivalBanner}
              alt="New Arrival Banner"
              onLoad={() => setLoadingBanner(false)}
              style={{
                display: loadingBanner ? "none" : "block",
              }}
            />
          </div>
        </Link>
        {/* <Link to="#">
          <div>
            <img
              src={newArrivalBanner}
              alt="New Arrival Banner"
              onLoad={() => setLoadingBanner(false)}
              style={{
                display: loadingBanner ? "none" : "block",
              }}
            />
          </div>
        </Link> */}
      </Slider>
    </div>
  );
};

export default Banner;
