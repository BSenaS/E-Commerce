import React from "react";
import TeamHero from "../Layout/teamLayout/TeamHero";
import TeamCards from "../Layout/teamLayout/TeamCards";
import FreeTrial from "../Layout/FreeTrial";

const TeamPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <TeamHero />
      <TeamCards />
      <FreeTrial />
    </div>
  );
};

export default TeamPage;
