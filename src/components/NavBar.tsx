"use client";
import { deleteCookie, getCookie } from "@/helper/cookieCRUD";
import { login, logout } from "@/redux/authSlice";
import { RootState } from "@/redux/store";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaChevronDown } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

interface route {
  title: string;
  icon: boolean;
  type: string;
  to: string;
}
const InitialRoutes = [
  {
    title: "Hostels",
    icon: true,
    type: "no",
    to: "#",
  },
  {
    title: "How it works",
    icon: true,
    type: "no",
    to: "#how",
  },
  {
    title: "About us",
    icon: false,
    type: "no",
    to: "#",
  },
  {
    title: "Login",
    icon: false,
    type: "border-orange-500 hover:text-white border-2 hover:bg-orange-600 px-8 py-3 rounded-lg text-orange-500 font-medium flex flex-row items-center gap-1",
    to: "/login",
  },
  {
    title: "Register",
    icon: false,
    type: "bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-base font-medium flex flex-row items-center gap-1",
    to: "/register",
  },
];
const AuthRoutes = [
  {
    title: "All hostels",
    icon: false,
    type: "no",
    to: "/hotels",
  },
  {
    title: "Logout",
    icon: false,
    type: "border-orange-500 hover:text-white border-2 hover:bg-orange-600 px-8 py-3 rounded-lg text-orange-500 font-medium flex flex-row items-center gap-1",
    to: "#",
  },
];

const NavBar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = getCookie("user");
  const Auth = useSelector((state: RootState) => state.auth);
  const [isSticky, setIsSticky] = useState(false);

  const handleLogout = async (type: string) => {
    if (type === "Logout") {
      try {
        const response: any = await axios.get("/api/auth/logout");
        deleteCookie("user");
        dispatch(logout());
        router.push("/");
        toast.success(response.data.message);
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(login());
    }
  }, []);

  return (
    <div
      className={`bg-white z-50 ${
        isSticky ? "fixed" : ""
      } flex flex-row items-center justify-between gap-10 px-52 py-6 shadow-md w-full`}
    >
      <Link href={"/"}>
        <h4 className="text-orange-500 font-bold text-2xl">HostelsForU</h4>
      </Link>
      <div className="flex flex-row items-center gap-4">
        {Auth.isLoggedIn
          ? AuthRoutes.map((route: route) => (
              <Link
                onClick={() => handleLogout(route.title)}
                key={route.title}
                className={`${route.type} font-medium flex flex-row items-center gap-1`}
                href={route.to}
              >
                {route.title}{" "}
                {/* {route.icon && <FaChevronDown className="text-[10px]" />} */}
              </Link>
            ))
          : InitialRoutes.map((route: route) => (
              <Link
                key={route.title}
                className={`${route.type}`}
                href={route.to}
              >
                {route.title}{" "}
                {/* {route.icon && <FaChevronDown className="text-[10px]" />} */}
              </Link>
            ))}
      </div>
    </div>
  );
};

export default NavBar;
