import React, { useState, useRef } from "react";
import DoubleTextBlock from "../components/DoubleTextBlock";
import ChartComponent from "../components/ChartComponent";
import TrendBadge from "../components/TrendBadge";

const TokenChartContainer = () => {
  const [hoverPrice, setHoverPrice] = useState("0.00 $");
  const [priceChange, setPriceChange] = useState(0);
  const [percentChange, setPercentChange] = useState(0);
  const [toggleLabel, setToggleLabel] = useState("За все время");

  const chartRef = useRef(null);

  return (
    <div
      className="flex flex-col w-full px-4 py-4 pb-28"
      style={{
        background: 'linear-gradient(to bottom, #212121 75.98%, rgba(255,255,255,0) 100%)',
      }}
    >
      <DoubleTextBlock topText="Цена токена" bottomText={hoverPrice} />

      <div className="mt-[5px]">
        <TrendBadge
          value={priceChange}
          percent={percentChange}
          toggleLabel={toggleLabel}
          showToggle
          onToggle={() => chartRef.current?.toggleTimeFrame()}
        />
      </div>

      <div className="mt-[15px]">
        <ChartComponent
          ref={chartRef}
          setHoverPrice={setHoverPrice}
          setPriceChange={setPriceChange}
          setPercentChange={setPercentChange}
          setToggleLabel={setToggleLabel}
        />
      </div>
    </div>
  );
};

export default TokenChartContainer;


