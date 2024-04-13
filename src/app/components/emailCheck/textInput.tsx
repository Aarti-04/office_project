"use client";
import { AuthActions } from "@/app/auth/utils";
import React, { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState("");
  const actions = AuthActions();

  const spamCheckHandler = (e: any) => {
    e.preventDefault();
    console.log(actions.checkSpamOrHam(text));
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mt-4 text-left bg-black shadow-lg w-1/3">
          <h3 className="text-2xl font-semibold">Check Spam or Not</h3>
          <form className="mt-4">
            <div>
              <label className="block" htmlFor="email">
                Text To Check Spam or Ham
              </label>
              <textarea
                placeholder="Enter Text"
                name="textinput"
                className="w-full text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                id=""
                cols={15}
                rows={5}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={spamCheckHandler}
                className="px-12 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                SPAM OR NOT
              </button>
            </div>
          </form>
        </div>
        {/* <div>Hello{isAuthenticated}</div> */}
      </div>
    </>
  );
};

export default TextInput;
