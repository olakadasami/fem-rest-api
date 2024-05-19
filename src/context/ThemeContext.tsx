"use client";
import { useState, useEffect, createContext, PropsWithChildren } from "react";

type TContext = {
  theme: string;
  changeTheme: (t: string) => void;
};
export const ThemeContext = createContext<TContext>({
  theme: "light",
  changeTheme: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
  }, []);

  if (!isMounted) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  const changeTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
