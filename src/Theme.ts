export interface AppTheme {
    bg: string;
    container: string;
    text: string;
    hint: string;
    accent: string;
  }
  
  export const lightTheme: AppTheme = {
    bg: "#F8F8FB",         // фон всей страницы
    container: "#FFFFFF",  // фон карточек/контейнеров
    text: "#212121",       // основной текст
    hint: "#909090",       // второстепенный текст / подписи
    accent: "#50A8EB",     // акценты (кнопки, ссылки и т.п.)
  };
  
  export const darkTheme: AppTheme = {
    bg: "#1E1E1E",
    container: "#2A2A2A",
    text: "#FFFFFF",
    hint: "#AAAAAA",
    accent: "#50A8EB",
  };
  