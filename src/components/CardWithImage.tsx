import React from "react";

interface CardWithImageProps {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const CardWithImage: React.FC<CardWithImageProps> = ({
  image,
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="flex flex-col items-center text-center pb-[20px]">
      <img
        src={image}
        alt={title}
        className="w-[180px] h-[150px] object-contain mb-[10px]"
      />
      <h3 className="text-[20px] font-sfpro font-medium text-[#FFFFFF] mb-[5px]">
        {title}
      </h3>
      <p className="text-[14px] text-[#FFFFFF] font-sfpro mb-[10px]">
        {subtitle}
      </p>
      <button
        onClick={onButtonClick}
        className="px-[15px] py-[5px] bg-[#FFBB24] text-[#212121] text-[14px] font-medium font-sfpro rounded-full active:scale-95 transition"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CardWithImage;
