import React, { useEffect } from "react";
import { CategoryCard } from "../Components/CategoryCard";

import { useDispatch, useSelector } from "react-redux";

export const CategoryCardList = () => {
  const categoryData = useSelector((store) => store.global.categories);
  //Apiden gelen veriyi sortlama Rating - (Büyükten > Küçüğe)
  const sortedData = [...categoryData].sort((a, b) => b.rating - a.rating);
  console.log(sortedData);
  //Ratinge göre dizilmiş yeni verinin ilk 5 verisini alma.
  const categoryTopFive = sortedData.slice(0, 5);

  return (
    <div className="max-w-[1440px] flex flex-row mx-auto md:flex-wrap md:flex-col justify-between  md:gap-4 ">
      <div className="w-full flex flex-row mx-6 md:flex-wrap md:flex-col justify-between  gap-4 flex-wrap md:items-center md:mx-0">
        {categoryTopFive.map((item, index) => (
          <div
            key={index}
            className="flex flex-row flex-wrap  md:flex-col  sm:mx-0 "
          >
            <CategoryCard
              data={item}
              genderTitle={item.gender === "e" ? "Erkek" : "Kadın"}
              itemCategory={item.code}
              id={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
