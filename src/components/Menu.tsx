import { History, Settings, Sun, House } from "lucide-react";

export function Menu() {
  return (
    <div className='flex items-center gap-6 mt-12'>
      <House
        size={54}
        className='text-zinc-800 cursor-pointer hover:text-zinc-900 transition ease-in-out delay-50 bg-cyan-500 p-3 rounded-2xl'
      />
      <History
        size={54}
        className='text-zinc-800 cursor-pointer hover:text-zinc-900 transition ease-in-out delay-50 bg-cyan-500 p-3 rounded-2xl'
      />
      <Settings
        size={54}
        className='text-zinc-800 cursor-pointer hover:text-zinc-900 transition ease-in-out delay-50 bg-cyan-500 p-3 rounded-2xl'
      />
      <Sun
        size={54}
        className='text-zinc-800 cursor-pointer hover:text-zinc-900 transition ease-in-out delay-50 bg-cyan-500 p-3 rounded-2xl'
      />
    </div>
  );
}
