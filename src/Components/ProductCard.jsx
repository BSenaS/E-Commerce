import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import { useSelector } from "react-redux";

export const ProductCard = ({ data, index }) => {
  // const { getQueryFromUrl } = useQuery();
  // const fetchState = useSelector((store) => store.product.fetchState);
  // useEffect(() => {
  //   getQueryFromUrl();
  // }, [window.location.searc]);

  return (
    <Link className="flex flex-col w-60 h-[615px] ">
      <img src={data.images?.[0]?.url} alt={index} className="object-fill" />
      <div className="flex flex-col gap-4 items-center">
        <h5 className="font-bold mt-4">{data.name}</h5>
        <span className="text-primary-gray font-bold">{data.department}</span>
        <div className="font-bold">
          <span className=" ">Price: {data.price}</span>
          <span className="ml-2 text-sGreen ">Stock :{data.stock}</span>
        </div>
        <div className="flex items-center gap-2 mb-5">
          <span className=" ">Rating: {data.rating}</span>
        </div>
      </div>
    </Link>
  );
};
