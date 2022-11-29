import { Title } from '@mantine/core';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export function BlogTitle({ children }: Props): JSX.Element {
  return (
    <Title size="h2" pb="md">
      {children}
    </Title>
  );
}
