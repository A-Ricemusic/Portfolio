"use client";

import { useEffect } from "react";

export function useThemeSync() {
  useEffect(() => {
    const media = matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      try {
        if (!localStorage.getItem("portfolio-theme")) {
          document.documentElement.dataset.theme = media.matches
            ? "dark"
            : "light";
        }
      } catch {}
    };
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
}

export function toggleTheme() {
  const theme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch {}
}
