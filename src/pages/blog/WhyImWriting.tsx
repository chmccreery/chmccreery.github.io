import { Container, Stack, Text } from '@mantine/core'
import React from 'react'
import { BlogTitle } from '../../components/BlogTitle'

export function WhyImWriting (): JSX.Element {
  return (
    <Container>
      <BlogTitle>Why I Decided to Write</BlogTitle>
      <Stack>
        <Text>
          On my computer, I am slowly accumulating a proverbial pile of
          discarded first drafts, abandoned and unread by almost anyone besides
          me.
        </Text>
        <Text>
          Time after time, it’s always the same - I get excited about a concept,
          decide to write a blog post, pour my thoughts into some Google doc,
          spend way too long editing it, share it with maybe one person, get a
          little feedback, take it too personally, lose steam, and eventually
          abandon the whole thing.
        </Text>
        <Text>
          I have an incredible knack for getting in my own head, worrying about
          what I may have gotten wrong, and talking myself out of sharing my
          thoughts with the world.
        </Text>
        <Text style={{ fontStyle: 'italic' }}>
          What if it’s not good enough? What if it’s naive? Offensive? Boring?
          Obvious to everyone but me?
        </Text>
        <Text>
          Let’s be honest; the internet can be cruel. There is always a reason
          to wait, to hold off on posting until I’ve learned and experienced
          more, but if I wait for perfection I know it will never happen. Also,
          mistakes are opportunities for growth, and I am only robbing myself of
          the chance to learn, to clarify my own thoughts, and to document my
          ever-evolving understanding of this bizarre industry we call “tech”.
        </Text>
        <Text>
          So, here I go. I am writing to find my voice, to push through my
          imposter syndrome and to show myself (and hopefully some other people)
          that it’s ok to write before you’ve learned it all. What is it they
          say… the journey matters more than the destination? I am using this
          opportunity to appreciate the journey and put it on display for all to
          see.
        </Text>
        <Text>
          As I embark on this adventure, I’d like to encourage you to please
          send me any feedback you may have. I am always looking to learn and
          improve. My email is chmccreery at gmail dot com. Thank you for
          reading, and I hope you enjoy!
        </Text>
      </Stack>
    </Container>
  )
}
