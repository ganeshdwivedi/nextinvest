"use client";
import Hero from "@/components/Hero";
import InvestmentCard from "@/components/InvestmentCard";
import Offerings from "@/components/Offerings";
import PaidInvestor from "@/components/PaidInvestor";
import RaiseCapital from "@/components/RaiseCapital";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Hero />
      <Offerings/>
      {/* <InvestmentCard /> */}
      <PaidInvestor />
      <RaiseCapital />
      <Toaster />
    </>
  );
}
