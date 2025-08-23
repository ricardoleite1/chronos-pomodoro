import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext/TaskContext";
import type { TaskModel } from "../models/TaskModel";

type TipsProps = {
  nextCycleType: TaskModel["type"];
};

export function Tips({ nextCycleType }: TipsProps) {
  const { state } = useContext(TaskContext);

  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        Foque por <strong>{state.config.workTime}min</strong>
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <strong>{state.config.shortBreakTime}min</strong>
      </span>
    ),
    longBreakTime: (
      <span>
        Descanse por <strong>{state.config.longBreakTime}min</strong>
      </span>
    ),
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo é de trabalho de{" "}
        <strong>{state.config.workTime}min</strong>
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo ciclo é de descanso de{" "}
        <strong>{state.config.shortBreakTime}min</strong>
      </span>
    ),
    longBreakTime: (
      <span>
        Próximo ciclo é de descanso de{" "}
        <strong>{state.config.longBreakTime}min</strong>
      </span>
    ),
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
