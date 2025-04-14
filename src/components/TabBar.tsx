import React from "react";
import { TabType } from "../types/tabs";
import { useTheme } from "../contexts/ThemeContext";

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
  const { theme, isDark } = useTheme();

  return (
    <div
      className="fixed bottom-0 left-0 w-full px-[10px] py-[5px] flex justify-between z-50 backdrop-blur-md"
      style={{
        backgroundColor: isDark
          ? "rgba(30, 30, 30, 0.85)"
          : "rgba(255, 255, 255, 0.92)",
      }}
    >
      {tabs.map(({ key, icon, label }) => {
        const isActive = activeTab === key;
        const color = isActive ? theme.accent : theme.hint;

        return (
          <div
            key={key}
            className="flex flex-col items-center justify-center px-[10px] py-[5px] transition-all duration-150"
            style={{ cursor: "pointer" }}
            onClick={() => onSelect(key)}
          >
            <img
              src={icon}
              alt={key}
              className="w-[28px] h-[28px]"
              style={{
                filter: isActive
                  ? "none"
                  : isDark
                  ? "grayscale(100%)"
                  : "grayscale(100%) brightness(1.4)",
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



