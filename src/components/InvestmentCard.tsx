import React from "react";
import LineLoader from "./LineLoader";
import investmentType from "@/types/investment";

const InvestmentCard = ({ data }: { data: investmentType}) => {
  const seperatedTags = data.tags?.split(",");
  return (
    <div className="w-[300px] h-[400px] hover:shadow-3xl shadow-xl">
      <div className="relative">
        <div className="absolute top-3 mx-3 flex flex-row items-center gap-1">
          {seperatedTags?.map((item: string) => (
            <span
              key={item}
              className="bg-white uppercase bg-opacity-70 font-regular text-[12px] px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>
        <img
          className="h-[200px]"
          src={data.profile_img ? data.profile_img : "/images/fallback-img.jpg"}
        />
      </div>
      <div className="px-3 py-4">
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
            <span className="text-primary font-medium">${data.get_price}</span>{" "}
            raised of ${data.total_price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;
