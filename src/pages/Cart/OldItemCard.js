import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, drecreaseQuantity, increaseQuantity } from "../../redux/orebiSlice";
import { priceFormatter } from "../../utils/formatter";
import { Spinner } from "../../components/UI/animations";

const ItemCard = ({ item, changeQuantityLoading }) => {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.orebiReducer.selectedCurrency);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 rounded-md gap-2">
      <div className="flex items-center gap-2 my-2 ml-1">
        <ImCross onClick={() => dispatch(deleteItem(item._id))} className="text-primeColor hover:text-red-500 duration-300 cursor-pointer" />
        <img className="w-32 h-32 rounded-lg aspect-square object-cover" src={item.image} alt="productImage" />
        <h1 className="font-titleFont font-semibold">{item.name}</h1>
      </div>

      <div className="flex items-center justify-between gap-1 md:gap-6 text-lg mb-2 ml-2">
        <div className="flex items-center text-base md:text-lg font-semibold">{priceFormatter(item.price, selectedCurrency)}</div>
        {changeQuantityLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="flex gap-2 md:gap-4 items-center">
              <span
                onClick={() => dispatch(drecreaseQuantity({ _id: item._id }))}
                className="w-5 h-5 md:w-6 md:h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
              >
                -
              </span>
              <p>{item.quantity}</p>
              <span
                onClick={() => dispatch(increaseQuantity({ _id: item._id }))}
                className="w-5 h-5 md:w-6 md:h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
              >
                +
              </span>
            </div>
          </>
        )}

        <div className=" flex items-center font-titleFont font-bold  text-base md:text-lg pr-2">
          <p>{priceFormatter(item.quantity * item.price, selectedCurrency)}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
