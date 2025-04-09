import React from "react";

interface TrendBadgeProps {
  value: number;
  percent: number;
  showToggle?: boolean;
  toggleLabel?: string;
  onToggle?: () => void;
}

const TrendBadge: React.FC<TrendBadgeProps> = ({
  value,
  percent,
  showToggle = false,
  toggleLabel = "За все время",
  onToggle,
}) => {
  const isPositive = value >= 0;
  const bgColor = isPositive ? "rgba(0, 136, 79, 0.3)" : "rgba(254, 98, 101, 0.3)";
  const textColor = isPositive ? "#27BE4F" : "#FE6265";
  const sign = isPositive ? "+" : "";

  return (
    <div className="flex items-center gap-[10px]">
      <div
        className="px-[8px] py-[2px] rounded-[20px]"
        style={{ backgroundColor: bgColor }}
      >
        <span
          className="flex items-center text-[13px] font-medium font-sfpro"
          style={{ color: textColor }}
        >
          {sign}{value.toFixed(2)} $ {sign}{percent.toFixed(2)}%
        </span>
      </div>

      {showToggle && (
        <button
          onClick={onToggle}
          className="text-[13px] font-medium font-sfpro"
          style={{ color: "#AAAAAA" }}
        >
          {toggleLabel}
        </button>
      )}
    </div>
  );
};

export default TrendBadge;

