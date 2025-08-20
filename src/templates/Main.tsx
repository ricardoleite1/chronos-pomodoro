import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";

type MainProps = {
  children: React.ReactNode;
};

export function Main({ children }: MainProps) {
  return (
    <>
      <Container>
        <Logo>Chronos</Logo>
        <Menu />

        {children}

        <Footer />
      </Container>
    </>
  );
}
