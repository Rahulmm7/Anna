
import React, { useState, useEffect } from "react";
import MainPage from "./components/MainPage";
import SuccessPage from "./components/SuccessPage";
import InitialPopup from "./components/InitialPopup";
import ActionAnimation from "./components/ActionAnimation";
import bgImg from './images/background1.png';

const noButtonTexts = [
  "No",
  "Let Rio bite him so he learns a lesson",
  "Let chimbu bite him so he learns a lesson",
  "punch him",
  "kick him",
  "let him suffer"
];


const App = () => {
  const [page, setPage] = useState("main");
  const [showPopup, setShowPopup] = useState(true);
  const [showHealthWarning, setShowHealthWarning] = useState(false);
  const [health, setHealth] = useState(100);
  const [noIdx, setNoIdx] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [dogBiteTrigger, setDogBiteTrigger] = useState(false);
  const [actionAnimTrigger, setActionAnimTrigger] = useState(false);
  const [actionAnimText, setActionAnimText] = useState("");

  const handleYes = () => setPage("success");

  const handleNo = () => {
    let nextIdx = (noIdx + 1) % noButtonTexts.length;
    let newHealth = health;
    let scale = yesScale;
    let dogBite = false;
    scale = Math.min(yesScale + 0.1, 2);
    const currentAction = noButtonTexts[noIdx];
    // Trigger ActionAnimation for all except plain "No"
    if (currentAction === "Let Rio bite him so he learns a lesson") {
      newHealth = Math.max(health - 20, 0);
      dogBite = true;
      setActionAnimText(currentAction);
      setActionAnimTrigger(true);
    } else if (["Let chimbu bite him so he learns a lesson", "punch him", "kick him"].includes(currentAction)) {
      newHealth = Math.max(health - 15, 0);
      setActionAnimText(currentAction);
      setActionAnimTrigger(true);
    } else if (currentAction === "let him suffer") {
      newHealth = Math.max(health - 10, 0);
      setActionAnimText("");
      setActionAnimTrigger(false);
    } else {
      newHealth = Math.max(health - 10, 0);
      setActionAnimText("");
      setActionAnimTrigger(false);
    }
    setYesScale(scale);
    setHealth(newHealth);
    setNoIdx(nextIdx);
    setDogBiteTrigger(dogBite);
    if (newHealth === 0) {
      setShowHealthWarning(true);
      setTimeout(() => setShowHealthWarning(false), 1000);
    }
  };

  const handleDogBiteEnd = () => setDogBiteTrigger(false);
  const handleActionAnimEnd = () => setActionAnimTrigger(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (page === "main") {
        if (e.key === "Enter" || e.key === " ") {
          const active = document.activeElement;
          if (active && active.getAttribute("aria-label") === "Yes, forgive him") {
            handleYes();
          } else if (active && active.getAttribute("aria-label") === "No, do not forgive") {
            handleNo();
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [page, noIdx, health, yesScale]);

  const noText = noButtonTexts.length > 0 ? noButtonTexts[noIdx] : "No";

  // ...existing code...
  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <InitialPopup open={showPopup} onContinue={() => setShowPopup(false)} />
      {showHealthWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-red-700 text-yellow-200 text-2xl font-bold rounded-2xl shadow-2xl p-10 max-w-xl w-full flex flex-col items-center border-4 border-yellow-400">
            He is dying without your love, please save him by forgiving. only you can save him
          </div>
        </div>
      )}
      {!showPopup && (
        page === "main" ? (
          <div className="relative">
            <MainPage
              health={health}
              onYes={handleYes}
              onNo={handleNo}
              noText={noText}
              yesScale={yesScale}
              dogBiteTrigger={dogBiteTrigger}
              onDogBiteEnd={handleDogBiteEnd}
            />
            {/* ActionAnimation overlay */}
            <ActionAnimation
              trigger={actionAnimTrigger}
              action={actionAnimText}
              onEnd={handleActionAnimEnd}
            />
          </div>
        ) : (
          <SuccessPage />
        )
      )}
    </div>
  );
};

export default App;
