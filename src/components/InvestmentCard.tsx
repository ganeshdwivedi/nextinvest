import React from "react";
import investmentType from "@/types/investment";
import { CiHeart } from "react-icons/ci";
import { BiMapPin } from "react-icons/bi";
import { Card } from "@nextui-org/react";

const InvestmentCard = ({
  data,
  setSelectedInvest,
  setISOpen,
}: {
  data: investmentType;
  setSelectedInvest?: (data: investmentType) => void;
  setISOpen?: (data: boolean) => void;
}) => {
  const separatedTags = data.tags?.split(",").map((tag) => tag.trim());

  const handleClick = () => {
    if (setSelectedInvest && setISOpen) {
      setSelectedInvest(data);
      setISOpen(true);
    }
  };

  return (
    <Card
      className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      {/* Image */}
      <div className="relative h-64">
        <img
          src={data.profile_img || "/images/fallback-img.jpg"}
          alt={data.title}
          className="object-cover w-full h-full"
        />
        {/* Optional: Tags */}
        {separatedTags && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
            {separatedTags.map((tag) => (
              <span
                key={tag}
                className="bg-white/80 text-[10px] font-semibold uppercase px-2 py-[2px] rounded-md text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-800">
              {data.title}
            </h3>
            <p className="text-orange-600 text-lg font-bold">
              ₹{Number(data.total_price).toLocaleString()}
              <span className="text-sm text-slate-600 font-normal ml-1">
                /total
              </span>
            </p>
          </div>
          <div className="flex items-center gap-1">
            <CiHeart className="text-orange-500 text-2xl" />
            <span className="text-sm font-medium">4.8</span>{" "}
            {/* Optional rating */}
          </div>
        </div>

        <div className="flex items-center text-slate-600 text-sm">
          <BiMapPin className="w-4 h-4 mr-1" />
          <span>{data.location}</span>
        </div>
      </div>
    </Card>
  );
};

export default InvestmentCard;
