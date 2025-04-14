import React from "react";
import { useTheme } from "../contexts/ThemeContext";

interface IconButtonProps {
  icon: string;
  text: string;
  onClick?: () => void;
  withFrame?: boolean;
  frameColor?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  text,
  onClick,
  withFrame = false,
  frameColor,
}) => {
  const { theme } = useTheme();

  const resolvedFrameColor = withFrame
    ? frameColor || theme.container
    : "transparent";

  const resolvedTextColor = withFrame ? theme.text : theme.accent;

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center"
    >
      <div
        className={withFrame ? "px-[30px] py-[10px] rounded-[10px]" : ""}
        style={{
          backgroundColor: resolvedFrameColor,
        }}
      >
        <img src={icon} alt={text} className="w-[35px] h-[25px]" />
      </div>

      <span
        className={`mt-[5px] font-sfpro text-center leading-[15px] max-w-[70px] whitespace-normal break-normal ${
          withFrame ? "text-[12px] font-normal" : "text-[13px] font-medium"
        }`}
        style={{ color: resolvedTextColor }}
      >
        {text}
      </span>
    </button>
  );
};

export default IconButton;






