import React from "react";
import CardCarouselContainer from "../containers/CardCarouselContainer";
import TokenListContainer from "../containers/TokenListContainer";
import { useMiniAppUI } from "../hooks/useMiniAppUI";
import { useNavigation } from "../hooks/useNavigation";
import { PAGES } from "../pages";
import { useTheme } from "../contexts/ThemeContext";
import { useScrollToTop } from "../hooks/useScrollToTop";

const SearchPage: React.FC = () => {
  const { goTo } = useNavigation();
  const { theme } = useTheme();
  

  useMiniAppUI({
    headerColor: "#212121",
    backgroundColor: theme.bg,
    bottomBarColor: theme.bg,
    showBackButton: true,
    onBack: () => goTo(PAGES.HOME),
  });

  useScrollToTop();
  
  const buyButton = (
    <button
      onClick={() => console.log("Купить")}
      className="text-[14px] font-sfpro px-[12px] py-[6px] rounded-[7px] active:scale-95 transition"
      style={{
        backgroundColor: theme.accent,
        color: "#fff",
      }}
    >
      Купить
    </button>
  );

  const formatSubtitle = (price: string, changePercent: number) => {
    const isPositive = changePercent >= 0;
    const percentText = `${isPositive ? "+" : ""}${changePercent.toFixed(2)}%`;
    const percentColor = isPositive ? "#27BE4F" : "#FE6265"; // можно сделать dynamic

    return (
      <>
        {price}{" "}
        <span style={{ color: percentColor }}>
          {percentText}
        </span>
      </>
    );
  };

  return (
    <div className="flex flex-col gap-[15px] pb-[20px]" style={{ backgroundColor: theme.bg }}>
      <CardCarouselContainer />

      <div className="-mt-[130px]">
        <TokenListContainer
          header="Рынок"
          backgroundColor={theme.container}
          textColor={theme.text}
          items={[
            {
              icon: "/icons/btc.svg",
              title: "Bitcoin",
              subtitle: formatSubtitle("84 450,25 $", 3.17),
              rightContent: buyButton,
            },
            {
              icon: "/icons/eth.svg",
              title: "Etherium",
              subtitle: formatSubtitle("2 550,78 $", 2.41),
              rightContent: buyButton,
            },
            {
              icon: "/icons/sol.svg",
              title: "Solana",
              subtitle: formatSubtitle("140,78 $", -1.25),
              rightContent: buyButton,
            },
            {
              icon: "/icons/bnb.svg",
              title: "BNB",
              subtitle: formatSubtitle("680,78 $", -0.52),
              rightContent: buyButton,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SearchPage;






