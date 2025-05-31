"use client";
import { setDefaultCookie } from "@/helper/cookieCRUD";
import { loginUser } from "@/redux/authSlice";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isPasswordVisible, setIsPassWordVisible] = useState(false);
  const { watch, register, reset, setValue } = useForm();
  const { name, email, password, isLoading } = watch();

  const OnSubmit = async () => {
    setValue("isLoading", true);
    try {
      const response = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });
      setDefaultCookie("user", JSON.stringify(response.data.data));
      dispatch(loginUser(response.data.user));
      toast.success(response.data.message);
      router.push("/hostels");
      reset();
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
    }
    setValue("isLoading", false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#f7fdfc] to-[#e0f2fe]">
      <div className="flex flex-col md:flex-row items-center gap-12 bg-white shadow-xl rounded-2xl p-10 max-w-4xl w-full">
        {/* Form Section */}
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
                Create Account
              </h2>
              <p className="text-gray-600">Sign up for hostel booking access</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                placeholder="John Doe"
              />
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
                  placeholder="Create a strong password"
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
              {isLoading ? "Registering..." : "Register"}
            </button>
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-orange-500 font-medium hover:underline"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex-1 hidden md:block">
          <img
            src="/images/login3D.jpg"
            alt="Register Illustration"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        <Toaster />
      </div>
    </div>
  );
};

export default page;
