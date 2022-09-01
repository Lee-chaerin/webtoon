import React from "react";
import SyncLoader from "react-spinners/SyncLoader";
import "../App.css";

function Loading() {
  return (
    <div className="loading">
      <SyncLoader/>
    </div>
  );
}

export default Loading;