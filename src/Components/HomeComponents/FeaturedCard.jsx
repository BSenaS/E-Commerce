import React from "react";
import { FaChartArea, FaArrowRight, FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";

export const FeaturedCard = ({ data, index }) => {
  return (
    <div className="flex flex-col max-w-[340px] h-[606px] tracking-[0.2px] gap-4">
      <img src={data.imgUrl} alt={index} />
      <div className="flex flex-col ml-2 mr-2 gap-4">
        <div className="flex flex-row gap-4 text-sm ">
          <span className="text-[#8EC2F2]">{data.google}</span>
          <span className="text-primary-gray">{data.trending}</span>
          <span className="text-primary-gray">{data.new}</span>
        </div>
        <h3 className="text-xl font-bold text-sBlack">{data.title}</h3>
        <p className="text-sm text-primary-gray max-w-[280px]">
          {data.description}
        </p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <FaRegClock size={16} className="text-pBlue" />
            <span className="ml-2 text-primary-gray text-sm">{data.date}</span>
          </div>
          <div className="flex flex-row items-center">
            <FaChartArea size={16} className="text-sGreen" />
            <span className="ml-2 text-primary-gray text-sm">
              {data.commentsCount}
            </span>
          </div>
        </div>
        <div>
          <Link>
            <div className="flex flex-row items-center">
              <span className="font-bold text-primary-gray text-sm">
                Learn More
              </span>
              <FaArrowRight className="ml-2 text-pBlue" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
