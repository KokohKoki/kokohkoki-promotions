import React, { useState } from "react";
import { IndonesiaFlag } from "./flag-icons";
import { HiChevronDown, HiOutlineQuestionMarkCircle } from "react-icons/hi";

export default function FlagDropdown({ handleCurrencyChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [validate, setValidate] = useState(null);

  const options = [
    {
      value: "IDR",
      label: (
        <div className="flex gap-2">
          <IndonesiaFlag height="20px" width="20px" />
          Indonesia
        </div>
      ),
    },
    {
      value: "USD",
      label: (
        <div className="flex gap-2 text-start">
          <HiOutlineQuestionMarkCircle className="text-xl" />
          <span className="line-clamp-1">Outside Indonesia</span>
        </div>
      ),
    },
  ];

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setValidate(null);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      handleCurrencyChange(selectedOption.value);
      setValidate(null);
      setIsOpen(false);
    } else {
      setValidate("Please choose your country first.");
    }
  };

  return (
    <div className="flex w-[300px] justify-center flex-col text-base">
      <div className="flex justify-between gap-2">
        <button className="flex w-full justify-between items-center gap-2 py-2 px-4 bg-primeColor shadow rounded-full text-white font-medium hover:opacity-90 transition duration-300 ease-in-out" onClick={handleToggleDropdown}>
          {selectedOption ? selectedOption.label : "Select your country"} <HiChevronDown />
        </button>
        <button className="flex py-2 px-4  bg-primeColor shadow rounded-full text-white font-medium hover:bg-rose-500 transition duration-300 ease-in-out" onClick={handleSubmit}>
          Ok
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col bg-primeColor mt-1 rounded-lg shadow px-2 py-4 gap-2">
          {options.map((option, index) => (
            <div key={index} className="hover:bg-stone-400 rounded-full px-2 py-1 text-white transition duration-150 ease-in-out" onClick={() => handleOptionClick(option)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
      {validate && <div className="text-rose-500 mt-2 font-medium italic text-center">{validate}</div>}
    </div>
  );
}
