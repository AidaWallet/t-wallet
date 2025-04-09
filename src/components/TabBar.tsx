import React from "react";
import { TabType } from "../types/tabs";

interface TabBarProps {
  activeTab: TabType;
  onSelect: (tab: TabType) => void;
}

const tabs: { key: TabType; icon: string; label: string }[] = [
  { key: "home", icon: "/icons/tabwallet.svg", label: "Главная" },
  { key: "search", icon: "/icons/tabglobe.svg", label: "Поиск" },
  { key: "rewards", icon: "/icons/tabcoin.svg", label: "Доход" },
  { key: "settings", icon: "/icons/tabsetting.svg", label: "Настройки" },
];

const TabBar: React.FC<TabBarProps> = ({ activeTab, onSelect }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white px-[10px] py-[5px] flex justify-between z-50">
      {tabs.map(({ key, icon, label }) => {
        const isActive = activeTab === key;
        const color = isActive ? "#50A8EB" : "#AAC0D0"; // Цвет для активного/неактивного состояния

        return (
          <div
            key={key}
            className="flex flex-col items-center justify-center px-[10px] py-[5px] transition-all duration-150"
            onClick={() => onSelect(key)}
          >
            {/* Иконка без фрейма, цвет изменяется по состоянию */}
            <img
              src={icon}
              alt={key}
              className="w-[28px] h-[28px]"
              style={{
                filter: isActive ? "none" : "grayscale(100%) brightness(1.4)", // Цвет иконки меняется при активации
              }}
            />
            {/* Подпись под иконкой */}
            <span
              className="text-[11px] font-sfpro font-medium mt-[5px]"
              style={{ color }} // Цвет подписи зависит от активности
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TabBar;
