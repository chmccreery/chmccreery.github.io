import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFeatherPointed, faHouse, faMusic, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Group, Navbar, Text, ThemeIcon, UnstyledButton } from "@mantine/core";
import { Link } from "react-router-dom";

interface NavbarProps {
  text: string;
  icon: IconProp;
  route: string;
}

function NavbarItem ({text, icon, route}: NavbarProps) {
  
  return (
    <UnstyledButton component={Link} to={route}
      sx={(theme) => ({
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group position="left">
        <ThemeIcon variant="gradient" gradient={{from: 'blue', to: 'green', deg: 135 }}>
          <FontAwesomeIcon icon={icon}/>
        </ThemeIcon>
        <Text>{text}</Text>
      </Group>
    </UnstyledButton>
  )
}

export default function SideNavBar() {
  return (
    <Navbar width={{ base: 200 }} height={500} p="xs">
      <NavbarItem text="Home" icon={faHouse} route="/"/>
      <NavbarItem text="Travel" icon={faPlane} route="/travel"/>
      <NavbarItem text="Music" icon={faMusic} route="/music"/>
      <NavbarItem text="Tech Blog" icon={faFeatherPointed} route="/tech-blog"/>
    </Navbar>
  )
}