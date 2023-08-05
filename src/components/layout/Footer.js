import React from "react";
import PlayIcon from "../icon/PlayIcon";
import Logo from "../Logo";
import OverLay from "../banner/OverLay";
import LogoNexFlix from "../icon/LogoNexFlix";

const Footer = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center ">
      <OverLay></OverLay>
      <img
        src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="content flex flex-col absolute">
        <LogoNexFlix className={"mx-auto mb-10"}></LogoNexFlix>
        {/* <Logo className={"mx-auto mb-10"}></Logo> */}
        <div className="flex gap-x-28">
          <div className="flex flex-col gap-y-3">
            <span className="hover:text-primary cursor-pointer">Home</span>
            <span className="hover:text-primary cursor-pointer">
              Contact us
            </span>
            <span className="hover:text-primary cursor-pointer">
              Team of services
            </span>
            <span className="hover:text-primary cursor-pointer">About us</span>
          </div>
          <div className="flex flex-col gap-y-3">
            <span className="hover:text-primary cursor-pointer">Live</span>
            <span className="hover:text-primary cursor-pointer">FAQ</span>
            <span className="hover:text-primary cursor-pointer">Premium</span>
            <span className="hover:text-primary cursor-pointer">
              Privacy policy
            </span>
          </div>
          <div className="flex flex-col gap-y-3">
            <span className="hover:text-primary cursor-pointer">
              You must watch
            </span>
            <span className="hover:text-primary cursor-pointer">
              Recent release
            </span>
            <span className="hover:text-primary cursor-pointer">Top IMDB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
