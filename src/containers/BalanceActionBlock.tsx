import React, { useState } from "react";
import DoubleTextBlock from "../components/DoubleTextBlock";
import TripleActionButtons from "../components/TripleActionButtons";
import TrendBadge from "../components/TrendBadge";

interface ActionItem {
  icon: string;
  text: string;
  onClick?: () => void;
  withFrame?: boolean;
  frameColor?: string;
}

interface BalanceActionBlockProps {
  actions: ActionItem[];
}

const BalanceActionBlock: React.FC<BalanceActionBlockProps> = ({ actions }) => {
  const [isAllTime, setIsAllTime] = useState(true);

  const handleToggle = () => {
    setIsAllTime(prev => !prev);
  };

  return (
    <div
      className="flex flex-col gap-[5px] w-full px-4 py-4 pb-0"
      style={{
        background: 'linear-gradient(to bottom, #212121 75.98%, rgba(255,255,255,0) 100%)',
      }}
    >
      <DoubleTextBlock topText="Ваш баланс" bottomText="67,087 $" />

      <TrendBadge
        value={3.67}
        percent={1.45}
        showToggle
        toggleLabel={isAllTime ? "За все время" : "За сегодня"}
        onToggle={handleToggle}
      />

      <div className="tw-container px-[30px] py-[15px] mt-[15px]">
        <TripleActionButtons actions={actions} />
      </div>
    </div>
  );
};

export default BalanceActionBlock;





