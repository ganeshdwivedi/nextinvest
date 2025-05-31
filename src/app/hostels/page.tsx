"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import InvestmentPopUp from "./InvestmenPopUp";
import InvestmentCard from "@/components/InvestmentCard";
import { Slide } from "react-awesome-reveal";

const page = () => {
  const [isOpen, setISOpen] = useState(false);
  const [selectedInvest, setSelectedInvest] = useState<any>();
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
    <div className="px-52 py-24">
      <div className="flex flex-row justify-end mb-10">
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-base font-medium flex flex-row items-center gap-1"
          onClick={() => {
            setISOpen(true);
            setSelectedInvest({});
          }}
        >
          Add Hostel +
        </button>
      </div>
      <Slide cascade={true} direction="up">
        <div
          className={`${
            allInvestments?.length > 0 ? "grid grid-cols-3 gap-3" : ""
          }`}
        >
          {allInvestments?.length > 0 ? (
            allInvestments?.map((item: any) => (
              <InvestmentCard
                setISOpen={setISOpen}
                key={item._id}
                setSelectedInvest={setSelectedInvest}
                data={item}
              />
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
      </Slide>
      <InvestmentPopUp
        update={getAllInvestments}
        selectedInvest={selectedInvest}
        isOpen={isOpen}
        setISOpen={setISOpen}
      />
    </div>
  );
};

export default page;
