import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../context/DataContext";

export const EditorsPick = () => {
  const { editorsPickData } = useData();
  return (
    <div className="w-full">
      <div className="flex flex-col max-w-[1050px] mx-auto gap-3 my-10 md:w-full">
        <h3 className="m-auto font-bold text-2xl tracking-[0.1px] ">
          EDITOR’S PICK
        </h3>
        <p className="flex m-auto text-sm text-primary-gray tracking-[0.2px] md:max-w-60 text-center">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="w-full bg-pbGray">
        <div className="max-w-[1050px] flex flex-row m-auto flex-wrap md:w-[85%] md:gap-8">
          {/* 1/2 Sol Erkek resmi */}
          <div className="relative max-w-[510px] max-h-[500px] md:max-w-[85%] md:h-[500px] mx-auto">
            <img
              src={editorsPickData.men.imageUrl}
              alt="menImg"
              className="object-cover w-full h-full object-center"
            />
            <Link
              to={"/shop"}
              className="absolute bottom-0 mb-4 ml-6 px-16 py-3 font-bold tracking-normal bg-white text-black shadow-xl   hover:opacity-75 "
            >
              MEN
            </Link>
          </div>
          {/* 1/4 Solo Kadın Resmi */}
          <div className="relative max-w-[510px] w-[240px] max-h-[500px] md:w-[85%] md:h-[500px] mx-auto">
            <img
              src={editorsPickData.women.imageUrl}
              alt="womenImg"
              className="object-cover w-full h-full object-center"
            />
            <Link
              to={"/shop"}
              className="absolute bottom-0 mb-4 ml-6 px-8 py-3 font-bold tracking-normal bg-white text-black shadow-xl hover:opacity-75 "
            >
              WOMEN
            </Link>
          </div>
          {/* 1/4 1/2, 2li resimler  */}
          <div className="flex flex-col gap-3 m-auto md:w-full md:gap-8">
            <div className="relative w-[240px] h-[242px] bg-no-repeat bg-cover cursor-pointer m-auto md:w-[85%]">
              <img
                src={editorsPickData.accessories.imageUrl}
                alt="womenImg"
                className="object-cover w-full h-full object-center"
              />
              <Link
                to={"/shop"}
                className="absolute bottom-0 mb-4 ml-4 px-4 py-3 font-bold tracking-normal bg-white text-black shadow-xl hover:opacity-75"
              >
                <span className="mx-auto">ACCESSORIES</span>
              </Link>
            </div>

            <div className="relative w-[240px] h-[242px] bg-no-repeat bg-cover cursor-pointer m-auto md:w-[85%]">
              <img
                src={editorsPickData.kids.imageUrl}
                alt="womenImg"
                className="object-cover w-full h-full object-center"
              />
              <Link
                to={"/shop"}
                className="absolute bottom-0 mb-4 ml-4 px-10 py-3 font-bold tracking-normal bg-white text-black shadow-xl hover:opacity-75"
              >
                <span className="mx-auto">KIDS</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
