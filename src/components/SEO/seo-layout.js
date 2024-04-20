import React from "react";
import { Helmet } from "react-helmet-async";

const seoLayout = ({ title, description, page }) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://kokohkoki.com/${page}`} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content="KokohKoki" />
      <meta name="twitter:card" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
    </Helmet>
  );
};

export default seoLayout;
