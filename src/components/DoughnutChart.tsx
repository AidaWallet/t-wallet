import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface DoughnutChartProps {
  tokensValue: number;
  nftValue: number;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ tokensValue, nftValue }) => {
  const total = tokensValue + nftValue;

  const data = {
    labels: ["Токены", "NFT"],
    datasets: [
      {
        data: [tokensValue, nftValue],
        backgroundColor: ["#50A8EB", "#A076F9"],
        hoverOffset: 0,
        borderWidth: 0, // ✅ Убираем бордер
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    cutout: "50%",
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
      datalabels: {
        color: "#FFFFFF",
        font: {
          weight: "bold",
          size: 14,
        },
        formatter: (value: number) => {
          const percent = ((value / total) * 100).toFixed(0);
          return `${percent}%`;
        },
      },
    },
    hover: { mode: null },
    animation: {
      animateRotate: true,
      duration: 800,
    },
  };

  return (
    <div className="w-[200px] h-[200px] mx-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;




