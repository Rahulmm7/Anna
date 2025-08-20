import React, { useState } from "react";
import { motion } from "framer-motion";
import FallbackImage from "./FallbackImage";
import headImg from '../images/head.jpg';
import HealthBar from "./HealthBar";
import LoveBar from "./LoveBar";
import DogBiteAnimation from "./DogBiteAnimation";

const MainPage = ({
  health,
  onYes,
  onNo,
  noText,
  yesScale,
  dogBiteTrigger,
  onDogBiteEnd,
}) => {
  const [showSorry, setShowSorry] = useState(false);

  const handleNoClick = () => {
    setShowSorry(true);
    setTimeout(() => {
      setShowSorry(false);
    }, 500);
    onNo();
  };

  return (
    <div className="relative w-full max-w-xl mx-auto flex flex-col items-center justify-center p-4 ">
  <DogBiteAnimation trigger={dogBiteTrigger} onEnd={onDogBiteEnd} />
    <div className="flex flex-col md:flex-row items-center justify-center w-full mb-6">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
        {/* Sorry text above image */}
        {showSorry && (
          <div className="absolute left-1/2 -top-12 transform -translate-x-1/2 text-4xl font-extrabold text-yellow-300 drop-shadow-lg bg-red-700 px-6 py-2 rounded-xl border-2 border-yellow-400 animate-fade">
            sorry
          </div>
        )}
        {/* Replace src with your head image URL */}
  <FallbackImage src={headImg} alt="My Head" size={200} className="rounded-full border-4 border-blue-400" />
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold text-center mb-6 text-gray-800">Will you please forgive me?</div>
        <div className="flex flex-col items-center mb-4 space-y-4">
          <motion.button
            aria-label="No, do not forgive"
            className="bg-red-500 text-white px-4 py-2 rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 mb-2"
            whileTap={{ scale: 1.1 }}
            onClick={handleNoClick}
          >
            {noText}
          </motion.button>
            <div className="relative w-full flex flex-col items-center">
              <motion.button
                aria-label="Yes, forgive him"
                className="bg-green-500 text-white px-4 py-2 rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                style={{ scale: yesScale }}
                whileTap={{ scale: 1.1 }}
                onClick={onYes}
              >
                Yes
              </motion.button>
            </div>
        </div>
        <HealthBar health={health} />
        <LoveBar />
      </div>
    </div>
  </div>
  );
};


export default MainPage;
