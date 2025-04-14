import React from "react";
import { useTheme } from "../contexts/ThemeContext"; // добавлено

interface InfoRowProps {
  icon: string | React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  rightContent?: React.ReactNode;
  onClick?: () => void;
}

const gradients = [
  "from-[#FF6A5E] to-[#FFB86C]",
  "from-[#50A8EB] to-[#9EE3FF]",
  "from-[#A076F9] to-[#D5A3FF]",
  "from-[#29C780] to-[#A0F8C2]",
];

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0]?.toUpperCase())
    .join("")
    .slice(0, 2);
};

const InfoRow: React.FC<InfoRowProps> = ({
  icon,
  title,
  subtitle,
  rightContent,
  onClick,
}) => {
  const { theme } = useTheme(); // получаем цвета темы

  const isIconString = typeof icon === "string";
  const showInitial = isIconString ? icon.trim() === "" : false;

  const titleText = typeof title === "string" ? title : "";
  const gradient = gradients[titleText.length % gradients.length];

  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between w-full py-[10px] pl-[0px] cursor-pointer"
    >
      <div className="flex items-center">
        {showInitial ? (
          <div
            className={`w-[45px] h-[45px] rounded-full flex items-center justify-center text-white text-[16px] font-semibold font-sfpro bg-gradient-to-br ${gradient}`}
          >
            {typeof title === "string" ? getInitials(title) : "•"}
          </div>
        ) : isIconString ? (
          <div
            className="w-[45px] h-[45px] bg-no-repeat bg-center bg-contain rounded-full"
            style={{ backgroundImage: `url('${icon}')` }}
          />
        ) : (
          <div className="w-[45px] h-[45px] flex items-center justify-center">
            {icon}
          </div>
        )}

        <div className="ml-[15px] flex flex-col items-start text-left">
          <span
            className="text-[16px] font-medium font-sfpro"
            style={{ color: theme.text }}
          >
            {title}
          </span>
          {subtitle && (
            <span
              className="text-[15px] font-normal font-sfpro mt-[2px]"
              style={{ color: theme.hint }}
            >
              {subtitle}
            </span>
          )}
        </div>
      </div>
      {rightContent && <div className="pr-[0px]">{rightContent}</div>}
    </div>
  );
};

export default InfoRow;





