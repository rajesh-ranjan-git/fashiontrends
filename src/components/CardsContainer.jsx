import React from "react";
import ItemCard from "./ItemCard";
import { data } from "../data/data.js";

const CardsContainer = () => {
  return (
    <main className="flex items-center justify-between px-10 pt-20">
      <div className="flex flex-wrap justify-around items-center w-full min-h-[91.2vh]">
        {data.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </main>
  );
};

export default CardsContainer;
