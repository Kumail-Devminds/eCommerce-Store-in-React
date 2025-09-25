import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Category from "./Category";

const Carousel = () => {
  const { data, fetchAllProducts } = getData();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const SamplePrevArrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{
        ...style,
        left: "50px",
        zIndex: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "#f53347",
      }}
      onClick={onClick}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#555")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f53347")}
    >
      <AiOutlineArrowLeft color="white" size={20} />
    </div>
  );

  const SampleNextArrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{
        ...style,
        right: "50px",
        zIndex: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "#f53347",
      }}
      onClick={onClick}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#555")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f53347")}
    >
      <AiOutlineArrowRight color="white" size={20} />
    </div>
  );

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[24243e] -z-10"
          >
            <div className="flex gap-10 justify-center h-[600px] items-center px-4">
              <div className="space-y-6">
                <h3 className="text-red-500 font-semibold font-sans text-sm">
                  Powering Your World with the Best in Electronics
                </h3>
                <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-[500px] text-white">
                  {item.title}
                </h1>
                <p className="md:w-[500px] line-clamp-3 text-gray-400 pr-7">
                  {item.description}
                </p>
                <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white py-2 px-3 rounded-md cursor-pointer mt-2">
                  Shop Now
                </button>
              </div>
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-full w-[550px] h-[550px] object-contain hover:scale-105 transition-all shadow-2xl shadow-red-400"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Category />
    </div>
  );
};

export default Carousel;