"use client";
import React from "react";
import Login from "@/app/components/login";
import {
  GoogleOAuthProvider,
  useGoogleLogin,
  GoogleLogin,
} from "@react-oauth/google";
import axios from "axios";
const Home = () => {
  return (
    <main>
      <GoogleOAuthProvider clientId="189496678458-qimsru4vsjae5tvfisn17gp7nh0v527k.apps.googleusercontent.com">
        {/* <DemoLogin></DemoLogin> */}
        {/* <Login></Login> */}

        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            console.log(credentialResponse);
            console.log(credentialResponse.credential);
            const res = await axios.post(
              "http://127.0.0.1:8000/api/google-auth-verify/",
              credentialResponse
            );

            // router.push("");
            console.log(res);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
      {/* <Login></Login> */}
    </main>
  );
};

export default Home;
