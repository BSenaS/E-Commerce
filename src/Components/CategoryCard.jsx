import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/actions/productAction";

export const CategoryCard = ({ data, gender, itemCategory, id }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState();
  //Url için gender propunu lowercase'e dönüştürme.
  const genderUrl = gender.toLowerCase();
  //Apiden Gelen -> "code": "k:elbise" verisini splitleyip "elbise" kısmını kullanma.
  const urlSplit = itemCategory.split(":");
  const categoryUrl = urlSplit[1];

  const clickHandler = (id) => {
    setCategory(id);
    dispatch(fetchProducts(id));
  };

  useEffect(() => {
    console.log("card id ->", id);
  }, [category]);

  return (
    <div className="md:mx-auto md:w-full ">
      {/* Kategori linki nasıl olmalı? , nereye gidecekler? */}
      <Link
        to={`/shop/${genderUrl}/${categoryUrl}`}
        className="flex flex-wrap"
        onClick={() => clickHandler(data.id)}
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
