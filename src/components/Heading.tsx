type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return (
    <h1 className='text-3xl flex gap-2 items-center justify-center'>
      {children}
    </h1>
  );
}
