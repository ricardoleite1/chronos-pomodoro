import { PlayCircleIcon } from "lucide-react";
import { Button } from "./Button";
import { Cycles } from "./Cycles";
import { Input } from "./Input";
import { useRef } from "react";
import type { TaskModel } from "../models/TaskModel";
import { useTaskContext } from "../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../utils/getNextCycle";
import { getNextCycleType } from "../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../utils/formatSecondsToMinutes";

export function Form() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleStartNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();
    if (!taskName) {
      alert("Digite o nome da tarefa");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completedDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
        },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  return (
    <form
      onSubmit={handleStartNewTask}
      action=''
      className='flex flex-col justify-center items-center gap-10 text-center'
    >
      <div className='formRow flex flex-col gap-4'>
        <Input
          label='Task'
          id='task'
          type='text'
          ref={taskNameInput}
          placeholder='Digite a sua task'
        />
      </div>

      <div className='formRow flex flex-col gap-4'>
        <p>O próximo intervalo é teste</p>
      </div>

      {state.currentCycle != 0 && (
        <div className='formRow flex flex-col gap-4'>
          <Cycles />
        </div>
      )}

      <Button buttonColor='start' icon={<PlayCircleIcon />}></Button>
    </form>
  );
}
