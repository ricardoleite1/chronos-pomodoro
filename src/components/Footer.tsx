import { Link } from "react-router";

export function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center mt-12 text-gray-200 gap-4 text-sm sm:text-base text-center'>
      <Link to='/about-pomodoro'>Entenda como funciona a técnica pomodoro</Link>
      <Link to='/'>Chronos Pomodo &copy; {new Date().getFullYear()}</Link>
    </footer>
  );
}
