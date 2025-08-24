import { RouterLink } from "./RouterLink";

export function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center mt-12 text-gray-200 gap-4 text-sm sm:text-base text-center'>
      <RouterLink href='/about-pomodoro'>
        Entenda como funciona a técnica pomodoro
      </RouterLink>
      <RouterLink href='/'>
        Chronos Pomodo &copy; {new Date().getFullYear()}
      </RouterLink>
    </footer>
  );
}
