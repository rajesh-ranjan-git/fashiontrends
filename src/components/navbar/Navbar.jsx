import React from "react";
import NavMenu from "./NavMenu";
import NavLogo from "./NavLogo";
import NavSearch from "./NavSearch";
import NavRightMenu from "./NavRightMenu";

const Navbar = () => {
  return (
    <header className="fixed flex items-center justify-between w-full h-16 px-10 bg-white shadow-md">
      <div className="flex items-center justify-around h-full ">
        <NavLogo />
        <NavMenu />
      </div>
      <div className="flex items-center justify-around h-full">
        <NavSearch />
        <NavRightMenu />
      </div>
    </header>
  );
};

export default Navbar;
