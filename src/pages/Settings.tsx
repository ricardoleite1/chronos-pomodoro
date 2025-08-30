import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Main } from "../templates/Main";
import { useTaskContext } from "../contexts/TaskContext/useTaskContext";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { SaveIcon } from "lucide-react";
import { useRef } from "react";
import { showAlert } from "../adapters/showAlert";
import { TaskActionTypes } from "../contexts/TaskContext/taskAction";

export function Settings() {
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  const { state, dispatch } = useTaskContext();

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showAlert.dismiss();

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    const errors = [];

    if (workTime < 0 || workTime > 60) {
      errors.push("Insira um valor de tempo de foco maior que 0 e até 60");
    }

    if (shortBreakTime < 0 || shortBreakTime > 20) {
      errors.push(
        "Insira um valor de tempo de descanso curto maior que 0 e até 60",
      );
    }

    if (longBreakTime < 0 || longBreakTime > 30) {
      errors.push(
        "Insira um valor de tempo de descanso longo maior que 0 e até 60",
      );
    }

    if (errors.length > 0) {
      errors.forEach(item => showAlert.warning(item));
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        shortBreakTime,
        longBreakTime,
        workTime,
      },
    });

    showAlert.success("Valores atualizados com sucesso!");
  }

  return (
    <Main>
      <Container className='block'>
        <Heading>
          <span>Configurações</span>
        </Heading>

        <form
          onSubmit={handleSaveSettings}
          className='w-70 flex justify-center flex-col items-center m-auto mt-8'
        >
          <Input
            type='number'
            ref={workTimeInput}
            label='Foco'
            id='workTime'
            defaultValue={state.config.workTime}
          />
          <Input
            type='number'
            ref={shortBreakTimeInput}
            label='Descanso curto'
            id='shortBreakTime'
            defaultValue={state.config.shortBreakTime}
          />
          <Input
            type='number'
            ref={longBreakTimeInput}
            label='Descanso longo'
            id='longBreakTime'
            defaultValue={state.config.longBreakTime}
          />

          <Button icon={<SaveIcon />} buttonColor='start' />
        </form>
      </Container>
    </Main>
  );
}
