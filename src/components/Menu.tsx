import { History, Settings, Sun, House, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function Menu() {
  const [theme, setTheme] = useState(() => {
    const themeLoaded = localStorage.getItem("theme");
    return themeLoaded;
  });

  function toggleTheme() {
    const nextTheme = theme == "dark" ? "" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  }

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add(theme);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

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
      <a href='#'>
        {theme === "dark" ? (
          <Sun
            onClick={toggleTheme}
            size={48}
            className='text-zinc-700 cursor-pointer hover:text-zinc-900 transition ease-in-out delay-50 bg-cyan-500 p-3 rounded-2xl'
          />
        ) : (
          <Moon
            onClick={toggleTheme}
            size={48}
            className='text-zinc-700 cursor-pointer hover:text-zinc-900 transition ease-in-out delay-50 bg-cyan-500 p-3 rounded-2xl'
          />
        )}
      </a>
    </nav>
  );
}
