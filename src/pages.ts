export const PAGES = {
    HOME: "home",
    SEARCH: "search",
    REWARDS: "rewards",
    SETTINGS: "settings",
    SWIFT: "swift",
    TOKEN: "token",
    ANALYSIS: "analysis",
    BONUS: "bonus",
  } as const;
  
  export type PageType = typeof PAGES[keyof typeof PAGES];
  