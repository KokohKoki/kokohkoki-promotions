import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { IoCloseCircle } from "react-icons/io5";
import "./product.css";

const ProductsOnSale = ({ productInfo }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <h3 className="font-titleFont text-xl md:text-base font-semibold underline underline-offset-4 decoration-[1px]">Detail Products</h3>
      <div className="imageContainer">
        {productInfo.img2 && (
          <div key={`${productInfo.name}1`} className="flex items-center gap-4 py-2 hover:scale-105 transition duration-300 ease-in-out" onClick={() => openModal(productInfo.img2)}>
            <div>
              <img className="w-24 cursor-pointer rounded-md aspect-square object-cover" src={productInfo.img2} alt={productInfo.img2} />
            </div>
          </div>
        )}
        <div className="w-full h-[2px] bg-gray-300 opacity-75 my-2 hidden md:block" />
        {productInfo.img3 && (
          <div key={`${productInfo.name}2`} className="flex items-center gap-4  py-2 hover:scale-105 transition duration-300 ease-in-out" onClick={() => openModal(productInfo.img3)}>
            <div>
              <img className="w-24 cursor-pointer rounded-md aspect-square object-cover" src={productInfo.img3} alt={productInfo.img3} />
            </div>
          </div>
        )}
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal" overlayClassName="modal-overlay">
        <img src={selectedImage} alt="Enlarged" />
        <button className="modal-close" onClick={closeModal}>
          <IoCloseCircle />
        </button>
      </Modal>
    </div>
  );
};

export default ProductsOnSale;
