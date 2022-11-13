import { Text, Grid, Image, Space, Anchor } from "@mantine/core";
import fontainebleau from "../media/profile.jpeg"
import strasbird from "../media/strasbird.jpeg"


export function HomePage() {
  return (
    <Grid gutter="xl">
      <Grid.Col span={4}>
        <Image src={fontainebleau}/>
        <Space h="lg"/>
        <Image src={strasbird}/>
      </Grid.Col>
      <Grid.Col span={8}>
        <Text>
          Hi, and welcome to my website! My name is Clara and I am a senior software engineer and line manager at&nbsp;r2c,
          where I work on&nbsp;<Anchor href="https://semgrep.dev/">Semgrep</Anchor>.
        </Text>
        <Space h="lg"/>
        <Text>
          I took a somewhat unusual path into software engineering; I majored in chemical engineering, never did any
          software internships, and took a job at MIT Lincoln Laboratory (MITLL) when I graduated, 
          researching ways to prevent and mitigate chemical and biological attacks.
        </Text>
        <Space h="lg"/>
        <Text>
          I loved many parts of my first job (my team, work travel, real weekends, my team), 
          but I did not have the patience for lab work. I had done just enough computer science to appreciate
          how much easier my job would be if someone programmed a computer to do the repetitive tasks instead of me,
          so I decided to go back to school and learn more computer science. I took several online classes first, and 
          then started applying to graduate schools. Eventually, I decided to go back to Stanford, where I
          still had friends from undergrad and the prospect of a TA-ship to pay for my master's degree.
        </Text>
        <Space h="lg"/>
        <Text>
          In graduate school, I initially concentrated in machine learning. It was the next big thing, 
          everyone was doing it, and it seemed like the branch of computer science that could
          most likely to be applied to chemistry and biology - which were still near and dear to my heart. But, I 
          found that actually I much preferred the systems classes, including my work as a TA for CS 110, a class 
          about file systems, multi-processing, multi-threading, and more. So, I pivoted once again, and started 
          looking for jobs in sofware.
        </Text>
        <Space h="lg"/>
        <Text>
          I interviewed with r2c - one of the few companies in silicon valley where people knew MIT Lincoln Laboratory - 
          and the rest is history. I finally have a job where I don't just love the idea of the job - I actually
          enjoy the day-to-day work. Of course, everyone has good days and bad days, but I haven't been bored yet, and I am 
          pretty sure this is just the tip of the iceberg.
        </Text>
        <Space h="lg"/>
        <Text>
          In my free time, I enjoy playing the violin and singing with my friends in&nbsp;
          <Anchor href="https://sites.google.com/view/backyardtheatersf/about?authuser=0">Backyard Theater</Anchor>, 
          running, biking, the oxford comma, and triathlons.
        </Text>
      </Grid.Col>
    </Grid>
  )
}