"use client";

import { useEffect } from "react";
import { useGhibliTheme } from "@/contexts/GhibliThemeContext";

export default function ThemeManager() {
  const { isGhibliMode } = useGhibliTheme();

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isGhibliMode) {
      htmlElement.classList.add("ghibli-mode");
    } else {
      htmlElement.classList.remove("ghibli-mode");
    }
  }, [isGhibliMode]);

  return null;
}
