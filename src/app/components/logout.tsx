import React from "react";

const Logout = ({ setLogout }: any) => {
  return (
    <div>
      <button onClick={setLogout}>Logout</button>
    </div>
  );
};

export default Logout;
