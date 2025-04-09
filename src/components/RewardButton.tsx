import React, { useState } from "react";
import confetti from "canvas-confetti";
import { useBonus } from "../contexts/BonusContext";

interface RewardButtonProps {
  initialState: "start" | "ready" | "claimed" | "copy" | "get";
  onClaim?: () => void;
  link?: string;
  rewardAmount?: number;
  copyValue?: string;
  onGet?: () => void;
}

const RewardButton: React.FC<RewardButtonProps> = ({
  initialState,
  onClaim,
  link,
  rewardAmount,
  copyValue,
  onGet,
}) => {
  const [state, setState] = useState(initialState);
  const { addBonus } = useBonus();

  const isClaimed = state === "claimed";

  const launchConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      zIndex: 9999,
    });
  };

  const handleClick = () => {
    if (isClaimed) return;

    if (state === "start" && link) {
      window.open(link, "_blank", "noopener,noreferrer");
      setState("ready");
      return;
    }

    if (state === "ready") {
      launchConfetti();
      addBonus(rewardAmount || 0);
      onClaim?.();
      setState("claimed");
      return;
    }

    if (state === "copy" && copyValue) {
      navigator.clipboard.writeText(copyValue);
      return;
    }

    if (state === "get") {
      onGet?.();
      return;
    }
  };

  const getButtonStyle = (): React.CSSProperties => {
    return {
      backgroundColor: isClaimed ? "#AAAAAA" : "#50A8EB",
      borderRadius: "7px",
      padding: "6px 14px",
      color: "#fff",
      fontFamily: "SF Pro Rounded, sans-serif",
      fontSize: "14px",
      fontWeight: 500,
      cursor: isClaimed ? "default" : "pointer",
      pointerEvents: isClaimed ? "none" : "auto",
      transition: "all 0.3s ease",
    };
  };

  const getButtonText = () => {
    if (state === "start") return "Start";
    if (state === "ready") return "Claim";
    if (state === "claimed") return "Claimed";
    if (state === "copy") return "Copy";
    if (state === "get") return "Get";
    return "";
  };

  return (
    <button style={getButtonStyle()} onClick={handleClick}>
      {getButtonText()}
    </button>
  );
};

export default RewardButton;


