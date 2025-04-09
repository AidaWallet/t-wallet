import React from "react";

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
  frameColor = "#F0F0F0",
}) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center"
    >
      <div
        className={withFrame ? "px-[30px] py-[10px] rounded-[10px]" : ""}
        style={{
          backgroundColor: withFrame ? frameColor : "transparent",
        }}
      >
        <img src={icon} alt={text} className="w-[35px] h-[25px]" />
      </div>

      <span className="text-[13px] font-medium font-sfpro mt-[5px] text-[#212121]">
        {text}
      </span>
    </button>
  );
};

export default IconButton;

