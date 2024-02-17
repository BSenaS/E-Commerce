import React from "react";
import { Link } from "react-router-dom";

export const CategoryCard = ({ data }) => {
  return (
    <div className="max-w-[200px]">
      {/* Linkler nereye gidecek? */}
      <Link>
        <div
          style={{ backgroundImage: `url(${data.imageUrl})` }}
          className="max-w-[200px] h-[220px]"
        >
          <div className="flex flex-col items-center justify-center h-full font-bold text-white text-base tracking-[0.2px] gap-4">
            <span>{data.categoryName}</span>
            <span>{data.itemCount}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
