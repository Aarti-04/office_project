"use client";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../reduxToolKit/store";
import Login from "../components/login";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Login></Login>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
