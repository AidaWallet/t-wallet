// src/types/telegram.d.ts

interface TelegramBackButton {
  isVisible: boolean;
  show: () => void;
  hide: () => void;
  onClick: (callback: () => void) => void;
}

interface TelegramWebApp {
  setHeaderColor: (color: string) => void;
  expand: () => void;
  isFullscreen: boolean;
  ready: () => void;

  BackButton: TelegramBackButton;

  onEvent: (eventType: string, callback: () => void) => void;
  offEvent: (eventType: string, callback: () => void) => void;
}

interface Window {
  Telegram?: {
    WebApp: TelegramWebApp;
  };
}
