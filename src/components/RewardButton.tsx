import React, { useState } from "react";
import confetti from "canvas-confetti";
import { useBonus } from "../contexts/BonusContext";
import { useUser } from "../contexts/UserContext";

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
  const { setBonus } = useBonus();
  const { user } = useUser();

  const isClaimed = state === "claimed";

  const launchConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      zIndex: 9999,
    });
  };

  const handleClick = async () => {
    if (isClaimed) return;

    if (state === "start" && link) {
      window.open(link, "_blank", "noopener,noreferrer");
      setState("ready");
      return;
    }

    if (state === "ready") {
      try {
        const res = await fetch("http://localhost:3001/bonus/collect", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: user?.id,
            amount: rewardAmount || 0,
          }),
        });

        const data = await res.json();

        setBonus(data.bonus); // ✅ только обновляем бонус с сервера
        launchConfetti();
        onClaim?.();
        setState("claimed");
      } catch (err) {
        console.error("❌ Ошибка при начислении бонуса:", err);
      }
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




