import React from "react";
import Divider from "../components/Divider";
import InfoRow from "../components/InfoRow";

export interface TokenListItem {
  icon: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  rightContent?: React.ReactNode;
  onClick?: () => void;
}

interface TokenListContainerProps {
  header: string;
  headerRightContent?: React.ReactNode;
  items: TokenListItem[];
  backgroundColor?: string;
  textColor?: string;
}

const TokenListContainer: React.FC<TokenListContainerProps> = ({
  header,
  headerRightContent,
  items,
  backgroundColor = "#FFFFFF",
  textColor = "#212121",
}) => {
  return (
    <div
      className="tw-container rounded-[20px] px-[15px] py-[15px] mx-[15px] flex flex-col gap-[10px]"
      style={{ backgroundColor }}
    >
      <div className="flex justify-between items-center mb-[0px]">
        <span
          className="text-[16px] font-sfpro font-medium"
          style={{ color: textColor }}
        >
          {header}
        </span>
        {headerRightContent}
      </div>

      <div className="flex flex-col">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <InfoRow
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              rightContent={item.rightContent}
              onClick={item.onClick}
            />
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



