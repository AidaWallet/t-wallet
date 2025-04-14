import React from "react";
import LeaderboardContainer from "../containers/LeaderboardContainer";
import TokenListContainer from "../containers/TokenListContainer";
import { useMiniAppUI } from "../hooks/useMiniAppUI";
import { useTheme } from "../contexts/ThemeContext";

interface LeaderPageProps {
  onBack?: () => void;
}

const LeaderPage: React.FC<LeaderPageProps> = ({ onBack }) => {
  const { theme } = useTheme();

  useMiniAppUI({
    headerColor: theme.bg,
    bottomBarColor: theme.bg,
    backgroundColor: theme.bg,
    showBackButton: true,
    onBack,
  });

  const getPrize = (place: number) => {
    if (place === 1) return "100 USD";
    if (place === 2 || place === 3) return "50 USD";
    if (place >= 4 && place <= 7) return "15 USD";
    return "0 USD";
  };

  return (
    <div className="flex flex-col gap-[15px] py-[20px]" style={{ backgroundColor: theme.bg }}>
      <LeaderboardContainer />

      <TokenListContainer
        header="Вы"
        backgroundColor={theme.container}
        textColor={theme.text}
        items={[
          {
            icon: "",
            title: "Вы",
            subtitle: "13 место",
            rightContent: (
              <button
                onClick={() => console.log("Подняться")}
                className="text-[14px] font-sfpro px-[12px] py-[6px] rounded-[7px] active:scale-95 transition"
                style={{
                  backgroundColor: theme.accent,
                  color: "#fff",
                }}
              >
                Подняться
              </button>
            ),
          },
        ]}
      />

      <TokenListContainer
        header="Топ-10"
        backgroundColor={theme.container}
        textColor={theme.text}
        items={Array.from({ length: 10 }).map((_, i) => {
          const place = i + 1;
          const prize = getPrize(place);
          const np = 5000 - i * 150;

          return {
            icon: `/avatars/${place}.jpg`,
            title: `Участник ${place}`,
            subtitle: `${place} место`,
            rightContent: (
              <div className="flex flex-col items-end">
                <span
                  className="text-[16px] font-sfpro font-medium"
                  style={{ color: theme.text }}
                >
                  {prize}
                </span>
                <span
                  className="text-[15px] font-sfpro"
                  style={{ color: theme.hint }}
                >
                  {np} NP
                </span>
              </div>
            ),
          };
        })}
      />
    </div>
  );
};

export default LeaderPage;




