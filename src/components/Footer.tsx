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
import { AttentionSeeker } from "react-awesome-reveal";

interface Subscribe {
  email: String;
}

const Footer = () => {
  const { register, watch } = useForm<Subscribe>();

  const OnSubmit = async () => {
    try {
      const response = await axios.post("/api/subscribe", watch());
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleScroll = (event: any) => {
    event.preventDefault();
    const targetElement = document.getElementById("TopBar");

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="px-52 gap-5 pt-24 bg-orange-50">
      <div className="flex flex-row justify-between items-start">
        <div>
          <h4 className="font-regular text-2xl">HostelConnect</h4>
          <p className="flex flex-row mt-2 text-[15px] items-center font-regular text-gray-800">
            Copyright <MdCopyright className="text-[10px]" /> 2025.
            HostelConnect. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-start ">
          <h4 className="font-medium">Hostel Services</h4>
          <button className="font-regular text-[15px] text-gray-800">
            Bed Booking
          </button>
          <button className="font-regular text-[15px] text-gray-800">
            Long-Term Stays
          </button>
          <button className="font-regular text-[15px] text-gray-800">
            Group Discounts
          </button>
          <button className="font-regular text-[15px] text-gray-800">
            City Guides
          </button>
        </div>
        <div className="flex flex-col gap-2 items-start ">
          <h4 className="font-medium">Company</h4>
          <button className="font-regular text-[15px] text-gray-800">
            About Us
          </button>
          <button className="font-regular text-[15px] text-gray-800">
            Why HostelConnect
          </button>
          <button className="font-regular text-[15px] text-gray-800">
            Hostel Partners
          </button>
          <button className="font-regular text-[15px] text-gray-800">
            Careers
          </button>
        </div>
        <div className="flex flex-col gap-2 items-start ">
          <IoIosArrowDropupCircle
            onClick={(e) => handleScroll(e)}
            className="text-orange-500 text-4xl cursor-pointer"
          />
        </div>
      </div>
      <div className="mt-12 pb-24 flex flex-row items-end justify-between">
        <div className="">
          <h4 className="font-medium text-gray-800">
            Stay in the loop with hostel updates
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
                placeholder="Your email address"
              />
              <AttentionSeeker effect={"jello"}>
                <button type="submit">
                  <FaChevronRight className="bg-orange-500 hover:bg-white hover:text-orange-500 delay-75 w-8 h-9 rounded-t-md p-[10px] text-white " />
                </button>
              </AttentionSeeker>
            </div>
          </form>
        </div>
        <div className="flex flex-row items-center gap-6">
          <FaFacebookF className="cursor-pointer" />
          <IoLogoTwitter className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-row py-3 border-t border-primary items-center justify-between ">
        <div className="font-regular">
          Built with ❤️ by{" "}
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1qIOTE_0Alf4v-KbUHmgWHtSWlAfMjhk-/view?usp=sharing"
            className="cursor-pointer font-medium hover:text-primary"
          >
            TrioCode
          </a>
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
