import React, { createContext, useContext, useState } from "react";

interface BonusContextType {
  bonusPoints: number;
  addBonus: (amount: number) => void;
}

const BonusContext = createContext<BonusContextType | undefined>(undefined);

export const BonusProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bonusPoints, setBonusPoints] = useState(0);

  const addBonus = (amount: number) => {
    setBonusPoints((prev) => prev + amount);
  };

  return (
    <BonusContext.Provider value={{ bonusPoints, addBonus }}>
      {children}
    </BonusContext.Provider>
  );
};

export const useBonus = (): BonusContextType => {
  const context = useContext(BonusContext);
  if (!context) {
    throw new Error("useBonus must be used within a BonusProvider");
  }
  return context;
};
