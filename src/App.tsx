import "./App.css";
import { Container } from "./components/Container";
import { Countdown } from "./components/Countdown";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";

export function App() {
  return (
    <>
      <Container>
        <Logo>Chronos</Logo>
        <Menu />
        <Countdown />
        <Form />

        <Footer />
      </Container>
    </>
  );
}
