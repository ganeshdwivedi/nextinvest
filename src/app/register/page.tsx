"use client";
import axios from "axios";
import React, { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";


const page = () => {
  const {watch,register,reset,setValue} = useForm();
  const [isPasswordVisible, setIsPassWordVisible] = useState<boolean>(false);

  const OnSubmit = async () => {
    try {
      const response = await axios.post("/api/auth/register", watch());
      console.log(response);
    } catch (error) {
      console.log(error,'error')
    }
  };
  return (
    <div className="flex flex-row items-center justify-between gap-10 px-52 py-10">
      <div className="flex flex-col gap-3 p-16 border border-gray-150 w-[500px] shadow-lg">
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            OnSubmit();
          }}
        >
          <h2 className="text-4xl font-semibold mb-5">Register</h2>
          <div>
            <p>Name</p>
            <input
              {...register("name", { required: true })}
              className="border w-full p-2 border-gray-300"
              type="text"
              placeholder="Enter Name"
            />
          </div>
          <div>
            <p>Email</p>
            <input
              {...register("email", { required: true })}
              className="border w-full p-2 border-gray-300"
              type="email"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <p>Password</p>
            <div className="flex flex-row items-center gap-3 border-gray-300 border">
              <input
                {...register("password", { required: true })}
                className="w-[90%] p-2"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter password"
              />
              <span
                onClick={() => setIsPassWordVisible((prev: boolean) => !prev)}
              >
                {isPasswordVisible ? (
                  <FaRegEyeSlash className="cursor-pointer" />
                ) : (
                  <FaRegEye className="cursor-pointer" />
                )}
              </span>
            </div>
          </div>
          <button type="submit" className="lightGreen-button mt-3 !w-max">
            Register
          </button>
          <p>
            Already have an account ? <button className="">Login</button>
          </p>
        </form>
      </div>
      <div className="w-[350px] h-full overflow-hidden">
        <img alt="login-img" src="/images/login3D.jpg" />
      </div>
    </div>
  );
};

export default page;
