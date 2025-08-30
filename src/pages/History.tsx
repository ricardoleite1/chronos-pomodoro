import { TrashIcon } from "lucide-react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Main } from "../templates/Main";
import { useTaskContext } from "../contexts/TaskContext/useTaskContext";
import { formatDate } from "../utils/formatDate";
import { getTaskStatus } from "../utils/getTaskStatus";
import { sortTasks, type SortTasksOptions } from "../utils/sortTasks";
import { useEffect, useState } from "react";
import { TaskActionTypes } from "../contexts/TaskContext/taskAction";

export function History() {
  const { state, dispatch } = useTaskContext();
  const hasTasks = state.tasks.length > 0;

  const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: "startDate",
        direction: "desc",
      };
    },
  );

  useEffect(() => {
    setSortTasksOptions(prevState => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks]);

  function handleSortTasks({ field }: Pick<SortTasksOptions, "field">) {
    const newDirection = sortTasksOptions.direction === "desc" ? "asc" : "desc";

    setSortTasksOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTasksOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  }

  function handleResetHistory() {
    if (!confirm("Tem certeza que deseja resetar?")) return;

    dispatch({ type: TaskActionTypes.RESET_STATE });
  }

  return (
    <Main>
      <Container className='block'>
        <Heading>
          <span>Histórico</span>
          <span>
            <Button
              title='Apagar todo o histórico'
              aria-label='Apagar todo o histórico'
              buttonColor='pause'
              icon={<TrashIcon />}
              onClick={handleResetHistory}
            />
          </span>
        </Heading>
        {hasTasks ? (
          <div className='overflow-x-auto rounded-xl w-full'>
            <table className='w-full min-w-[640px] text-sm border-collapse mt-8'>
              <thead>
                <tr>
                  <th
                    onClick={() => handleSortTasks({ field: "name" })}
                    className='bg-gray-600 text-left p-3 cursor-pointer'
                  >
                    Tarefa
                  </th>
                  <th
                    onClick={() => handleSortTasks({ field: "duration" })}
                    className='bg-gray-600 text-left p-3 cursor-pointer'
                  >
                    Duração
                  </th>
                  <th
                    onClick={() => handleSortTasks({ field: "startDate" })}
                    className='bg-gray-600 text-left p-3 cursor-pointer'
                  >
                    Data
                  </th>
                  <th className='bg-gray-600 text-left p-3'>Status</th>
                  <th className='bg-gray-600 text-left p-3'>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {sortTasksOptions.tasks.map(task => {
                  const taskTypeDictionary = {
                    workTime: "Foco",
                    shortBreakTime: "Descanso curto",
                    longBreakTime: "Descanso longo",
                  };

                  return (
                    <tr key={task.id} className='border-b-white border-b-1'>
                      <td className='bg-gray-800 text-left p-3'>{task.name}</td>
                      <td className='bg-gray-800 text-left p-3'>
                        {task.duration}
                      </td>
                      <td className='bg-gray-800 text-left p-3'>
                        {formatDate(task.startDate)}
                      </td>
                      <td className='bg-gray-800 text-left p-3'>
                        {getTaskStatus(task, state.activeTask)}
                      </td>
                      <td className='bg-gray-800 text-left p-3'>
                        {taskTypeDictionary[task.type]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <span className='flex items-center justify-center mt-12'>
            Não há tarefas no histórico
          </span>
        )}
      </Container>
    </Main>
  );
}
