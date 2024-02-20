import React from "react";
import wPicture from "../../assets/about/aboutWomen.png";
const AboutHero = () => {
  return (
    <div className="flex flex-row w-full gap-4 justify-between md:w-full md:flex-wrap">
      {/* Sol Div */}
      <div className="flex flex-col font-bold ml-6 justify-center gap-12 md:w-[342px] md:items-center">
        <h5 className="text-base text-sBlack md:hidden">ABOUT COMPANY</h5>
        <h3 className="text-6xl text-sBlack md:text-[40px]">ABOUT US</h3>
        <p className="max-w-[376px] text-primary-gray md:w-[225px] md:text-center">
          We know how large objects will act, but things on a small scale
        </p>
        <div className="">
          <button className="flex py-3 px-8 bg-pBlue text-white text-sm">
            Get Quote Now
          </button>
        </div>
      </div>
      {/* Sag Div */}
      <div className="flex md:w-full md:justify-center">
        <img src={wPicture} className="flex md:w-[342px]" />
      </div>
    </div>
  );
};

export default AboutHero;
