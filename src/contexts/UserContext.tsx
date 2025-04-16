import React, { createContext, useContext, useState, useEffect } from "react";

export type User = {
  id: string;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
};

interface UserContextType {
  user: User | null;
}

const UserContext = createContext<UserContextType>({ user: null });

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

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
        setUser(data.user);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

