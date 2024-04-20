import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { resetCart, setSelectedCurrency } from "../../../redux/orebiSlice";
import classes from "./popup.module.css";
import FlagDropdown from "../../UI/flag-dropdown";
import { useNavigate } from "react-router-dom";

export default function CurrencySelection() {
  const [popup, setPopup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const popupTrigger = useCallback(async () => {
    const storedCurrency = localStorage.getItem("selectedCurrency");
    dispatch(setSelectedCurrency(storedCurrency));
    if (!storedCurrency) {
      setPopup(true);
      dispatch(resetCart());
      navigate("/");
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    popupTrigger();
  }, [popupTrigger]);

  const handleCurrencyChange = (currency) => {
    localStorage.setItem("selectedCurrency", currency);
    dispatch(setSelectedCurrency(currency));
    setPopup(false);
  };

  return (
    <>
      {popup && (
        <div className={classes.modal}>
          <div className={classes.container}>
            <h1 className="flex flex-col justify-center text-center text-3xl font-extrabold leading-none tracking-tight text-rose-500">
              Welcome to KokohKoki
              <span className="font-normal text-xl text-primeColor mt-2 ">Which country are you from?</span>
            </h1>
            <div className="flex gap-4 mt-2 justify-center">
              <FlagDropdown handleCurrencyChange={handleCurrencyChange} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
