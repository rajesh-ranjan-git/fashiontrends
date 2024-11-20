import React, { useState } from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import ProfileDropdown from "./ProfileDropdown";
import { useNavigate } from "react-router";

const NavRightMenu = () => {
  const [profileDropDown, setProfileDropdown] = useState(false);
  const navigate = useNavigate();

  const handleProfileDropdown = () => {
    setProfileDropdown(!profileDropDown);
  };

  const handleWishlist = () => {
    navigate("/wishlist");
  };

  const handleBag = () => {
    navigate("/bag");
  };

  return (
    <ul className="flex h-full text-center">
      <li
        className="relative flex flex-col items-center justify-center h-full mx-4 text-sm border-b-4 border-transparent cursor-pointer hover:border-pink-600 hover:border-b-4"
        onMouseEnter={() => handleProfileDropdown()}
        onMouseLeave={() => handleProfileDropdown()}
      >
        <FaRegUser />
        <div className="font-semibold">Profile</div>
        {profileDropDown && <ProfileDropdown />}
      </li>
      <li
        className="flex flex-col items-center justify-center h-full mx-4 text-sm cursor-pointer"
        onClick={handleWishlist}
      >
        <FaRegHeart />
        <div className="font-semibold">Wishlist</div>
      </li>
      <li
        className="flex flex-col items-center justify-center h-full mx-4 text-sm cursor-pointer"
        onClick={handleBag}
      >
        <IoBagHandle />
        <div className="font-semibold">Bag</div>
      </li>
    </ul>
  );
};

export default NavRightMenu;
