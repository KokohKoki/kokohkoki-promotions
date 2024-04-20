import React, { useCallback, useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import axios from "axios";
import BASE_URL from "../../config/config";
import { useQuery } from "@tanstack/react-query";
import SEO from "../../components/SEO/seo-layout";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [sorts, setSorts] = useState({ type: null, gender: null });

  async function fetchDataFish({ queryKey }) {
    const { type, gender } = queryKey[1] || {};
    let url = `${BASE_URL}/fish/search?sort=desc`;

    if (type || gender) {
      const qParams = new URLSearchParams();
      if (type) qParams.append("type", type);
      if (gender) qParams.append("gender", gender);
      url += `&${qParams.toString()}`;
    }

    const response = await axios.get(url);
    return response.data.data;
  }

  async function fetchFishTypes() {
    const response = await axios.get(`${BASE_URL}/types`);
    return response.data.data;
  }

  const {
    status,
    error,
    data: fishItems,
  } = useQuery({
    queryKey: ["fishData", sorts],
    queryFn: fetchDataFish,
  });

  const { status: typeStatus, data: fishTypes } = useQuery({
    queryKey: ["fishTypes"],
    queryFn: fetchFishTypes,
  });

  const applySorting = useCallback((newSorts) => {
    setSorts((prev) => ({
      ...prev,
      ...newSorts,
    }));
  }, []);

  return (
    <div className="max-w-container mx-auto px-4 bg-primeColor">
      <SEO
        title="Shop - Get the Cutest Goldfish Now!"
        description="We offer a wide variety of cute and best goldfish. It's Limited Edition, so grab it fast!"
        page="shop"
      />
      <Breadcrumbs title="Products" />
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        {/* <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div> */}
        <div className="w-full sml:w-full mdl:w-full lgl:w-full h-full flex flex-col gap-10">
          <ProductBanner
            setItemsPerPage={setItemsPerPage}
            setItemOffset={setItemOffset}
            setCurrentPage={setCurrentPage}
            fishTypes={fishTypes}
            applySorting={applySorting}
            typeStatus={typeStatus}
          />
          <Pagination
            items={fishItems}
            itemsPerPage={itemsPerPage}
            itemOffset={itemOffset}
            setItemOffset={setItemOffset}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            status={status}
            sorts={sorts}
            error={error}
          />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default Shop;
