import React from "react";
import { useData } from "../context/DataContext";
import { Link } from "react-router-dom";

export const CategoryCard = () => {
  const { categoryData } = useData();
  return (
    <div className="w-full">
      <div className="flex flex-col max-w-[1050px] mx-auto gap-3 my-10">
        <h3 className="m-auto font-bold text-2xl tracking-[0.1px]">
          EDITOR’S PICK
        </h3>
        <p className="m-auto text-sm text-primary-gray tracking-[0.2px]">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="w-full bg-pbGray">
        <div className="max-w-[1050px] flex flex-row m-auto flex-wrap">
          <div
            style={{
              backgroundImage: `url(${categoryData.men.imageUrl})`,
            }}
            className="w-[500px] h-[500px] bg-no-repeat bg-cover cursor-pointer m-auto"
          >
            <Link to="/" className="inline-block w-[500px] h-[500px] ">
              <div className="bg-white w-[170px] text-center py-3 px-16 font-bold flex  ml-4 mt-[85%] ">
                MEN
              </div>
            </Link>
          </div>
          <div
            style={{
              backgroundImage: `url(${categoryData.women.imageUrl})`,
            }}
            className="w-[240px] h-[500px] bg-no-repeat bg-cover cursor-pointer m-auto"
          >
            <Link to="/" className="inline-block w-[500px] h-[500px]">
              <button className="bg-white flex w-[140px] text-center py-3 font-bold ml-4 mt-[85%] ">
                <span className="mx-auto">WOMEN</span>
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-3 m-auto">
            <div
              style={{
                backgroundImage: `url(${categoryData.accessories.imageUrl})`,
              }}
              className="w-[240px] h-[242px] bg-no-repeat bg-cover cursor-pointer m-auto "
            >
              <Link>
                <button className="bg-white flex w-[160px] text-center py-3 font-bold ml-4 mt-[70%] ">
                  <span className="mx-auto">ACCESSORIES</span>
                </button>
              </Link>
            </div>
            <div
              style={{
                backgroundImage: `url(${categoryData.kids.imageUrl})`,
              }}
              className="w-[240px] h-[242px] bg-no-repeat bg-cover cursor-pointer m-auto"
            >
              <Link>
                <button className="bg-white flex w-[120px] text-center py-3 font-bold ml-4 mt-[70%] ">
                  <span className="mx-auto">KIDS</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
