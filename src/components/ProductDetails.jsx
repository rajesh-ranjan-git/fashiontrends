import React from "react";
import { IoMdStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { CiDeliveryTruck } from "react-icons/ci";
import { data } from "../data/data.js";

const ProductDetails = () => {
  const { product_id } = useParams();

  return (
    <div className="flex p-20 pb-16 x-10">
      <div className="w-[50vw] h-[80vh] flex justify-center items-center border rounded-md m-4 overflow-hidden">
        <div className="h-[80vh] overflow-hidden hover:scale-105 transition">
          <img
            className="h-[100%] object-cover"
            src={data[product_id].cover_image}
            alt="prod_img"
          />
        </div>
      </div>
      <div className="w-[30vw] h-full m-4">
        <h1 className="text-2xl font-semibold">{data[product_id].title}</h1>
        <h1 className="text-xl text-neutral-500">{data[product_id].brand}</h1>
        <button className="flex items-center justify-start w-auto px-1 mt-4 font-semibold border rounded-sm hover:border-black">
          <span className="m-1">{data[product_id].rating}</span>
          <IoMdStar className="text-green-600" />
          <span className="m-1 font-normal text-neutral-500">
            {" "}
            | {data[product_id].rating_count} Ratings
          </span>
        </button>
        <hr className="my-4" />
        <div className="text-xl">
          <span className="mr-2 font-semibold">
            ₹{data[product_id].discounted_price}
          </span>
          <span className="m-2 text-neutral-500">
            MRP <s>₹{data[product_id].price}</s>
          </span>
          <span className="m-2 font-semibold text-orange-600">
            ({data[product_id].discount}% OFF)
          </span>
        </div>
        <p className="my-4 text-sm font-semibold text-green-600">
          inclusive of all taxes
        </p>
        <h3 className="my-4 text-xl font-semibold">SELECT SIZE</h3>
        <button className="p-4 text-sm font-semibold text-red-600 border border-red-600 rounded-full">
          {data[product_id].specifications.Sizes.map((size) => (
            <span>{size}&nbsp;&nbsp;</span>
          ))}
        </button>
        <div className="flex items-center my-6 text-xl font-semibold">
          <button className="flex items-center justify-center w-64 p-4 text-white bg-red-500 rounded-md hover:bg-red-400 border-1">
            <IoBagHandle />
            <span className="ml-4">ADD TO BAG</span>
          </button>
          <button className="flex items-center justify-center w-48 p-4 ml-4 border rounded-md hover:border-black">
            <FaRegHeart />
            <span className="ml-4">WISHLIST</span>
          </button>
        </div>
        <hr className="my-4" />
        <div className="p-2">
          <div className="">
            <span className="mr-1 font-semibold">
              ₹{data[product_id].discounted_price}
            </span>
            <span className="m-1 text-neutral-500">
              <s>₹{data[product_id].price}</s>
            </span>
            <span className="m-1 font-semibold text-orange-600">
              ({data[product_id].discount}% OFF)
            </span>
          </div>
          <p>
            Seller:{" "}
            <Link to="" className="font-semibold text-red-600">
              {data[product_id].seller_details.name}
            </Link>
          </p>
          <Link to="" className="text-sm font-semibold text-red-600">
            1 more seller available
          </Link>
        </div>
        <hr className="my-4" />
        <div className="flex items-center justify-start text-xl font-semibold">
          DELIVERY OPTIONS
          <CiDeliveryTruck className="ml-2" />
        </div>
        <div className="my-4">
          <div className="flex items-center justify-between border rounded-md w-72">
            <input
              type="text"
              placeholder="Enter pincode"
              className="p-2 outline-none"
            />
            <button className="p-2 font-semibold text-red-600">Check</button>
          </div>
          <p className="my-2 text-sm text-neutral-500">
            Please enter PIN code to check delivery time & Pay on Delivery
            Availability
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
