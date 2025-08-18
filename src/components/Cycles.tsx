interface CyclesProps {
  type: "short" | "long" | "work";
}

export function Cycles({ type }: CyclesProps) {
  const color: Record<CyclesProps["type"], string> = {
    short: "bg-orange-500",
    long: "bg-red-500",
    work: "bg-green-500",
  };

  return (
    <div className='cycles'>
      <span>Ciclos:</span>

      <div className='cycleDots flex gap-3 mt-6'>
        <span className={`${color[type]} cycleDot w-6 h-6 rounded-full`}></span>
        <span className={`${color[type]} cycleDot w-6 h-6 rounded-full`}></span>
        <span className={`${color[type]} cycleDot w-6 h-6 rounded-full`}></span>
        <span className={`${color[type]} cycleDot w-6 h-6 rounded-full`}></span>
        <span className={`${color[type]} cycleDot w-6 h-6 rounded-full`}></span>
        <span className={`${color[type]} cycleDot w-6 h-6 rounded-full`}></span>
      </div>
    </div>
  );
}
