import React from "react";
import { production } from "../../assets/Production";
import Item from "../Item/Item";

export default function Popular() {
  return (
    <div className="w-[90%] mx-auto mt-[90px]">
      <h2 className="text-2xl font-bold  text-center">
        POPULAR IN WOMEN
      </h2>
      <hr className="w-24 mx-auto mt-2 mb-6 border-gray-400" />

      {/* Responsive Grid */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6
      ">
        {production.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            caption={item.caption}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}


