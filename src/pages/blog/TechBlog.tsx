import { Anchor, Stack, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'
import React from 'react'

export function TechBlog (): JSX.Element {
  return (
    <>
      <Title size="lg" pb="md">
        Tech Blog
      </Title>
      <Stack pl="md">
        <Text>
          I am very new to blogging! And to sharing my writing publicly. If something I've written
          moves you or concerns you, please be generous with feedback - I am always looking to 
          expand my horizons, learn, and improve. 
          My email is chmccreery at gmail dot com. Thank you for reading, and I hope you enjoy!
        </Text>
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
  )
}
