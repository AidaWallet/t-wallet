import React from "react";

interface BannerBlockProps {
  title: string;
  subtitle: string;
  image?: string | null;
  customContent?: React.ReactNode;
  backgroundColor: string;
  textColor: string;
  onClick?: () => void; // 👈 новый проп
}

const BannerBlock: React.FC<BannerBlockProps> = ({
  title,
  subtitle,
  image,
  customContent,
  backgroundColor,
  textColor,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-[20px] px-[20px] py-[15px] flex justify-between items-center mx-[15px] transition-all active:scale-[0.97] cursor-pointer`}
      style={{ backgroundColor }}
    >
      <div className="flex flex-col">
        <span className="text-[16px] font-medium font-sfpro" style={{ color: textColor }}>
          {title}
        </span>
        <span className="text-[14px] font-regular font-sfpro mt-[4px]" style={{ color: textColor }}>
          {subtitle}
        </span>
      </div>

      <div className="flex-shrink-0">
        {customContent ? (
          customContent
        ) : image ? (
          <img src={image} alt="banner" className="w-[80px] h-[80px] object-contain" />
        ) : null}
      </div>
    </div>
  );
};

export default BannerBlock;

