import React from "react";
import Second from "./Second";

export default function First() {
  return (
    <div style={{ padding: "20px", border: "5px solid black" }}>
      First compnent
      <Second />
    </div>
  );
}
