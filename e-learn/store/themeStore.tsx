import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the store state type
interface ThemeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  syncTheme: () => void;
}

// Create Zustand store with persistence
const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: true, // ✅ Dark mode is ON by default
      toggleDarkMode: () => {
        set((state) => {
          const newMode = !state.isDarkMode;
          if (typeof window !== "undefined") {
            document.documentElement.classList.toggle("dark", newMode);
            localStorage.setItem("theme", newMode ? "dark" : "light");
          }
          return { isDarkMode: newMode };
        });
      },
      syncTheme: () => {
        if (typeof window !== "undefined") {
          const savedTheme = localStorage.getItem("theme");
          const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
          ).matches;
          const isDark = savedTheme ? savedTheme === "dark" : prefersDark; // ✅ If no saved theme, follow system preference

          document.documentElement.classList.toggle("dark", isDark);
          set({ isDarkMode: isDark });
        }
      },
    }),
    { name: "theme-storage" }
  )
);

export default useThemeStore;
