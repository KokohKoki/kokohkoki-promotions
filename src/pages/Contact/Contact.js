import React, { useEffect, useState } from "react";
import SEO from "../../components/SEO/seo-layout";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ContactInfo from "../../components/contact/ContactInfo";
import MapInfo from "../../components/contact/MapInfo";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("Home");

  useEffect(() => {
    if (location.state && location.state.data) {
      setPrevLocation(location.state.data);
    }
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <SEO
        title="Contact KokohKoki"
        description="Contact KokohKoki for any queries or questions."
        page="contact"
      />
      <Breadcrumbs title="Contact" prevLocation={prevLocation} />
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] gap-10 md:gap-4 lg:gap-2 mt-0 md:mt-10 mb-20 md:mb-28">
        <ContactInfo />
        <MapInfo />
      </div>
    </div>
  );
};

export default Contact;
