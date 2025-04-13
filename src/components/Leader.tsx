import React from "react";

interface LeaderProps {
  icon?: string;
  title: string;
  subtitle?: string;
  imageClassName?: string;
  textColor?: string;
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

const Leader: React.FC<LeaderProps> = ({
  icon,
  title,
  subtitle,
  imageClassName,
  textColor = "text-[#212121]", // по умолчанию — тёмный текст
}) => {
  const gradient = gradients[title.length % gradients.length];

  return (
    <div className="flex flex-col items-center text-center gap-[8px]">
      {icon && icon.trim() !== "" ? (
        <img
          src={icon}
          alt={title}
          className={`object-cover rounded-full ${imageClassName || "w-[50px] h-[50px]"}`}
        />
      ) : (
        <div
          className={`rounded-full flex items-center justify-center text-white text-[16px] font-semibold font-sfpro bg-gradient-to-br ${imageClassName || "w-[50px] h-[50px]"} ${gradient}`}
        >
          {getInitials(title)}
        </div>
      )}

      <span className={`text-[15px] font-sfpro font-medium ${textColor}`}>
        {title}
      </span>

      {subtitle && (
        <span className="text-[13px] font-sfpro font-medium text-[#212121] bg-[#EFEFF4] px-[10px] py-[4px] rounded-full">
          {subtitle}
        </span>
      )}
    </div>
  );
};

export default Leader;

