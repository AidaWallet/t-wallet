import React, { useState } from "react";
import MainPage from "./sections/MainPage";
import SearchPage from "./sections/SearchPage"; // Добавляем SearchPage
import SwiftPage from "./sections/SwiftPage"; // Оставляем SwiftPage
import TokenPage from "./sections/TokenPage"; // Пока как "rewards"
import BonusPage from "./sections/BonusPage"; // Пока как "settings"
import TabBar from "./components/TabBar";
import { BonusProvider } from "./contexts/BonusContext";

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<"home" | "search" | "rewards" | "settings">("home");

  return (
    <div className="min-h-screen bg-[#F8F8FB] pb-[65px]">
      <BonusProvider>
        {selectedPage === "home" && (
          <MainPage
            onSelectSwiftPage={() => setSelectedPage("swift")} // Переход на SwiftPage
            onSelectBonusPage={() => setSelectedPage("settings")}
          />
        )}
        {selectedPage === "swift" && <SwiftPage />} {/* Открытие SwiftPage */}
        {selectedPage === "search" && <SearchPage />} {/* Открытие SearchPage */}
        {selectedPage === "rewards" && <TokenPage />}
        {selectedPage === "settings" && <BonusPage onBack={() => setSelectedPage("home")} />}

        {/* Показываем TabBar только на этих страницах, исключая SwiftPage */}
        {["home", "search", "rewards", "settings"].includes(selectedPage) && (
          <TabBar activeTab={selectedPage} onSelect={setSelectedPage} />
        )}
      </BonusProvider>
    </div>
  );
};

export default App;



























