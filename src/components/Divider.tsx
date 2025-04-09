import React from "react";

interface DividerProps {
  color?: string;
  thickness?: string;
}

const Divider: React.FC<DividerProps> = ({
  color = "#EFEFF4",
  thickness = "1px",
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: thickness,
        backgroundColor: color,
      }}
    />
  );
};

export default Divider;

