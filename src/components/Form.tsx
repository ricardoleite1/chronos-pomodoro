import type { TaskModel } from "../models/TaskModel";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Button } from "./Button";
import { Cycles } from "./Cycles";
import { Input } from "./Input";
import { useRef } from "react";
import { useTaskContext } from "../contexts/TaskContext/useTaskContext";
import { TaskActionTypes } from "../contexts/TaskContext/taskAction";
import { getNextCycle } from "../utils/getNextCycle";
import { getNextCycleType } from "../utils/getNextCycleType";
import { Tips } from "./Tips";
import { showAlert } from "../adapters/showAlert";

export function Form() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name;

  function handleStartNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();
    if (!taskName) {
      showAlert.warn("Digite o nome da tarefa");
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

    dispatch({
      type: TaskActionTypes.START_TASK,
      payload: newTask,
    });

    showAlert.success("Tarefa iniciada");
  }

  function handleInterruptTask() {
    dispatch({
      type: TaskActionTypes.INTERRUPT_TASK,
    });

    showAlert.info("Tarefa interrompida");
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
          disabled={!!state.activeTask}
          placeholder='Digite a sua task'
          defaultValue={lastTaskName}
        />
      </div>

      <div className='formRow flex flex-col gap-4'>
        <Tips nextCycleType={nextCycleType} />
      </div>

      {state.currentCycle != 0 && (
        <div className='formRow flex flex-col gap-4'>
          <Cycles />
        </div>
      )}

      {!state.activeTask ? (
        <Button
          aria-label='Iniciar nova tarefa'
          title='Iniciar nova tarefa'
          key='btn_submit'
          type='submit'
          buttonColor='start'
          icon={<PlayCircleIcon />}
        ></Button>
      ) : (
        <Button
          aria-label='Interromper tarefa atual'
          title='Interromper tarefa atual'
          key='btn_interrupt'
          type='button'
          buttonColor='pause'
          onClick={handleInterruptTask}
          icon={<StopCircleIcon />}
        ></Button>
      )}
    </form>
  );
}
