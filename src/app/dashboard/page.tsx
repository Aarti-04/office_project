import React from "react";
import Login from "../components/login";
import Logout from "../components/logout";

const dashboard = () => {
  return (
    <div>
      <Logout></Logout> <Login></Login>
    </div>
  );
};

export default dashboard;
