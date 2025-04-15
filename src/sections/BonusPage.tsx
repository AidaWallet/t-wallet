import React from "react";
import { useScrollToTop } from "../hooks/useScrollToTop";
import BonusBalanceBlock from "../containers/BonusBalanceBlock";
import BannerBlock from "../components/BannerBlock";
import TokenListContainer from "../containers/TokenListContainer";
import RewardButton from "../components/RewardButton";
import { useMiniAppUI } from "../hooks/useMiniAppUI";
import { useTheme } from "../contexts/ThemeContext";

const BonusPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const { theme } = useTheme();

  useMiniAppUI({
    headerColor: "#212121",
    bottomBarColor: theme.bg,
    backgroundColor: theme.bg,
    showBackButton: true,
    onBack,
  });

  useScrollToTop();

  return (
    <div className="flex flex-col gap-[15px] pb-[30px]" style={{ backgroundColor: theme.bg }}>
      <BonusBalanceBlock />

      <BannerBlock
        title="Участвуйте в турнире и получите до 250 USDT"
        subtitle="Перейти"
        image="/images/cup.png"
        gradientFrom="#F93838"
        gradientTo="#A076F9"
        textColor="#FFFFFF"
      />

      <TokenListContainer
        header="Дополнительные задачи"
        backgroundColor={theme.container}
        textColor={theme.text}
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



