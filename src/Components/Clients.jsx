import React from "react";
import {
  FaHooli,
  FaLyft,
  FaPiedPiperHat,
  FaStripe,
  FaAws,
  FaRedditAlien,
} from "react-icons/fa";

const Clients = () => {
  return (
    <div className="w-full bg-pbGray py-12">
      <div className="text-primary-gray flex flex-row max-w-[1050px] justify-between mx-auto">
        <span>
          <FaHooli size={100} />
        </span>
        <span>
          <FaLyft size={100} />
        </span>
        <span>
          <FaPiedPiperHat size={100} />
        </span>
        <span>
          <FaStripe size={100} />
        </span>
        <span>
          <FaAws size={100} />
        </span>
        <span>
          {" "}
          <FaRedditAlien size={100} />
        </span>
      </div>
    </div>
  );
};

export default Clients;
