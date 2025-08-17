type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className='container-fluid bg-white dark:bg-zinc-800 min-h-screen'>
      <div className='p-4 m-auto max-w-5xl text-black dark:text-white flex justify-center'>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
}
