import React, { useState } from "react";

const ProfileDropdown = () => {
  const [profileDropDown, setProfileDropdown] = useState(true);

  const handleProfileDropdown = () => {
    setProfileDropdown(false);
  };

  return (
    <div
      className="absolute px-4 py-5 w-72 bg-white top-16 text-start rounded-md shadow-lg cursor-default"
      onMouseLeave={() => handleProfileDropdown()}
    >
      <div className="flex flex-col border-b-2">
        <h1 className="font-bold">Welcome</h1>
        <p>To access account and manage orders</p>
        <button className="my-5 p-2 w-32 text-red-600 border-2 rounded-md">
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
