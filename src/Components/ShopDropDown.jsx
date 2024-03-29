import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useQuery from "../hooks/useQuery";

export const ShopDropDown = () => {
  const categoryData = useSelector((store) => store.global.categories);
  const { getQueryData } = useQuery();

  //Genderdan bize -> k ya da e dönüyor.

  const clickHandler = (category, gender) => {
    getQueryData(category, gender);
  };
  return (
    <div className="mx-auto flex  items-center justify-center ">
      <div className="group relative cursor-pointer ">
        <div className="flex items-center justify-between  bg-white ">
          <a className="menu-hover">Shop</a>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="  w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <div className="invisible absolute z-50 flex w-[150px] flex-col bg-gray-100 py-1 px-2 text-gray-800 shadow-xl group-hover:visible">
          {categoryData.map((item, index) => (
            <Link
              className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
              key={index}
              // to={`/shop/${
              //   item.gender === "k" ? "kadın" : "erkek"
              // }/${item.title.toLowerCase()}`}
              onClick={() => clickHandler(item.id, item.gender)}
            >
              {item.gender === "k" ? "Kadın" : "Erkek"} {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
