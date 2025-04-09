import React from "react";

interface HeadlinerProps {
  text: string | React.ReactNode;
  rightContent?: React.ReactNode;
}

const Headliner: React.FC<HeadlinerProps> = ({ text, rightContent }) => {
  return (
    <div className="px-[0px] pt-[10px] pb-[5px] flex justify-between items-center w-full">
      <div className="text-left">
        {typeof text === "string" ? (
          <p className="text-[16px] text-[#212121] font-medium font-sfpro">{text}</p>
        ) : (
          text
        )}
      </div>
      {rightContent && <div>{rightContent}</div>}
    </div>
  );
};

export default Headliner;

