import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Slide } from "react-awesome-reveal";
import { FaArrowRight } from "react-icons/fa6";
import { PiLayout } from "react-icons/pi";

function SubHero() {
  return (
    <div
      id="TopBar"
      className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 relative overflow-hidden"
    >
      {/* Decorative airplane icons */}
      <div className="absolute top-20 right-20 text-blue-400 opacity-60 hidden lg:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      </div>
      <div className="absolute top-40 right-40 text-blue-400 opacity-40 hidden lg:block">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      </div>
      <div className="absolute top-60 left-20 text-blue-400 opacity-50 hidden lg:block">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-orange-500 font-semibold text-sm lg:text-base tracking-wide uppercase">
                Explore Top Hostels Around the World
              </p>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-slate-800 leading-tight">
                stay social{" "}
                <span className="relative">
                  and live the experience
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-orange-300 opacity-60 -z-10"></div>
                </span>{" "}
              </h1>
              <p className="text-slate-600 text-base lg:text-lg leading-relaxed max-w-md">
                Find affordable, comfortable, and vibrant hostels wherever you
                go. Meet new people, share stories, and make every stay a
                memory.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-base"
                size="lg"
              >
                Find out more
              </Button>
              <Link href={"/"} className="flex items-center gap-3 p-0">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <FaArrowRight
                    className="w-5 h-5 text-white ml-1"
                    fill="currentColor"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className=" order-1 lg:order-2">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <Slide direction="right">
                {" "}
                <Image
                  src="/images/Traveller 1.png"
                  alt="Woman traveler with backpack and suitcase"
                  width={600}
                  height={700}
                  className="w-full h-auto object-contain"
                  priority
                />
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHero;
