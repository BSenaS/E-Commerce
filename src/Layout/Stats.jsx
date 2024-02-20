import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-row tracking-[0.2px] justify-between py-16 md:flex-wrap md:flex-col md:gap-16">
      <div className="flex flex-col items-center">
        <p className="font-bold text-7xl text-sBlack">15K</p>
        <p className="text-primary-gray font-bold">Happy Customers</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold text-7xl text-sBlack">150K</p>
        <p className="text-primary-gray font-bold">Monthly Visitors</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold text-7xl text-sBlack">15</p>
        <p className="text-primary-gray font-bold">Countries Worldwide</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold text-7xl text-sBlack">100+</p>
        <p className="text-primary-gray font-bold">Top Partners</p>
      </div>
    </div>
  );
};

export default Stats;
