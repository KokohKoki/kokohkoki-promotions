import React, { useState } from "react";
import { ImgSkeleton } from "./img-skeleton";

const Image = ({ imgSrc, className, skeletonClass }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <ImgSkeleton skeletonClass={skeletonClass} />}
      <img style={{ display: loading ? "none" : "block" }} className={className} src={imgSrc} alt={imgSrc} onLoad={() => setLoading(false)} />
    </>
  );
};

export default Image;
