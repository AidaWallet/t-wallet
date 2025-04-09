import React from "react";
import BannerBlock from "../components/BannerBlock";
import TokenListContainer from "../containers/TokenListContainer";
import LottieAnimation from "../components/LottieAnimation";
import animationData from "../lottie/chat.json"; // Здесь должен быть твой файл с анимацией

const SearchPage: React.FC = () => {
    
const tg = window.Telegram?.WebApp;
tg?.setHeaderColor?.("#F8F8FB");

  return (
    <div className="flex flex-col gap-[15px] py-[20px]">
      <BannerBlock
        title="Поиск по токенам"
        subtitle="Открой новые возможности"
        customContent={<LottieAnimation animationData={animationData} width={100} height={100} />}
        backgroundColor="#D6EAFE"
        textColor="#000000"
      />

      <TokenListContainer
        header="Результаты поиска"
        items={[
          {
            icon: "/icons/search-icon.svg",
            title: "Token 1",
            subtitle: "Описание токена 1",
            rightContent: <span>Подробнее</span>,
          },
          {
            icon: "/icons/search-icon.svg",
            title: "Token 2",
            subtitle: "Описание токена 2",
            rightContent: <span>Подробнее</span>,
          },
          {
            icon: "/icons/search-icon.svg",
            title: "Token 3",
            subtitle: "Описание токена 3",
            rightContent: <span>Подробнее</span>,
          },
        ]}
      />
    </div>
  );
};

export default SearchPage;
