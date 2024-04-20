import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import DescHeading from "../Products/DescHeading";
import Product from "../Products/Product";
import NextArrow from "../../designLayouts/arrows/NextArrows";
import PrevArrow from "../../designLayouts/arrows/PrevArrows";
import axios from "axios";
import BASE_URL from "../../../config/config";
import ProductSkeleton from "../Products/Product-Skeleton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const selectedCurrency = useSelector(
    (state) => state.orebiReducer.selectedCurrency
  );

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/fish?isNewArrival=true&sort=desc`)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getWidthClass = (length) => {
    let baseClass = "min-h-[340px] md:min-h-[515px] bg-black border w-full";
    if (length === 1) return `md:w-1/4 ${baseClass}`;
    if (length === 2) return `md:w-1/4 ${baseClass}`;
    if (length >= 3) return `md:w-full ${baseClass}`;
    return baseClass;
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
    ],
  };

  if (loading) {
    return (
      <>
        <Heading heading="New Arrivals" />
        <div className="flex gap-4 pb-16">
          <ProductSkeleton counts={1} />
        </div>
      </>
    );
  }

  return (
    <>
      {products && products.length > 0 ? (
        <div className="w-full pb-16">
          <Link to="/shop">
            <Heading heading="New Arrivals" />
            <DescHeading desc="Check out our Newest Goldfish !" />
          </Link>
          <Slider {...settings}>
            {products.map((product) => (
              <div className="px-1" key={product._id}>
                <div className={getWidthClass(products.length)}>
                  <Product
                    _id={product._id}
                    img={product.images.image1}
                    img2={product.images.image2}
                    img3={product.images.image3}
                    name={product.name}
                    size={product.size}
                    price={`${
                      selectedCurrency === "USD"
                        ? `${product.price_usd}`
                        : `${product.price}`
                    }`}
                    discountPrice={
                      product.discount
                        ? selectedCurrency === "USD"
                          ? product.discount.discountPriceUsd
                          : product.discount.discountPriceIdr
                        : ""
                    }
                    discountPercentage={product.discount?.discountPercentage}
                    type={product.type}
                    gender={product.gender}
                    color={product.color}
                    isAvailable={product.isAvailable}
                    isNewArrival={product.isNewArrival}
                    discount={product.discount?.isDiscount}
                    desc={product.desc}
                    isEvent={product.isEvent}
                    event={product.event}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ) : null}
    </>
  );
};

export default NewArrivals;
