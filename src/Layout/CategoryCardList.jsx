import React from "react";
import { CategoryCard } from "../Components/CategoryCard";
import { useData } from "../context/DataContext";
export const CategoryCardList = () => {
  const { categoryData } = useData();
  return (
    <div className="max-w-[1050px] flex flex-row gap-3 mx-auto md:flex-wrap md:flex-col ">
      {categoryData.map((item, index) => (
        <div key={index} className="w-full ">
          <CategoryCard data={item} />
        </div>
      ))}
    </div>
  );
};
