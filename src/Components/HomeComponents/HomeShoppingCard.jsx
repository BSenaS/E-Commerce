import React from "react";
import img from "../../assets/HomeAssets/hScIMG1.jpg";
export const HomeShoppingCard = () => {
  return (
    <div className="flex max-w-[1440px] mx-auto justify-center gap-12 mt-1 md:flex-wrap md:pt-20 md:font-bold">
      <div className="md:order-2">
        <img src={img} alt="shoppingCardImg " />
      </div>

      <div className="flex flex-col gap-6 justify-end max-w-[550px] max-h-[430px] mt-4 md:order-1 md:text-center md:items-center ">
        <h5 className="text-base text-mute-color">SUMMER 2020</h5>
        <h3 className="font-bold text-[#252B42] text-5xl tracking-[0.2px] md:max-w-80">
          Part of the Neural Universe
        </h3>
        <p className="text-primary-gray text-xl tracking-[0.2px] max-w-[376px] md:max-w-60">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex items-center gap-4 md:flex-col">
          <button className="py-4 px-8 bg-bGreen text-white rounded-md font-bold border md:bg-pBlue">
            BUY NOW
          </button>
          <button className="py-4 px-8 bg-white text-bGreen rounded-md font-bold border-bGreen border md:text-pBlue md:border-pBlue">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};
