import React from "react";
import { Link } from "react-router-dom";

export const CategoryCard = ({ data, gender, itemCategory }) => {
  //Url için gender propunu lowercase'e dönüştürme.
  const genderUrl = gender.toLowerCase();
  //Apiden Gelen -> "code": "k:elbise" verisini splitleyip "elbise" kısmını kullanma.
  const urlSplit = itemCategory.split(":");
  const categoryUrl = urlSplit[1];
  return (
    <div className="md:mx-auto md:w-full ">
      {/* Kategori linki nasıl olmalı? , nereye gidecekler? */}
      <Link
        to={`/shopping/:${genderUrl}/:${categoryUrl}`}
        className="flex flex-wrap"
      >
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
            <p>{gender}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
