import React from "react";
import { TabType } from "../types/tabs";

interface TabBarProps {
  activeTab: TabType;
  onSelect: (tab: TabType) => void;
}

const tabs: { key: TabType; icon: string; label: string }[] = [
  { key: "home", icon: "/icons/tabwallet.svg", label: "Главная" },
  { key: "search", icon: "/icons/tabvit.svg", label: "Витрина" },
  { key: "rewards", icon: "/icons/tabcoin.svg", label: "Доход" },
  { key: "settings", icon: "/icons/tabsetting.svg", label: "Настройки" },
];

const TabBar: React.FC<TabBarProps> = ({ activeTab, onSelect }) => {
    return (
      <div
        className="fixed bottom-0 left-0 w-full bg-white px-[10px] py-[5px] flex justify-between z-50 border-t border-[#E6E8EC] shadow-[0_-2px_10px_rgba(0,0,0,0.03)]"
      >
        {tabs.map(({ key, icon, label }) => {
          const isActive = activeTab === key;
          const color = isActive ? "#50A8EB" : "#AAC0D0";
  
          return (
            <div
              key={key}
              className="flex flex-col items-center justify-center px-[10px] py-[5px] transition-all duration-150"
              onClick={() => onSelect(key)}
            >
              <img
                src={icon}
                alt={key}
                className="w-[28px] h-[28px]"
                style={{
                  filter: isActive ? "none" : "grayscale(100%) brightness(1.4)",
                }}
              />
              <span
                className="text-[11px] font-sfpro font-medium mt-[5px]"
                style={{ color }}
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
