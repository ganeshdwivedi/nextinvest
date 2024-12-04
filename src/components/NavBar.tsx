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
    title: "Investment Opportunity",
    icon: true,
    type: "no",
    to: "#",
  },
  {
    title: "How it works",
    icon: true,
    type: "no",
    to: "#",
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
    type: "primary-button",
    to: "/login",
  },
  {
    title: "Register",
    icon: false,
    type: "secondary-button",
    to: "/register",
  },
];
const AuthRoutes = [
  {
    title: "All Investment",
    icon: false,
    type: "no",
    to: "/investments",
  },
  {
    title: "Subscriber",
    icon: true,
    type: "no",
    to: "/subscribers",
  },
  {
    title: "Logout",
    icon: false,
    type: "secondary-button",
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
        <img src={"/images/4.svg"} alt="logo-img" />
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
                {route.icon && <FaChevronDown className="text-[10px]" />}
              </Link>
            ))
          : InitialRoutes.map((route: route) => (
              <Link
                key={route.title}
                className={`${route.type} font-medium flex flex-row items-center gap-1`}
                href={route.to}
              >
                {route.title}{" "}
                {route.icon && <FaChevronDown className="text-[10px]" />}
              </Link>
            ))}
      </div>
    </div>
  );
};

export default NavBar;
