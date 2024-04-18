import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import { useDispatch, useSelector } from "react-redux";
import { currentProductAction } from "../store/actions/productAction";

export const ProductCard = ({ data, index }) => {
  return (
    <Link
      className="flex flex-col basis-60"
      to={`/${data.category_id}/${data.id}/${data.name}`}
    >
      <img src={data.images?.[0]?.url} alt={index} className="object-contain" />
      <div className="flex flex-col gap-4 items-center">
        <h5 className="font-bold mt-5">{data.name}</h5>
        <span className="flex w-11/12 text-center text-primary-gray font-medium">
          {data.description}
        </span>
        <span className="text-primary-gray font-bold">{data.department}</span>
        <div className="font-bold ">
          <span className=" ">
            Price: <span className="text-sGreen">{`$${data.price}`}</span>
            <span className="ml-2">
              Stock: <span className="text-sGreen">{data.stock}</span>
            </span>
          </span>
        </div>
        <div></div>
        <div className="flex items-center gap-2">
          <span className="font-bold ">Rating: {data.rating}</span>
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
