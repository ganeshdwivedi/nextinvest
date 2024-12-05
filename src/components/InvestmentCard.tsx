import React from "react";
import LineLoader from "./LineLoader";
import investmentType from "@/types/investment";

const InvestmentCard = ({
  data,
  setSelectedInvest,
  setISOpen,
}: {
  data: investmentType;
  setSelectedInvest?: (data: investmentType) => void;
  setISOpen?: (data: boolean) => void;
}) => {
  const seperatedTags = data.tags?.split(",");
  return (
    <div className="w-[300px] h-[400px] hover:shadow-3xl shadow-xl overflow-hidden group relative cursor-pointer items-center justify-center transition-shadow hover:shadow-black/30">
      <div className="relative">
        <div className="absolute top-3 mx-3 flex flex-row items-center gap-1">
          {seperatedTags?.map((item: string) => (
            <span
              key={item}
              className="bg-white uppercase bg-opacity-80 font-regular text-[12px] px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>
        <img
          className="h-[200px] w-full"
          src={data.profile_img ? data.profile_img : "/images/fallback-img.jpg"}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white group-hover:from-white group-hover:via-white group-hover:to-white"></div>
      <div className="absolute inset-0 flex translate-y-[45%] flex-col items-center justify-center px-3 py-4 transition-all duration-500 group-hover:translate-y-0">
        <div className="w-full">
          <h2 className="font-medium text-xl">{data.title}</h2>
          <h4 className="font-regular text-[14px] text-gray-500">
            {data.location}
          </h4>
          <p className="text-wrap font-regular line-clamp-2 mt-5">
            {data.description}
          </p>
          <div className="mt-4 overflow-hidden">
            <LineLoader current={data.get_price} total={data.total_price} />
            <p className="font-regular mt-1">
              <span className="text-primary font-medium">
                ${data.get_price}
              </span>{" "}
              raised of ${data.total_price}
            </p>
          </div>
        </div>

        <div className="flex flex-col my-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 w-full gap-2">
          <div className="w-full h-[1px] bg-gray-200"></div>
          <div className="flex flex-row justify-between items-center">
            <p className="font-regular ">Security type</p>
            <p className="font-medium">{data.security_type}</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="font-regular ">Investment Multiple</p>
            <p className="font-medium">{data.multiple_invest}x</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="font-regular ">Maturity</p>
            <p className="font-medium">{data.maturity.split("T")[0]}</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="font-regular ">Min Investment</p>
            <p className="font-medium">{data.min_invest}</p>
          </div>
        </div>
        <button
          onClick={() => {
            if (setSelectedInvest && setISOpen) {
              setSelectedInvest(data);
              setISOpen(true);
            }
          }}
          className="bg-secondary absolute bottom-0 py-[8px] text-white hover:text-secondary hover:bg-white w-full border-2 border-secondary hover:delay-75 font-medium uppercase"
        >
          VIEW
        </button>
      </div>
    </div>
  );
};

export default InvestmentCard;
