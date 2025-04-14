import { useEffect, useState } from "react";

interface MiniAppUIOptions {
  headerColor?: string;
  backgroundColor?: string;
  bottomBarColor?: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

export const useMiniAppUI = (options: MiniAppUIOptions) => {
  const [themeParams, setThemeParams] = useState<Record<string, string>>({});

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    // Настройка интерфейса
    if (options.headerColor) {
      tg.setHeaderColor?.(options.headerColor);
    }

    if (options.backgroundColor) {
      (tg as any).setBackgroundColor?.(options.backgroundColor);
    }

    if (options.bottomBarColor) {
      (tg as any).setBottomBarColor?.(options.bottomBarColor);
    }

    if (options.showBackButton && options.onBack && tg.BackButton) {
      tg.BackButton.show();
      tg.BackButton.onClick(options.onBack);
      return () => {
        tg.BackButton.hide();
      };
    }

    if (!options.showBackButton && tg.BackButton) {
      tg.BackButton.hide();
    }

    // Получение параметров темы
    const theme = (tg as any)?.themeParams;
    if (theme) {
      setThemeParams(theme);
    }

  }, [options]);

  return themeParams;
};





