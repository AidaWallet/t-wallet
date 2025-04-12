// @ts-nocheck
import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  forwardRef,
  useImperativeHandle
} from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './ChartComponent.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const generateRandomData = (count) => {
  return Array.from({ length: count }, () => Math.random() * 4 + 2);
};

const getLineColor = (data) => {
  const startPrice = data[0];
  const endPrice = data[data.length - 1];
  return endPrice >= startPrice ? '#62FE72' : '#FE6265';
};

const generateDates = (count) => {
  const endDate = new Date();
  return Array.from({ length: count }, (_, i) => {
    const date = new Date(endDate);
    date.setDate(endDate.getDate() - (count - 1 - i));
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  });
};

const ChartComponent = forwardRef(({ setHoverPrice, setPriceChange, setPercentChange, setToggleLabel }, ref) => {
  const [timeFrame, setTimeFrame] = useState('allTime');
  const chartRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const allTimeData = useMemo(() => generateRandomData(30), []);
  const oneDayData = useMemo(() => generateRandomData(24), []);
  const allTimeDates = useMemo(() => generateDates(30), []);
  const oneDayDates = useMemo(() => generateDates(24), []);

  const currentData = timeFrame === 'allTime' ? allTimeData : oneDayData;
  const currentLabels = timeFrame === 'allTime' ? allTimeDates : oneDayDates;
  const lineColor = getLineColor(currentData);

  const chartData = useMemo(() => ({
    labels: currentLabels,
    datasets: [{
      label: 'TON Price',
      data: currentData,
      borderColor: lineColor,
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 0,
      segment: {
        borderColor: ctx => {
          if (hoverIndex === -1) return lineColor;
          return ctx.p0DataIndex >= hoverIndex ? '#AAAAAA' : lineColor;
        }
      }
    }]
  }), [currentData, currentLabels, lineColor, hoverIndex]);

  const toggleTimeFrame = useCallback(() => {
    setTimeFrame(prev => {
      const next = prev === 'allTime' ? 'oneDay' : 'allTime';
      const nextData = next === 'allTime' ? allTimeData : oneDayData;
      const delta = nextData[nextData.length - 1] - nextData[0];
      setHoverPrice(`${nextData[nextData.length - 1].toFixed(2)} $`);
      setPriceChange(delta);
      setPercentChange((delta / nextData[0]) * 100);
      setToggleLabel(next === 'allTime' ? 'За все время' : 'За один день');
      setHoverIndex(-1);
      return next;
    });
  }, [allTimeData, oneDayData]);

  useImperativeHandle(ref, () => ({
    toggleTimeFrame
  }));

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    onHover: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const price = currentData[index];
        setHoverPrice(`${price.toFixed(2)} $`);
      } else {
        setHoverPrice(`${currentData.at(-1).toFixed(2)} $`);
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      datalabels: { display: false }, // 🔧 фикс
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart',
    },
    layout: {
      padding: {
        left: -15,
        right: -15,
      }
    },
  }), [currentData]);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart && chart.canvas) {
      const canvas = chart.canvas;

      const handleMouseMove = (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const dataIndex = Math.round((x / rect.width) * (chartData.labels.length - 1));

        if (dataIndex >= 0 && dataIndex < chartData.labels.length) {
          setHoverIndex(dataIndex);
          const price = chartData.datasets[0].data[dataIndex].toFixed(3);
          const delta = price - chartData.datasets[0].data[0];
          setHoverPrice(price + " $");
          setPriceChange(delta);
          setPercentChange((delta / chartData.datasets[0].data[0]) * 100);
          chart.update('none');
        }
      };

      const handleMouseLeave = () => {
        setHoverIndex(-1);
        const delta = chartData.datasets[0].data.at(-1) - chartData.datasets[0].data[0];
        setHoverPrice(chartData.datasets[0].data.at(-1).toFixed(2) + " $");
        setPriceChange(delta);
        setPercentChange((delta / chartData.datasets[0].data[0]) * 100);
        chart.update('none');
      };

      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [chartData]);

  return (
    <div className="chart-component">
      <div className="chart-container">
        <Line ref={chartRef} data={chartData} options={options} />
      </div>
    </div>
  );
});

export default ChartComponent;
