import React, { useState } from "react";
import InfoRow from "../components/InfoRow";
import TokenListContainer from "../containers/TokenListContainer";
import { useMiniAppUI } from "../hooks/useMiniAppUI";
import { useTheme } from "../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

interface SettingsPageProps {
  onBack: () => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ onBack }) => {
  const [isPasscodeOn, setIsPasscodeOn] = useState(false);
  const [isBiometryOn, setIsBiometryOn] = useState(false);
  const { isDark, toggleTheme, theme } = useTheme();

  useMiniAppUI({
    headerColor: theme.bg,
    bottomBarColor: theme.bg,
    backgroundColor: theme.bg,
    showBackButton: true,
    onBack,
  });

  const themeSwitchContent = (
    <div className="flex items-center gap-[10px]">
      {isDark ? <Moon size={18} color={theme.text} /> : <Sun size={18} color={theme.text} />}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isDark}
          onChange={toggleTheme}
          className="sr-only peer"
        />
        <div className="w-[42px] h-[24px] bg-gray-300 rounded-full peer peer-checked:bg-[#50A8EB] transition" />
        <div className="absolute left-[3px] top-[3px] w-[18px] h-[18px] bg-white rounded-full transition-transform duration-200 peer-checked:translate-x-[18px]" />
      </label>
    </div>
  );

  return (
    <div className="flex flex-col gap-[15px] pb-[20px]" style={{ backgroundColor: theme.bg }}>
      <div className="tw-container rounded-[20px] px-[15px] py-[15px] mx-[15px] mt-[15px]" style={{ backgroundColor: theme.container }}>
        <InfoRow
          icon=""
          title="Родион"
          subtitle="@rodion"
          rightContent={themeSwitchContent}
        />
      </div>

      <div className="-mt-[0px]">
        <TokenListContainer
          header=""
          backgroundColor={theme.container}
          textColor={theme.text}
          items={[
            {
              icon: "/icons/rus.svg",
              title: "Язык",
              rightContent: (
                <span className="text-[15px] font-sfpro" style={{ color: theme.accent }}>
                  Русский
                </span>
              ),
              onClick: () => console.log("Открыть выбор языка"),
            },
            {
              icon: "/icons/usa.svg",
              title: "Валюта",
              rightContent: (
                <span className="text-[15px] font-sfpro" style={{ color: theme.accent }}>
                  USD
                </span>
              ),
              onClick: () => console.log("Открыть выбор валюты"),
            },
            {
              icon: "/icons/pincode.svg",
              title: "Код пароль",
              rightContent: (
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isPasscodeOn}
                    onChange={() => setIsPasscodeOn(!isPasscodeOn)}
                    className="sr-only peer"
                  />
                  <div className="w-[42px] h-[24px] bg-gray-300 rounded-full peer peer-checked:bg-[#50A8EB] transition duration-200 shadow-none outline-none" />
                  <div className="absolute left-[3px] top-[3px] w-[18px] h-[18px] bg-white rounded-full transition-transform duration-200 peer-checked:translate-x-[18px]" />
                </label>
              ),
            },
            {
              icon: "/icons/id.svg",
              title: "Биометрия",
              rightContent: (
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isBiometryOn}
                    onChange={() => setIsBiometryOn(!isBiometryOn)}
                    className="sr-only peer"
                  />
                  <div className="w-[42px] h-[24px] bg-gray-300 rounded-full peer peer-checked:bg-[#50A8EB] transition duration-200 shadow-none outline-none" />
                  <div className="absolute left-[3px] top-[3px] w-[18px] h-[18px] bg-white rounded-full transition-transform duration-200 peer-checked:translate-x-[18px]" />
                </label>
              ),
            },
            {
              icon: "/icons/secret.svg",
              title: "Секретная фраза",
              subtitle: "Сохраните для доступа",
              rightContent: (
                <img
                  src="/icons/copy.svg"
                  alt="copy"
                  className="w-[20px] h-[24px]"
                />
              ),
              onClick: () => console.log("Открыть фразу"),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SettingsPage;







