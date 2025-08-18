import { PlayIcon } from "lucide-react";
import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Countdown } from "./components/Countdown";
import { Cycles } from "./components/Cycles";
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
          className='flex flex-col justify-center items-center gap-10 text-center'
        >
          <div className='formRow flex flex-col gap-4'>
            <Input
              label='Task'
              id='task'
              type='text'
              placeholder='Digite a sua task'
            />
          </div>

          <div className='formRow flex flex-col gap-4'>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className='formRow flex flex-col gap-4'>
            <Cycles type='long' />
          </div>

          <Button buttonColor='pause' icon={<PlayIcon />}></Button>
        </form>
      </Container>
    </>
  );
}
