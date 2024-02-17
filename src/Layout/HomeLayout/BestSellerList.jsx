import React from "react";
import { useData } from "../../context/DataContext";
import { ProductCard } from "../../Components/ProductCard";

const BestSellerList = () => {
  const { bestSellerData } = useData();
  return (
    <div className="max-w-[1050px] mx-auto">
      <div className="flex flex-col items-center gap-4 my-16">
        <h5 className="text-xl text-primary-gray">Featured Products</h5>
        <h3 className="text-2xl font-bold">BEST SELLER PRODUCTS</h3>
        <p className="text-sm text-primary-gray">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-wrap justify-between mx-2">
        {bestSellerData.products.map((item, index) => (
          <div key={index} className="flex flex-row max-w-60 md:mx-auto">
            <ProductCard data={item} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellerList;
