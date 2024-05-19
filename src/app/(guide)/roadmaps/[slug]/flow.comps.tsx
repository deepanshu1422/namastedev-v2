import { CSSProperties } from "react";
import { Handle, NodeProps, Position } from "reactflow";

export function PaymentInit({
  data: { label, side },
}: NodeProps<{ label: string; side: string }>) {
  return (
    <div className="px-3 py-2 rounded border-2 border-prime bg-second/70 hover:bg-second text-white font-semibold">
      {label}
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
}

export function CourseInit({
  data: { label, side },
}: NodeProps<{ label: string; side: "left" | "right" }>) {
  return (
    <div className="noDrag px-3 py-2 rounded-md border-2 border-prime bg-second/70 hover:bg-second text-white font-semibold text-lg">
      {label}
      <Handle id="a" type="source" position={Position.Bottom} />
      {side && (
        <Handle
          type="source"
          id="b"
          position={side === "left" ? Position.Left : Position.Right}
        />
      )}
      <Handle type="target" position={Position.Top} />
    </div>
  );
}

export function Courses({
  data: { course, side = "right" },
}: NodeProps<{ course: string[]; side?: "left" | "right" }>) {
  return (
    <div className="p-3 rounded-lg border-2 border-border bg-muted/90 text-white font-semibold flex flex-col gap-2">
      {course.map((e, i) => (
        <div
          key={i}
          className="cursor-pointer py-2 px-3 border-head/80 border bg-second/70 hover:bg-second rounded-md"
        >
          {e}
        </div>
      ))}
      {side && (
        <Handle
          type="target"
          position={side === "left" ? Position.Left : Position.Right}
        />
      )}
    </div>
  );
}
