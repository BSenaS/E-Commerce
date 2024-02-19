import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const TeamCard = ({ data, index }) => {
  return (
    <div className="flex flex-col gap-4 tracking-[0.2px]">
      <img src={data.imageURL} alt={index} />
      <div className="flex flex-col items-center gap-4 font-bold">
        <p className="text-sBlack">{data.name}</p>
        <p className="text-sm text-primary-gray">{data.job}</p>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <a href="https://www.facebook.com/" target="blank">
          <FaFacebook size={24} className="text-pBlue" />
        </a>
        <a href="https://www.instagram.com/" target="blank">
          <FaInstagram size={24} className="text-pBlue" />
        </a>
        <a href="https://www.twitter.com/" target="blank">
          <FaTwitter size={24} className="text-pBlue" />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
