import React from "react";
import BalanceActionBlock from "../containers/BalanceActionBlock";
import TokenListContainer from "../containers/TokenListContainer";
import TrendBadge from "../components/TrendBadge";
import TripleActionButtons from "../components/TripleActionButtons";
import BannerBlock from "../components/BannerBlock";
import { useMiniAppUI } from "../hooks/useMiniAppUI";
import { useTheme } from "../contexts/ThemeContext"; // заменили импорт темы

interface MainPageProps {
  onSelectSwiftPage?: () => void;
  onSelectBonusPage?: () => void;
}

const MainPage: React.FC<MainPageProps> = ({ onSelectSwiftPage, onSelectBonusPage }) => {
  const { theme } = useTheme(); // получаем тему из контекста

  useMiniAppUI({
    headerColor: "#212121",
    bottomBarColor: theme.bg,
    backgroundColor: theme.bg,
  });

  const topActions = [
    { icon: "/icons/buy.svg", text: "Купить" },
    { icon: "/icons/exchange.svg", text: "Обменять" },
    { icon: "/icons/add.svg", text: "Получить" },
  ];

  const extraActions = [
    { icon: "/icons/send.svg", text: "Отправить по адресу", withFrame: true },
    { icon: "/icons/stelegram.svg", text: "Отправить контакту", withFrame: true },
    { icon: "/icons/qr.svg", text: "Сканировать QR код", withFrame: true },
  ];

  return (
    <div className="flex flex-col gap-[15px] pb-[20px]" style={{ backgroundColor: theme.bg }}>
      <BalanceActionBlock actions={topActions} />

      <div className="px-[25px] pt-[10px]">
        <TripleActionButtons actions={extraActions} />
      </div>

      <TokenListContainer
        header="20,04 $"
        headerRightContent={<TrendBadge value={3.5} percent={1.1} />}
        backgroundColor={theme.container}
        textColor={theme.text}
        items={[
          {
            icon: "/icons/btc.svg",
            title: "Кошелек",
            rightContent: <img src="/icons/bounds.svg" alt="bounds" className="w-[30px] h-[40px]" />,
            onClick: onSelectSwiftPage,
          },
        ]}
      />

      <BannerBlock
        title="Зови друзей и получай до 250 долларов"
        subtitle="Перейти"
        image="/images/wallet.png"
        gradientFrom="#50A8EB"
        gradientTo="#A076F9"
        textColor="#FFFFFF"
      />

      <TokenListContainer
        header="0,00 NP"
        backgroundColor={theme.container}
        textColor={theme.text}
        items={[
          {
            icon: "/icons/bonus.svg",
            title: "Бонусы",
            rightContent: <img src="/icons/bounds.svg" alt="bounds" className="w-[45px] h-[45px]" />,
            onClick: onSelectBonusPage,
          },
        ]}
      />

      <TokenListContainer
        header="20,97 $"
        headerRightContent={<TrendBadge value={3.5} percent={1.1} />}
        backgroundColor={theme.container}
        textColor={theme.text}
        items={[
          {
            icon: "/icons/income.svg",
            title: "Доход",
            subtitle: "Статистика дохода",
            rightContent: <img src="/icons/bounds.svg" alt="bounds" className="w-[30px] h-[40px]" />,
          },
        ]}
      />
    </div>
  );
};

export default MainPage;









