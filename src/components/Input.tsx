type InputProps = {
  id: string;
  label: string;
} & React.ComponentProps<"input">;

export function Input({ type, id, label, ...props }: InputProps) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className='bg-none p-2 rounded-sm border-2 border-transparent w-full border-b-2 border-b-cyan-500 focus:border-cyan-500 outline-0 disabled:border-b-2 disabled:border-b-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed'
        type={type}
        id={id}
        defaultValue={"Testando"}
        {...props}
      />
    </>
  );
}
