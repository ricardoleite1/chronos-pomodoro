type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return <h1 className='text-5xl font-bold flex gap-2'>{children}</h1>;
}
