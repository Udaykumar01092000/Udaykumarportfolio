"use client";

import { useSyncExternalStore } from "react";

export type Theme = "dark" | "light";

const themeChangeEvent = "themechange";

function readTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = window.localStorage.getItem("theme");

  if (savedTheme === "light") {
    return "light";
  }

  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener(themeChangeEvent, onStoreChange);
  window.addEventListener("storage", onStoreChange);

  return () => {
    window.removeEventListener(themeChangeEvent, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function applyTheme(theme: Theme) {
  if (typeof window === "undefined") {
    return;
  }

  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem("theme", theme);
  window.dispatchEvent(new Event(themeChangeEvent));
}

export function useTheme(): Theme {
  return useSyncExternalStore<Theme>(subscribe, readTheme, (): Theme => "dark");
}
