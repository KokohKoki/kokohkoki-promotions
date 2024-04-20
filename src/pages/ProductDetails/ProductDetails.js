import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Modal from "react-modal";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import ProductsOnSale from "../../components/pageProps/productDetails/ProductsOnSale";
import { IoCloseCircle } from "react-icons/io5";
import "./product.css";

const ProductDetails = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState([]);
  const [redirectToNotFound, setRedirectToNotFound] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (location.state?.item) {
      setProductInfo(location.state.item);
      setPrevLocation(location.pathname);
    } else {
      setRedirectToNotFound(true);
    }
  }, [location]);

  if (redirectToNotFound) {
    return <Navigate to="/notFound" replace />;
  }

  return (
    <div className="w-full mb-20 mt-10 mx-auto ">
      <div className="max-w-container mx-auto px-4">
        <div className="xl:-mt-10 -mt-7">
          <Breadcrumbs title="" prevLocation={prevLocation} />
        </div>
        <div className="bg-gray-100 p-4 grid grid-cols-1 md:grid-cols-[90px_300px_1fr] gap-4 rounded-lg">
          <div className="">
            <ProductsOnSale productInfo={productInfo} />
          </div>
          <div className="relative hover:scale-105 transition duration-300 ease-in-out">
            <div className="" onClick={() => openModal(productInfo.img)}>
              <img
                className="w-full h-full object-cover rounded-md cursor-pointer "
                src={productInfo.img}
                alt={productInfo.img}
              />
              <div className="absolute top-1 left-0.5 flex flex-col">
                {productInfo.isNewArrival === true && (
                  <div className="shadow bg-rose-500 text-white text-[14px] tracking-normal px-1 mt-1 text-center">
                    <span>New</span>
                  </div>
                )}
                {productInfo.isEvent === true && (
                  <div className="shadow bg-rose-500 text-white text-[14px] tracking-normal px-1 mt-1 text-center">
                    <span>Event</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <ProductInfo productInfo={productInfo} />

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="modal"
            overlayClassName="modal-overlay"
          >
            <img src={productInfo.img} alt="Enlarged" />
            <button className="modal-close" onClick={closeModal}>
              <IoCloseCircle />
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
