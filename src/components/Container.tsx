type ContainerProps = {
  children: React.ReactNode;
  classes?: string;
} & React.ComponentProps<"div">;

export function Container({ children, classes }: ContainerProps) {
  return (
    <div className='container-fluid bg-white dark:bg-black min-h-screen'>
      <div className='p-4 m-auto max-w-5xl text-black dark:text-white flex justify-center'>
        <div className={`${classes} content`}>{children}</div>
      </div>
    </div>
  );
}
