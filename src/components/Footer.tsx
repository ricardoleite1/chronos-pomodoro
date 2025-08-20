export function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center mt-12 text-gray-200 gap-4 text-sm sm:text-base text-center'>
      <a href='#'>Entenda como funciona a técnica pomodoro</a>
      <a href='#'>Chronos Pomodo &copy; {new Date().getFullYear()}</a>
    </footer>
  );
}
