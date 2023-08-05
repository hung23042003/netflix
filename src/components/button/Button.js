import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button className={`rounded-full ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
