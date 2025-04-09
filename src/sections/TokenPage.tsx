import React from "react";
import TokenChartContainer from "../containers/TokenChartContainer";
import TokenListContainer from "../containers/TokenListContainer";
import BannerBlock from "../components/BannerBlock";
import TrendBadge from "../components/TrendBadge";

const TokenPage = () => {

  const tg = window.Telegram?.WebApp;
  tg?.setHeaderColor?.("#212121");

  return (
    <div className="flex flex-col pb-[20px] gap-[15px] w-full">
      <TokenChartContainer />

      {/* Отрицательный отступ сверху */}
      <div className="-mt-[110px]">
        <TokenListContainer
          header="Ваш баланс"
          items={[
            {
              icon: "/icons/ton.svg",
              title: "TON",
              subtitle: "20,980 $",
              rightContent: (
                <span className="text-[#212121] text-[15px] font-medium font-sfpro">
                  67,087 $
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




