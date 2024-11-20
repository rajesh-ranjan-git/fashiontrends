import React from "react";
import { IoSearch } from "react-icons/io5";

const NavSearch = () => {
  return (
    <div className="flex items-center justify-between px-3 mx-10 rounded-md bg-neutral-100">
      <IoSearch />
      <input
        className="px-5 py-2 bg-transparent outline-none w-96"
        type="text"
        placeholder="Search items..."
      />
    </div>
  );
};

export default NavSearch;
