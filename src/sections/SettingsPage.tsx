import React, { useState } from "react";
import SettingsProfileContainer from "../containers/SettingsProfileContainer";
import TokenListContainer from "../containers/TokenListContainer";
import { useMiniAppUI } from "../hooks/useMiniAppUI";
import { useTheme } from "../contexts/ThemeContext";

interface SettingsPageProps {
  onBack: () => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ onBack }) => {
  const [isPasscodeOn, setIsPasscodeOn] = useState(false);
  const [isBiometryOn, setIsBiometryOn] = useState(false);
  const { isDark, toggleTheme, theme } = useTheme();

  useMiniAppUI({
    headerColor: "#212121",
    bottomBarColor: theme.bg,
    backgroundColor: theme.bg,
    showBackButton: true,
    onBack,
  });

  return (
    <div
      className="flex flex-col gap-[15px] pb-[20px]"
      style={{ backgroundColor: theme.bg }}
    >
      <SettingsProfileContainer />

      <div className="-mt-[110px]">
        <TokenListContainer
          header="Настройки кошелька"
          backgroundColor={theme.container}
          textColor={theme.text}
          items={[
            {
              icon: "/icons/faq.svg",
              title: "Язык",
              rightContent: (
                <span className="text-[15px] font-sfpro" style={{ color: theme.accent }}>
                  Русский
                </span>
              ),
              onClick: () => console.log("Открыть выбор языка"),
            },
            {
              icon: "/icons/faq.svg",
              title: "Валюта",
              rightContent: (
                <span className="text-[15px] font-sfpro" style={{ color: theme.accent }}>
                  USD
                </span>
              ),
              onClick: () => console.log("Открыть выбор валюты"),
            },
            {
              icon: "/icons/faq.svg",
              title: "Код пароль",
              rightContent: (
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isPasscodeOn}
                    onChange={() => setIsPasscodeOn(!isPasscodeOn)}
                    className="sr-only peer"
                  />
                  <div className="w-[42px] h-[24px] bg-gray-300 rounded-full peer peer-checked:bg-[#50A8EB] transition duration-200 shadow-none outline-none"></div>
                  <div className="absolute left-[3px] top-[3px] w-[18px] h-[18px] bg-white rounded-full transition-transform duration-200 peer-checked:translate-x-[18px]" />
                </label>
              ),
            },
            {
              icon: "/icons/faq.svg",
              title: "Биометрия",
              rightContent: (
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isBiometryOn}
                    onChange={() => setIsBiometryOn(!isBiometryOn)}
                    className="sr-only peer"
                  />
                  <div className="w-[42px] h-[24px] bg-gray-300 rounded-full peer peer-checked:bg-[#50A8EB] transition duration-200 shadow-none outline-none"></div>
                  <div className="absolute left-[3px] top-[3px] w-[18px] h-[18px] bg-white rounded-full transition-transform duration-200 peer-checked:translate-x-[18px]" />
                </label>
              ),
            },
            {
              icon: "/icons/faq.svg",
              title: "Секретная фраза",
              subtitle: "Сохраните для доступа",
              rightContent: (
                <img
                  src="/icons/copy.svg"
                  alt="copy"
                  className="w-[42px] h-[42px]"
                />
              ),
              onClick: () => console.log("Открыть фразу"),
            },
            {
              icon: "/icons/faq.svg",
              title: "Тёмная тема",
              rightContent: (
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isDark}
                    onChange={toggleTheme}
                    className="sr-only peer"
                  />
                  <div className="w-[42px] h-[24px] bg-gray-300 rounded-full peer peer-checked:bg-[#50A8EB] transition duration-200 shadow-none outline-none"></div>
                  <div className="absolute left-[3px] top-[3px] w-[18px] h-[18px] bg-white rounded-full transition-transform duration-200 peer-checked:translate-x-[18px]" />
                </label>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SettingsPage;




