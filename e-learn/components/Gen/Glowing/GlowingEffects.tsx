"use client";
import GlowEffect from "./GlowingEffect";
import useThemeStore from "@/store/themeStore";

export default function GlowBackground() {
  const { isDarkMode } = useThemeStore();

  return (
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {isDarkMode && (
        <div className="flex">
          <GlowEffect color="#524fd5" />
          <GlowEffect color="d4c6ff" className="mt-10 pointer-events-none" />
          <GlowEffect color="rgba(212, 198, 255)" />
          <GlowEffect className="mt-62" />
        </div>
      )}
    </div>
  );
}
