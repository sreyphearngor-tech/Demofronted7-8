
import React from "react";
import { NavLink } from "react-router-dom";
import new_collection from "../../assets/new_collection";
import { FaStar, FaSearchPlus } from "react-icons/fa";
import './NewCollection.css'
const NewCollection = () => {
  return (
    <div className="w-full min-h-screen py-8 px-4">
      <h1 className="text-3xl md:text-4xl text-center font-semibold mt-4">
        NEW COLLECTION
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 " >
        {new_collection.map((item) => (
          <NavLink
            key={item.id}
            to={`/detailproduct/${item.id}`}
            className="relative bg-white rounded-2xl border shadow-lg overflow-hidden hover:shadow-xl transition duration-300 card"
          >
            {/* Image with Zoom on Hover */}
            <div className="overflow-hidden relative group">
              <img
                src={item.image}
                alt={item.brand}
                className="w-full h-66 md:h-72 lg:h-full object-cover transform transition duration-500 "
              />

              <p className="absolute bg-red-700 text-lg top-[20px] left-[75%] text-white font-medium w-[70px] text-center rounded-lg shadow-md">{item.pro}</p>
        
            </div>

            {/* Product Info */}
            <div className="p-4 text-center para ">
              <h4 className="text-lg font-semibold text-gray-800 flex px-2.5">{item.brand}</h4>
               {/* ⭐ Stars + Review */}
                  <div className="mt-3 flex items-center justify-between px-1">
                    <div className="flex text-yellow-400">
                      <FaStar /><FaStar /><FaStar /><FaStar />
                      <FaStar className="text-gray-300" />
                    </div>
            
                    <span className="text-sm text-gray-600">Product Review</span>
                  </div>
              <p className="text-xl font-bold mt-10 text-red-500 flex  sm:pt-1 ml-2">${item.new_price}</p>
          
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
