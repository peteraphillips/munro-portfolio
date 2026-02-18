"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface GhibliThemeContextType {
  isGhibliMode: boolean;
  toggleGhibli: () => void;
}

const GhibliThemeContext = createContext<GhibliThemeContextType | undefined>(
  undefined
);

export function GhibliThemeProvider({ children }: { children: ReactNode }) {
  const [isGhibliMode, setIsGhibliMode] = useState(false);

  const toggleGhibli = () => {
    setIsGhibliMode((prev) => !prev);
  };

  return (
    <GhibliThemeContext.Provider value={{ isGhibliMode, toggleGhibli }}>
      <div className={isGhibliMode ? "ghibli-mode" : ""}>
        {children}
      </div>
    </GhibliThemeContext.Provider>
  );
}

export function useGhibliTheme() {
  const context = useContext(GhibliThemeContext);
  if (context === undefined) {
    throw new Error(
      "useGhibliTheme must be used within a GhibliThemeProvider"
    );
  }
  return context;
}
