"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// import { Menu, X } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import useThemeStore from "@/store/themeStore";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isDarkMode, toggleDarkMode, syncTheme } = useThemeStore();

  // Sync theme on mount
  useEffect(() => {
    syncTheme();
  }, [syncTheme]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container py-4 mx-auto px-4 bg-visio-light-purple rounded-visio-rounded relative">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-visio-dark-purple flex items-center justify-center">
            <span className="text-white text-xs font-medium">View</span>
          </div>
          <span className="ml-2 text-visio-text font-semibold">ViewCreate</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-visio-text">
          <Link href="#courses" className="text-sm">
            Courses
          </Link>
          <Link href="#about" className="text-sm">
            About us
          </Link>
          <Link href="#teachers" className="text-sm">
            Teachers
          </Link>
          <Link href="#pricing" className="text-sm">
            Pricing
          </Link>
          <Link href="#careers" className="text-sm">
            Careers
          </Link>
        </div>
        {/* <div className="relative transition">
          <input
            type="text"
            placeholder="Search courses..."
            className="border-b-2 border-b-visio-dark-purple outline-none pb-2 text-sm"
          />
          <span className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer hidden">
            <RxCross2 />
          </span>
        </div> */}
        {/* Get Started Button */}
        <div className="flex">
          <div className="hidden md:block">
            <button
              onClick={toggleDarkMode}
              className="bg-white text-gray-800 px-4 py-2 rounded-visio-rounded text-sm font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <RxCross2 /> : <GiHamburgerMenu fontSize={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 absolute top-8 left-0 rounded-visio-rounded bg-visio-dark-purple w-full z-[99999999999] ">
          <div className="flex flex-col space-y-4">
            <Link
              href="#courses"
              className="text-gray-700 hover:text-[#6c5ce7] text-sm px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-[#6c5ce7] text-sm px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
            <Link
              href="#teachers"
              className="text-gray-700 hover:text-[#6c5ce7] text-sm px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Teachers
            </Link>
            <Link
              href="#pricing"
              className="text-gray-700 hover:text-[#6c5ce7] text-sm px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#careers"
              className="text-gray-700 hover:text-[#6c5ce7] text-sm px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>

            <div className="px-4">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium shadow-sm w-full">
                Get started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
