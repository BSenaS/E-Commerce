import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useQuery from "../hooks/useQuery";

export const ShopDropDown = () => {
  const categoryData = useSelector((store) => store.global.categories);
  const { getQueryData } = useQuery();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = (data) => {
    setMenuIsOpen(data);
    console.log("Menu true false?", menuIsOpen);
  };

  const categoryClickHandler = (category, gender) => {
    getQueryData(category, gender);
    setMenuIsOpen(false);
  };

  //Genderdan bize -> k ya da e dönüyor.
  const menCategories = categoryData.filter(
    (category) => category.gender == "e"
  );
  const womenCategories = categoryData.filter(
    (category) => category.gender == "k"
  );

  return (
    <div className="mx-auto flex items-center justify-center border border-[#5c636a] py-1 px-2 rounded-md hover:text-white hover:bg-[#5c636a] transition-all ">
      <div
        className="group relative cursor-pointer"
        onClick={() => toggleMenu(!menuIsOpen)}
      >
        <div className="flex items-center justify-between">
          <a className="menu-hover font-bold">Shop</a>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <div
          className={`${
            menuIsOpen ? "visible" : "invisible"
          } absolute z-50 flex flex-row bg-gray-100 py-1 px-2 text-gray-800 shadow-xl justify-between gap-x-4 w-[320px] -right-36 sm:w-[370px] rounded-md`}
        >
          <div className="flex w-1/2 pt-2 text-center text-lg">
            <Link to={"/shop"} className="w-full ">
              <p className="w-full text-pBlue hover:text-cyan-700">
                All Products
              </p>
            </Link>
          </div>
          <div className="flex flex-col w-1/4 text-center">
            <h3 className="text-pBlue pt-2 text-lg">Kadın</h3>
            {womenCategories.map((item, index) => (
              <div
                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 sm:text-base"
                onClick={() => categoryClickHandler(item.id, item.gender)}
                key={index}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="flex flex-col w-1/4 text-center">
            <h3 className="text-pBlue pt-2 text-lg">Erkek</h3>
            {menCategories.map((item, index) => (
              <div
                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 sm:text-base"
                onClick={() => categoryClickHandler(item.id, item.gender)}
                key={index}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
