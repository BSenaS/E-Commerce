import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/actions/productAction";
import useQuery from "../hooks/useQuery";

export const CategoryCard = ({ data, genderTitle }) => {
  const { getQueryData } = useQuery();
  //getQueryData fonksiyonunu calıstıracak handler.
  const clickHandler = (category, gender) => {
    // console.log("id ve gender:", id, gender);
    getQueryData(category, gender);
  };

  return (
    <div
      className="md:mx-auto md:w-full "
      onClick={() => clickHandler(data.id, data.gender)}
    >
      <Link className="flex flex-wrap">
        <div
          style={{
            backgroundImage: `url(${data.img})`,
            backgroundSize: "cover",
          }}
          className="w-[250px] h-[220px] md:w-[370px] md:mx-auto "
        >
          <div className="flex flex-col items-center justify-center h-full font-bold text-white text-base tracking-[0.2px] gap-4 md:flex-wrap">
            <span>{data.title}</span>
            <span>Rating: {data.rating}</span>
            <p>{genderTitle}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
