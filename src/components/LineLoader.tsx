import React from "react";

interface LineLoaderProps {
  current: number;
  total: number;
}

const LineLoader: React.FC<LineLoaderProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;
  const isComplete = percentage === 100;

  return (
    <div className="w-full bg-gray-300 h-[6px]">
      <div
        className={`h-full rounded ${isComplete ? "bg-primary" : "bg-primary"}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default LineLoader;
