import React, { useContext } from "react";
import { Pass } from "./UseEffect1";

export default function Third() {
  const passName = useContext(Pass);
  return (
    <div style={{ padding: "20px", border: "5px solid black" }}>
      Third component ---{passName}
    </div>
  );
}
