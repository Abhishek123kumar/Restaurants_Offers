import React, { useState } from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import DishesCard from "../layouts/DishesCard";

const images = [
  { img: img1, title: "Get 20% off at [Restaurant Name] between 2-5 PM, Monday to Thursday.", price: "$10.99" },
  { img: img2, title: "Buy a main course, get a free appetizer at [Bar Name] before 6 PM", price: "$12.99" },
  { img: img3, title: "Flat 25% off drinks at [Bar Name] from 3-5 PM", price: "$10.99" },
  { img: img4, title: "Tasty Dish", price: "$11.99" },
  { img: img5, title: "Tasty Dish", price: "$10.99" },
  { img: img6, title: "Tasty Dish", price: "$12.99" },
];

const Dishes = ({ district }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="min-h-full flex flex-col justify-center items-center lg:px-32 px-1">
      <h1 className="text-3xl lg:text-4xl font-semibold text-center pt-16 pb-8 lg:pt-24 lg:pb-10">
        District 1
      </h1>

      {/* Carousel */}
      <div className=" w-full max-w-lg lg:max-w-2xl flex justify-center items-center">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className=" left-2 lg:left-0  top-1/2 bg-gray-800 text-white p-2 lg:p-4 rounded-full hover:bg-gray-600"
        >
          &#10094;
        </button>

        {/* Carousel Content */}
        <div className="w-full flex justify-center">
          <DishesCard
            img={images[currentIndex].img}
            title={images[currentIndex].title}
            price={images[currentIndex].price}
          />
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className=" right-2 lg:right-0  top-1/2 bg-gray-800 text-white p-2 lg:p-4 rounded-full hover:bg-gray-600"
        >
          &#10095;
        </button>
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full cursor-pointer ${currentIndex === index ? "bg-gray-500" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Dishes;
