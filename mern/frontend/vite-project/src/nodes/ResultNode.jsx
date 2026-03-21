import React from "react";

export default function ResultNode({ data }) {
  return (
    <div
      style={{
        padding: 15,
        width: 220,
        borderRadius: 10,
        background: "#ecfdf5",
        border: "1px solid #10b981",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
      }}
    >
      <strong>AI Result</strong>
      <p style={{ marginTop: 8 }}>
        {data.result || "Waiting for response..."}
      </p>
    </div>
  );
}