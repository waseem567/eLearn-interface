"use client";
import useThemeStore from "@/store/themeStore";
import { useEffect } from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const syncTheme = useThemeStore((state) => state.syncTheme);

  useEffect(() => {
    syncTheme();
  }, [syncTheme]);

  return <>{children}</>;
};

export default ThemeProvider;
