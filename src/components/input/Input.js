import React from "react";
import { useController } from "react-hook-form";

const Input = ({ type = "text", control, name, className, ...props }) => {
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <input
      type={type}
      {...props}
      {...field}
      className={`w-full  p-3 border-none outline-none  ${className}`}
    />
  );
};

export default Input;
