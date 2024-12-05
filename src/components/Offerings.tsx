"use client";
import React, { useEffect, useState } from "react";
import InvestmentCard from "./InvestmentCard";
import axios from "axios";

const Offerings = () => {
  const [allInvestments, setAllInvestments] = useState<any[]>([]);
  const getAllInvestments = async () => {
    try {
      const response = await axios.get("/api/investments");
      setAllInvestments(response.data.data || []);
    } catch (error) {
      setAllInvestments([]);
      console.log(error, "error in getallInvetmnets");
    }
  };
  useEffect(() => {
    getAllInvestments();
  }, []);
  return (
    <div className="px-52 py-24 relative bg-white">
      <h2 className="text-center font-medium text-4xl">
        Offerings open for investment
      </h2>
      <h6 className="text-center font-regular text-gray-600 mt-5">
        Explore pre-vetted investment opportunites available in a growing number
        of industry categories
      </h6>
      <img
        src={"/images/Shape.svg"}
        alt="img"
        className="absolute w-52 top-52 left-10"
      />
      <div className="grid grid-cols-3 gap-5  my-7">
        {allInvestments?.length > 0 ? (
          allInvestments.map((item: any, index: number) => (
            <InvestmentCard data={item} key={index} />
          ))
        ) : (
          <div>
            <h2 className="text-5xl font-medium">No Investment cards found</h2>
            <p className="font-regular text-gray-600">
              If you are an admin, you can add investemnt cards.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Offerings;
