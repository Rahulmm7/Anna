import React from "react";
import { motion } from "framer-motion";

const Fireworks = () => {
  const fireworks = Array.from({ length: 7 }, (_, i) => (
    <motion.div
      key={i}
      initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
      animate={{
        scale: [0, 1.2, 1],
        opacity: [0, 1, 0],
        x: [0, Math.cos((i / 7) * 2 * Math.PI) * 120],
        y: [0, Math.sin((i / 7) * 2 * Math.PI) * 120],
      }}
      transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity, repeatType: "loop" }}
      className="absolute left-1/2 top-1/2 z-20"
      style={{ width: 40, height: 40, borderRadius: 20, background: "radial-gradient(circle, #fbbf24 60%, #f59e42 100%)", transform: "translate(-50%, -50%)" }}
    />
  ));
  return <div className="absolute inset-0 pointer-events-none">{fireworks}</div>;
};

export default Fireworks;
