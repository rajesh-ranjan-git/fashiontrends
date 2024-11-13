import React, { useState } from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoBagHandle, IoSearch } from "react-icons/io5";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const [profileDropDown, setProfileDropdown] = useState(false);

  const handleProfileDropdown = () => {
    setProfileDropdown(!profileDropDown);
  };

  return (
    <header className="px-10 w-full h-16 flex justify-between items-center bg-white shadow-md fixed">
      <div className=" h-full flex justify-around items-center">
        <div className="flex w-36 h-full">
          <img
            className="w-20 h-auto cursor-pointer"
            src="images/myntra_logo.webp"
            alt="shoppershub_logo"
          />
        </div>
        <ul className="h-full flex font-bold">
          <li className="mx-2 h-full flex justify-center items-center cursor-pointer border-b-4 border-transparent hover:border-red-600 hover:border-b-4">
            MEN
          </li>
          <li className="mx-2 h-full flex justify-center items-center cursor-pointer border-b-4 border-transparent hover:border-red-600 hover:border-b-4">
            WOMEN
          </li>
          <li className="mx-2 h-full flex justify-center items-center cursor-pointer border-b-4 border-transparent hover:border-red-600 hover:border-b-4">
            KIDS
          </li>
          <li className="mx-2 h-full flex justify-center items-center cursor-pointer border-b-4 border-transparent hover:border-red-600 hover:border-b-4">
            HOME & LIVING
          </li>
          <li className="mx-2 h-full flex justify-center items-center cursor-pointer border-b-4 border-transparent hover:border-red-600 hover:border-b-4">
            BEAUTY
          </li>
          <li className="mx-2 h-full flex justify-center items-center cursor-pointer border-b-4 border-transparent hover:border-red-600 hover:border-b-4">
            STUDIO
          </li>
        </ul>
      </div>
      <div className="h-full flex justify-around items-center">
        <div className="mx-10 px-3 flex justify-between items-center bg-neutral-100 rounded-md">
          <IoSearch />
          <input
            className="py-2 px-5 w-96 bg-transparent outline-none"
            type="text"
            placeholder="Search items..."
          />
        </div>
        <ul className="flex h-full text-center">
          <li
            className="relative mx-4 h-full flex flex-col justify-center items-center border-b-4 border-transparent hover:border-red-600 hover:border-b-4 text-sm cursor-pointer"
            onMouseEnter={() => handleProfileDropdown()}
            onMouseLeave={() => handleProfileDropdown()}
          >
            <FaRegUser />
            <div className="font-semibold">Profile</div>
            {profileDropDown && <ProfileDropdown />}
          </li>
          <li className="mx-4 h-full flex flex-col justify-center items-center text-sm cursor-pointer">
            <FaRegHeart />
            <div className="font-semibold">Wishlist</div>
          </li>
          <li className="mx-4 h-full flex flex-col justify-center items-center text-sm cursor-pointer">
            <IoBagHandle />
            <div className="font-semibold">Bag</div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
