import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import useScroolBar from "../../hooks/useScroolBar";
import LogoNexFlix from "../icon/LogoNexFlix";
import User from "../User";

const Header = () => {
  const { headerRef } = useScroolBar();
  return (
    <>
      <div
        className="flex items-center justify-between h-[80px] px-[8%] w-full fixed top-0 left-0 right-0 z-10 "
        ref={headerRef}
      >
        <LogoNexFlix></LogoNexFlix>
        <Navbar></Navbar>
        {/* <User></User> */}
      </div>
    </>
  );
};

export default Header;
