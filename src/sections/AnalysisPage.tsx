import React from "react";
import DoughnutChart from "../components/DoughnutChart";
import TokenListContainer from "../containers/TokenListContainer";
import BannerBlock from "../components/BannerBlock";
import { useMiniAppUI } from "../hooks/useMiniAppUI";

const AnalysisPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  useMiniAppUI({
    headerColor: "#F8F8FB",
    backgroundColor: "#F8F8FB",
    bottomBarColor: "#ffffff",
    showBackButton: true,
    onBack,
  });

  const tokensValue = 900;
  const nftValue = 300;

  return (
    <div className="flex flex-col gap-[15px] py-[20px]">
      <DoughnutChart tokensValue={tokensValue} nftValue={nftValue} />

      <BannerBlock
        title="Анализ токена на основе искусственного интеллекта"
        subtitle="Запустить"
        image="/images/chart.png"
        backgroundColor="#BEE9D6"
        textColor="#000000"
      />

      <TokenListContainer
        header="Распределение активов"
        items={[
          {
            icon: "/icons/sir.svg",
            title: "Токены",
            subtitle: "",
            rightContent: (
              <span className="font-sfpro text-[15px] text-[#212121]">300 $</span>
            ),
          },
          {
            icon: "/icons/blue.svg",
            title: "NFT",
            subtitle: "",
            rightContent: (
              <span className="font-sfpro text-[15px] text-[#212121]">900 $</span>
            ),
          },
        ]}
      />
    </div>
  );
};

export default AnalysisPage;

