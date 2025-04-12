import React, { useState } from "react";
import BalanceActionBlock from "../containers/BalanceActionBlock";
import TokenListContainer from "../containers/TokenListContainer";
import TrendBadge from "../components/TrendBadge";
import { useMiniAppUI } from "../hooks/useMiniAppUI";

// 🔹 Тип данных токена
interface TokenData {
  icon: string;
  title: string;
  subtitle: string;
  value: string;
}

// 🔹 Пропсы для страницы SwiftPage
interface SwiftPageProps {
  onSelectToken?: (token: TokenData) => void;
  onSelectAnalysis?: () => void;
  onBack?: () => void;
}

const SwiftPage: React.FC<SwiftPageProps> = ({
  onSelectToken,
  onSelectAnalysis,
  onBack,
}) => {
  const [trendAllTime, setTrendAllTime] = useState(true);

  useMiniAppUI({
    headerColor: "#212121",
    bottomBarColor: "#ffffff",
    backgroundColor: "#F8F8FB",
    showBackButton: true,
    onBack,
  });

  const actions = [
    { icon: "/icons/operations.svg", text: "Операции" },
    { icon: "/icons/add.svg", text: "Добавить токен" },
    {
      icon: "/icons/analysis.svg",
      text: "Аналитика",
      onClick: onSelectAnalysis,
    },
  ];

  return (
    <div className="flex flex-col gap-[15px] pb-[30px]">
      <BalanceActionBlock actions={actions} />

      <TokenListContainer
        header="20,03 $"
        headerRightContent={<TrendBadge value={3.5} percent={1.1} />}
        items={[
          {
            icon: "/icons/btc.svg",
            title: "Bitcoin",
            subtitle: "0,00003 BTC $",
            rightContent: (
              <span className="text-[#212121] text-[15px] font-medium font-sfpro">
                67,08 $
              </span>
            ),
            onClick: () =>
              onSelectToken?.({
                icon: "/icons/btc.svg",
                title: "Bitcoin",
                subtitle: "0,00003 BTC $",
                value: "67,08 $",
              }),
          },
          {
            icon: "/icons/eth.svg",
            title: "Etherium",
            subtitle: "0,08 ETH $",
            rightContent: (
              <span className="text-[15px] font-medium font-sfpro text-[#212121]">
                123,06 $
              </span>
            ),
            onClick: () =>
              onSelectToken?.({
                icon: "/icons/eth.svg",
                title: "Etherium",
                subtitle: "0,08 ETH $",
                value: "123,06 $",
              }),
          },
          {
            icon: "/icons/sol.svg",
            title: "Solana",
            subtitle: "0.12 SOL",
            rightContent: (
              <span className="text-[15px] font-medium font-sfpro text-[#212121]">
                14,09 $
              </span>
            ),
            onClick: () =>
              onSelectToken?.({
                icon: "/icons/sol.svg",
                title: "Solana",
                subtitle: "0.12 SOL",
                value: "14,09 $",
              }),
          },
        ]}
      />
    </div>
  );
};

export default SwiftPage;






