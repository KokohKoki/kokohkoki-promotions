import React from "react";
// import { BsSuitHeartFill } from "react-icons/bs";
// import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { DiscountBadgeV2, SoldOutBadge } from "../../UI/social-icons";
import { priceFormatter } from "../../../utils/formatter";

const Product = (props) => {
  const dispatch = useDispatch();
  const _id = props._id;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const navigate = useNavigate();
  const selectedCurrency = useSelector(
    (state) => state.orebiReducer.selectedCurrency
  );
  const productItem = props;

  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };

  const discPercent = (percentage) => {
    if (percentage) {
      return percentage + "%";
    } else if (!percentage) {
      return "";
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: props._id,
        name: props.name,
        quantity: 1,
        image: props.img,
        badge: props.discount,
        price: props.discount === true ? props.discountPrice : props.price,
      })
    );
  };

  return (
    <div className="group bg-black w-full h-full">
      <div className=" relative overflow-y-hidden ">
        <div>
          <Image
            className={`w-full h-full aspect-square object-cover ${
              props.isAvailable === false ? "grayscale" : "grayscale-0"
            }`}
            imgSrc={props.img}
          />
        </div>
        <div className="absolute -top-0.5 left-0">
          {props.isAvailable === false ? (
            <SoldOutBadge />
          ) : (
            <div className="mt-2.5">
              {props.isNewArrival === true && (
                <div className="shadow bg-rose-500 text-white text-[14px] tracking-normal pl-1 pr-2 mt-1">
                  <span>New</span>
                </div>
              )}
              {props.isEvent === true && (
                <div className="shadow bg-rose-500 text-white text-[14px] tracking-normal pl-1 pr-2 mt-1">
                  <span>Event</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="absolute top-0 right-0">
          {props.discount === true && props.discountPercentage !== 0 ? (
            <div>
              <DiscountBadgeV2 width="48px" height="48px" />
              <span
                className="text-[#e2cf64] font-sans font-semibold text-[12px] absolute top-3.5 right-3.5 rotate-[315deg]"
                title={`${discPercent(props.discountPercentage)}`}
              >
                {discPercent(props.discountPercentage)}
              </span>
            </div>
          ) : null}
        </div>
        <div className="w-full  h-32 absolute bg-black -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full border-t h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            {/* <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Compare
              <span>
                <GiReturnArrow />
              </span>
            </li> */}
            <li className="text-[#767676] hover:text-white text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-white flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              <button
                onClick={handleAddToCart}
                disabled={props.isAvailable === false}
              >
                {" "}
                Add to Cart
              </button>
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <li
              onClick={handleProductDetails}
              className="text-[#767676] hover:text-white text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-white flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>
            {/* <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Add to Wish List
              <span>
                <BsSuitHeartFill />
              </span>
            </li> */}
          </ul>
        </div>
      </div>

      <div className=" border-t p-4 flex flex-col gap-1 cursor-default">
        <div className="flex gap-1 flex-col lg:gap-0 items-start justify-start font-titleFont">
          <h2
            className=" text-base md:text-lg text-rose-500 font-bold line-clamp-1"
            title={props.name}
          >
            {props.name}
          </h2>
          <div className="flex flex-col gap-1 justify-start items-start">
            {props.discount === true && (
              <p
                className="text-[white] text-sm text-[16px] md:text-lg font-bold"
                style={{ textShadow: "0 0 10px #FFD700" }}
              >
                {priceFormatter(props.discountPrice, selectedCurrency)}
              </p>
            )}
            <p
              className={`text-white ${
                props.discount === true
                  ? "line-through font-light text-[11px] md:text-[14px] opacity-50"
                  : "no-underline opacity-100 text-[16px] md:text-lg  font-bold"
              }`}
              style={{ textShadow: "0 0 10px #FFD700" }}
            >
              {priceFormatter(props.price, selectedCurrency)}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap text-black text-[11px] font-medium md:text-xs gap-1 capitalize ">
          <span className="bg-[#e2cf64] px-1 py-0.5 rounded-sm shadow">
            {props.type}
          </span>
          <span className="bg-[#e2cf64]  px-1 py-0.5 rounded-sm shadow">
            {props.gender}
          </span>
          {/* <span className="bg-[#e2cf64]  px-1 py-0.5 rounded-sm shadow">
            {props.size}
          </span> */}
          {props.isEvent === true && props.event && (
            <span className="bg-[#e2cf64] px-1 py-0.5 rounded-sm shadow">
              {props.event}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
