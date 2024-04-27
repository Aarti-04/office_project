"use client";
import React from "react";
import Login from "@/app/components/login";
import {
  GoogleOAuthProvider,
  useGoogleLogin,
  GoogleLogin,
} from "@react-oauth/google";
import axios from "axios";
import Auth from "@/app/components/auth";

function CustomSignIn() {
  return (
    <GoogleLogin
      onSuccess={(response) => {
        // Handle the successful response here
        console.log("Custom Google login successful", response);
      }}
      onError={() => {
        // Handle errors here
        console.error("Custom Google login failed");
      }}
      theme="filled_blue"
      size="large"
      text="continue_with"
    />
  );
}

const Home = () => {
  return (
    <main>
      <GoogleOAuthProvider clientId="189496678458-fpihrhl6pae85mhtq0tsra89cpguccja.apps.googleusercontent.com">
        <Auth></Auth>
      </GoogleOAuthProvider>
    </main>
  );
};

export default Home;
