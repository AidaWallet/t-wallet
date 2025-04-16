import React from "react";
import AnimatedTextBlock from "../components/AnimatedTextBlock";
import TokenListContainer from "./TokenListContainer";
import RewardButton from "../components/RewardButton";
import { useBonus } from "../contexts/BonusContext";
import { useTheme } from "../contexts/ThemeContext";

const BonusBalanceBlock = () => {
  const { bonus } = useBonus();
  const { theme } = useTheme();

  return (
    <div
      className="flex flex-col gap-[5px] w-full px-4 py-4 pb-0"
      style={{
        background: 'linear-gradient(to bottom, #212121 75.98%, rgba(255,255,255,0) 100%)',
      }}
    >
      <AnimatedTextBlock
        topText="Ваши бонусы"
        value={bonus}
      />

      <div className="mt-[15px] mx-[-15px]">
        <TokenListContainer
          header="Постоянные задачи"
          backgroundColor={theme.container}
          textColor={theme.text}
          items={[
            {
              icon: "/icons/entry.svg",
              title: "Ежедневный вход",
              subtitle: "+10 NP",
              rightContent: (
                <RewardButton
                  initialState="ready"
                  rewardAmount={10}
                  onClaim={() => console.log("Бонус за вход зачислен")}
                />
              ),
            },
            {
              icon: "/icons/invite.svg",
              title: "Пригласить друга",
              subtitle: "+20 NP",
              rightContent: (
                <RewardButton
                  initialState="copy"
                  copyValue="https://t.me/BivreostBot?start=ref_user123"
                />
              ),
            },
            {
              icon: "/icons/pass.svg",
              title: "2X награда",
              subtitle: "Подписка",
              rightContent: (
                <RewardButton
                  initialState="get"
                  onGet={() => console.log("Открыть покупку подписки на 200 Stars")}
                />
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default BonusBalanceBlock;


