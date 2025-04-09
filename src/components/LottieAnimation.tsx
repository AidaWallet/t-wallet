import React from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
  animationData: object;  // Тип данных анимации
  width?: number;
  height?: number;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  width = 100,
  height = 100,
  loop = true,
  autoplay = true,
}) => {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={{ width, height }}
    />
  );
};

export default LottieAnimation;
