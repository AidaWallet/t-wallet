import React from "react";

interface InfoRowProps {
  icon: string;
  title: string;
  subtitle: string;
  rightContent?: React.ReactNode;
  onClick?: () => void;  // Добавляем поддержку onClick
}

const InfoRow: React.FC<InfoRowProps> = ({
  icon,
  title,
  subtitle,
  rightContent,
  onClick,  // Принимаем onClick как пропс
}) => {
  return (
    <div
      onClick={onClick}  // Применяем onClick к контейнеру
      className="flex items-center justify-between w-full py-[10px] pl-[0px] cursor-pointer"
    >
      <div className="flex items-center">
        <div
          className="w-[45px] h-[45px] bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: `url('${icon}')` }}
        />
        <div className="ml-[15px] flex flex-col items-start text-left">
          <span className="text-[16px] text-[#212121] font-medium font-sfpro">{title}</span>
          <span className="text-[15px] font-normal font-sfpro mt-[2px] text-[#AAAAAA]">
            {subtitle}
          </span>
        </div>
      </div>
      {rightContent && <div className="pr-[0px]">{rightContent}</div>}
    </div>
  );
};

export default InfoRow;



