import "./App.css";
import { Container } from "./components/Container";
import { Countdown } from "./components/Countdown";
import { Input } from "./components/Input";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

export function App() {
  return (
    <>
      <Container>
        <Logo>Chronos</Logo>
        <Menu />
        <Countdown></Countdown>
        <form
          action=''
          className='flex flex-col justify-center items-center gap-4 text-center'
        >
          <div className='formRow flex flex-col gap-4'>
            <Input
              label='Task'
              id='task'
              type='text'
              placeholder='Digite a sua task'
              disabled
            />
          </div>

          <div className='formRow flex flex-col gap-4'>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className='formRow flex flex-col gap-4'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>

          <button>Iniciar</button>
        </form>
      </Container>
    </>
  );
}
