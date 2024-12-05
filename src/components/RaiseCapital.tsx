'use client'
import React from "react";
import { Fade } from "react-awesome-reveal";

const RaiseCapital = () => {
  return (
    <div className="bg-white relative grid grid-cols-2 gap-24 items-center px-52 py-24">
      <Fade triggerOnce>
        <div className="">
          <h2 className="text-4xl font-semibold leading-[45px]">
            Looking to raise capital for your growing business?
          </h2>
          <h6 className=" text-lightGrey mt-8 font-regular">
            Whether expanding or opening a brand-new concept, we make it easy to
            raise money from thousands of local investors
          </h6>
          <button className="lightGreen-button mt-6 uppercase font-medium">
            Apply Online
          </button>
        </div>
        <div className="w-[350px]">
          <img className="w-full" alt="img" src={"/images/2.svg"} />
        </div>
        <img
          src={"/images/shape.svg"}
          className="absolute w-52 top-10 right-0"
        />
      </Fade>
    </div>
  );
};

export default RaiseCapital;
