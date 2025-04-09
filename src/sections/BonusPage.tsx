import React, { useEffect } from "react";
import BonusBalanceBlock from "../containers/BonusBalanceBlock";
import BannerBlock from "../components/BannerBlock";
import TokenListContainer from "../containers/TokenListContainer";
import RewardButton from "../components/RewardButton";

const BonusPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    tg?.setHeaderColor?.("#212121");

    tg?.BackButton.show();

    if (onBack) {
      tg?.onEvent("backButtonClicked", onBack);
    }

    return () => {
      tg?.BackButton.hide();
      if (onBack) {
        tg?.offEvent("backButtonClicked", onBack);
      }
    };
  }, [onBack]);

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


