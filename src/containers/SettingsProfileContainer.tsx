import React from "react";
import Leader from "../components/Leader";
import TripleActionButtons from "../components/TripleActionButtons";

const SettingsProfileContainer: React.FC = () => {
  const actions = [
    {
      icon: "/icons/edit.svg",
      text: "Язык",
      onClick: () => console.log("Редактировать"),
    },
    {
      icon: "/icons/telegram.svg",
      text: "Оформление",
      onClick: () => console.log("Открыть Telegram"),
    },
    {
      icon: "/icons/buy.svg",
      text: "Валюта",
      onClick: () => console.log("Выход"),
    },
  ];

  return (
    <div
      className="px-[15px] pt-[20px] pb-[120px] mx-[0px] flex flex-col items-center gap-[20px]"
      style={{
        background: "linear-gradient(to bottom, #212121 75.98%, rgba(255,255,255,0) 100%)",
      }}
    >
      <Leader
  icon=""
  title="Родион"
  imageClassName="w-[80px] h-[80px]"
  textColor="text-white"
    />
    </div>
  );
};

export default SettingsProfileContainer;
