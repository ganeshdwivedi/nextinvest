"use client";
import React, { useEffect, useState } from "react";
import InvestmentCard from "./InvestmentCard";
import axios from "axios";
import { Button } from "@nextui-org/react";

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
    <div className="px-10 md:px-32 py-24 relative bg-white flex flex-col items-center">
      <h2 className="text-center font-semibold text-4xl text-orange-500">
        Explore Available Hostels
      </h2>
      <p className="text-center text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
        Browse through verified hostel listings in various locations to find the
        perfect stay for your comfort and convenience.
      </p>
      <Button className="mt-5 w-36 bg-orange-500 hover:text-orange-500 hover:border-orange-500 text-white hover:bg-white">
        Explore
      </Button>

      {/* Decorative Shape */}
      <img
        src="/images/Shape.svg"
        alt="decorative shape"
        className="absolute w-40 top-20 left-5 opacity-30 hidden lg:block"
      />

      {/* Hostels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {allInvestments?.length > 0 ? (
          allInvestments.map((hostel: any, index: number) => (
            <InvestmentCard data={hostel} key={index} />
          ))
        ) : (
          <div className="col-span-full text-center mt-10">
            <h2 className="text-3xl font-semibold text-gray-700">
              No Hostels Found
            </h2>
            <p className="text-gray-500 mt-2">
              If you're an admin, you can add new hostel listings from the
              dashboard.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Offerings;
