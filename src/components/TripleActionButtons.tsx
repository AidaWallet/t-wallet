import React from "react";
import IconButton from "./IconButton";

interface ActionItem {
  icon: string;
  text: string;
  onClick?: () => void;
  withFrame?: boolean;
  frameColor?: string;
}

interface TripleActionButtonsProps {
  actions: ActionItem[];
}

const TripleActionButtons: React.FC<TripleActionButtonsProps> = ({ actions }) => {
  return (
    <div className="flex justify-between items-center">
      {actions.map((action, index) => (
        <IconButton
          key={index}
          icon={action.icon}
          text={action.text}
          onClick={action.onClick}
          withFrame={action.withFrame}
          frameColor={action.frameColor}
        />
      ))}
    </div>
  );
};

export default TripleActionButtons;


