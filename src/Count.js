import React from "react";
import array from "./sidebar";

const Count = () => {
  return (
    <div className="div">
      {array.map((curr, i) => {
        const { name } = curr;
        return (
          <div key={i}>
            <h3>{name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Count;
