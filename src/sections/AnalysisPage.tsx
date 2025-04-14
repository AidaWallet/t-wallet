import React from "react";
import DoughnutChart from "../components/DoughnutChart";
import TokenListContainer from "../containers/TokenListContainer";
import BannerBlock from "../components/BannerBlock";
import { useMiniAppUI } from "../hooks/useMiniAppUI";
import { useTheme } from "../contexts/ThemeContext"; // добавили

const AnalysisPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const { theme } = useTheme();

  useMiniAppUI({
    headerColor: theme.bg,
    backgroundColor: theme.bg,
    bottomBarColor: theme.bg,
    showBackButton: true,
    onBack,
  });

  const tokensValue = 900;
  const nftValue = 300;

  return (
    <div className="flex flex-col gap-[15px] py-[20px]" style={{ backgroundColor: theme.bg }}>
      <DoughnutChart tokensValue={tokensValue} nftValue={nftValue} />

      <BannerBlock
        title="Анализ токена на основе искусственного интеллекта"
        subtitle="Запустить"
        image="/images/chart.png"
        backgroundColor="#BEE9D6"
        textColor={theme.text}
      />

      <TokenListContainer
        header="Распределение активов"
        backgroundColor={theme.container}
        textColor={theme.text}
        items={[
          {
            icon: "/icons/sir.svg",
            title: "Токены",
            subtitle: "",
            rightContent: (
              <span className="font-sfpro text-[15px]" style={{ color: theme.text }}>
                300 $
              </span>
            ),
          },
          {
            icon: "/icons/blue.svg",
            title: "NFT",
            subtitle: "",
            rightContent: (
              <span className="font-sfpro text-[15px]" style={{ color: theme.text }}>
                900 $
              </span>
            ),
          },
        ]}
      />
    </div>
  );
};

export default AnalysisPage;


