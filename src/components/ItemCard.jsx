import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const ItemCard = ({ item }) => {
  const [childVisible, setChildVisible] = useState(true);
  const navigate = useNavigate();

  const handleProductDetails = (product_id) => {
    navigate(`/product/${product_id}`);
  };

  return (
    <div
      className="m-2 rounded-sm shadow cu₹ r-pointer w-72 h-96 hover:shadow-xl cursor-pointer"
      onMouseEnter={() => setChildVisible(false)}
      onMouseLeave={() => setChildVisible(true)}
      onClick={() => handleProductDetails(item.product_id)}
    >
      <div className="w-full h-[70%] rounded-t-md overflow-hidden relative">
        <img className="" src={item.cover_image} alt="prod_img" />
        <div className="absolute flex items-center justify-center text-sm font-semibold rounded-sm bg-white/80 bottom-1 left-3">
          <span className="m-1">{Number(item.rating).toFixed(1)}</span>
          <IoMdStar className="text-green-600" />
          <span className="m-1"> | {item.rating_count}</span>
        </div>
      </div>
      <div className="px-4 flex flex-col justify-center w-full h-[30%] rounded-b-md">
        {childVisible && (
          <div className="h-16">
            <h1 className="overflow-hidden text-xl font-semibold whitespace-nowrap">
              {item.title}
            </h1>
            <p className="mt-1 overflow-hidden text-neutral-500 whitespace-nowrap">
              {item.brand}
            </p>
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
            <p className="mt-1 text-neutral-500">
              Size:{" "}
              {item.specifications.Sizes.map((size, index) => (
                <span>{size} </span>
              ))}
            </p>
          </div>
        )}
        <div className="flex">
          <div className="mr-2 font-bold">
            <span>₹ </span>
            <span>{item.discounted_price}</span>
          </div>
          <div className="mr-2 text-sm line-through text-neutral-500">
            <span>₹ </span>
            <span>{item.price}</span>
          </div>
          <div className="text-sm text-orange-600">
            <span>({item.discount}% OFF)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
