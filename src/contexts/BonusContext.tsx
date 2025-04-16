import { createContext, useContext, useEffect, useState } from "react";

const BonusContext = createContext(null);

export const BonusProvider = ({ children }) => {
  const [bonus, setBonus] = useState(0);

  useEffect(() => {
    const initData = (window.Telegram?.WebApp as any)?.initData;
    if (!initData) return;

    fetch("http://localhost:3001/auth/telegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ initData }),
    })
      .then((res) => res.json())
      .then((data) => {
        setBonus(data.bonus);
      })
      .catch((err) => {
        console.error("Ошибка загрузки бонуса:", err);
      });
  }, []);

  const addBonus = (amount) => setBonus((prev) => prev + amount);

  return (
    <BonusContext.Provider value={{ bonus, setBonus, addBonus }}>
      {children}
    </BonusContext.Provider>
  );
};

export const useBonus = () => useContext(BonusContext);


