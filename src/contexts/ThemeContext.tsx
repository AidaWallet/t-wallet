import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { lightTheme, darkTheme, AppTheme } from "../Theme";

interface ThemeContextProps {
  theme: AppTheme;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Используем any, чтобы не ругался TypeScript
  const getInitialDarkMode = (): boolean => {
    const tg = window.Telegram?.WebApp as any;
    return tg?.colorScheme === "dark";
  };

  const [isDark, setIsDark] = useState<boolean>(getInitialDarkMode);

  useEffect(() => {
    const tg = window.Telegram?.WebApp as any;
    if (!tg?.onEvent) return;

    tg.onEvent("themeChanged", () => {
      setIsDark(tg.colorScheme === "dark");
    });
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};


