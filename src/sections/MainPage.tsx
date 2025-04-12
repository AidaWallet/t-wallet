import React from "react";
import BalanceActionBlock from "../containers/BalanceActionBlock";
import TokenListContainer from "../containers/TokenListContainer";
import TrendBadge from "../components/TrendBadge";
import TripleActionButtons from "../components/TripleActionButtons";
import BannerBlock from "../components/BannerBlock";
import { useMiniAppUI } from "../hooks/useMiniAppUI";

interface MainPageProps {
  onSelectSwiftPage?: () => void;
  onSelectBonusPage?: () => void;
}

const MainPage: React.FC<MainPageProps> = ({ onSelectSwiftPage, onSelectBonusPage }) => {
  useMiniAppUI({
    headerColor: "#212121",
    bottomBarColor: "#ffffff",
    backgroundColor: "#F8F8FB",
  });

  const topActions = [
    { icon: "/icons/buy.svg", text: "Купить" },
    { icon: "/icons/exchange.svg", text: "Обменять" },
    { icon: "/icons/add.svg", text: "Получить" },
  ];

  const extraActions = [
    { icon: "/icons/send.svg", text: "По адресу", withFrame: true },
    { icon: "/icons/stelegram.svg", text: "В телеграм", withFrame: true },
    { icon: "/icons/qr.svg", text: "QR код", withFrame: true },
  ];

  return (
    <div className="flex flex-col gap-[15px] pb-[20px]">
      <BalanceActionBlock actions={topActions} />

      <div className="px-[25px] pt-[10px]">
        <TripleActionButtons actions={extraActions} />
      </div>

      <TokenListContainer
        header="20,04 $"
        headerRightContent={<TrendBadge value={3.5} percent={1.1} />}
        items={[
          {
            icon: "/icons/ton.svg",
            title: "Кошелек",
            subtitle: "Toncoin",
            rightContent: (
              <img
                src="/icons/bounds.svg"
                alt="bounds"
                className="w-[30px] h-[40px]"
              />
            ),
            onClick: onSelectSwiftPage,
          },
        ]}
      />

      <BannerBlock
        title="Анализ токена на основе искусственного интеллекта"
        subtitle="Запустить"
        image="/images/chart.png"
        backgroundColor="#BEE9D6"
        textColor="#000000"
      />

      <TokenListContainer
        header="0,00 NP"
        items={[
          {
            icon: "/icons/bonus.svg",
            title: "Бонусы",
            rightContent: (
              <img
                src="/icons/bounds.svg"
                alt="bounds"
                className="w-[45px] h-[45px]"
              />
            ),
            onClick: onSelectBonusPage,
          },
        ]}
      />

      <TokenListContainer
        header="20,97 $"
        headerRightContent={<TrendBadge value={3.5} percent={1.1} />}
        items={[
          {
            icon: "/icons/income.svg",
            title: "Доход",
            subtitle: "Статистика дохода",
            rightContent: (
              <img
                src="/icons/bounds.svg"
                alt="bounds"
                className="w-[30px] h-[40px]"
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default MainPage;





