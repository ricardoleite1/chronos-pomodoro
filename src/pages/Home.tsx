import { Countdown } from "../components/Countdown";
import { Form } from "../components/Form";
import { Main } from "../templates/Main";

export function Home() {
  return (
    <Main>
      <Countdown />
      <Form />
    </Main>
  );
}
