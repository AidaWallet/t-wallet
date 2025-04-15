import React from "react";
import MainPage from "./sections/MainPage";
import SearchPage from "./sections/SearchPage";
import SwiftPage from "./sections/SwiftPage";
import TokenPage from "./sections/TokenPage";
import BonusPage from "./sections/BonusPage";
import TabBar from "./components/TabBar";
import { BonusProvider } from "./contexts/BonusContext";
import LeaderPage from "./sections/LeaderPage";
import SettingsPage from "./sections/SettingsPage";
import { PAGES } from "./pages";
import { useNavigation } from "./hooks/useNavigation";

const App: React.FC = () => {
  const { page, token, goTo, setToken } = useNavigation();

  const renderPage = () => {
    switch (page) {
      case PAGES.HOME:
        return (
          <MainPage
            onSelectSwiftPage={() => goTo(PAGES.SWIFT)}
            onSelectBonusPage={() => goTo(PAGES.BONUS)}
          />
        );

      case PAGES.SWIFT:
        return (
          <SwiftPage
            onSelectToken={(token) => {
              setToken(token);
              goTo(PAGES.TOKEN);
            }}
            onSelectAnalysis={() => goTo(PAGES.ANALYSIS)}
            onBack={() => goTo(PAGES.HOME)}
          />
        );

      case PAGES.TOKEN:
        return (
          token && <TokenPage token={token} onBack={() => goTo(PAGES.SWIFT)} />
        );

      case PAGES.SEARCH:
        return <SearchPage onBack={() => goTo(PAGES.HOME)} />;

      case PAGES.REWARDS:
        return <LeaderPage onBack={() => goTo(PAGES.HOME)} />;

      case PAGES.SETTINGS:
        return <SettingsPage onBack={() => goTo(PAGES.HOME)} />;

      case PAGES.BONUS:
        return <BonusPage onBack={() => goTo(PAGES.HOME)} />;

      default:
        return null;
    }
  };

  const showTabBar = [
    PAGES.HOME,
    PAGES.SEARCH,
    PAGES.REWARDS,
    PAGES.SETTINGS,
  ].includes(page);

  return (
    <div
  id="scroll-container"
  className="h-screen overflow-y-auto overscroll-none pb-[65px] scroll-container"
    >
      <BonusProvider>
        {renderPage()}
        {showTabBar && <TabBar activeTab={page} onSelect={goTo} />}
      </BonusProvider>
    </div>
  );  
};

export default App;































