import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Event from "../../components/home/Event/Event";
import Sale from "../../components/home/Sale/Sale";
import SEO from "../../components/SEO/seo-layout";
import ClearanceSale from "../../components/home/ClearanceSell/ClearanceSell";
// import BestSellers from "../../components/home/BestSellers/BestSellers";
// import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
// import YearProduct from "../../components/home/YearProduct/YearProduct";

const Home = () => {
  return (
    <div className="w-full mx-auto bg-primeColor mb-10">
      <SEO
        title="KokohKoki - Best and Cutest Quality Goldfish"
        description="Kokoh Koki adalah Goldfish seller dengan prinsip Product Oriented karena kokoh koki sendiri memfokuskan para buyer untuk melihat kualitas dari ikan itu sendiri, bukan dari farm mana ikan tersebut diambil"
      />
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <Event />
        <ClearanceSale />
        {/* <YearProduct />
        <SpecialOffers /> */}
      </div>
    </div>
  );
};

export default Home;
