import { useTaskContext } from "../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../utils/getNextCycle";
import { getNextCycleType } from "../utils/getNextCycleType";

interface CyclesProps {
  type: "shortBreakTime" | "longBreakTime" | "workTime";
}

export function Cycles() {
  const { state } = useTaskContext();

  const color: Record<CyclesProps["type"], string> = {
    shortBreakTime: "bg-yellow-500",
    longBreakTime: "bg-cyan-500",
    workTime: "bg-green-500",
  };

  const cycleDescriptionMap = {
    shortBreakTime: "descanso curto",
    longBreakTime: "descanso longo",
    workTime: "trabalho",
  };

  const cycleStep = Array.from({ length: state.currentCycle });

  return (
    <div className='cycles'>
      <span>Ciclos:</span>

      <div className='cycleDots flex gap-3 mt-6'>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={index}
              aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              className={`${color[nextCycleType]} cycleDot w-6 h-6 rounded-full`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
