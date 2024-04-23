import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/orebiSlice";
import { emptyCart } from "../../assets/images/index";
import ItemCard from "./ItemCard";
import axios from "axios";
import BASE_URL from "../../config/config";
import { priceFormatNoFraction, priceFormatter } from "../../utils/formatter";
import CouponForm from "../../components/cart/CouponForm";
import ResetCoupon from "../../components/cart/ResetCoupon";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);
  const selectedCurrency = useSelector(
    (state) => state.orebiReducer.selectedCurrency
  );
  const [totalAmt, setTotalAmt] = useState("");
  const [appliedCouponPrice, setAppliedCouponPrice] = useState();
  const couponRef = useRef(null);
  const [couponLoading, setCouponLoading] = useState(false);
  const [saveCoupon, setSaveCoupon] = useState(null);
  const [cartUpdated, setCartUpdated] = useState(false);
  const [couponMessage, setCouponMessage] = useState({
    type: null,
    text: null,
  });
  const [totalQuantity, setTotalQuantity] = useState("");

  const applyDiscountCoupon = async (e) => {
    e.preventDefault();
    setCouponLoading(true);
    const couponCode = couponRef.current.value;

    try {
      const response = await axios.post(
        `${BASE_URL}/discounts/applied/${couponCode}`,
        {
          totalTransactionFish: totalQuantity,
          totalPrice: totalAmt,
          currency: selectedCurrency,
        }
      );
      setAppliedCouponPrice(response.data.data);
      setSaveCoupon(couponCode);
      setCouponMessage({
        type: "success",
        text: "Congrats, coupon applied success!",
      });
    } catch (error) {
      console.error("Failed to apply coupon:", error);
      setSaveCoupon(null);
      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Failed to Apply Coupon";
      setCouponMessage({ type: "error", text: errorMessage });
    } finally {
      couponRef.current.value = "";
      setCouponLoading(false);
    }
  };

  useEffect(() => {
    let price = 0;
    let totalQty = 0;
    products.forEach((item) => {
      price += item.price * item.quantity;
      totalQty += item.quantity;
    });
    setTotalAmt(price);
    setTotalQuantity(totalQty);
    setCartUpdated(true);

    const recalculate = async () => {
      if (saveCoupon) {
        try {
          const response = await axios.post(
            `${BASE_URL}/discounts/applied/${saveCoupon}`,
            {
              totalTransactionFish: totalQuantity,
              totalPrice: price,
              currency: selectedCurrency,
            }
          );
          setAppliedCouponPrice(response.data.data);
        } catch (error) {
          console.error("Failed to reapply coupon:", error);
        } finally {
          setCartUpdated(false);
        }
      } else {
        setCartUpdated(false);
      }
    };

    recalculate();
  }, [products, saveCoupon, selectedCurrency, totalQuantity]);

  const handleResetCart = () => {
    dispatch(resetCart());
    setSaveCoupon(null);
  };

  const handleResetCoupon = () => {
    setSaveCoupon(null);
    setAppliedCouponPrice(undefined);
    setCouponMessage({ type: null, text: null });
  };

  const redirectToWhatsApp = () => {
    const phoneNumber = "+6281298772351";
    const productLines = products
      .map((item, index) => {
        return `*${index + 1}. ${item.name} | ${item.quantity} qty | ${
          selectedCurrency === "USD"
            ? `${Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(item.price)}`
            : `${Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(item.price)}`
        }*`;
      })
      .join("\n");
    const totalProductsPrice = `Total price: *${
      appliedCouponPrice
        ? priceFormatNoFraction(
            appliedCouponPrice.totalPriceAfterDiscount,
            selectedCurrency
          )
        : priceFormatNoFraction(totalAmt, selectedCurrency)
    }*`;
    const message = `Hello Ales, I'm interested in the products in my cart. Please assist with the checkout process. Thank you!\n${productLines}\n${totalProductsPrice}${
      saveCoupon
        ? `\nCoupon used: ${saveCoupon} - Original Price ${priceFormatNoFraction(
            totalAmt,
            selectedCurrency
          )}`
        : ""
    }`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Cart" />
      {products.length > 0 ? (
        <>
          <div className="pb-20">
            <div className="w-full h-16 bg-[#F5F7F7] text-primeColor text-lg font-titleFont font-semibold rounded-md hidden md:grid grid-cols-2 px-2">
              <div className="flex items-center">
                <h2 className="">Product</h2>
              </div>
              <div className="flex justify-between items-center ml-4">
                <h2 className="">Price</h2>
                <h2 className="">Quantity</h2>
                <h2 className="">Sub Total</h2>
              </div>
            </div>
            <div className="my-5 bg-[#F5F7F7] rounded-md">
              {products.map((item) => (
                <div key={item._id}>
                  <ItemCard item={item} changeQuantityLoading={cartUpdated} />
                </div>
              ))}
            </div>
            <button
              onClick={handleResetCart}
              className="py-2 px-10 bg-rose-500 text-white font-semibold uppercase mb-4 hover:bg-rose-700 duration-300 rounded-md"
            >
              Reset cart
            </button>
            <div className="flex flex-wrap justify-between border py-4 px-2 md:px-4 items-center gap-2 bg-[#F5F7F7] rounded-md cursor-default">
              {appliedCouponPrice === undefined ? (
                <CouponForm
                  onSubmit={applyDiscountCoupon}
                  couponRef={couponRef}
                  loading={couponLoading}
                />
              ) : (
                <ResetCoupon
                  discountCode={appliedCouponPrice.discountCode}
                  onClick={handleResetCoupon}
                />
              )}
              {couponMessage.type === "success" && (
                <div className="flex flex-col gap-1">
                  <p className="text-green-500 text-sm font-semibold">
                    {couponMessage.text}
                  </p>
                  <p className="flex flex-wrap gap-1">
                    <span className="font-semibold">
                      {appliedCouponPrice?.discountPercentage}%
                    </span>
                    Up To
                    <span className="font-semibold">
                      {selectedCurrency === "USD"
                        ? `${priceFormatter(
                            appliedCouponPrice?.limitCouponPrice.USD,
                            selectedCurrency
                          )}`
                        : `${priceFormatter(
                            appliedCouponPrice?.limitCouponPrice.IDR,
                            selectedCurrency
                          )}`}
                    </span>
                  </p>
                </div>
              )}
              {couponMessage.type === "error" && (
                <p className="text-rose-500 text-sm font-semibold">
                  {couponMessage.text}
                </p>
              )}
            </div>
            <div className="max-w-7xl gap-4 flex justify-end mt-4">
              <div className="w-full md:w-96 flex flex-col gap-4">
                <h1 className="text-2xl font-semibold text-right text-white">
                  Cart totals
                </h1>
                <div className="flex items-center justify-between border bg-[#F5F7F7] rounded-md py-1.5 text-lg px-4 font-medium cursor-default">
                  {appliedCouponPrice ? (
                    <>
                      <div className="flex flex-col">
                        <span>Total</span>
                        <span className="text-[12px] italic">
                          You have saved{" "}
                          {priceFormatter(
                            appliedCouponPrice.discountedPrice,
                            selectedCurrency
                          )}
                        </span>
                      </div>
                      <div className="tracking-wide text-lg font-titleFont">
                        <div className="flex flex-col items-end">
                          <span className="font-bold">???</span>
                          <span className="line-through italic font-light text-sm">
                            ???
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col">
                        <span>Total</span>
                      </div>
                      <div className="tracking-wide text-lg font-titleFont">
                        <div className="flex flex-col items-end">
                          <span className="font-bold">???</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={redirectToWhatsApp}
                    className="w-52 h-10 bg-rose-500 text-white transition duration-150 ease-in-out hover:bg-rose-700 rounded-md"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              beautiful fish. and make it happy.
            </p>
            <Link to="/">
              <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
