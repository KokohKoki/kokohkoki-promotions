import React, { useEffect, useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import { useLocation } from "react-router-dom";

const ProductBanner = ({ applySorting, setItemsPerPage, setItemOffset, setCurrentPage, fishTypes, typeStatus }) => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const typeFromQuery = searchParams.get('type');
    if (typeFromQuery) {
      setSelectedType(typeFromQuery);
      applySorting({ type: typeFromQuery, gender: selectedGender });
    }
  }, [location, applySorting, selectedGender]);

  const handleTypeChange = (event) => {
    const newType = event.target.value;
    setSelectedType(newType);
    applySorting({ type: newType, gender: selectedGender });
  };

  const handleGenderChange = (event) => {
    const newGender = event.target.value;
    setSelectedGender(newGender);
    applySorting({ gender: newGender, type: selectedType });
  };

  const handleRefresh = () => {
    setSelectedType("");
    setSelectedGender("");
    applySorting({ type: null, gender: null });
    setItemOffset(0);
    setCurrentPage(0);
  };

  const handleShowingItems = (event) => {
    const newItemsPerPage = parseInt(event.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setItemOffset(0);
    setCurrentPage(0);
  };

  // if (typeStatus === "pending") return <h1 className="text-white">Loading</h1>;

  const sortingLoading = typeStatus === "pending";

  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
      <div className="flex flex-wrap items-center gap-2">
        {sortingLoading ? (
          <>
            <div className="relative flex w-96 animate-pulse gap-2">
              <div className="mb-1 h-6 w-1/4 rounded-md bg-lightText text-lg" />
              <div className="mb-1 h-6 w-4/5 rounded-md bg-lightText text-lg" />
              <div className="mb-1 h-6 w-2/5 rounded-md bg-lightText text-lg" />
              <div className="mb-1 h-6 w-1/4 rounded-md bg-rose-500 text-lg" />
            </div>
          </>
        ) : (
          <>
            <label className="block text-white">Sort by:</label>
            <div className="flex gap-2 flex-wrap">
              <select id="typeFish" className="pl-1 py-1 w-[165px] rounded-md border border-gray-200 text-sm hover:opacity-90 transition duration-150 ease-in-out" value={selectedType} onChange={handleTypeChange}>
                <option value="">All Types</option>
                {fishTypes.map((type) => (
                  <option key={type._id} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </select>
              <select id="gender" className="pl-1 py-1 rounded-md border border-gray-200 text-sm hover:opacity-90 transition duration-150 ease-in-out" value={selectedGender} onChange={handleGenderChange}>
                <option value="">Gender</option>
                <option value="male" title="Male">
                  Male
                </option>
                <option value="female" title="Female">
                  Female
                </option>
              </select>
            </div>
            <button onClick={handleRefresh} className="bg-rose-500 px-2 py-[0.33rem] rounded-md text-sm tracking-wide text-white hover:opacity-80 transition duration-150 ease-in-out">
              Clear
            </button>
          </>
        )}
      </div>
      <div className="flex items-center gap-2 md:gap-6 mt-4 md:mt-0">
        <div className="flex items-center gap-2 text-white relative">
          <label className="block">Show:</label>
          <select
            id="itemsPerPage"
            onChange={handleShowingItems}
            className="w-16 rounded-md md:w-20 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            {/* <option value="" disabled>Gender</option> */}
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <span className="absolute text-black text-sm right-3 top-2.5">
            <GoTriangleDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
