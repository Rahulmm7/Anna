import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FallbackImage from "./FallbackImage";
import dogImg from '../images/dog.jpg';


const DogBiteAnimation = ({ trigger, onEnd }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (trigger) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        if (onEnd) onEnd();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [trigger, onEnd]);

  // Shake animation for 1 second, no rotation
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{
            opacity: 1,
            x: [0, -10, 10, -10, 10, 0],
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: .25, ease: "linear" }}
          className="absolute z-30"
          style={{ top: 0, right: 0, width: 100, height: 100 }}
        >
          <FallbackImage src={dogImg} alt="Dog" size={100} className="rounded-full border-4 border-yellow-400" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DogBiteAnimation;
