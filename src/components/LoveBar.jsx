import React from "react";

const LoveBar = () => (
  <div className="w-full mb-2">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-semibold text-black">Love for you : 100%</span>
    </div>
    <div className="w-full bg-pink-200 rounded h-4">
      <div className="bg-pink-500 h-4 rounded" style={{ width: "100%" }}></div>
    </div>
  </div>
);

export default LoveBar;
