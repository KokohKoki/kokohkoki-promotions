import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { IoCloseCircle } from "react-icons/io5";
import { shippingContent } from "../../components/shipping/shipping-content";
import ShippingItem from "../../components/shipping/shipping-item";
import BASE_URL from "../../config/config";
import axios from "axios";
import BasicSkeleton from "../../components/UI/basic-skeleton";
import { useSelector } from "react-redux";
import SEO from "../../components/SEO/seo-layout";
import Modal from "react-modal";
import style from "./shipping.module.css";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [scheduleImg, setScheduleImg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const selectedCurrency = useSelector(
    (state) => state.orebiReducer.selectedCurrency
  );
  const filteredShippingContent = shippingContent.find(
    (content) => content.language === selectedCurrency
  )?.shipping;

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const fetchShippingSchedule = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/schedule-ships`);
      setScheduleImg(response.data.data.reverse());
    } catch (error) {
      console.error("Failed to fetch Shipping Schedule:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchShippingSchedule();
  }, [fetchShippingSchedule]);

  useEffect(() => {
    if (location.state?.data) {
      setPrevLocation(location.state.data);
    }
  }, [location]);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (loading === true)
    return (
      <div className="max-w-container mx-auto px-4">
        <Breadcrumbs title="Shipping" prevLocation={prevLocation} />{" "}
        <div className="mx-2 my-4 max-w-[50rem]">
          <BasicSkeleton counts={5} />
        </div>
      </div>
    );

  return (
    <div className="max-w-container mx-auto px-4">
      <SEO
        title="Shipping - KokohKoki"
        description="We're ready for Worldwide Shipping. We ship to all countries around the world. We offer the best shipping service for our customers"
        page="shipping"
      />
      <Breadcrumbs title="Shipping" prevLocation={prevLocation} />
      <div className="pb-10">
        <div className="mb-10">
          {filteredShippingContent.map((content) => (
            <ShippingItem key={content.title} {...content} />
          ))}
          <span className="text-rose-500 font-bold tracking-wide text-xl">
            Shipping Schedule
          </span>
          {scheduleImg.length === 0 ? (
            <p className="items-center italic text-white py-10">
              No shipping schedule available
            </p>
          ) : (
            scheduleImg.map((schedule) => (
              <>
                <img
                  key={schedule._id}
                  src={schedule.scheduleImage}
                  alt="kokohkoki-shipping-schedule"
                  className="rounded-lg aspect-video object-cover mt-1 mb-4 w-[50rem] cursor-pointer"
                  onClick={() => openModal(schedule)}
                />
                <p className="items-center italic text-white py-5">
                  {schedule?.scheduleName || "Shipping Schedule"}
                </p>
              </>
            ))
          )}
        </div>
        <Link to="/shop">
          <button className="w-52 font-bold h-10 bg-rose-500 text-white hover:bg-black hoverEffect duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>

      <Modal
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        contentLabel="Shipping Schedule Image"
        className={style.modal}
        overlayClassName={style.modalOverlay}
      >
        <div className="text-rose-500 font-bold tracking-wide text-xl">
          {selectedImage?.scheduleName || "Shipping Schedule"}
        </div>
        <a
          href={selectedImage?.scheduleImage}
          target="_blank"
          rel="noopener noreferrer"
          className="items-center text-center italic text-black"
        >
          Click here to see the full image
        </a>
        <button className={style.modalClose} onClick={closeModal}>
          <IoCloseCircle />
        </button>
        {selectedImage && (
          <img
            src={selectedImage.scheduleImage || null}
            alt="Shipping Schedule"
            className="rounded-lg aspect-video object-cover w-full h-full"
          />
        )}
      </Modal>
    </div>
  );
};

export default Journal;
