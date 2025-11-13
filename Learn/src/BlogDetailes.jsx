import React from "react";
import { useParams } from "react-router-dom";

export default function BlogDetailes() {
  const { id } = useParams();
  return (
    <div>
      <h2>Blog Detailes..{id}</h2>
    </div>
  );
}
