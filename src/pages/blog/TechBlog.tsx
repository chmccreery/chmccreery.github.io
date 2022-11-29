import { Anchor, Stack, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

export function TechBlog() {
  return (
    <>
      <Title size="lg" pb="md">
        Tech Blog
      </Title>
      <Stack pl="md">
        <Text>
          Nov 29, 2022:{' '}
          <Anchor component={Link} to="modified-pomodoro-method">
            My Modified Pomodoro Method
          </Anchor>
        </Text>
        <Text>
          Nov 20, 2022:{' '}
          <Anchor component={Link} to="why-i-decided-to-write">
            Why I Decided to Write
          </Anchor>
        </Text>
      </Stack>
    </>
  );
}
