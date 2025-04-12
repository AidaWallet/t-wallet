import React from "react";
import BonusBalanceBlock from "../containers/BonusBalanceBlock";
import BannerBlock from "../components/BannerBlock";
import TokenListContainer from "../containers/TokenListContainer";
import RewardButton from "../components/RewardButton";
import { useMiniAppUI } from "../hooks/useMiniAppUI";

const BonusPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  useMiniAppUI({
    headerColor: "#212121",
    bottomBarColor: "#ffffff",
    backgroundColor: "#F8F8FB",
    showBackButton: true,
    onBack,
  });

  return (
    <div className="flex flex-col gap-[15px] pb-[30px]">
      <BonusBalanceBlock />

      <BannerBlock
        title="Участвуйте в турнире и получите до 250 USDT"
        subtitle="Перейти"
        image="/images/cup.png"
        backgroundColor="#E9DEBE"
        textColor="#212121"
      />

      <TokenListContainer
        header="Дополнительные задачи"
        items={[
          {
            icon: "/icons/bgram.svg",
            title: "Подписаться",
            subtitle: "+20 NP",
            rightContent: (
              <RewardButton
                initialState="start"
                link="https://t.me/BivreostBot?start=ref_user123"
                rewardAmount={20}
                onClaim={() => console.log("Бонус за копирование ссылки")}
              />
            ),
          },
          {
            icon: "/icons/story.svg",
            title: "Поделиться",
            subtitle: "+50 NP",
            rightContent: (
              <RewardButton
                initialState="start"
                link="https://t.me/BivreostBot?start=premium"
                rewardAmount={50}
                onClaim={() => console.log("Подписка активирована")}
              />
            ),
          },
          {
            icon: "/icons/x.svg",
            title: "Подписаться",
            subtitle: "+20 NP",
            rightContent: (
              <RewardButton
                initialState="start"
                link="https://t.me/BivreostBot?start=ref_user123"
                rewardAmount={20}
                onClaim={() => console.log("Бонус за копирование ссылки")}
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default BonusPage;

