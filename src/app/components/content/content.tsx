import { Container } from "./content.styles";

export default function Content({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container>{children}</Container>;
}
