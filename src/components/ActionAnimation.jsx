import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FallbackImage from "./FallbackImage";

// Map action text to image imports
import dogImg from '../images/dog.jpg';
import chimbuImg from '../images/dog.jpg'; // Replace with chimbu image if available
import punchImg from '../images/punch.jpg'; // Replace with punch image if available
import kickImg from '../images/kick.jpg'; // Replace with kick image if available

const actionImages = {
  "Let Rio bite him so he learns a lesson": dogImg,
  "Let chimbu bite him so he learns a lesson": chimbuImg,
  "punch him": punchImg,
  "kick him": kickImg,
};

const ActionAnimation = ({ trigger, action, onEnd }) => {
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

  const imgSrc = actionImages[action] || dogImg;

  // Shake animation for 1 second
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{
            opacity: 1,
            x: [0, -10, 10, -10, 10, 0],
          }}
          exit={{ opacity: 50 }}
          transition={{ duration: .25, ease: "linear" }}
          className="absolute z-30"
          style={{ top: 0, right: 0, width: 100, height: 100 }}
        >
          <FallbackImage src={imgSrc} alt={action} size={100} className="rounded-full border-4 border-yellow-400" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ActionAnimation;
