import { useCallback, useEffect, useState } from "react";
import classes from "./popup.module.css";
import { useNavigate } from "react-router-dom";
import FloatingWA from '../../../components/floatingWhatsapp/floating-whatsapp';

export default function ShippingScheduleNotice() {
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  const popUpTrigger = useCallback(async () => {
    const scheduleNotice = sessionStorage.getItem("scheduleNotice");
    if (!scheduleNotice) {
      setPopup(true);
      sessionStorage.setItem("scheduleNotice", "true");
    }
  }, []);

  useEffect(() => {
    popUpTrigger();
  }, [popUpTrigger]);

  const handleClose = () => {
    setPopup(false);
  };

  const navShip = () => {
    navigate("/shipping");
  };

  return (
    <>
      {popup && (
        <div className={classes.modalNotice}>
          <div className={classes.noticeCard}>
            <button onClick={handleClose} className="text-lg font-bold flex justify-end hover:opacity-50 text-rose-500">
              X
            </button>
            <h1 className="text-black text-base md:text-lg text-center">Check Our Latest Overseas Shipping Schedule!</h1>
            <div className="w-full h-[2px] bg-gray-400 opacity-30 " />
            <button onClick={navShip} className="bg-rose-500 mt-1 rounded-lg py-0.5 text-white">
              Check Schedule
            </button>
          </div>
        </div>
      )}
      <FloatingWA popup={popup} />
    </>
  );
}
