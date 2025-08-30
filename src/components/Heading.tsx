type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return (
    <h1 className='flex items-center justify-center text-center text-2xl font-bold gap-4 mt-2'>
      {children}
    </h1>
  );
}
