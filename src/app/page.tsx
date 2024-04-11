"use client";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./reduxToolKit/store";
import Login from "./components/login";
import Logout from "./components/logout";
import Register from "./components/register";
import Rootlayout from "./routes/routLayout";
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <Component {...pageProps} /> */}
        {/* <Rootlayout></Rootlayout> */}
        <Login></Login>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
