import React from "react";
import { motion } from "framer-motion";

const Flowers = () => {
  const flowers = Array.from({ length: 8 }, (_, i) => (
    <motion.div
      key={i}
      initial={{ y: -60, opacity: 0, x: i * 40 - 120 }}
      animate={{ y: [0, 120, 160], opacity: [0, 1, 0.7], rotate: [0, 30, -30, 0] }}
      transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, repeatType: "loop" }}
      className="absolute left-1/2 z-10"
      style={{ top: 0, transform: `translateX(${i * 40 - 120}px)` }}
    >
      <span style={{ fontSize: "2rem" }}>🌸</span>
    </motion.div>
  ));
  return <div className="absolute inset-0 pointer-events-none">{flowers}</div>;
};

export default Flowers;
