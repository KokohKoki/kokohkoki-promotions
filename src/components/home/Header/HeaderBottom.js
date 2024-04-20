import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BASE_URL from "../../../config/config";
import axios from "axios";

const HeaderBottom = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  async function fetchDataFish() {
    try {
      const response = await axios.get(`${BASE_URL}/fish`);
      setItems(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchDataFish();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [items, searchQuery]);

  return (
    <div className="w-full bg-primeColor relative border-b-[1px] border-b-gray-200 py-5 md:py-2">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-row items-center gap-4 w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div className="relative w-full lg:w-[600px] h-[40px] md:h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[16px]"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Search your fish here"
            />
            <FaSearch className="w-5 h-5" />
            {searchQuery && (
              <div
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {searchQuery &&
                  filteredProducts.map((item) => {
                    const modifiedItem = {
                      ...item,
                      img: item.images.image1,
                    };

                    return (
                      <div
                        onClick={() => {
                          navigate(
                            `/product/${item._id
                              .toLowerCase()
                              .split(" ")
                              .join("")}`,
                            {
                              state: {
                                item: modifiedItem,
                              },
                            }
                          );
                        }}
                        key={item._id}
                        className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                      >
                        {console.log(item)}
                        <img
                          className="w-24"
                          src={item.images.image1}
                          alt="productImg"
                        />
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold text-lg">{item.name}</p>
                          <p className="text-xs">{item.gender.toUpperCase()}</p>
                          <p className="text-xs">{item.size.toUpperCase()}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
          <Link to="/cart" className="hidden md:flex">
            <div className="relative transition duration-150 ease-in-out hover:opacity-80">
              <FaShoppingCart className="text-white w-5 h-5 " />
              <span className="bg-rose-500 absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full  font-semibold text-white">
                {products.length > 0 ? products.length : 0}
              </span>
            </div>
          </Link>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
