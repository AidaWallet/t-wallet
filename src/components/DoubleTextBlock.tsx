import React from "react";

interface DoubleTextBlockProps {
  topText: string;
  bottomText: string;
}

const DoubleTextBlock = ({ topText, bottomText }: DoubleTextBlockProps) => {
  return (
    <div className="px-[0px] text-left text-white">
      <p className="text-[16px] font-medium font-sfpro">{topText}</p>
      <p className="text-[36px] font-bold font-sfpro mt-[1px]">{bottomText}</p>
    </div>
  );
};

export default DoubleTextBlock;


