import React from "react";

const Hero = () => {
  return (
    <div id="TopBar" className="relative">
      <img
        className="absolute left-24 top-12 w-[30%] z-0"
        src={"/images/5.svg"}
        alt="bg-circle"
      />
      <div className="absolute z-10 top-[20%] left-52">
        <h3 className="text-white font-semibold text-5xl leading-[65px]">
          Meaningful investments in <br /> Main Street business
        </h3>
        <h6 className="text-white font-regular leading-7 mt-10 text-xl">
          Browse vetted investments offerings in <br /> communities all over the
          US.
        </h6>
        <button className="lightGreen-button uppercase font-medium mt-5">
          Get Started
        </button>
      </div>
      <img
        src={"/images/6.svg"}
        className="absolute z-20 bottom-0 right-0 w-[30%]"
      />
      <img
        className="object-cover w-full"
        src={"/images/3.svg"}
        alt="logo-img"
      />
    </div>
  );
};

export default Hero;
