type ButtonProps = {
  icon: React.ReactNode;
  buttonColor: "start" | "pause";
} & React.ComponentProps<"button">;

export function Button({ buttonColor, icon, ...props }: ButtonProps) {
  const color: Record<ButtonProps["buttonColor"], string> = {
    start: "bg-cyan-500",
    pause: "bg-red-500",
  };

  return (
    <>
      <button
        className={`border-none ${color[buttonColor]} text-white flex items-center justify-center min-w-60 p-3 rounded-md cursor-pointer hover:brightness-80 transition ease-in-out delay-50`}
        {...props}
      >
        {icon}
      </button>
    </>
  );
}
