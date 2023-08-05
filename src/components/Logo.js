import React from "react";
import { useNavigate } from "react-router-dom";
import PlayIcon from "./icon/PlayIcon";

const Logo = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`flex items-center cursor-pointer ${className}`}
      onClick={() => navigate("/")}
    >
      <PlayIcon className={"text-green-400 h-8 w-8"}></PlayIcon>
      <span className="text-2xl font-semibold ">NETFLIX</span>
    </div>
  );
};

export default Logo;
