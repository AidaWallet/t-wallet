import { create } from "zustand";
import { PAGES, PageType } from "../pages";

interface TokenData {
  icon: string;
  title: string;
  subtitle: string;
  value: string;
}

interface NavigationStore {
  page: PageType;
  token: TokenData | null;
  history: PageType[];

  goTo: (page: PageType) => void;
  goBack: () => void;

  setToken: (token: TokenData) => void;
}

export const useNavigation = create<NavigationStore>((set, get) => ({
  page: PAGES.HOME,
  token: null,
  history: [],

  goTo: (nextPage) => {
    const { page, history } = get();
    set({
      page: nextPage,
      history: [...history, page],
    });
  },

  goBack: () => {
    const { history } = get();
    if (history.length === 0) return;
    const newHistory = [...history];
    const prevPage = newHistory.pop();
    set({ page: prevPage!, history: newHistory });
  },

  setToken: (token) => set({ token }),
}));
