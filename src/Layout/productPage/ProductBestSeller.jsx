import React from "react";
import { useData } from "../../context/DataContext";
import { ProductCard } from "../../Components/ProductCard";

const ProductBestSeller = () => {
  const { bestSellerData } = useData();
  return (
    <div className="max-w-[1050px] mx-auto">
      <div className="flex flex-col items-center gap-4 my-16">
        <h3 className="text-2xl font-bold">BEST SELLER PRODUCTS</h3>
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

export default ProductBestSeller;
