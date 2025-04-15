import React from "react";

interface BannerBlockProps {
  title: string;
  subtitle: string;
  image?: string | null;
  customContent?: React.ReactNode;
  backgroundColor: string;
  textColor: string;
  gradientFrom?: string;
  gradientTo?: string;
  onClick?: () => void;
}

const BannerBlock: React.FC<BannerBlockProps> = ({
  title,
  subtitle,
  image,
  customContent,
  backgroundColor,
  textColor,
  gradientFrom,
  gradientTo,
  onClick,
}) => {
  const bgStyle =
    gradientFrom && gradientTo
      ? { background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` }
      : { backgroundColor };

  return (
    <div
      onClick={onClick}
      className="relative rounded-[20px] px-[20px] py-[15px] mx-[15px] overflow-hidden transition-all cursor-pointer"
      style={bgStyle}
    >
      {/* Текстовая часть с отступом справа под картинку */}
      <div className="flex flex-col justify-center z-10 relative pr-[100px]">
        <span
          className="text-[16px] font-medium font-sfpro mb-[5px]"
          style={{ color: textColor }}
        >
          {title}
        </span>

        <div
          className="flex items-center gap-[6px] text-[13px] font-medium font-sfpro"
          style={{ color: textColor }}
        >
          <span>{subtitle}</span>
          <span className="text-[15px]">→</span>
        </div>
      </div>

      {/* Картинка вне отступов */}
      {customContent ? (
        <div className="absolute right-[10px] bottom-[0px] z-0">
          {customContent}
        </div>
      ) : image ? (
        <img
          src={image}
          alt="banner"
          className="absolute right-[-15px] bottom-[-15px] w-[110px] h-[110px] z-0 object-contain"
        />
      ) : null}
    </div>
  );
};

export default BannerBlock;





