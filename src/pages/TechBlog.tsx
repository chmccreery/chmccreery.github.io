import { Stack, Text, Title } from "@mantine/core";

export function TechBlog() {
  return (
    <>
      <Title size="lg" pb="md">
        Tech Blog
      </Title>
      <Stack pl="md">
        <Text>
          COMING SOON! 
        </Text>
        <Text>
          I recently decided to revamp this website for several reasons, but the primary one was 
          that I occasionally have the desire to write a blog post, either to help me clarify my own
          thoughts, or just to document how my opinions are evolving with time.
        </Text>
        <Text>
          When I am not riddled with imposter syndrome and self-doubt, I also sometimes hope that
          someone else might benefit from reading about my own journey into tech and, more
          recently, into management.
        </Text>
        <Text>
          If you are reading this, I hope you find some useful nugget of information amid the 
          rambling prose, or at the very least, find it entertaining.
        </Text>
      </Stack>
    </>
  )
}