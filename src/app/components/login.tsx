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
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>();

  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.isAuthenticated
  );
  console.log(isAuthenticated);

  //   const { login, storeToken } = AuthActions();

  const onSubmit = (data: FormData) => {
    console.log(data.email);
    console.log(data.password);
    dispatch(loginUser());
    // login(data.email, data.password)
    //   .json((json: any) => {
    //     storeToken(json.access, "access");
    //     storeToken(json.refresh, "refresh");
    //     router.push("dashboard");
    //   })
    //   .catch((err: any) => {
    //     setError("root", { type: "manual", message: err.json.detail });
    //   });
  };
  const login = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      console.log(credentialResponse);
      const res = await axios.post(
        "http://127.0.0.1:8000/api/google-auth-verify/",
        credentialResponse
      );
    },
    flow: "auth-code",
  });
  return (
    <div>
      {/* <Navbar></Navbar> */}
      {/* <Logout setLogout={() => dispatch(logoutUser())}></Logout> */}
      <div className="flex items-center justify-center min-h-screen bg-white-100">
        <div className="px-8 py-6 mt-4 text-black text-left bg-white shadow-lg w-1/2">
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
            <h3 className="text-2xl font-semibold">Login to your account</h3>
          </motion.div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            {/* Login using useGoogleLogin hook */}
            {/* <div>
              <button onClick={() => login()}>Sign in with google</button>
            </div> */}
            {/* Login custome form */}
            {/* <div>
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {errors.email && (
                <span className="text-xs text-red-600">Email is required</span>
              )}
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {errors.password && (
                <span className="text-xs text-red-600">
                  Password is required
                </span>
              )}
            </div>
            <div className="flex items-center justify-between mt-4">
              <button className="px-12 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Login
              </button>
            </div>
            {errors.root && (
              <span className="text-xs text-red-600">
                {errors.root.message}
              </span>
            )} */}
            {/* Google login button */}
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                console.log(credentialResponse);
                console.log(credentialResponse.credential);
                const res = await axios.post(
                  "http://127.0.0.1:8000/api/google-auth-verify/",
                  credentialResponse
                );
                // login();
                // router.push("");
                // console.log(res);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </form>
          <div className="mt-6 text-center">
            <Link
              href="/auth/password/"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </div>
        {/* <div>Hello{isAuthenticated}</div> */}
      </div>
    </div>
  );
};

export default Login;
