import React, { useState } from "react";
import BalanceActionBlock from "../containers/BalanceActionBlock";
import TokenListContainer from "../containers/TokenListContainer";
import TrendBadge from "../components/TrendBadge";

const SwiftPage: React.FC<{ onSelectTokenPage?: () => void }> = ({ onSelectTokenPage }) => {
  const [trendAllTime, setTrendAllTime] = useState(true);
  
      // Инициализация телеграм веб приложения
  const tg = window.Telegram?.WebApp;
  
  // Измени цвет header
  tg?.setHeaderColor('#212121');

  const actions = [
    { icon: "/icons/operations.svg", text: "Операции", },
    { icon: "/icons/add.svg", text: "Добавить токен", },
    { icon: "/icons/receive.svg", text: "Пополнить", },
  ];

  return (
    <div className="flex flex-col gap-[15px] pb-[30px]">
      <BalanceActionBlock actions={actions} />

      <TokenListContainer
        header="20,03 $"
        headerRightContent={<TrendBadge value={3.5} percent={1.1} />}
        items={[
          {
            icon: "/icons/ton.svg",
            title: "TON",
            subtitle: "20,980 $",
            rightContent: (
              <span className="text-[#212121] text-[15px] font-medium font-sfpro">67,087 $</span>
            ),
            onClick: onSelectTokenPage,
          },
          {
            icon: "/icons/eth.svg",
            title: "ETH",
            subtitle: "1,200 $",
            rightContent: (
              <span className="text-[15px] font-medium font-sfpro text-[#212121]">5,100 $</span>
            ),
          },
          {
            icon: "/icons/btc.svg",
            title: "BTC",
            subtitle: "0.25 BTC",
            rightContent: (
              <span className="text-[15px] font-medium font-sfpro text-[#212121]">14,600 $</span>
            ),
          },
          {
            icon: "/icons/usdt.svg",
            title: "USDT",
            subtitle: "10,000 $",
            rightContent: (
              <span className="text-[15px] font-medium font-sfpro text-[#212121]">10,000 $</span>
            ),
          },
        ]}
      />
    </div>
  );
};

export default SwiftPage;


