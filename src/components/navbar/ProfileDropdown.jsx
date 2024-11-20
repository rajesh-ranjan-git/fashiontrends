import React, { useState } from "react";
import { useNavigate } from "react-router";

const ProfileDropdown = () => {
  const [profileDropDown, setProfileDropdown] = useState(true);
  const navigate = useNavigate();

  const handleProfileDropdown = () => {
    setProfileDropdown(false);
  };

  const handleLoginSignup = () => {
    navigate("/loginSignup");
  };

  return (
    <div
      className="absolute px-4 py-5 bg-white rounded-md shadow-lg cursor-default w-72 top-16 text-start"
      onMouseLeave={() => handleProfileDropdown()}
    >
      <div className="flex flex-col border-b-2">
        <h1 className="font-bold">Welcome</h1>
        <p>To access account and manage orders</p>
        <button
          className="w-32 p-2 my-5 text-pink-600 border rounded-sm hover:border-pink-600"
          onClick={handleLoginSignup}
        >
          <b>Login</b> / <b>Signup</b>
        </button>
      </div>
      <div>
        <ul>
          <li className="m-2 cursor-pointer hover:font-semibold">Orders</li>
          <li className="m-2 cursor-pointer hover:font-semibold">Wishlists</li>
          <li className="m-2 cursor-pointer hover:font-semibold">Gift Cards</li>
          <li className="m-2 cursor-pointer hover:font-semibold">Contact Us</li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default ProfileDropdown;
