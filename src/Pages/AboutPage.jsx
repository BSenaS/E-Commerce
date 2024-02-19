import React from "react";
import AboutHero from "../Layout/aboutLayout/AboutHero";
import Stats from "../Layout/Stats";
import video from "../assets/about/video.jpg";
import TeamCard from "../Components/TeamCard";
import { useData } from "../context/DataContext";
import Clients from "../Components/Clients.jsx";
import workimg from "../assets/about/workwithUsWomen.jpg";

const AboutPage = () => {
  const { aboutTeam } = useData();
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto md:w-full">
        {/* HeroComponenti */}
        <AboutHero />
        {/* Problems trying section */}
        <div className="flex flex-row md:flex-col md:flex-wrap justify-between mt-4">
          <div className="flex flex-col py-6 max-w-[500px]">
            <h3 className="text-sm text-[#E74040] tracking-[0.2px]s">
              Problems trying
            </h3>
            <p className="mt-8 text-2xl font-bold text-sBlack">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </p>
          </div>
          <div className="flex max-w-[600px] items-center">
            <p className="mt-12 text-sm text-primary-gray">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
        </div>
        {/* Stats section */}
        <Stats />
        <div className="flex justify-center py-16">
          <img src={video} alt="" />
        </div>
        {/* Team Section */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-sBlack text-5xl mb-4">Meet Our Team</h3>
          <p className="text-sm text-primary-gray max-w-[469px] mb-1">
            Problems trying to resolve the conflict between
          </p>
          <p className="text-sm text-primary-gray max-w-[469px]">
            the two major realms of Classical physics: Newtonian mechanics
          </p>
          <div className="flex flex-row gap-10 py-20">
            {aboutTeam.members.map((item, index) => (
              <div key={index}>
                <TeamCard data={item} index={index} />
              </div>
            ))}
          </div>
        </div>
        {/* Clients section */}
      </div>
      <div className="w-full flex flex-col mb-0">
        <div className="flex flex-col justify-center items-center py-20 bg-pbGray">
          <p className="font-bold text-sBlack text-5xl mb-4">
            Big Companies Are Here
          </p>
          <p className="text-primary-gray">
            Problems trying to resolve the conflict between{" "}
          </p>
          <p className="text-primary-gray">
            the two major realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <Clients />
      </div>
      {/* Work With Us Section */}
      <div className="flex max-w-[1440px] mx-auto">
        {/* ALTTAKI DIVI NASIL KALAN ALANI KAPLAMASINI SAĞLARIM RESMİ KUCULTMEDEN? */}
        <div className="flex bg-[#2A7CC7] w-2/3">
          <div className="flex flex-col max-w-[500px] font-bold text-2xl text-white justify-center mx-auto gap-8">
            <p className="text-base">WORK WITH US</p>
            <h3 className="text-4xl">Now Let's grow Yours</h3>
            <p className="text-base font-normal">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th{" "}
            </p>
            <div className="flex">
              <button className="text-base py-4 px-9 rounded-md border border-solid	border-white">
                Button
              </button>
            </div>
          </div>
        </div>

        <div className="flex max-w-[600px]">
          <img src={workimg} alt="workWithUsWomen" className="" />
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
