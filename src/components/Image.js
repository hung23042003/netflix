import React from "react";

const Image = ({ url, className }) => {
  return (
    <img
      src={url}
      alt="img"
      className={`w-full  object-cover select-none  ${className}`}
    />
  );
};

export default Image;
