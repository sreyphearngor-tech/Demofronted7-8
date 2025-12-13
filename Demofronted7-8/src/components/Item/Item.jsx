
import React, { useState } from "react";
import { FaStar, FaSearchPlus } from "react-icons/fa";

const Item = (props) => {
  // support either props.images (array) or props.image (single)
  const images = Array.isArray(props.images) && props.images.length > 0
    ? props.images
    : props.image
    ? [props.image]
    : [];

  const [index, setIndex] = useState(0);

  // on click cycle to next image
  const handleImageClick = (e) => {
    e.stopPropagation();
    if (images.length <= 1) return;
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
      {/* Image container with click-to-cycle */}
      <div className="relative group" onClick={handleImageClick} aria-label="Product image, click to change">
        <img
          src={images[index]}
          alt={`${props.name} ${index + 1}`}
          className="w-full h-[340px] object-contain rounded-lg select-none"
          draggable={false}
        />

      

        {/* small indicator for which image (optional) */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-0.5 rounded">
            {index + 1}/{images.length}
          </div>
        )}
      </div>

      {/* Product Name */}
      <p className="mt-3 font-semibold text-lg text-gray-800">
        {props.name}
      </p>

      {/* Caption */}
      <p className="text-gray-500 text-sm">{props.caption}</p>

      {/* ⭐ Stars + Review */}
      <div className="mt-3 flex items-center justify-between px-1">
        <div className="flex text-yellow-400">
          <FaStar /><FaStar /><FaStar /><FaStar />
          <FaStar className="text-gray-300" />
        </div>

        <span className="text-sm text-gray-600">Product Review</span>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between mt-3">
        <span className="text-xl font-bold text-red-500">
          ${props.new_price}
        </span>

        <span className="text-gray-400 line-through text-md">
          ${props.old_price}
        </span>
      </div>
    </div>
  );
};

export default Item;

