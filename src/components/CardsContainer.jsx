import React from "react";
import ItemCard from "./ItemCard";
import { data } from "../data/data.js";
import { useParams } from "react-router";

const CardsContainer = () => {
  const { type } = useParams();

  return (
    <main className="flex items-center justify-between px-10 pt-20">
      <div className="flex flex-wrap justify-around items-center w-full min-h-[91.2vh]">
        {!type &&
          data.map((item) => <ItemCard key={item.product_id} item={item} />)}
        {type &&
          data
            .filter((item) => item.category.toLowerCase() === type)
            .map((item) => <ItemCard key={item.product_id} item={item} />)}
      </div>
    </main>
  );
};

export default CardsContainer;
