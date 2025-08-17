import { History, Settings, Sun, House } from "lucide-react";

export function Menu() {
  return (
    <nav className='flex items-center gap-6 mt-12'>
      <a href='#'>
        <House
          size={54}
          className='text-zinc-700 cursor-pointer hover:text-zinc-900 transition ease-in-out delay-50 bg-cyan-500 p-3 rounded-2xl'
        />
      </a>
      <a href='#'>
        <History
          size={54}
          className='text-zinc-700 cursor-pointer hover:text-zinc-900 transition ease-in-out delay-50 bg-cyan-500 p-3 rounded-2xl'
        />
      </a>
      <a href='#'>
        <Settings
          size={54}
          className='text-zinc-700 cursor-pointer hover:text-zinc-900 transition ease-in-out delay-50 bg-cyan-500 p-3 rounded-2xl'
        />
      </a>
      <a href='#'>
        <Sun
          size={54}
          className='text-zinc-700 cursor-pointer hover:text-zinc-900 transition ease-in-out delay-50 bg-cyan-500 p-3 rounded-2xl'
        />
      </a>
    </nav>
  );
}
