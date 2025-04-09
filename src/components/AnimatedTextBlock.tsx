import React from "react";
import CountUp from "react-countup";

interface AnimatedTextBlockProps {
  topText: string;
  value: number;
  suffix?: string;
}

const AnimatedTextBlock: React.FC<AnimatedTextBlockProps> = ({ topText, value, suffix = " NP" }) => {
  return (
    <div className="px-[0px] text-left text-white">
      <p className="text-[16px] font-medium font-sfpro">{topText}</p>
      <p className="text-[36px] font-bold font-sfpro mt-[1px]">
        <CountUp
          end={value}
          duration={1.5}
          decimals={2}
          separator=" "
          suffix={suffix}
        />
      </p>
    </div>
  );
};

export default AnimatedTextBlock;
