import React from "react";
import { useNavigate } from "react-router";

const Bag = () => {
  const navigate = useNavigate();

  const handleLoginSignup = () => {
    navigate("/loginSignup");
  };

  return (
    <main className="flex items-center justify-center px-10 pt-20">
      <div className="flex flex-col justify-center items-center w-full min-h-[91.2vh]">
        <h1 className="m-2 text-2xl font-semibold">PLEASE LOG IN</h1>
        <p className="m-2 text-neutral-400">Login to view items in your bag.</p>
        <img
          className="m-2"
          src="\images\empty-bag.webp"
          alt="bag-fallback-image"
        />
        <button
          className="w-40 p-4 m-2 font-semibold text-pink-600 border rounded-sm hover:text-white hover:bg-pink-600 hover:border-pink-600"
          onClick={handleLoginSignup}
        >
          LOGIN
        </button>
      </div>
    </main>
  );
};

export default Bag;
