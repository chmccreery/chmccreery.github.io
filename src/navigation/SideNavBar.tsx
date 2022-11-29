import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faFeatherPointed,
  faHouse,
  faMusic,
  faPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Group,
  MediaQuery,
  Navbar,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import React from 'react';
interface NavbarProps {
  text: string;
  icon: IconProp;
  route: string;
}

function NavbarItem({ text, icon, route }: NavbarProps): JSX.Element {
  return (
    <UnstyledButton
      component={Link}
      to={route}
      sx={theme => ({
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}>
      <Group position="left">
        <ThemeIcon
          variant="gradient"
          gradient={{ from: 'blue', to: 'green', deg: 135 }}>
          <FontAwesomeIcon icon={icon} />
        </ThemeIcon>
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Text>{text}</Text>
        </MediaQuery>
      </Group>
    </UnstyledButton>
  );
}

export default function SideNavBar(): JSX.Element {
  return (
    <Navbar width={{ base: 64, sm: 180, md: 180, lg: 200, xl: 260 }} p="xs">
      <NavbarItem text="Home" icon={faHouse} route="/" />
      <NavbarItem text="Travel" icon={faPlane} route="/travel" />
      <NavbarItem text="Music" icon={faMusic} route="/music" />
      <NavbarItem text="Tech Blog" icon={faFeatherPointed} route="/tech-blog" />
    </Navbar>
  );
}
