import React from "react";
import spinner from "../assets/Spinner.gif";
const Loading = () => {
  return (
    <div className="loading glass-box ">
      <img  src={spinner} alt="loading..." />
    </div>
  );
};

export default Loading;
