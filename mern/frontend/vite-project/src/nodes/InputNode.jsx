import React from "react";

export default function InputNode({ data }) {
  return (
    <div
      style={{
        padding: 15,
        width: 180,
        borderRadius: 10,
        background: "#ffffff",
        border: "1px solid #ddd",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
      }}
    >
      <strong>Input</strong>
      <textarea
        placeholder="Type prompt..."
        style={{ width: "100%", marginTop: 8 }}
        onChange={(e) => data.setInput(e.target.value)}
      />
    </div>
  );
}