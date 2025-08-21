import { useTaskContext } from "../contexts/TaskContext/useTaskContext";

export function Countdown() {
  const { state } = useTaskContext();

  return (
    <>
      <strong className='text-[6rem] text-center flex justify-center mt-8 lg:text-[9rem]'>
        {state.formattedSecondsRemaining}
      </strong>
    </>
  );
}
