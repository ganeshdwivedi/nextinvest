"use client";
import { useDisclosure } from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import InvestmentPopUp from "./InvestmenPopUp";
import InvestmentCard from "@/components/InvestmentCard";

const page = () => {
  const [isOpen, setISOpen] = useState(false);
  const [selectedInvest, setSelectedInvest] = useState<any>();
  const [allInvestments, setAllInvestments] = useState<any[]>([]);
  const getAllInvestments = async () => {
    try {
      const response = await axios.get("/api/investments");
      setAllInvestments(response.data.data||[]);
    } catch (error) {
      setAllInvestments([]);
      console.log(error,'error in getallInvetmnets');
    }
  };
  useEffect(() => {
    getAllInvestments();
  }, []);

  return (
    <div className="px-52 py-24">
      <div className="flex flex-row justify-end mb-10">
        <button className="primary-button" onClick={() => {setISOpen(true);setSelectedInvest({})}}>
          Add Investments +
        </button>
      </div>
      <div
        className={`${
          allInvestments?.length > 0 ? "grid grid-cols-3 gap-3" : ""
        }`}
      >
        {allInvestments?.length > 0 ? (
          allInvestments?.map((item: any) => (
            <div
              key={item._id}
              onClick={() => {
                setSelectedInvest(item);
                setISOpen(true);
              }}
            >
              <InvestmentCard data={item} />
            </div>
          ))
        ) : (
          <div>
            <h2 className="text-5xl font-medium">No Investment cards found</h2>
            <p className="font-regular text-gray-600">
              you can add investemnt cards.
            </p>
          </div>
        )}
      </div>
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
