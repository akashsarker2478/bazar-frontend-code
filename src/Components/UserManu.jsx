"use client";

import { useState, useEffect } from "react";
import { User, Moon, Sun, ChevronDown, Settings, LogOut, Heart, ShoppingCart, Package } from "lucide-react";

export default function UserMenu({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // ১. থিম চেক করার লজিক (মাউন্ট হওয়ার সময়)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // ২. থিম টগল ফাংশন
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
    setIsOpen(false);
  };

  const menuItems = user ? [
    { label: "Profile", icon: <User size={18} /> },
    { label: "Orders", icon: <Package size={18} /> },
    { label: "Settings", icon: <Settings size={18} /> },
    { label: "Logout", icon: <LogOut size={18} />, action: () => console.log("Logout") },
  ] : [];

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-1 focus:outline-none group">
        <div className="p-2 rounded-full group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-all text-gray-700 dark:text-gray-300">
          {user?.avatar ? <img src={user.avatar} className="w-6 h-6 rounded-full" alt="avatar" /> : <User size={22} />}
        </div>
        <ChevronDown size={14} className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-2xl rounded-xl py-3 z-[100]">
          {user && (
            <ul className="flex flex-col text-gray-700 dark:text-gray-200 font-medium">
              {menuItems.map((item, idx) => (
                <li key={idx} onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                  {item.icon} <span>{item.label}</span>
                </li>
              ))}
            </ul>
          )}

          <hr className="my-2 border-gray-100 dark:border-gray-700" />

          <button onClick={toggleTheme} className="w-full flex items-center px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="w-8 flex justify-start">
              {isDarkMode ? <Sun size={18} className="text-amber-500" /> : <Moon size={18} className="text-indigo-500" />}
            </div>
            <span className="font-medium">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      )}
    </div>
  );
}