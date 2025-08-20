import { History, Settings, Sun, House, Moon } from "lucide-react";
import { useEffect, useState } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState(() => {
    const themeLoaded =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return themeLoaded;
  });

  function toggleTheme() {
    const nextTheme = theme == "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  }

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const nextThemeIcon = {
    dark: (
      <Sun
        size={48}
        className='text-zinc-700 cursor-pointer hover:text-zinc-900 transition ease-in-out delay-50 bg-cyan-500 p-3 rounded-2xl'
      />
    ),
    light: (
      <Moon
        size={48}
        className='text-zinc-700 cursor-pointer hover:text-zinc-900 transition ease-in-out delay-50 bg-cyan-500 p-3 rounded-2xl'
      />
    ),
  };

  return (
    <nav className='flex items-center justify-center gap-6 mt-12'>
      <a href='#'>
        <House
          size={48}
          className='text-zinc-700 cursor-pointer hover:text-zinc-900 transition ease-in-out delay-50 bg-cyan-500 p-3 rounded-2xl'
        />
      </a>
      <a href='#'>
        <History
          size={48}
          className='text-zinc-700 cursor-pointer hover:text-zinc-900 transition ease-in-out delay-50 bg-cyan-500 p-3 rounded-2xl'
        />
      </a>
      <a href='#'>
        <Settings
          size={48}
          className='text-zinc-700 cursor-pointer hover:text-zinc-900 transition ease-in-out delay-50 bg-cyan-500 p-3 rounded-2xl'
        />
      </a>
      <a href='#' onClick={toggleTheme}>
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
