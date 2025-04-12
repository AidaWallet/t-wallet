import { useEffect } from "react";

interface MiniAppUIOptions {
  headerColor?: string;
  backgroundColor?: string;
  bottomBarColor?: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

export const useMiniAppUI = (options: MiniAppUIOptions) => {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

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
  }, [options]);
};



