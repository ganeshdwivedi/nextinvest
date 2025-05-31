"use client";
import Hero from "@/components/Hero";
import InvestmentCard from "@/components/InvestmentCard";
import Offerings from "@/components/Offerings";
import PaidInvestor from "@/components/PaidInvestor";
import RaiseCapital from "@/components/RaiseCapital";
import { Toaster } from "react-hot-toast";
import SubHero from "../components/SubHero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <SubHero />
      <Services />
      <Offerings />
      {/* <InvestmentCard /> */}
      {/* <PaidInvestor /> */}
      {/* <RaiseCapital /> */}
      <Toaster />
    </>
  );
}
