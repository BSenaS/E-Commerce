import React from "react";
import ProductPageCarousel from "../../Components/productPageComponents/ProductPageCarousel";
import { FaRegStar, FaRegHeart, FaEye, FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export const ProductDetails = () => {
  return (
    <div className="w-full bg-pbGray flex-wrap">
      <div className="flex flex-row gap-4 max-w-[1440px] mx-auto py-6 md:justify-center ">
        <span className="font-bold ml-6 md:ml-0">Home</span>
        <span className="text-xl text-primary-gray">{">"}</span>
        <span className="font-bold text-primary-gray">Shop</span>
      </div>
      <div className="flex flex-row max-w-[1050px] mx-auto flex-wrap justify-between">
        {/* Burası carousel ve product detail kısmı*/}
        <div>
          <ProductPageCarousel />
        </div>
        {/* Burası productın detail kısmı */}
        <div className="flex flex-col flex-wrap w-[510px] h-[470px] justify-around">
          <h5 className="text-xl font-bold">Floating Phone</h5>
          <div className="flex flex-row gap-1">
            <FaStar className="text-[#F3CD03]" size={23} />
            <FaStar className="text-[#F3CD03]" size={23} />
            <FaStar className="text-[#F3CD03]" size={23} />
            <FaStar className="text-[#F3CD03]" size={23} />
            <FaRegStar className="text-[#F3CD03]" size={23} />
            <div className="flex items-center">
              <span className="text-primary-gray text-base font-bold">
                10 Reviews
              </span>
            </div>
          </div>
          <div>
            <span className="text-2xl font-bold">$1,139.33</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <span className="text-sm font-bold text-primary-gray">
              Availability :
            </span>
            <span className="font-bold text-pBlue">In Stock</span>
          </div>
          {/* Desct */}
          <div className="max-w-[450px]">
            <p className="text-[#858585] text-sm ">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full" />
            <div className="w-6 h-6 bg-teal-700 rounded-full" />
            <div className="w-6 h-6 bg-orange-400 rounded-full" />
            <div className="w-6 h-6 bg-black rounded-full" />{" "}
          </div>
          <div className="flex flex-row items-center gap-4">
            <button className="py-3 px-4 bg-pBlue rounded-md text-white font-bold">
              Select Options
            </button>
            <div className="flex flex-row gap-4">
              <FaRegHeart size={26} className="cursor-pointer" />
              <FiShoppingCart size={26} className="cursor-pointer" />
              <FaEye size={26} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
