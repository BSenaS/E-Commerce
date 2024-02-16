import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ data, index }) => {
  return (
    <Link className="flex flex-col w-60 h-[615px]">
      <img src={data.imageUrl} alt={index} className="object-fill" />
      <div className="flex flex-col gap-4 items-center">
        <h5 className="font-bold mt-4">{data.title}</h5>
        <span className="text-primary-gray font-bold">{data.department}</span>
        <div className="font-bold">
          <span className="text-mute-color ">{data.price}</span>
          <span className="ml-2 text-sGreen ">{data.newPrice}</span>
        </div>
        <div className="flex items-center gap-2 mb-5">
          <div className="w-4 h-4 bg-blue-500 rounded-full" />
          <div className="w-4 h-4 bg-teal-700 rounded-full" />
          <div className="w-4 h-4 bg-orange-400 rounded-full" />
          <div className="w-4 h-4 bg-black rounded-full" />{" "}
        </div>
      </div>
    </Link>
  );
};
