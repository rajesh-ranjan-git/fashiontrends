import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <ul className="flex h-full font-bold">
      <Link to={"/category/men"}>
        <li className="flex items-center justify-center h-full mx-2 border-b-4 border-transparent cursor-pointer hover:border-pink-600 hover:border-b-4">
          MEN
        </li>
      </Link>
      <Link to={"/category/women"}>
        <li className="flex items-center justify-center h-full mx-2 border-b-4 border-transparent cursor-pointer hover:border-pink-600 hover:border-b-4">
          WOMEN
        </li>
      </Link>
      <Link to={"/category/kids"}>
        <li className="flex items-center justify-center h-full mx-2 border-b-4 border-transparent cursor-pointer hover:border-pink-600 hover:border-b-4">
          KIDS
        </li>
      </Link>
      <Link to={"/category/unisex"}>
        <li className="flex items-center justify-center h-full mx-2 border-b-4 border-transparent cursor-pointer hover:border-pink-600 hover:border-b-4">
          UNISEX
        </li>
      </Link>
    </ul>
  );
};

export default NavMenu;
