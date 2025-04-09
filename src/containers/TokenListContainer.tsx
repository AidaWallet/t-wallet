import React from "react";
import Divider from "../components/Divider"; // путь уточни по своему проекту

export interface TokenListItem {
  icon: string;
  title: string;
  subtitle?: string;
  rightContent?: React.ReactNode;
  onClick?: () => void;
}

interface TokenListContainerProps {
  header: string;
  headerRightContent?: React.ReactNode;
  items: TokenListItem[];
}

const TokenListContainer: React.FC<TokenListContainerProps> = ({
  header,
  headerRightContent,
  items,
}) => {
  return (
    <div className="tw-container rounded-[20px] px-[15px] py-[15px] mx-[15px] flex flex-col gap-[10px]">
      <div className="flex justify-between items-center mb-[0px]">
        <span className="text-[16px] font-sfpro font-medium text-[#212121]">{header}</span>
        {headerRightContent}
      </div>

      <div className="flex flex-col">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className="flex items-center justify-between py-[10px] cursor-pointer"
              onClick={item.onClick}
            >
              <div className="flex items-center gap-[15px]">
                <img src={item.icon} alt={item.title} className="w-[45px] h-[45px]" />
                <div className="flex flex-col">
                  <span className="text-[16px] font-sfpro font-medium text-[#212121]">
                    {item.title}
                  </span>
                  {item.subtitle && (
                    <span className="text-[15px] font-sfpro text-[#6D6D6D]">{item.subtitle}</span>
                  )}
                </div>
              </div>
              {item.rightContent}
            </div>

            {/* 👇 Дивайдер между элементами, кроме последнего */}
            {index < items.length - 1 && (
              <div className="pl-[65px] mr-[-15px]">
                <Divider />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TokenListContainer;




