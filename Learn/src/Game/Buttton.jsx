import React from "react";

export default function Buttton({ onSquareClick, value }) {
  return (
    <button style={{ padding: "15px" }} onClick={onSquareClick}>
      {value}
    </button>
  );
}
