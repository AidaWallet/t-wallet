import React from "react";

interface BannerBlockProps {
  title: string;
  subtitle: string;
  image?: string | null;
  customContent?: React.ReactNode;
  backgroundColor: string;
  textColor: string;
  gradientFrom?: string;  // 🌈 начало градиента
  gradientTo?: string;    // 🌈 конец градиента
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
      className="relative rounded-[20px] px-[20px] py-[15px] mx-[15px] overflow-hidden transition-all active:scale-[0.97] cursor-pointer"
      style={bgStyle}
    >
      {/* Текстовый блок с отступом под картинку */}
      <div className="flex flex-col justify-center z-10 relative pr-[100px]">
        <span
          className="text-[16px] font-medium font-sfpro mb-[10px]"
          style={{ color: textColor }}
        >
          {title}
        </span>
        <span
          className="text-[13px] font-medium font-sfpro px-[10px] py-[3px] rounded-[40px] inline-block w-fit active:scale-[0.96] transition-all"
          style={{
            backgroundColor: textColor,
            color: (gradientFrom || gradientTo) ? "#212121" : backgroundColor,
          }}
        >
          {subtitle}
        </span>
      </div>

      {/* Картинка поверх края */}
      {customContent ? (
        <div className="absolute right-[10px] bottom-[0px] z-0">
          {customContent}
        </div>
      ) : image ? (
        <img
          src={image}
          alt="banner"
          className="absolute right-[-15px] bottom-[-15px] w-[120px] h-[120px] z-0 object-contain"
        />
      ) : null}
    </div>
  );
};

export default BannerBlock;




