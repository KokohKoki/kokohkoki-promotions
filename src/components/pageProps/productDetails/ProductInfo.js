import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { priceFormatter } from "../../../utils/formatter";
import { DiscountBadge } from "../../UI/social-icons";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state) => state.orebiReducer.selectedCurrency
  );

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: productInfo._id,
        name: productInfo.name,
        quantity: 1,
        image: productInfo.img,
        image2: productInfo.img2,
        image3: productInfo.img3,
        badge: productInfo.badge,
        price:
          productInfo.discount === true
            ? productInfo.discountPrice
            : productInfo.price,
        size: productInfo.size,
      })
    );
  };

  return (
    <div className="flex flex-col gap-5 h-full justify-between ">
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-2 justify-between">
          <h2 className="text-2xl md:text-4xl font-semibold">
            {productInfo.name}
          </h2>
          {productInfo.discount === true &&
            productInfo.discountPercentage !== 0 && (
              <span className="flex items-center text-rose-500 font-bold text-lg gap-0">
                {productInfo.discountPercentage}{" "}
                <DiscountBadge height="30px" width="30px" />
              </span>
            )}
        </div>
        <p className="font-bold text-base md:text-lg">
          Type: <span className="font-normal">{productInfo.type}</span>
        </p>
        <p className="font-bold text-base md:text-lg">
          Gender: <span className="font-normal">{productInfo.gender}</span>
        </p>
        <p className="font-bold text-base md:text-lg">
          Size: <span className="font-normal">{productInfo.size}</span>
        </p>
      </div>
      <div className="flex flex-col">
        <p
          className={`font-semibold tracking-wide ${
            productInfo.discount === true
              ? "text-lg text-rose-500 line-through"
              : "text-xl no-underline opacity-100 "
          }`}
        >
          Original Price: ???
        </p>
        {productInfo.discount === true && (
          <div className="text-xl font-semibold tracking-wide flex flex-wrap gap-1">
            <p>Special Price:</p>
            <span>???</span>
          </div>
        )}
      </div>
      <button
        onClick={handleAddToCart}
        className={`w-full py-4 text-white text-lg font-titleFont rounded-md ${
          productInfo.isAvailable
            ? "bg-primeColor hover:bg-black duration-300"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!productInfo.isAvailable}
      >
        Add to Cart
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Nb :</span> Click on the image
        to see the full-screen
      </p>
    </div>
  );
};

export default ProductInfo;
