import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const ItemCard = () => {
  const [childVisible, setChildVisible] = useState(true);
  const navigate = useNavigate();

  const handleProductDetails = () => {
    navigate("/productDetails");
  };

  return (
    <div
      className="m-2 rounded-sm shadow cursor-pointer w-72 h-96 hover:shadow-xl"
      onMouseEnter={() => setChildVisible(false)}
      onMouseLeave={() => setChildVisible(true)}
      onClick={handleProductDetails}
    >
      <div className="w-full h-[70%] rounded-t-md overflow-hidden relative">
        <img className="" src="images/temp_img.jpg" alt="prod_img" />
        <div className="absolute flex items-center justify-center text-sm font-semibold rounded-sm bg-white/80 bottom-1 left-3">
          <span className="m-1">4.5</span>
          <IoMdStar className="text-green-600" />
          <span className="m-1"> | 140</span>
        </div>
      </div>
      <div className="px-4 flex flex-col justify-center w-full h-[30%] rounded-b-md">
        {childVisible && (
          <div className="h-16">
            <h1 className="text-xl font-semibold">Trendyol</h1>
            <p className="mt-1 text-neutral-500">Men 5-Pcs Pattern Socks</p>
          </div>
        )}
        {!childVisible && (
          <div className="h-16">
            <Link
              to="/wishlist"
              className="flex items-center justify-center w-full p-1 border rounded-sm hover:border-black"
            >
              <FaRegHeart />
              <span className="ml-2 text-sm font-semibold">WISHLIST</span>
            </Link>
            <p className="mt-1 text-neutral-500">Size: XXL</p>
          </div>
        )}
        <div className="flex">
          <div className="mr-2 font-bold">
            <span>Rs.</span>
            <span>419</span>
          </div>
          <div className="mr-2 text-sm line-through text-neutral-500">
            <span>Rs.</span>
            <span>419</span>
          </div>
          <div className="text-sm text-orange-600">
            <span>(57% OFF)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
