import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import CardWithImage from "../components/CardWithImage";

const data = [
  {
    image: "/images/pig.png",
    title: "Откройте вклад в криптовалюте со ставкой до 20%",
    subtitle: "",
    buttonText: "Перейти",
  },
  {
    image: "/images/adopt.png",
    title: "Адаптируй портфель под любой рыночный цикл с ИИ",
    subtitle: "",
    buttonText: "Получить",
  },
  {
    image: "/images/exc.png",
    title: "Легко обменивайте криптовалюту прямо внутри кошелька",
    subtitle: "",
    buttonText: "Перейти",
  },
  {
    image: "/images/wallet.png",
    title: "Кошелек дарит до 250$ за приглашенных друзей",
    subtitle: "",
    buttonText: "Перейти",
  },
];

const AUTOPLAY_DELAY = 4000;

const CardCarouselContainer: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="w-full px-[15px] pt-[25px] pb-[120px] flex flex-col items-center"
      style={{
        background:
          "linear-gradient(to bottom, #212121 75.98%, rgba(255,255,255,0) 100%)",
      }}
    >
      {/* 🔘 Индикаторы */}
      <div className="flex gap-[6px] mb-[15px]">
        {data.map((_, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={`relative h-[6px] rounded-full overflow-hidden ${
                isActive ? "w-[22px]" : "w-[6px]"
              } bg-[#C6CED6] transition-all duration-300`}
            >
              {isActive && (
                <div
                  key={activeIndex}
                  className="absolute top-0 left-0 h-full bg-white animate-fill"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* 🔁 Слайды */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{ delay: AUTOPLAY_DELAY }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <CardWithImage
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              buttonText={item.buttonText}
              onButtonClick={() => console.log("Click", item.title)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔧 Анимация прогресса */}
      <style>{`
        @keyframes fill {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        .animate-fill {
          animation: fill ${AUTOPLAY_DELAY}ms linear forwards;
        }
      `}</style>
    </div>
  );
};

export default CardCarouselContainer;



