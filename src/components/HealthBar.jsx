import React from "react";

const HealthBar = ({ health }) => (
  <div className="w-full mb-2">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-extrabold text-red drop-shadow-lg bg-red-500 px-6 py-2 rounded-xl border-2 border-yellow-400">Health: {health}%</span>
    </div>
    <div className="w-full bg-red-200 rounded h-4">
      <div
        className="bg-red-500 h-4 rounded"
        style={{ width: `${health}%`, transition: "width 0.3s" }}
      ></div>
    </div>
  </div>
);

export default HealthBar;
