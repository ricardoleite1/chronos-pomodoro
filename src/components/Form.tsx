import { PlayCircleIcon } from "lucide-react";
import { Button } from "./Button";
import { Cycles } from "./Cycles";
import { Input } from "./Input";

export function Form() {
  return (
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

      <Button buttonColor='start' icon={<PlayCircleIcon />}></Button>
    </form>
  );
}
