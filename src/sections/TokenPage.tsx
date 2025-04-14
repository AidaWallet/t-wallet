import React from "react";
import TokenChartContainer from "../containers/TokenChartContainer";
import TokenListContainer from "../containers/TokenListContainer";
import BannerBlock from "../components/BannerBlock";
import { useMiniAppUI } from "../hooks/useMiniAppUI";
import { useTheme } from "../contexts/ThemeContext";

interface TokenData {
  icon: string;
  title: string;
  subtitle: string;
  value: string;
}

interface TokenPageProps {
  token: TokenData;
  onBack?: () => void;
}

const TokenPage: React.FC<TokenPageProps> = ({ token, onBack }) => {
  const { theme } = useTheme();

  useMiniAppUI({
    headerColor: "#212121",
    bottomBarColor: theme.bg,
    backgroundColor: theme.bg,
    showBackButton: true,
    onBack,
  });

  return (
    <div
      className="flex flex-col pb-[20px] gap-[15px] w-full"
      style={{ backgroundColor: theme.bg }}
    >
      <TokenChartContainer />

      <div className="-mt-[110px]">
        <TokenListContainer
          header="Ваш баланс"
          backgroundColor={theme.container}
          textColor={theme.text}
          items={[
            {
              icon: token.icon,
              title: token.title,
              subtitle: token.subtitle,
              rightContent: (
                <span
                  className="text-[15px] font-medium font-sfpro"
                  style={{ color: theme.text }}
                >
                  {token.value}
                </span>
              ),
            },
          ]}
        />
      </div>

      <BannerBlock
        title="Анализ токена на основе искусственного интеллекта"
        subtitle="Запустить"
        image="/images/chart.png"
        backgroundColor="#BEE9D6"
        textColor="#000000"
      />

      <TokenListContainer
        header="Ссылки"
        backgroundColor={theme.container}
        textColor={theme.text}
        items={[
          {
            icon: "/icons/telegram.svg",
            title: "Telegram",
            subtitle: "",
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

export default TokenPage;

