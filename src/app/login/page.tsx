"use client";
import { setDefaultCookie } from "@/helper/cookieCRUD";
import { loginUser } from "@/redux/authSlice";
import { RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const IsloggedIN = useSelector((state: RootState) => state.auth);
  const [isPasswordVisible, setIsPassWordVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const OnSubmit = async () => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      setDefaultCookie("user", JSON.stringify(response.data.data));
      dispatch(loginUser(response.data.user));
      toast.success(response.data.message);
      router.push("/investments");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
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
          <h2 className="text-4xl font-semibold mb-5">Login</h2>
          <div>
            <p>Email</p>
            <input
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              className="border w-full p-2 border-gray-300"
              type="email"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <p>Password</p>
            <div className="flex flex-row items-center gap-3 border-gray-300 border">
              <input
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
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
            Login
          </button>
          <p>
            Don't have an account ? <button className="">Register</button>
          </p>
        </form>
      </div>
      <div className="w-[350px] h-full overflow-hidden">
        <img alt="login-img" src="/images/login3D.jpg" />
      </div>
      <Toaster />
    </div>
  );
};

export default page;
