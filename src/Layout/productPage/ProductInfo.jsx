import React from "react";
import productInfo from "../../assets/ProductPage/productInfo.jpg";
export const ProductInfo = () => {
  return (
    <div className="w-full my-8">
      <div className="flex flex-row max-w-[1050px] mx-auto justify-center gap-4 md:gap-1 text-primary-gray text-sm font-semibold mb-6">
        <p className="md:underline">Description</p>
        <p>Additional Information</p>
        <p>
          Reviews
          <span className="text-[#23856D]">{"(0)"}</span>
        </p>
      </div>
      <hr className="text-primary-gray md:hidden mb-12 md:mb-0" />
      <div className="flex flex-row max-w-[1050px] tracking-[0.2px] mx-auto justify-between flex-wrap md:w-[350px] ">
        {/* Resim */}
        <div className="md:mx-auto">
          <img
            src={productInfo}
            alt=""
            className="h-[400px] max-w-[340px] md:h-[292px] md:w-[332px] md:rounded-md"
          />
        </div>
        {/* Product Açıklaması */}
        <div className="flex flex-col max-w-[332px] gap-4 md:w-[350px]  md:mx-auto">
          <h3 className="font-bold text-2xl md:mt-12">
            the quick fox jumps over
          </h3>
          <p className="text-sm text-primary-gray">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-sm text-primary-gray">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-sm text-primary-gray">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:mx-auto md:w-[332px] md:mt-12">
          <div>
            <div className="flex flex-col gap-4 text-sm ">
              <h3 className="font-bold text-2xl">the quick fox jumps over</h3>
              <div className="flex items-center">
                <span className="text-2xl">{">"}</span>
                <span className="font-bold text-primary-gray">
                  the quick fox jumps over the lazy dog
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl">{">"}</span>{" "}
                <span className="font-bold text-primary-gray">
                  the quick fox jumps over the lazy dog
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl">{">"}</span>{" "}
                <span className="font-bold text-primary-gray">
                  the quick fox jumps over the lazy dog
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl">{">"}</span>{" "}
                <span className="font-bold text-primary-gray">
                  the quick fox jumps over the lazy dog
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 text-sm">
              <h3 className="font-bold text-2xl">the quick fox jumps over</h3>
              <div className="flex items-center">
                <span className="text-2xl">{">"}</span>{" "}
                <span className="font-bold text-primary-gray">
                  the quick fox jumps over the lazy dog
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl">{">"}</span>{" "}
                <span className="font-bold text-primary-gray">
                  the quick fox jumps over the lazy dog
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl">{">"}</span>{" "}
                <span className="font-bold text-primary-gray">
                  the quick fox jumps over the lazy dog
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
