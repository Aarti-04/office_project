"use client";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./reduxToolKit/store";
import Login from "./components/login";
import Logout from "./components/logout";
import Register from "./components/register";
import Rootlayout from "./provider/routLayoutProvider";
import ForgetPassword from "./components/forgetPassword";
import Dashboard from "./dashboard/page";
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <div className="justify-center min-h-screen bg-gray-100 text-black">
        <div></div>
      </div>
    </>
  );
};

export default MyApp;
