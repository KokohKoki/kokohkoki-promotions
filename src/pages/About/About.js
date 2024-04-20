import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { aboutContent } from "../../components/about/about-content";
import AboutItem from "../../components/about/about-item";
import { useSelector } from "react-redux";
import SEO from "../../components/SEO/seo-layout";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("Home");
  const selectedCurrency = useSelector(
    (state) => state.orebiReducer.selectedCurrency
  );

  useEffect(() => {
    if (location.state && location.state.data) {
      setPrevLocation(location.state.data);
    }
  }, [location]);

  const filteredAboutContent = aboutContent.find(
    (content) => content.language === selectedCurrency
  );

  return (
    <div className="max-w-container mx-auto px-4">
      <SEO
        title="About KokohKoki"
        description="KokohKoki is a No. 1 Goldfish Seller that offers a wide variety of Cute and Best Goldfish."
        page="about"
      />
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10 ">
        <div className="mb-10">
          {filteredAboutContent.aboutMe.map((item) => (
            <AboutItem key={item.title} {...item} />
          ))}
        </div>
        <Link to="/">
          <button className="w-52 font-bold h-10 bg-rose-500 text-white hover:bg-black hoverEffect duration-300 mb-5">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
