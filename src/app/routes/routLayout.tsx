"use client";
import React from "react";
import Header from "../components/header";
import Link from "next/link";
function RouteLayout() {
  return (
    <div>
      {/* <Header></Header> */}
      <Link href="/auth/register">Register</Link>
      <Link href="/auth/login">Login</Link>
    </div>
  );
}

export default RouteLayout;
