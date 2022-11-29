import { Title } from "@mantine/core";

interface Props {
  children: JSX.Element;
}

export function Subtitle({children}: Props) {
  return(
    <Title size="h3">{children}</Title>
  )
}