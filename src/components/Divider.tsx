import React from "react";

interface DividerProps {
  color?: string;
  thickness?: string;
}

const Divider: React.FC<DividerProps> = ({
  color = "rgba(0, 0, 0, 0.08)", // чёрный с прозрачностью 8%
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




