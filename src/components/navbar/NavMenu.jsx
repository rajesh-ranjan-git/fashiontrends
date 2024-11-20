import React from "react";

const NavMenu = () => {
  return (
    <ul className="flex h-full font-bold">
      <li className="flex items-center justify-center h-full mx-2 border-b-4 border-transparent cursor-pointer hover:border-pink-600 hover:border-b-4">
        MEN
      </li>
      <li className="flex items-center justify-center h-full mx-2 border-b-4 border-transparent cursor-pointer hover:border-pink-600 hover:border-b-4">
        WOMEN
      </li>
      <li className="flex items-center justify-center h-full mx-2 border-b-4 border-transparent cursor-pointer hover:border-pink-600 hover:border-b-4">
        KIDS
      </li>
      <li className="flex items-center justify-center h-full mx-2 border-b-4 border-transparent cursor-pointer hover:border-pink-600 hover:border-b-4">
        HOME & LIVING
      </li>
      <li className="flex items-center justify-center h-full mx-2 border-b-4 border-transparent cursor-pointer hover:border-pink-600 hover:border-b-4">
        BEAUTY
      </li>
      <li className="flex items-center justify-center h-full mx-2 border-b-4 border-transparent cursor-pointer hover:border-pink-600 hover:border-b-4">
        STUDIO
      </li>
    </ul>
  );
};

export default NavMenu;
