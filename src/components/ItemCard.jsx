import React from "react";

const ItemCard = () => {
  return (
    <div className="m-2 w-72 h-96 rounded-md shadow cursor-pointer hover:shadow-xl">
      <div className="w-full h-[70%] rounded-t-md overflow-hidden">
        <img className="" src="images/temp_img.jpg" alt="prod_img" />
      </div>
      <div className="px-4 flex flex-col justify-center w-full h-[30%] rounded-b-md">
        <h1 className="font-semibold text-xl">Trendyol</h1>
        <p className="text-neutral-500">Men 5-Pcs Pattern Socks</p>
        <div className="flex">
          <div className="font-bold mr-2">
            <span>Rs.</span>
            <span>419</span>
          </div>
          <div className="mr-2 text-sm text-neutral-500 line-through">
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
