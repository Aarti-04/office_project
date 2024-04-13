"use client";
import React from "react";
import { useForm } from "react-hook-form";
// import { AuthActions } from "@/app/auth/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../reduxToolKit/userSlice";
import { RootState, useAppDispatch } from "../reduxToolKit/store";
import Logout from "./logout";
import Navbar from "../provider/routLayoutProvider";
import { motion } from "framer-motion";
type FormData = {
  email: string;
  password: string;
};

const ForgetPassword = () => {
  const logoutHandler = () => {};
  return (
    <div>
      {/* <Navbar></Navbar> */}
      {/* <Logout setLogout={() => console.log("Hello")}></Logout> */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mt-4 text-left bg-black shadow-lg w-1/3">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.2,
                },
              },
            }}
          >
            <h3 className="text-2xl font-semibold">Forget Password</h3>
          </motion.div>
          <form className="mt-4">
            <div className="mt-4">
              <label className="block" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <button className="px-12 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Reset
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <Link
              href="/auth/login/"
              className="text-sm text-blue-600 hover:underline"
            >
              Login?
            </Link>
          </div>
        </div>
        <div>Hello</div>
      </div>
    </div>
  );
};

export default ForgetPassword;
