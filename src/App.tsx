import { useEffect, useState } from "react";
import "./App.css";
import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";

export function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return (
    <div className='bg-white text-black dark:bg-gray-800 dark:text-white'>
      <Heading>
        Testando
        <TimerIcon />
      </Heading>
      Contador: {count}
    </div>
  );
}
