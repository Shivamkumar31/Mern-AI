import React, { useState } from "react";
import ReactFlow, {
  Background,
  Controls
} from "reactflow";
import "reactflow/dist/style.css";

import InputNode from "./nodes/InputNode";
import ResultNode from "./nodes/ResultNode";
import API from "./api";

const nodeTypes = {
  inputNode: InputNode,
  resultNode: ResultNode
};

export default function Flow() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const nodes = [
    {
      id: "1",
      type: "inputNode",
      position: { x: 100, y: 200 },
      data: { setInput }
    },
    {
      id: "2",
      type: "resultNode",
      position: { x: 500, y: 200 },
      data: { result }
    }
  ];

  const edges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      animated: true, // 🔥 moving pipeline effect
      style: {
        stroke: "#6366f1",
        strokeWidth: 2
      }
    }
  ];

  const runFlow = async () => {
    try {
      const res = await API.post("/ask-ai", { prompt: input });
      setResult(res.data.result);
    } catch (err) {
      alert("Error calling AI");
    }
  };

  const saveData = async () => {
    try {
      await API.post("/save", {
        prompt: input,
        response: result
      });
      alert("Saved to DB ✅");
    } catch {
      alert("Save failed ❌");
    }
  };

  return (
    <div style={{ height: "100vh", background: "#f8fafc" }}>
      
      {/* 🔥 Top Controls */}
      <div
        style={{
          padding: "10px 20px",
          display: "flex",
          gap: "10px",
          background: "#fff",
          borderBottom: "1px solid #ddd"
        }}
      >
        <button
          onClick={runFlow}
          style={{
            padding: "8px 16px",
            background: "#4f46e5",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          ▶ Run Flow
        </button>

        <button
          onClick={saveData}
          style={{
            padding: "8px 16px",
            background: "#16a34a",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          💾 Save
        </button>
      </div>

      {/* 🔥 React Flow Canvas */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background gap={20} size={1} />
        <Controls />
      </ReactFlow>
    </div>
  );
}