"use client";
import { setDefaultCookie } from "@/helper/cookieCRUD";
import { loginUser } from "@/redux/authSlice";
import { RootState } from "@/redux/store";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const IsloggedIN = useSelector((state: RootState) => state.auth);
  const [isPasswordVisible, setIsPassWordVisible] = useState<boolean>(false);
  const { register, watch, setValue } = useForm();
  const { email, password, isLoading } = watch();

  const OnSubmit = async () => {
    setValue("isLoading", true);
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      setDefaultCookie("user", JSON.stringify(response.data.data));
      dispatch(loginUser(response.data.user));
      toast.success(response.data.message);
      router.push("/hostels");
      setValue("isLoading", false);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
      setValue("isLoading", false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#e6f4f1] to-[#f0f9ff]">
      <div className="flex flex-col md:flex-row items-center gap-12 bg-white shadow-xl rounded-2xl p-10 max-w-4xl w-full">
        {/* Left Form */}
        <div className="flex-1 w-full">
          <form
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              OnSubmit();
            }}
            className="flex flex-col gap-6"
          >
            <div>
              <h2 className="text-4xl font-bold text-orange-500 mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-600">
                Login to your Hostel Booking account
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="flex items-center border rounded-md shadow-sm px-4">
                <input
                  {...register("password", { required: true })}
                  type={isPasswordVisible ? "text" : "password"}
                  className="w-full py-2 focus:outline-none"
                  placeholder="Enter your password"
                />
                <span
                  onClick={() => setIsPassWordVisible((prev) => !prev)}
                  className="text-gray-500 cursor-pointer ml-2"
                >
                  {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-primary-dark transition duration-200 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link
                href="/register"
                className="text-orange-500 font-medium hover:underline"
              >
                Register here
              </Link>
            </p>
          </form>
        </div>

        {/* Right Image */}
        <div className="flex-1 hidden md:block">
          <img
            src="/images/login3D.jpg"
            alt="Login Illustration"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default page;
