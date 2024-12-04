"use client";
import React, { FormEvent } from "react";
import { MdCopyright } from "react-icons/md";
import { IoIosArrowDropupCircle, IoLogoTwitter } from "react-icons/io";
import {
  FaChevronRight,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

interface Subscribe {
  email: String;
}
const Footer = () => {
  const { register, watch } = useForm<Subscribe>();

  const OnSubmit = async () => {
    try {
      const response = await axios.post("/api/subscribe", watch());
      toast.success(response.data.message);
      console.log(response, "response");
    } catch (error:any) {
      toast.success(error.message);

      console.log(error, "error");
    }
  };
  const handleScroll = (event: any) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetElement = document.getElementById("TopBar");

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="px-52 gap-5 pt-24 bg-footer">
      <div className="flex flex-row justify-between items-start">
        <div>
          <h4 className="font-regular text-2xl">Next Invest</h4>
          <p className="flex flex-row mt-2 text-[15px] items-center font-regular text-gray-800">
            Copyright <MdCopyright className="text-[10px]" /> 2020. LogoIpsum.
            All rights reserved
          </p>
        </div>
        <div className="flex flex-col gap-2 items-start ">
          <h4 className="font-medium">Services</h4>
          <button className="font-regular text-[15px] text-gray-800">
            Email Marketing
          </button>
          <button className="font-regular text-[15px] text-gray-800">
            Campaigns
          </button>
          <button className="font-regular text-[15px] text-gray-800">
            Branding
          </button>
          <button className="font-regular text-[15px] text-gray-800">
            Offline
          </button>
        </div>
        <div className="flex flex-col gap-2 items-start ">
          <h4 className="font-medium">About</h4>
          <button className="font-regular text-[15px] text-gray-800">
            Our Story
          </button>
          <button className="font-regular text-[15px] text-gray-800">
            Benefits
          </button>
          <button className="font-regular text-[15px] text-gray-800">
            Team
          </button>
          <button className="font-regular text-[15px] text-gray-800">
            Careers
          </button>
        </div>
        <div className="flex flex-col gap-2 items-start ">
          <IoIosArrowDropupCircle
            onClick={(e) => handleScroll(e)}
            className="text-primary text-4xl cursor-pointer"
          />
        </div>
      </div>
      <div className="mt-12 pb-24 flex flex-row items-end justify-between">
        <div className="">
          <h4 className="font-medium text-gray-800">
            Subscribe to our newsletter
          </h4>
          <form
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              OnSubmit();
            }}
          >
            <div className="flex flex-row items-center mt-5">
              <input
                {...register("email")}
                className="bg-footer p-1 py-2 font-regular border-b border-gray-300"
                type="email"
                placeholder="Email address"
              />
              <button type="submit" className="">
                <FaChevronRight className="bg-secondary hover:bg-white hover:text-secondary delay-75 w-8 h-9 rounded-t-md p-[10px] text-white " />
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-row items-center gap-6">
          <FaFacebookF />
          <IoLogoTwitter />
          <FaInstagram />
        </div>
      </div>
      <div className="flex flex-row py-3 border-t border-primary items-center justify-between ">
        <div className="font-regular">
          Made by{" "}
          <span
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/ganeshdwivedi-",
                "_blank"
              )
            }
            className="cursor-pointer font-medium hover:text-primary"
          >
            Ganesh Dwivedi
          </span>
        </div>
        <div className="flex flex-row items-center gap-5">
          <FaGithub
            className="hover:text-primary cursor-pointer"
            onClick={() =>
              window.open("https://github.com/ganeshdwivedi", "_blank")
            }
          />
          <FaLinkedinIn
            className="hover:text-primary cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/ganeshdwivedi-",
                "_blank"
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
