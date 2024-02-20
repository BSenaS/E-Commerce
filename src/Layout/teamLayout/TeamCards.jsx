import React from "react";
import { useData } from "../../context/DataContext";
import TeamCard from "../../Components/TeamCard";
import FreeTrial from "../FreeTrial";
const TeamCards = () => {
  const { teamData } = useData();
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold text-sBlack text-5xl mb-4 py-16 md:py-8 md:max-w-[310px] md:items-center md:text-center">
        Meet Our Team
      </h3>

      <div className="flex flex-row flex-wrap gap-6 max-w-[1050px] justify-center">
        {teamData.members.map((item, index) => (
          <div key={index} className="flex flex-wrap max-w-[315px]">
            <TeamCard data={item} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCards;
