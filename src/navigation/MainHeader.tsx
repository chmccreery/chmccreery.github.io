import React from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ActionIcon,
  Group,
  Header,
  Title,
  useMantineColorScheme,
} from '@mantine/core';

export function MainHeader(): JSX.Element {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Header height={60} p="sm">
      <Group position="apart">
        <Title size="h3" pl="xs">
          Clara McCreery
        </Title>
        <ActionIcon
          variant="default"
          onClick={() => toggleColorScheme()}
          size={30}>
          {colorScheme === 'dark' ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </ActionIcon>
      </Group>
    </Header>
  );
}
