import React from "react";
import { CategoryCardList } from "../CategoryCardList";
import { Link } from "react-router-dom";
import Clients from "../../Components/Clients";
import { ProductCard } from "../../Components/ProductCard";
import { HiViewGrid } from "react-icons/hi";
import { CiBoxList } from "react-icons/ci";
import { useData } from "../../context/DataContext";

const ProductListPage = () => {
  const { productListData } = useData();
  return (
    <div className="w-full">
      <div>
        {/* Sayfanin en üstü */}
        <div className="w-full bg-pbGray">
          <div className="max-w-[1050px] mx-auto flex justify-between py-4">
            <div className="flex justify-center">
              <h3 className="font-bold text-sBlack text-2xl">Shop</h3>
            </div>
            <div className="flex justify-center gap-2 items-center">
              <Link to={"/"} className="font-bold">
                Home
              </Link>
              <span className="text-mute-color ">{">"}</span>
              <Link className="font-bold text-mute-color"> Shop</Link>
            </div>
          </div>
        </div>
        {/* CateGoryCardList kısmı */}
        <div className="w-full bg-pbGray pb-12">
          <CategoryCardList />
        </div>
        <div className="flex justify-between py-3 max-w-[1050px] mx-auto mb-8">
          <span className="font-bold text-primary-gray text-sm">
            Showing all 12 results
          </span>
          <div className="flex justify-center items-center gap-4">
            <span className="text-primary-gray font-bold text-sm">Views:</span>
            <HiViewGrid size={16} />
            <CiBoxList className="text-primary-gray" />
          </div>
          <div className="flex flex-row max-w-[1440px] gap-4">
            <select className="flex py-3 max-w-[140px] bg-[#F9F9F9] border-[#DDDDDD] border rounded">
              <option value="someOption">Popularity</option>
              <option value="otherOption">Other option</option>
              <option value="otherOption">Other option2 xdxdxd</option>
            </select>
            <button className="bg-pBlue px-6 rounded text-white font-bold">
              Filter
            </button>
          </div>
        </div>
        {/* Burda product carda bir map atılacak */}
        <div className="max-w-[1050px] mx-auto mb-8">
          <div className="flex flex-wrap justify-between mx-2">
            {productListData.products.map((item, index) => (
              <div key={index} className="flex flex-row max-w-60 md:mx-auto">
                <ProductCard data={item} key={index} />
              </div>
            ))}
          </div>
        </div>
        <Clients />
      </div>
    </div>
  );
};

export default ProductListPage;
