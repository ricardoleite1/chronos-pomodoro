import { Timer } from "lucide-react";
import { Heading } from "./Heading";
import { RouterLink } from "./RouterLink";

type LogoProps = {
  children: React.ReactNode;
};

export function Logo({ children }: LogoProps) {
  return (
    <RouterLink
      href='#'
      className='flex flex-col items-center text-center gap-2 text-cyan-500 mt-8 hover:text-cyan-600 transition delay-50 ease-in-out'
    >
      <Timer size={64} />
      <Heading>{children}</Heading>
    </RouterLink>
  );
}
