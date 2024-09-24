import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-gray-700 text-white mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Off Peak Times</h1>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              info@offpeak.food
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className="text-sm text-center py-4">
            @Copyright developed by
            <span className=" text-brightColor text-sm"> Raghav</span> |
            All rights reserved

          </p>
        </p>
        <p className="text-sm text-center py-4">
          Terms & ConditionsAplied
        </p>
      </div>
    </div>
  );
};

export default Footer;
