import React from "react";

const InitialPopup = ({ open, onContinue }) => {
  if (!open) return null;
  return (
    <div>
  <div className="rounded-2xl shadow-2xl p-10 max-w-xl w-full flex flex-col items-center border-4 border-white" style={{ backgroundColor: 'rgba(151,142,196,255)'  }}>
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Dear Anna,</h2>
        <p className="text-lg mb-8 text-center text-black">
            I am truly sorry for breaking your heart and trust. I am sorry for all my actions that caused to pain. I hope you can find it in your heart to forgive me.
        </p>
        <button
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={onContinue}
          aria-label="Continue"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default InitialPopup;
