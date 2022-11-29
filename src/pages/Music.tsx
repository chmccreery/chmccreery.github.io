import React from 'react'
import { AspectRatio, Space, Stack, Text, Title } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'

export function MusicPage (): JSX.Element {
  const { width } = useViewportSize()

  return (
    <>
      <Title size="lg" pb="md">
        Music
      </Title>
      <Stack pl="md" style={{ maxWidth: Math.min((width * 2) / 3, 680) }}>
        <Text>
          I had a recital for friends and family in 2019 at Campbell Recital
          Hall.
        </Text>
        <AspectRatio ratio={560 / 480} style={{ maxWidth: 560 }}>
          <iframe
            scrolling="no"
            frameBorder="0"
            allow="autoplay"
            title="Masters Recital"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/797556120&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </AspectRatio>

        <Space h="xl" />
        <Text>
          The Streetlights was band I formed with two fellow musicians (Jason
          Han and Josh Remba) at MIT Lincoln Laboratory.
        </Text>
        <AspectRatio ratio={560 / 300} style={{ maxWidth: 600 }}>
          <iframe
            scrolling="no"
            frameBorder="0"
            allow="autoplay"
            title="The Streetlights"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/797624922&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </AspectRatio>
        <Space h="xl" />
        <Text>
          I studied violin with Robin Sharp at Stanford University and got a
          Certificate in Violin Performance. The video below is a clip from my
          senior recital in 2015.
        </Text>
        <AspectRatio ratio={560 / 315}>
          <iframe
            src="https://www.youtube.com/embed/0TfoWKMkB5Y"
            title="Elgar Sonata"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Stack>
    </>
  )
}
