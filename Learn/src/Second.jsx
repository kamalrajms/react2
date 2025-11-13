import React from "react";
import Third from "./Third";

export default function Second() {
  return (
    <div style={{ padding: "20px", border: "5px solid black" }}>
      Second component
      <Third  />
    </div>
  );
}
