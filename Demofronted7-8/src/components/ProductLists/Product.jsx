

import "./Product.css";
import { ProductAll } from "../../assets/ProductAll";
import React, { useContext } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { productContext } from "../../context/ProductContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700/50 hover:bg-gray-700 text-white p-2 rounded-full z-50"
  >
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700/50 hover:bg-gray-700 text-white p-2 rounded-full z-50"
  >
    <FaChevronRight />
  </button>
);

const Product = () => {
  const { addCart } = useContext(productContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 578,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full py-10 bg-gray-50">
      <div className="px-4 relative">
        <Slider {...settings}>
          {ProductAll.map((item) => (
            <div key={item.id} className="px-2">
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[450px] object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">${item.price}</p>
                <button
                  onClick={() => addCart({ ...item, new_price: item.price })}
                  className="bg-black hover:bg-pink-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
                >
                  🛒 Add to Cart
                </button>


              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Product;
