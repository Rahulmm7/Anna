import React from "react";
import FallbackImage from "./FallbackImage";
import usImg from '../images/us.jpg';
import Fireworks from "./Fireworks";
import Flowers from "./Flowers";

const SuccessPage = () => (
  <div className="relative w-full max-w-xl mx-auto flex flex-col items-center justify-center p-4  ">
    <Fireworks />
    <Flowers />
    <div className="flex flex-col items-center z-10">
      {/* Replace src with your couple image URL */}
  <FallbackImage src={usImg} alt="Us Together" size={400} className="rounded-xl border-4 border-pink-400 mb-6" />
      <div className="text-4xl font-extrabold text-center text-pink-600 mb-4">Thank you my love for forgiving me!</div>
      <p className=" font-extrabold text-center text-black">Please send this picture to your cute pavam boy friend so that he knows how much you love him! and he is waiting for us to work this out and be together again</p>
      <div className=" font-extrabold text-center text-pink-600 mb-4">Love</div>
    </div>
  </div>
);

export default SuccessPage;
