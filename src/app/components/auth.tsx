import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import React, { useEffect } from "react";
import axios from "axios";
const Auth = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Google login successful", tokenResponse);
      const { data } = await axios.post("https://oauth2.googleapis.com/token", {
        code: tokenResponse["code"],
        client_id:
          "189496678458-fpihrhl6pae85mhtq0tsra89cpguccja.apps.googleusercontent.com",
        client_secret: "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",
        redirect_uri: "http://localhost:3000",
        grant_type: "authorization_code",
      });

      //   res.json(data);
      console.log(data);
      const authResponse = await axios.post(
        "http://127.0.0.1:8000/api/register/",
        {
          creds: data,
        }
      );
      console.log(authResponse);
      console.log("http://127.0.0.1:8000/api/login/", {
        code: tokenResponse["code"],
        creds: data,
      });
      localStorage.setItem("my_token", JSON.stringify(data));
      // const res = await axios.post(
      //   "http://127.0.0.1:8000/api/google-auth-verify/",
      //   data
      // );
      // console.log(res);
    },
    onError: () => {
      console.error("Google login failed");
      // Handle login errors here
    },
    flow: "auth-code", // Use 'auth-code' for the authorization code flow
  });
  const getdata = async () => {
    if (localStorage.getItem("my_token")) {
      const data = localStorage.getItem("my_token");
      console.log(data);
      const res = await axios.post(
        "http://127.0.0.1:8000/api/google-auth-verify/",
        JSON.parse(data)
      );
      console.log(res);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  return <button onClick={() => googleLogin()}>Sign in with Google 🚀</button>;
};

export default Auth;
