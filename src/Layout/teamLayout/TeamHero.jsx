import React from "react";
import hero1 from "../../assets/team/teamHero1.jpg";
import hero2 from "../../assets/team/teamHero2.jpg";
import hero3 from "../../assets/team/teamHero3.jpg";
import hero4 from "../../assets/team/teamHero4.jpg";
import hero5 from "../../assets/team/teamHero5.jpg";

const TeamHero = () => {
  return (
    <div className="flex flex-col">
      {/* Header kısmı */}
      <div className="flex flex-col items-center font-bold gap-6 my-16 md:text-center">
        <h5 className="text-primary-gray text-base">WHAT WE DO</h5>
        <h3 className="text-sBlack text-6xl tracking-[0.2px] md:text-4xl md:max-w-80">
          Innovation tailored for you
        </h3>
        <div className="flex flex-row font-bold gap-3 items-center">
          <span className="text-sBlack text-sm">Home</span>
          <span className="text-mute-color text-2xl font-normal">{">"}</span>
          <span className="text-mute-color text-sm">Team</span>
        </div>
      </div>
      {/* Pictures div */}
      <div className="flex md:flex-wrap md:w-full">
        {/* Left Pic */}
        <div className="flex w-1/2 md:w-full md:min-h-[500px]">
          <img
            src={hero1}
            alt="hero1-img"
            className="md:w-full md:min-h-[500px] md:object-fill"
          />
        </div>
        {/* Right Pic 1/4 */}
        <div className="flex flex-col w-1/2 justify-between md:w-full md:mt-4 md:gap-2">
          <div className="flex flex-row md:w-full justify-between ">
            <img
              src={hero2}
              alt="hero2-img"
              className="max-w-[360px] md:w-[49%] md:min-h-[250px]"
            />
            <img
              src={hero3}
              alt="hero3-img"
              className="max-w-[360px] md:w-[49%] md:min-h-[250px]"
            />
          </div>
          <div className="flex flex-row md:w-full justify-between">
            <img
              src={hero4}
              alt="hero4-img"
              className="max-w-[360px] md:w-[49%] md:min-h-[250px]"
            />
            <img
              src={hero5}
              alt="hero5-img"
              className="max-w-[360px] md:w-[49%] md:min-h-[250px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamHero;
