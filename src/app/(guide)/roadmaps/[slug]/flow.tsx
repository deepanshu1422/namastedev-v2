"use client";

import type { Edge, OnConnect } from "reactflow";

import { useCallback } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css";
import { initialEdges, initialNodes } from "./flow.constants";
import { CourseInit, Courses, PaymentInit } from "./flow.comps";

const nodeTypes = {
  paymentInit: PaymentInit,
  courseInit: CourseInit,
  courses: Courses,
};

// import { initialNodes, nodeTypes } from "./nodes";
// import { initialEdges, edgeTypes } from "./edges";

export default function Flow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  return (
    <div className="min-h-[1700px] max-w-7xl mx-auto w-full">
      <ReactFlow
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        panOnDrag={false}
        maxZoom={1}
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        //   edgeTypes={edgeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
